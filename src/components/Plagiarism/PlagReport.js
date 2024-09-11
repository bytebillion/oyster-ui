
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Report from "./FullReport/Report";
import PlagResults from "./PlagResults";

const PlagReport = ({ report, checkPlag, plagResult, setShow }) => {
  const [openReport, setOpenReport] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(report != null ? true : false);
  }, [report]);

  const checkPlagOnClick = async () => {
    await checkPlag();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "90%",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      maxHeight : "45rem"
    },
  };


  // const idData =  report?.internet?.filter((obj, index) => {
  //   return index === report?.internet?.findIndex(o => obj.id === o.id );
  // });

  return (
    <div className="mt-10 font-inter">
      <div className="mb-2 flex relative">
        <div className="text-[black] text-xl font-[600]">Plagiarism Report</div>
        {/* <div className="absolute right-0 cursor-pointer text-[#3b82f6] text-sm font-[600]">
					View More
				</div> */}
      </div>
      <hr />
      <div>
        {report?.internet?.length > 0 ? (
          report?.internet?.map((f) => {
            return <PlagResults finding={f} />;
          })
        ) : (
          <>
            <div className="mt-2">
              {/* <div className="my-1 text-sm font-[500] text-[#707070]">Plagiarism </div> */}
              <div
                className={`${check ? "hidden" : "block"}
                        mt-4 px-4 py-2
                        bg-[#3b82f6] rounded-lg
                        cursor-pointer
                        text-sm font-[500] text-[#FFFFFF] text-center`}
                onClick={checkPlagOnClick}
              >
                Check Plagiarism
              </div>
            </div>
            <div className="text-[#6E6E70] text-sm font-[500] mt-4">
              No Plagiarism Found
            </div>
          </>
        )}
      </div>

      <button
        className="top-0 right-0 bg-[#3b82f6] text-[#fff] py-2 rounded-[10px] justify-center flex w-auto m-auto px-3 "
        onClick={() => {setOpenReport(!openReport)} }
        disabled={report?.internet?.length > 0 ? false : true}
      >
        View Full Report
      </button>
      <ReactModal
        isOpen={openReport}
        style={customStyles}
        onRequestClose={() => setOpenReport(false)}
      >
        <Report  
        setOpenReport={setOpenReport} 
        plagResult={plagResult} />
      </ReactModal>
    </div>
  );
};

export default PlagReport;


