import React, { useCallback, useEffect, useState } from "react";
import { countWords } from "../libs/utility";
import Highlighter from "react-highlight-words";
import { useMediaQuery } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const Main = ({
  document,
  setDocument,
  checkGrammar,
  updateDocumentContent,
  updatedocumentTitle,
  errorWordsWithColor,
  results
}) => {
  const inputDelay = 2000;

  const [title, setTitle] = useState(document?.title ?? "");
  const [text, setText] = useState(document?.text ?? "");
  const [toggleDocument, setToggleDocument] = useState(false)

  const [isMobile] = useMediaQuery("(max-width: 900px)");

  const callUpdateDocumentAPI = useCallback(async () => {
    await updateDocumentContent(text);
    if (checkGrammar != null) {
      checkGrammar()
      setToggleDocument(false)
    }; //	to check grammer on each change in text
  }, [checkGrammar, updateDocumentContent, text])

  const callUpdateTitleAPI = useCallback(async () => {
    await updatedocumentTitle();
  }, [updatedocumentTitle])

  useEffect(() => {
    const debouncedUpdateDocumentAPI = debounce(callUpdateDocumentAPI, inputDelay);
    debouncedUpdateDocumentAPI(text);

    return () => debouncedUpdateDocumentAPI.cancel();
    // eslint-disable-next-line
  }, [text]);

  useEffect(() => {
    const debouncedUpdateTitleAPI = debounce(callUpdateTitleAPI, inputDelay);
    debouncedUpdateTitleAPI(title);

    return () => debouncedUpdateTitleAPI.cancel();
    // eslint-disable-next-line
  }, [title]);


  // Debounce function to delay api calls while user typing
  function debounce(callUpdateAPI, delay) {
    let timerId;

    function debounced(...args) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        callUpdateAPI(...args);
      }, delay);
    }

    debounced.cancel = () => {
      clearTimeout(timerId);
    };

    return debounced;
  }

  const highlightWords = errorWordsWithColor?.map((errWord, index) => errWord?.replacementLength > 0 && errWord.errorWord );

  const findChunks = ({ searchWords, textToHighlight }) => {
    const chunks = [];
    searchWords.forEach((searchWord) => {
      const regex = new RegExp(`\\b${searchWord}\\b`, 'g');
      // const regex = new RegExp(`\\b${searchWord}\\b|\\b${searchWord}\\s\\b`, 'g');
      let match
      while ((match = regex.exec(textToHighlight)) != null) {
        if (match[0].length === 0) {
          break;
        }
        chunks.push({ start: match.index, end: regex.lastIndex });

        // if (regex.lastIndex === match.index) {
        //   console.error('No progress made, breaking the loop');
        //   break;
        // }
      }
    });
    return chunks;
  };

  // const findChunks = ({ searchWords, textToHighlight }) => {
  //   const chunks = [];
  //   const regex = new RegExp(searchWords.map(word => `\\b${word}\\b`).join("|"), "gi");

  //   let match;
  //   while ((match = regex.exec(textToHighlight)) !== null) {
  //     chunks.push({ start: match.index, end: regex.lastIndex });
  //   }

  //   return chunks;
  // };

  const getHighlightColor = (word) => {

    let color = ""
    errorWordsWithColor?.map((wordColorObj) => {
      if (wordColorObj.errorWord === word) {
        // console.log("word", word, "obj", wordColorObj.errorWord)
        color = wordColorObj.customColor === "customGreen"
          ? "#2A9D8F"
          : wordColorObj.customColor === "customYellow"
            ? "#E9C46A"
            : wordColorObj.customColor === "customOrange"
              ? "#f78000"
              : ""
      }
      return color;
    })
    return color
  };

  const toggleTextArea = (e) => {
    if (e?.type === "click") {
      setToggleDocument(true)
    }

  }

  const displayHighlightedText = (children) => {
    const words = children.match(/\S+|\s{2,}/g);

    let extractWord = ""
    if (words?.length === 1) {
      extractWord = words[0]
      return (
        <span style={{ backgroundColor: getHighlightColor(children) }}>
          {extractWord}
        </span>
      )
    }

    if (words?.length > 1) {
      extractWord = words?.map((item, key) => {
        return (
          <>
            <span key={key} style={{ backgroundColor: getHighlightColor(item) }}>
              {item}
            </span>{" "}
          </>
        )
      })

      return extractWord
    }
  }

  // const displayHighlightedText = (children) => {
  //   console.log("children",children)
  //   const words = children.match(/(?:[,\.\s]{2,}|[^\s,\.\n]+)/g); // Split text into words

  //   console.log("words",words)

  //   if (words?.length === 1) {
  //     const word = words[0].trim(); // Trim leading/trailing spaces
  //     console.log("word length 1",word)
  //     return (
  //       <span style={{ backgroundColor: getHighlightColor(word) }}>
  //         {word}
  //       </span>
  //     );
  //   } else if (words?.length > 1) {
  //     return words.map((word, index) => {
  //       console.log("word",word)
  //       const trimmedWord = word.trim(); // Trim leading/trailing spaces
  //       console.log("trimmedWord",trimmedWord)
  //       return (
  //         <span key={index} style={{ backgroundColor: getHighlightColor(trimmedWord) }}>
  //           {trimmedWord}
  //         </span>
  //       );
  //     });
  //   }
  // };

  useEffect(() => {
    if(results?.length === 0) {
      setToggleDocument(true)
    } else {
      setToggleDocument(false)
    }
  }, [results])

  return document ? (

(isMobile ? 
  <div className="mt-10 w-[100%] w-lg-[100%] h-[calc(50vh)] font-inter">
  <Link to="/dashboard"  className="text-4xl"  style={{textDecoration: "none", color : "black"}}>
  ←
  </Link>
  
  <input
    type="text"
    className="m-4 mx-0 mb-0 pl-4  text-[black] text-xl font-[600] outline-none"
    placeholder="Untitled Document"
    value={document?.title}
    onChange={(e) => {
      setDocument({ ...document, title: e.target.value });
      setTitle(e.target.value);
    }}
  />
  <hr />
  <div
    className={`${!toggleDocument && "w-full h-[calc(35vh)] p-4 outline-none resize-none"}  w-full text-justify text-[20px] font-inter font-[300] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 ${toggleDocument? "h-[90%]" : "h-[70%]"  } `}
    onClick={(e) => toggleTextArea(e)}
  >

    {!toggleDocument && <Highlighter
      className="highlighting-text"
      searchWords={highlightWords}
      autoEscape={true}
      caseSensitive={true}
      textToHighlight={document?.text}
      findChunks={findChunks}
      highlightTag={({ children }) => (
        // console.log("children",children)
        displayHighlightedText(children)
      )}
    />}

    {/* <Highlighter
      searchWords={highlightWords}
      autoEscape={true}
      textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
      findChunks={(textToHighlight) => {
        console.log("textToHighlight", textToHighlight)

        const chunks = [];
        textToHighlight?.searchWords.forEach((searchWord) => {

          // console.log("searchWord", searchWord)
          const regex = new RegExp(searchWord, 'gi');

          // console.log("regex", regex)
          let match

          // console.log("match", match)
          while (match = regex.exec(textToHighlight.textToHighlight)) {
            console.log("match", match)
            const chunk = {
              start: match.index,
              end: match.index + match[0].length, 
              text: match[0],
              highlightClassName: getHighlightClassName(match[0]),
            };
            chunks.push(chunk);
          }
        });

        console.log("chunks", chunks)
        return chunks;
      }}
    /> */}

    {toggleDocument && <textarea
      className="w-full h-[80%] p-4 outline-none resize-none"
      style={{ lineHeight: "30px" }}
      value={document?.text ?? ""}
      onChange={(e) => {
        try {
          const text = e.target.value;
          setDocument({ ...document, text });
          setText(text);
        } catch (error) {
          console.error(error);
        }
      }}
    />}
  </div>
</div>

:
    <div className="mt-10 w-[60%] w-lg-[100%] font-inter">
      <div className="flex relative">
        <div className="px-4 py-2 absolute top-4 right-[0rem] text-[#5F5F5F] text-sm font-[500] border-2 border-gray-300 rounded-lg">
          {countWords(document?.text)} words
        </div>
      </div>
      <input
        type="text"
        className="m-4 mx-0 mb-0 pl-4  text-[black] text-xl font-[600] outline-none"
        placeholder="Untitled Document"
        value={document?.title}
        onChange={(e) => {
          setDocument({ ...document, title: e.target.value });
          setTitle(e.target.value);
        }}
      />
      <hr />
      <div
        className={`${!toggleDocument && "w-full h-[80%] p-4 outline-none resize-none"}  w-full text-justify text-[20px] font-inter font-[300] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 h-[90%]`}
        onClick={(e) => toggleTextArea(e)}
      >

        {!toggleDocument && <Highlighter
          className="highlighting-text"
          searchWords={highlightWords}
          autoEscape={true}
          caseSensitive={true}
          textToHighlight={document?.text}
          findChunks={findChunks}
          highlightTag={({ children }) => (
            // console.log("children",children)
            displayHighlightedText(children)
          )}
        />}

        {/* <Highlighter
          searchWords={highlightWords}
          autoEscape={true}
          textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
          findChunks={(textToHighlight) => {
            console.log("textToHighlight", textToHighlight)

            const chunks = [];
            textToHighlight?.searchWords.forEach((searchWord) => {

              // console.log("searchWord", searchWord)
              const regex = new RegExp(searchWord, 'gi');

              // console.log("regex", regex)
              let match

              // console.log("match", match)
              while (match = regex.exec(textToHighlight.textToHighlight)) {
                console.log("match", match)
                const chunk = {
                  start: match.index,
                  end: match.index + match[0].length, 
                  text: match[0],
                  highlightClassName: getHighlightClassName(match[0]),
                };
                chunks.push(chunk);
              }
            });

            console.log("chunks", chunks)
            return chunks;
          }}
        /> */}

        {toggleDocument && <textarea
          className="w-full h-[80%] p-4 outline-none resize-none"
          style={{ lineHeight: "30px" }}
          value={document?.text ?? ""}
          onChange={(e) => {
            try {
              const text = e.target.value;
              setDocument({ ...document, text });
              setText(text);
            } catch (error) {
              console.error(error);
            }
          }}
        />}
      </div>
    </div>

    )
  

  ) : (
    <div className="flex w-[60%] justify-center items-center h-[70vh]">
      <h1 className="text-2xl font-bold">loading</h1>
    </div>
  );
};

export default Main;
