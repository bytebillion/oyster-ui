import React, { useCallback, useEffect, useState, useRef } from "react";
import { countWords } from "../../libs/utility";
import "./GrammarEditorNew.css";
import MonacoEditor from "react-monaco-editor";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useMediaQuery } from "@chakra-ui/react";
import { replaceWord } from "../../libs/utility";

const INPUT_DELAY = 2000;

const editorOptions = {
 minimap: {
  enabled: false, // Disable minimap
 },
 lineNumbers: "off", // Hide line numbers
 fontFamily: "Arial, sans-serif", // Set a desired font
 fontSize: 20, // Set a desired font size
 wordWrap: "on", // Disable word wrapping
};

const GrammerEditor = ({
 toolbarRef,
 document,
 setDocument,
 checkGrammar,
 updateDocumentContent,
 updatedocumentTitle,
 errorWordsWithColor,
 setErrorWordsWithColor,
 setIsDocUpdateAPI,
 isDocUpdateAPI,
 results,
 open,
}) => {
 const [isMobile] = useMediaQuery("(max-width: 900px)");
 const [editorWidth, setEditorWidth] = useState(open ? "50%" : "100%");
 const [editorValue, setEditorValue] = useState(document?.text || "");
 const [title, setTitle] = useState(document?.title ?? "");
 const [editorInstance, setEditorInstance] = useState(null);
 const [monacoInstance, setMonacoInstance] = useState(null);
 const [decorations, setDecorations] = useState([]);
 const [hoverInfo, setHoverInfo] = useState(null);
 const tippyRef = useRef(null);
 const [correctionBoxPosition, setCorrectionBoxPosition] = useState({
  top: 0,
  left: 0,
 });

 useEffect(() => {
  setEditorWidth(open ? "50%" : "100%");
}, [open]);


 const callUpdateDocumentAPI = useCallback(async () => {
  const removeSpan = editorValue.replace(/<\/?[^>]+>/g, "");

  await updateDocumentContent(removeSpan);
  if (checkGrammar != null) {
   checkGrammar();
  }
 }, [checkGrammar, updateDocumentContent, editorValue]);

 const callUpdateTitleAPI = useCallback(async () => {
  await updatedocumentTitle();
 }, [updatedocumentTitle]);

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

 useEffect(() => {
  const removeHtmlTags = editorValue.replace(/<\/?[^>]+>/g, "");

  const debouncedUpdateDocumentAPI = debounce(
   callUpdateDocumentAPI,
   INPUT_DELAY
  );
  debouncedUpdateDocumentAPI(removeHtmlTags);

  return () => debouncedUpdateDocumentAPI.cancel();
  // eslint-disable-next-line
 }, [editorValue]);

 useEffect(() => {
  const debouncedUpdateTitleAPI = debounce(callUpdateTitleAPI, INPUT_DELAY);
  debouncedUpdateTitleAPI(title);

  return () => debouncedUpdateTitleAPI.cancel();
  // eslint-disable-next-line
 }, [title]);

 const handleEditorDidMount = (editor, monaco) => {
  setEditorInstance(editor);
  setMonacoInstance(monaco);
 };

 useEffect(() => {
  if (errorWordsWithColor.length > 0 && editorInstance && monacoInstance) {
   editorInstance.deltaDecorations(decorations, []);

   const model = editorInstance?.getModel();

   if (model) {
    const newDecorations = errorWordsWithColor?.map((range) => {
     let accumulatedLength = 0;
     let startLineNumber = 1;
     let startColumn = 1;
     let currLineNumber = 1;

     for (
      currLineNumber;
      currLineNumber <= model.getLineCount();
      currLineNumber++
     ) {
      if (currLineNumber) {
       const lineText = model.getLineContent(currLineNumber);

       if (accumulatedLength + lineText.length >= range.offset) {
        startLineNumber = currLineNumber;
        startColumn = range.offset - accumulatedLength + 1;
        break;
       }

       accumulatedLength += lineText.length + 1;
      }
     }

     const endLineNumber = startLineNumber;
     const endColumn = startColumn + range.errorWord.length;

     return {
      range: new monacoInstance.Range(
       startLineNumber,
       startColumn,
       endLineNumber,
       endColumn
      ),
      options: {
       isWholeLine: false,
       inlineClassName: `error-decoration-${range.customColor}`,
       hoverMessage: { value: "hello here" },
      },
     };
    });

    const appliedDecorations = editorInstance.deltaDecorations(
     [],
     newDecorations
    );
    setDecorations(appliedDecorations);

    setErrorWordsWithColor([]);
   }
  }
  // eslint-disable-next-line
 }, [errorWordsWithColor, editorInstance, monacoInstance]);

 useEffect(() => {
  if (editorInstance) {
   const handleMouseEnter = editorInstance.onMouseMove((e) => {
    const position = e.target.position;
    const hoveredWord = editorInstance.getModel().getWordAtPosition(position);

    if (
     hoveredWord &&
     errorWordsWithColor.some((word) => word.errorWord === hoveredWord.word)
    ) {
     const hoveredError = errorWordsWithColor.find(
      (word) => word.errorWord === hoveredWord.word
     );

     const wordPosition = editorInstance.getScrolledVisiblePosition(position);

     const correctionBoxTop =
      wordPosition.top + editorInstance.getScrollTop() + 130;
     const correctionBoxLeft = wordPosition.left + 78;

     setCorrectionBoxPosition({
      top: correctionBoxTop,
      left: correctionBoxLeft,
     });

     setHoverInfo({
      errorWord: hoveredError.errorWord,
      replacementArr: hoveredError.replacementArr?.slice(0, 6),
      position: wordPosition,
      wordColor: hoveredError?.customColor,
      message: hoveredError?.message,
      shortMessage: hoveredError?.shortMessage,
      offset: hoveredError?.offset,
      length: hoveredError?.length,
     });
    }
   });

   const tippyBox = tippyRef.current;

   const handleMouseLeave = () => {
    setHoverInfo(null);
   };

   if (tippyBox) {
    tippyBox.addEventListener("mouseenter", handleMouseEnter);
    tippyBox.addEventListener("mouseleave", handleMouseLeave);
   }

   return () => {
    if (tippyBox) {
     tippyBox.removeEventListener("mouseenter", handleMouseEnter);
     tippyBox.removeEventListener("mouseleave", handleMouseLeave);
    }
   };
  }
 }, [editorInstance, errorWordsWithColor, hoverInfo, open]);

 const fixWord = async (data, index) => {
  const text = document.text;
  const offset = hoverInfo?.offset;
  const length = hoverInfo?.length;

  const correctString = await replaceWord(text, data, offset, length);

  setDocument({ ...document, text: correctString });
  saveAndCheck(correctString);
 };

 const saveAndCheck = async (correctString) => {
  if (updateDocumentContent != null) await updateDocumentContent(correctString);
  if (checkGrammar != null) await checkGrammar();
 };

 return (
  <>
   <div className="w-[100%]">
    <div className="flex relative">
     {document?.text && (
      <div className="px-4 py-2 absolute top-4 right-[0rem] text-[#5F5F5F] text-sm font-[500] border-2 border-gray-300 rounded-lg">
       {countWords(document?.text)} words
      </div>
     )}
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

    <div
     className={`w-[100%] h-[40rem] ${
      isMobile ? "p-2" : "p-10"
     } text-[20px] leading-3 d-flex editor-container`}
    >
     <div
      className="monacoDiv grammar-checker-monaco-editor"
      style={{
       flexGrow: 1,
       flexShrink: 1,
       height: "100%",
       width: open ? "50%" : "100%",
      }}
      spellcheck={false}
     >
       {editorWidth && <MonacoEditor
       
        width={editorWidth}
        height="100%"
        language="plaintext"
        value={document?.text || editorValue}
        options={editorOptions}
        onChange={setEditorValue}
        editorDidMount={handleEditorDidMount}
       />}

      {hoverInfo && (
       <Tippy
        arrow={false}
        animation="scale"
        placement="top"
        visible={true}
        interactive={true}
        arrowSize="small"
        popperOptions={{
         modifiers: [
          {
           name: "preventOverflow",
           options: {
            boundary: "viewport",
           },
          },
         ],
        }}
       >
        <div
         ref={tippyRef}
         className={`hover-tooltip-${hoverInfo?.wordColor}`}
         style={{
          position: "absolute",
          top: `${correctionBoxPosition.top}px`,
          left: `${correctionBoxPosition.left}px`,
         }}
        >
         <p className="error-word">
          <b>{hoverInfo.shortMessage}</b>{" "}
         </p>
         <p className="error-word">
          <strike style={{ color: "red" }}>
           <span style={{ color: "black" }}>{hoverInfo.errorWord}</span>{" "}
          </strike>
         </p>
         <p className="error-word">{hoverInfo.message}</p>
         <div className="replacement-options">
          {hoverInfo.replacementArr.map((replacement, index) => (
           <button
            key={index}
            onClick={() => fixWord(replacement.value, index)}
            className={`replacement-option replacement-option-${hoverInfo?.wordColor}`}
           >
            {replacement.value}
           </button>
          ))}
         </div>
        </div>
       </Tippy>
      )}
     </div>
    </div>
   </div>
  </>
 );
};

export default GrammerEditor;
