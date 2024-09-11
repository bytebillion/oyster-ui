import React from "react";
import FullResults from "./FullResults";
import { useMediaQuery } from "@chakra-ui/react";



const ReportRight = ({ setOpenReport, plagResult }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <div className={`${!isMobile ? "ml-8" : "m-auto mobile-padding"} font-inter`}>
      {!isMobile ? (
        <div className="flex relative justify-between">
          <div
            className="mt-10 text-xl text-[#6E6E70] font-[600]"
          >
            Results
          </div>
          <div>
            <div
              className="mt-3 mr-4 cursor-pointer "
              onClick={() => setOpenReport(false)}
            >
              X
            </div>

            
          </div>
        </div>
      ) : null}

      <FullResults plagResult={plagResult} />
    </div>
  );
};

export default ReportRight;
