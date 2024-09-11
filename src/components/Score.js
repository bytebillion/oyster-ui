import React, { useEffect, useState } from "react";
import arrow from "../assets/Score/Vector.png";
import PlagScore from "./Plagiarism/PlagScore";
import Switch from "react-switch";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip, IconButton } from "@mui/material";

const Score = ({ report, checkPlag, picky, setPicky, checkGrammar, plagResult }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(report != null ? true : false);
  }, [report]);


  // const checkPlagOnClick = async () => {
  //   await checkPlag();
  // };

  return (
    <div className="p-4 w-[14rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-inter">
      {report?.results?.score && (
        <div>
          <div
            className="mt-16 px-8 py-3
                          flex relative
                          w-[99%]
                          text-center text-[1.5rem] font-[600]
                          rounded-lg border-gray-300 border-[1px]
                          shadow-[0_0px_20px_0px_rgba(0,0,0,0.2)]"
          >
            <img
              className="h-fit
                            absolute top-1 right-1"
              src={arrow}
              alt="arrow"
            />
            <div className="m-auto">
              {report?.results?.score?.aggregatedScore ?? 0}
              <div
                className="
                              text-sm text-[#707070] font-[500]"
              >
                Test Score
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="my-4 py-4 px-3
                      flex
                      w-full
                      vertical-middle
                      border-[#E4E4E4] border-[1px] rounded-lg
                      font-[600] text-xs text-[#5C5C5C] justify-center items-center gap-2"
      >
        <span className="text-[13px]">Picky Mode</span>
        <Switch
          size="10"
          checked={picky}
          onChange={(e) => {
            checkGrammar(e);
          }}
          height={20}
          width={40}
          handleDiameter={17}
          onColor="#3b82f6"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <Tooltip
          className="position-absolute w-[.5%]"
          style={{ margin: "0px 15px 45px 151px" }}
          title={<p style={{ fontSize: "12px" }}>Picky mode shows you more grammar errors and style tips than usual.</p>}
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>

      <hr />

      <div
        className={` ${check ? "block" : "hidden"}
                      relative`}
      >
        <PlagScore
          score={report?.results?.score?.relatedMeaningWords ?? 0}
          desc={"Related Meaningful Words"}
        />
        <PlagScore
          score={report?.results?.score?.identicalWords ?? 0}
          desc={"Identical Words"}
        />
        <PlagScore
          score={report?.results?.score?.minorChangedWords ?? 0}
          desc={"Minor Words Changes"}
        />

        <div
          className="mt-2 absolute right-2 text-[#3b82f6] text-[0.75rem] font-[600] cursor-pointer"
          onClick={checkPlag}
        >
          Check Again
        </div>
      </div>

      <button className="absolute bottom-4 right-5 py-2 px-12 bg-[#3b82f6] rounded-lg text-sm font-[500] text-[#FFFFFF] text-center">
        Publish
      </button>
    </div>
  );
};

export default Score;
