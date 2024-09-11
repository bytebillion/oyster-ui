import React from "react";
import "./SectionOne.css";
import landingimgone from "../../../assets/Group 33.svg";
const SectionOne = () => {
  
  return (
    <div className="section-one">
      <div className="ai-container">
        <div className="ai-text">Powered by AI</div>
      </div>
      <div className="your-component">
        Transform Your Writing with
        <br />
        Humanised, Original and
        <br />
        Flawless Content Assistant
      </div>
      <div className="text-container">
        Harness the triple power of advanced grammar checking, plagiarism
        <br />
        detection, and Humanised AI-driven content generation.
      </div>

      <div className="image-top">
        <img className="landing-img-one" src={landingimgone} alt="" />
      </div>
      
    </div>
  );
};

export default SectionOne;
