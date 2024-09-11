import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Delete = ({ id, show, setShow, deleteDocument, fetchDocuments }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  const deleteDoc = async (e) => {
    e.preventDefault();
    await deleteDocument(id);
    await fetchDocuments();
    setShow(false);
  };

  return (
    <div className={`fixed top-0 left-0 z-20 w-full h-full ${show ? "block" : "hidden"} bg-[rgba(0,0,0,0.3)] text-white font-roboto`}>
      <div className={`m-auto p-4 absolute z-20 min-h-fit xl:w-[26vw] opacity-100 bg-white rounded-xl ${isMobile ? 'transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' : 'top-[38%] left-[38%]'}`}>
        <div className="text-[#3b82f6] text-sm font-[600] tracking-wider">
          Delete Document
        </div>
        <div className="my-3 text-black text-sm font-[500] w-[100%]">
          Are you sure you want to delete this document?
        </div>
        <div className="d-flex justify-center items-center bottom-8 right-5 text-xs font-[500]">
          <div
            className="mx-1 py-1 px-5 bg-[#3b82f6] rounded-[0.2rem] tracking-wide cursor-pointer"
            onClick={deleteDoc}
          >
            DELETE
          </div>
          <div
            className="mx-1 py-1 px-5 text-[#666666] border-[1px] border-[#515151] rounded-[0.2rem] cursor-pointer"
            onClick={() => setShow(false)}
          >
            CANCEL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
