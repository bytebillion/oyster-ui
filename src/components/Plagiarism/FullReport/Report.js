import React, { useRef } from "react";
import ReportLeft from "./ReportLeft";
import ReportRight from "./ReportRight";
import { useMediaQuery } from "@chakra-ui/react";
import ReactToPrint from "react-to-print";

const Report = ({ setOpenReport, plagResult }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  // console.log("plagResult->", plagResult);

  const componentRef = useRef();

  // Custom styling for the PDF content
  const pdfContentStyle = {
    paddingRight: "30px", // Add your desired padding value
  };

  return (
    <div className="relative ">
      <ReactToPrint
        trigger={() => (
          <button className="px-14 py-2 mt-12 mr-4 absolute top-0 right-0 bg-[#3b82f6] rounded-md text-[#FFFFFF] text-base font-[500] cursor-pointer">
            Save Report
          </button>
        )}
        content={() => componentRef.current}
        // Provide custom styles to the PDF content
        documentTitle="Plagiarism_Report"
        bodyClass="pdf-content"
        bodyStyle={pdfContentStyle}
      />
      
      <div className={`${!isMobile ? "flex" : "block"} bg-white`} ref={componentRef} >
        <div className={`${!isMobile ? "w-1/2 " : "w-full"} bg-white border-r-4`}>
          <ReportLeft plagResult={plagResult} setOpenReport={setOpenReport} />
        </div>

        <hr />
        <div className={`${!isMobile ? "w-1/2 " : "w-full"} bg-white`} style={pdfContentStyle}>
          <ReportRight setOpenReport={setOpenReport} plagResult={plagResult} />
        </div>
      </div>
    </div>
  );
};

export default Report;
