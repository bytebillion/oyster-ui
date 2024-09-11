import React from "react";

const PlagScore = ({ score, desc }) => {
  return (
    <div>
      <div
        className=" pt-2 pb-2 ml-auto flex relative w-[99%]
                        text-center text-[1.5rem] font-[600]
                        rounded-lg border-gray-300 border-[1px]
                        shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)]"
      >
        <div className="m-auto p-[3px]">
          {score}
          <div className="text-[0.7rem] text-[#707070] font-[500]">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default PlagScore;
