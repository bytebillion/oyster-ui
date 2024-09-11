import React from "react";
import PlagScore from "../PlagScore";
import Charts from "./Chart/Charts";
import { useMediaQuery } from "@chakra-ui/react";

const ReportLeft = ({ plagResult, setOpenReport }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <div className="m-3 ">
      {isMobile ? (
        <div className="flex relative justify-between">
        

          <div
            className="mt-3 mr-4 text-[24px] cursor-pointer "
            onClick={() => setOpenReport(false)}
          >
            X
          </div>
        </div>
      ) : null}

      <div
        className="text-[#6E6E70] text-2xl
                            font-[600] mt-4"
      >
        Full Plagiarism Report
      </div>
      <div className="flex w-full justify-around">
        <div className="my-4  w-[30%]">
          <PlagScore
            score={plagResult?.results?.score?.aggregatedScore}
            desc={"Plagiarism Found"}
          />
        </div>
        <div className="my-4   w-[30%]">
          <PlagScore score={"13"} desc={"Results Found"} />
        </div>
        <div className="my-4  w-[30%]">
          <PlagScore
            score={plagResult?.results?.score?.identicalWords}
            desc={"Similar Words"}
          />
        </div>
      </div>
      <Charts plagResult={plagResult} />
    </div>
  );
};

export default ReportLeft;

// <PlagResults category="Identical" />

// const ReportLeft = () => {
//   return (
//     <div className="m-10">
//       <div
//         className="text-[#6E6E70] text-2xl
//                             font-[600]"
//       >
//         Full Plagiarism Report
//       </div>
//       <div className="flex w-full">
//         <div className="my-4 mr-4 w-[30%]">
//           <PlagScore score={"72%"} desc={"Plagiarism Found"} />
//         </div>
//         <div className="my-4 mr-4  w-[30%]">
//           <PlagScore score={"13"} desc={"Results Found"} />
//         </div>
//         <div className="my-4 mr-4 w-[30%]">
//           <PlagScore score={"215"} desc={"Similar Words"} />
//         </div>
//       </div>
//       <Charts />
//       <PlagResults category="Identical" />
//       <PlagResults category="Minor Changes" />
//     </div>
//   );
// };
