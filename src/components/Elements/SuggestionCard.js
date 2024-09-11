import React from "react";
import arrow from "../../assets/Suggestions/-_.png";
import greenDot from "../../assets/Suggestions/green-dot.svg";
// import yellowDot from "../../assets/Suggestions/yellow-dot.svg";
// import orangeDot from "../../assets/Suggestions/orange-dot.svg";
import { replaceWord } from "../../libs/utility";

const SuggestionCard = ({
 result,
 message,
 shortMessage,
 correctWord,
 errorWord,
 document,
 setDocument,
 updateDocumentContent,
 checkGrammer,
//  customColor,
}) => {
//  const renderDotImg = () => {
//   switch (customColor) {
//    case "customGreen":
//     return greenDot;
//    case "customYellow":
//     return yellowDot;
//    case "customOrange":
//     return orangeDot;
//    default:
//     return "";
//   }
//  };

//  const fixWord = async (data) => {
//   if (!result || !correctWord || !document) return;
//   const text = document.text;

//   // Create a variable to store the updated word
//   let updatedWordValue = " ";

//   correctWord?.forEach((newWord) => {
//    if (newWord?.value === data) {
//     const finalword = newWord?.value;
//     updatedWordValue = finalword; // Update the variable
//    }
//   });

//   if (updatedWordValue !== " ") {
//    const correctString = await replaceWord(
//     text,
//     updatedWordValue,
//     result?.offset,
//     result?.length
//    );

//    // TODO save thing is not happening on first go. need to click twice to save/changes to be reflected !
//    setDocument({ ...document, text: correctString });

  const fixWord = async (data) => {
    if (!result || !correctWord || !document) return;
    const text = document.text;
    
    let updatedWordValue = " ";
  
    correctWord?.forEach((newWord) => {
      if (newWord?.value === data) {
        const finalword = newWord?.value;
        updatedWordValue = finalword; // Update the variable
      }
    });
  
    if (updatedWordValue !== " ") {  
      const correctString = await replaceWord(
        text,
        updatedWordValue,
        result?.offset,
        result?.length
      );
  
      // TODO save thing is not happening on first go. need to click twice to save/changes to be reflected !
      setDocument({ ...document, text: correctString });  
      saveAndCheck(correctString);
       // Reset the state if needed
    }
  };

 const saveAndCheck = async (correctString) => {
  if (updateDocumentContent != null) await updateDocumentContent(correctString);
  if (checkGrammer != null) await checkGrammer();
 };

 return (
  <>
   {(correctWord || correctWord === "") && (
    <div
     onClick={fixWord}
     className={`my-2
                    px-4 py-4
                    relative
                    font-inter
                    border-[1px]  rounded-xl
                    shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)]
										cursor-pointer
                    `}
    >
     <div className="flex text-s text-[#818181] font-[300]">
      <img className="h-fit mt-2 mr-2" src={greenDot} alt="bullet" />
      {shortMessage}
     </div>
     <div className="flex my-2">
      <div className="d-flex p-2">
       <div className="text-[14px] mt-[2px] mr-2 line-through decoration-[#E50000] text-[#424242]">
        {errorWord}
       </div>
       <img className="h-fit mt-1" src={arrow} alt="arrow" />
      </div>

      <div className="d-flex flex-wrap">
       {correctWord.map((obj) => (
        <div
         className={`mx-2 my-2 px-2 py-[0.1rem] cursor-pointer
            text-[14px] text-[#FFFFFF] font-[600]
            bg-[#3b82f6] rounded-[0.2rem]`}
         key={obj.id}
         onClick={() => fixWord(obj.value)}
        >
         {obj.value}
        </div>
       ))}
      </div>
     </div>
     <div
      className="w-[98%] text-[12px] text-[#818181] font-[300]
                      tracking-wide"
     >
      {message}
     </div>
     {/* <img className="absolute right-2 bottom-2" src={bin} alt="bin" /> */}
    </div>
   )}
  </>
 );
};

export default SuggestionCard;
