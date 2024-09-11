import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import PromptsPopup from "../../components/chatBot/PromptsPopup";
import "./Editor.css"

function Editor({
  outputText,
  setOutputText,
  createChatId,
  updateChatData,
  chatId,
  setIsUpdateAPICall,
  isUpdateAPICall,
  isLoading,
}) {
  const [inputText, setInputText] = useState("");
  const [isPromptsPopupOpen, setPromptsPopupOpen] = useState(false);

  const handleAddText = (event) => {
    if (
      !isLoading &&
      ((event.key === "Enter" && !event.shiftKey) || event.type === "click")
    ) {
      event.preventDefault();

      setOutputText((prevState) => [
        ...prevState,
        { role: "user", content: inputText },
      ]);
      if (chatId) {
        setIsUpdateAPICall(true);
      }
      setInputText("");
    }
  };

  const handleBrowsePromptsClick = () => {
    setPromptsPopupOpen(true);
  };

  useEffect(() => {
    if (!chatId && outputText?.length > 0) {
      createChatId();
    } else if (chatId && outputText?.length > 0 && isUpdateAPICall) {
      updateChatData();
    }
  }, [outputText, chatId, createChatId, updateChatData, isUpdateAPICall]);

  return (
    <div className="editor-container">
      <div className="flex w-[100%]  send-message-area">
        <div className="send-text-area mr-2 w-[100%] rounded-[10px] outline-none pl-4 items-center overflow-y-hidden max-h-[200px] h-24px flex justify-center">
          <textarea
            className="w-[100%] outline-none z"
            placeholder="Send a message"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleAddText}
          />
        </div>

        <div
          onClick={handleAddText}
          disabled={isLoading}
          className={`text-lg mt-auto mb-auto  ${
            isLoading
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer opacity-100"
          }  rounded-[10px]  pl-4  items-center   max-h-[200px] h-24px `}
        >
          <SendIcon fontSize="large" style={{ color: "#3B82F6" }} />
        </div>
      </div>
      <div className="browse-prompts" >
        <button className="prompt-btn" onClick={handleBrowsePromptsClick}>Browse Prompts</button>
      </div>
      
      {isPromptsPopupOpen && <PromptsPopup setInputText={setInputText} onClose={() => setPromptsPopupOpen(false)} />}
    </div>
  );
}

export default Editor;
