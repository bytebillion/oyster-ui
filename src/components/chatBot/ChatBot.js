import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Editor from "./Editor";
import axios from "../../libs/axios";
import Output from "./Output";

const ChatBot = () => {
  const userEmail = localStorage.getItem("userEmail");

  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState(null);
  // eslint-disable-next-line
  const [userId, setUserId] = useState(null);
  const [isUpdateAPICall, setIsUpdateAPICall] = useState(false);

  const [outputText, setOutputText] = useState([]);

  const createChatId = useCallback(async () => {
    try {
      if (outputText?.length > 0 && !chatId) {
        setIsLoading(true);
        const createChatApiURL = `https://www.appoyster.com/api/gpt4/createGptChat`;

        const body = {
          email: userEmail,
          messages: outputText,
        };

        const { data } = await axios.post(createChatApiURL, body);
        const messageLength = data.data.messages.length;

        setOutputText((prevState) => [
          ...prevState,
          data.data.messages[messageLength - 1],
        ]);

        setChatId(data?.data?._id);
        setUserId(data?.data?.userId);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }, [outputText, chatId, userEmail]); 

  const updateChatData = useCallback(async () => {
    try {
      if (chatId && outputText.length > 0) {
        setIsLoading(true);
        const body = {
          email: userEmail,
          chatId: chatId,
          messages: outputText,
        };
        const updateChatApiURL = `https://www.appoyster.com/api/gpt4/gptchatcompletion/${chatId}`;
        const { data } = await axios.put(updateChatApiURL, body);
        const messageLength = data.data.messages.length;
        setOutputText((prevState) => [
          ...prevState,
          data.data.messages[messageLength - 1],
        ]);
        setIsUpdateAPICall(false);

        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }, [outputText, chatId, userEmail]); // The empty dependency array means this callback doesn't depend on any props or state

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>
          <Output outputText={outputText} isLoading={isLoading} />
        </Typography>

        <Editor
          outputText={outputText}
          setOutputText={setOutputText}
          createChatId={createChatId}
          updateChatData={updateChatData}
          chatId={chatId}
          setIsUpdateAPICall={setIsUpdateAPICall}
          isUpdateAPICall={isUpdateAPICall}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default ChatBot;
