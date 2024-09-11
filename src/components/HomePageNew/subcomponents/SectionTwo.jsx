import React from "react";
import "./SectionTwo.css";
import { useNavigate } from "react-router-dom";

function SectionTwo() {
  const navigate = useNavigate()
  return (
    <div className="container-homenew">
      <div className="innerHome-container ">
       
        <div className="buttons" onClick={() => navigate("/new-sign-up")}>
          <button className="home-button1">Start for FREE <p className="text-home">no credit card required!</p></button>
          </div>
      </div>
    </div>
  );
}

export default SectionTwo;
