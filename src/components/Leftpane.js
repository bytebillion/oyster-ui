import React from "react";
import circle from "../assets/Leftpane/final 1.png";
import { Link } from "react-router-dom";

const Leftpane = ({ toolbarRef }) => {
 return (
  <div
   className="hidden md:inline-block w-[3.5rem] min-h-[100vh] h-full
                    bg-[#B1CEFB]
                    text-white
                    d-flex flex-col
                    pl-[10px] flex-col"
  >
   <Link to="/dashboard">
    <img className="m-auto pt-4 p-1" src={circle} alt="circle" />
   </Link>

   <div ref={toolbarRef} className="mt-[20px] h-full d-flex   "></div>
  </div>
 );
};

export default Leftpane;
