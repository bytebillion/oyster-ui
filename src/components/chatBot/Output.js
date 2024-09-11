import { CircularProgress } from "@mui/material";
import React from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
import search from "../../assets/advanced-search.png";
import pen from "../../assets/Advanced-Pen.png";
import document from "../../assets/Advanced-Document.png";

function Output({ outputText, isLoading }) {
  const isUserInputEmpty = !outputText || outputText.length === 0;

  return (
    <div className="output w-[100%] ">
      <div
        className="output whitespace-pre-wrap w-[100%] justify-center m-auto h-[42rem] overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <h2>AI Output</h2>

        {isUserInputEmpty && (
          <div className="empty-main-cont">
            <h2 className="empty-head">Welcome to Magic Writer!</h2>
            <div>
              <p className="empty-para">
                Write a task to begin with, and Magic Chat will take care of the
                rest. Not sure how to get started? For ideas, browse the Prompt
                Library.
              </p>
              <div className="lists-container">
                <div className="list-container">
                  <img className="empty-img" src={search} alt="" />
                  <div>
                    <h1 className="empty-sub-head">Search in Real Time</h1>
                    <p className="empty-para">
                      "Compose a summary of the most recent developments in
                      generative AI." "Send [insert Linkedin profile URL] a
                      personalized email.
                    </p>
                  </div>
                </div>
                <div className="list-container">
                  <img className="empty-img" src={pen} alt="" />
                  <div>
                    <h1 className="empty-sub-head">
                      Write blogs and press releases
                    </h1>
                    <p className="empty-para">
                      "Write a press release about your website. "Create a blog
                      post about search engine optimization"
                    </p>
                  </div>
                </div>
                <div className="list-container">
                  <img className="empty-img" src={document} alt="" />
                  <div>
                    <h1 className="empty-sub-head">Think Creative</h1>
                    <p className="empty-para">
                      "Write Product Descriptions" "Write social media captions"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isUserInputEmpty &&
          outputText?.map((chat) => {
            return (
              <div
                key={chat.id} // Make sure each child in a list has a unique key
                className={`group flex p-4 mb-2 pt-3 pr-5 md:rounded-xl ${
                  chat?.role === "assistant" ? "bg-blue-100" : "#fff"
                }`}
              >
                <div className="m-1 mr-2 h-6 w-6 md:m-2 md:mr-4 md:h-8 md:w-8 grid place-content-center mt-1">
                  {`${chat?.role === "assistant" ? "A" : "U"}`}
                </div>
                <div className="flex w-full flex-col p-1 pt-2">
                  <div className="grid flex-grow items-center text-green-900">
                    <div className="flex-1 overflow-x-auto pl-1">
                      <div className="markdown leading-relaxed">
                        {chat?.content && (
                          <Markdown
                            children={chat.content ?? ""}
                            components={{
                              code({ className, children, ...rest }) {
                                const match = /language-(\w+)/.exec(
                                  className || ""
                                );
                                return match ? (
                                  <SyntaxHighlighter
                                    {...rest}
                                    children={String(children).replace(
                                      /\n$/,
                                      ""
                                    )}
                                    showLineNumbers
                                    style={atelierCaveDark}
                                    language={match[1]}
                                    PreTag="div"
                                  />
                                ) : (
                                  <code {...rest} className={className}>
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex w-full items-center">
                      <div className="flex items-center"> 👍 👎</div>
                      <div className="ml-auto flex items-center text-green-800">
                        Copy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {isLoading && <CircularProgress />}
      </div>
    </div>
  );
}

export default Output;
