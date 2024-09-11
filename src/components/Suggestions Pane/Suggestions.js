import React, { useEffect, useState } from "react";
import arrow_Down from "../../assets/Suggestions/chevron-down.png";
import { getWordAt, countWords } from "../../libs/utility";
import SuggestionCard from "../Elements/SuggestionCard";
import { motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";
const CUSTOM_GREEN = "customGreen";
const CUSTOM_YELLOW = "customYellow";
const CUSTOM_ORANGE = "customOrange";

const ArrowDown = () => (
  <img className="absolute right-0" src={arrow_Down} alt="dropdown" />
);

const ArrowUp = () => (
  <img
    className="absolute right-0 top-0 rotate-180"
    src={arrow_Down}
    alt="dropdown"
  />
);

const SuggestionCagegory = ({
  categoryName,
  suggestionCards,
  bgColor,
  isCorrectWord,
}) => {
  const [arrow_typo, setArrow_typo] = useState(false);

  const getSuggestionCardLength = () => {
    let actualLength = suggestionCards?.map((card) => {
      // console.log("card", card)
      let suggestionLength;
      if (card?.props?.result?.replacements) {
        if (card?.props?.correctWord || card?.props?.result?.replacements) {
          suggestionLength = card?.props?.result?.replacements.length;
        }
      }
      // else if(card?.replacements.length) {
      //   suggestionLength = card?.replacements?.length
      // }
      // console.log("suggestionLength21", suggestionLength);
      return suggestionLength;
    });

    // console.log("actualLength", actualLength)
    let count = 0;
    // eslint-disable-next-line
    let countLength = actualLength?.map((item) => {
      if (item > 0) {
        count++;
      }
      return count;
    });

    // console.log("countLength", countLength)
    return count;
  };

  // console.log("suggestionCards21", suggestionCards);

  return (
    <>
      <div
        onClick={(e) => {
          suggestionCards.length > 0 && setArrow_typo(!arrow_typo);
        }}
        className={`mt-3 pl-4 py-2 flex relative ${bgColor} rounded-[0.4rem] text-[#FFFFFF] text-[18px] font-[600] shadow-[0px_-4px_0px_-2px_rgba(223, 201, 0, 1) cursor-pointer`}
      >
        {categoryName} (
        {suggestionCards?.length ? getSuggestionCardLength() : 0})
        {arrow_typo === true && suggestionCards.length > 0 ? (
          <ArrowUp />
        ) : (
          <ArrowDown />
        )}
      </div>
      <motion.div
        initial={{
          display: arrow_typo ? "block" : "none",
          height: arrow_typo ? "auto" : "0px",
        }}
        animate={{
          display: arrow_typo ? "block" : "none",
          height: arrow_typo ? "auto" : "0px",
        }}
        exit={{
          height: arrow_typo ? "0px" : "auto",
        }}
        transition={{ duration: 0.3 }}
      >
        {suggestionCards}
      </motion.div>
    </>
  );
};

const Suggestions = ({
  results,
  setDocument,
  document,
  updateDocumentContent,
  checkGrammar,
  setErrorWordsWithColor,
  icon,
  setIcon,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  let errorWordsColor = [];
  let isCorrectWord = false;

  // console.log("results222", results);

  const getSuggestions = (categoryId, customColor) => {
    try {
      let filteredSuggestions = [];

      if (categoryId === "OTHERS") {
        filteredSuggestions = results?.filter((res) => {
          if (
            res.rule.category.id !== "GRAMMAR" &&
            res.rule.category.id !== "TYPOS" &&
            res.rule.category.id !== "MORFOLOGIK_RULE_EN_US" &&
            res.rule.category.id !== "CASING" &&
            res.rule.category.id !== "STYLE" &&
            res.rule.category.id !== "SEMANTICS" &&
            res.rule.category.id !== "TYPOGRAPHY" &&
            res.rule.category.id !== "SPELLING"
          )
            return res;
          return null;
        });
      } else
        filteredSuggestions = results?.filter((res) => {
          if (res?.rule?.category?.id === categoryId) return res;
          return null;
        });

      if (filteredSuggestions == null || filteredSuggestions?.length === 0)
        return [];

      return (
        filteredSuggestions?.map((res, idx) => {
          // console.log("res122", res);

          let message = res.message;
          let shortMessage = res.rule.category.name;
          let correctWord = res?.replacements?.slice(0, 6);

          // console.log("correctWord21", res?.replacements?.slice(0, 6));

          if (correctWord) {
            isCorrectWord = true;
          }
          // let typeOfError = res?.rule?.category?.id;
          let replacementLength = res?.replacements?.length;
          let errorWord =
            getWordAt(document?.text, res?.offset, res?.length) ?? "";
          errorWordsColor.push({
            errorWord,
            message,
            shortMessage,
            customColor,
            replacementLength,
            offset: res?.offset,
            replacementArr: res?.replacements,
            length: res?.length,
          });

          return (
            <SuggestionCard
              key={res.rule.category.id + Math.random() * 100 * idx}
              message={message}
              shortMessage={shortMessage}
              correctWord={correctWord}
              errorWord={errorWord}
              result={res}
              setDocument={setDocument}
              document={document}
              updateDocumentContent={updateDocumentContent}
              checkGrammer={checkGrammar}
              customColor={customColor}
            />
          );
        }) ?? []
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (errorWordsColor.length > 0) {
      setErrorWordsWithColor(errorWordsColor);
    }
    // eslint-disable-next-line
  }, [results, document?.text]);

  return isMobile ? (
    <div className="w-[100%] h-auto font-inter overflow-scroll scrollbar-thin">
      <div
        className=" flex
          justify-between
						text-xl text-[#FF1D25]
						font-inter font-[600] "
      >
        <div
          className="ml-2 px-2 py-0
							text-[#FF1D25] text-[1.2rem]"
        >
          {results?.length ?? 0}
          All Suggestions
        </div>

        <div className=" right-[0rem] text-xl pt-[4px]  text-[#000] text-sm text-[1.2rem] font-[500] ">
          {countWords(document?.text)} words
        </div>
      </div>
      <hr />




      <SuggestionCagegory
        categoryName="Grammar, Punctuation & Spelling"
        isCorrectWord={isCorrectWord}
        suggestionCards={[
          ...getSuggestions("GRAMMAR", CUSTOM_GREEN),
          ...getSuggestions("MORFOLOGIK_RULE_EN_US", CUSTOM_GREEN),
          ...getSuggestions("OTHERS", CUSTOM_GREEN),
        ]}
        bgColor="bg-customGreen"
      />
      <SuggestionCagegory
        categoryName="Style"
        isCorrectWord={isCorrectWord}
        suggestionCards={[
          ...getSuggestions("CASING", CUSTOM_YELLOW),
          ...getSuggestions("STYLE", CUSTOM_YELLOW),
        ]}
        bgColor="bg-customYellow"
      />
      <SuggestionCagegory
        categoryName="Semantics, Format & Typography"
        isCorrectWord={isCorrectWord}
        suggestionCards={[
          ...getSuggestions("SEMANTICS", CUSTOM_ORANGE),
          ...getSuggestions("SPELLING", CUSTOM_ORANGE),
          ...getSuggestions("TYPOGRAPHY", CUSTOM_ORANGE),
          ...getSuggestions("TYPOS", CUSTOM_ORANGE),
        ]}
        bgColor="bg-customOrange"
      />
      {/* <SuggestionCagegory
				categoryName="Others"
				suggestionCards={getSuggestions("OTHERS")}
			/> */}
    </div>
  ) : (
    // All Suggestions block

    <div className="w-[100%] h-auto font-inter overflow-scroll scrollbar-thin">
      <div
        className="pb-4 flex
          text-xl text-[black]
          font-inter font-[600] "
      >
        All Suggestions
        <div
          className="ml-2 px-2 py-0
            border-4 border-red-500 rounded-full
            text-[#FF1D25] text-[1rem]"
        >
          {results?.length ?? 0}
        </div>
      </div>
      <hr />

      <SuggestionCagegory
        categoryName="Grammar, Punctuation & Spelling"
        isCorrectWord={isCorrectWord}
        suggestionCards={[
          ...getSuggestions("GRAMMAR", CUSTOM_GREEN),
          ...getSuggestions("MORFOLOGIK_RULE_EN_US", CUSTOM_GREEN),
          ...getSuggestions("OTHERS", CUSTOM_GREEN),
        ]}
        bgColor="bg-customGreen"
      />
      <SuggestionCagegory
        categoryName="Style"
        isCorrectWord={isCorrectWord}
        suggestionCards={[
          ...getSuggestions("CASING", CUSTOM_YELLOW),
          ...getSuggestions("STYLE", CUSTOM_YELLOW),
        ]}
        bgColor="bg-customYellow"
      />
      <SuggestionCagegory
        categoryName="Semantics, Format & Typography"
        isCorrectWord={isCorrectWord}
        suggestionCards={[
          ...getSuggestions("SEMANTICS", CUSTOM_ORANGE),
          ...getSuggestions("SPELLING", CUSTOM_ORANGE),
          ...getSuggestions("TYPOGRAPHY", CUSTOM_ORANGE),
          ...getSuggestions("TYPOS", CUSTOM_ORANGE),
        ]}
        bgColor="bg-customOrange"
      />
      {/* <SuggestionCagegory
      categoryName="Others"
      suggestionCards={getSuggestions("OTHERS")}
    /> */}
    </div>
  );
};

export default Suggestions;
