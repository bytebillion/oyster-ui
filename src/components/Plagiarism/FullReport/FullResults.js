import React from "react";
import iden from "../../../assets/Plagiarism/Ellipse 44.svg";
import minor from "../../../assets/Plagiarism/Ellipse 45.svg";
import para from "../../../assets/Plagiarism/Ellipse 46.svg";
import { useMediaQuery } from "@chakra-ui/react";


 


const FullResults = ({ plagResult }) => {
  const { results } = plagResult;
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <>
      {results?.internet?.map((data) => {
        return (
          <div
          key={data?.id}
            className="mt-10 w-[98%] font-inter
                border-[1px] rounded-md
                shadow-[4px_10px_10px_0px_rgba(0,0,0,0.2)] 
                "
          >
            <div className="mx-4">
              <div
                className="mt-4 my-2
                        text-xl text-[#323232]
                        font-[600] break-words"
              >
                {data?.title}
              </div>
              <div
                className="my-2
                        text-[#2286CB] text-base
                        italic text-ellipsis overflow-hidden whitespace-nowrap w-[100%] cursor-pointer"
              >
              <a href={data?.url} className="no-underline" >{data?.url} </a>
              
                
              </div>
              <div
                className="my-2
                break-words
                        text-sm text-justify text-black
                        font-[400] tracking-normal leading-6"
              >
                {data?.introduction}
              </div>
            </div>
            <hr />
            <div className="my-4 relative">
              <div
                className={`${isMobile? "mx-2" : "mx-4" }
                text-[#F60C0C]  md:text-md  lg:text-lg
                font-[400]`}
              >
                {data?.similarWords} similar words
              </div>
              <div
                className="absolute top-0 right-4
                        flex
                        "
              >
              <img className={`${isMobile? "mr-2" : "mr-4" }`} src={iden} alt="error" />
                <img className={`${isMobile? "mr-2" : "mr-4" }`} src={minor} alt="error" />
                <img className={`${isMobile? "mr-2" : "mr-4" }`} src={para} alt="error" />
                
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FullResults;
