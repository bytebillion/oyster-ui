import React from "react";
import { useNavigate } from "react-router-dom";

function Section() {
  const navigate = useNavigate();
  return (
    <div className="innerHome-container-bg ">
      <div className="buttons" onClick={() => navigate("/new-sign-up")}>
        <button className="home-button1">
          Start for FREE <p className="text-home">no credit card required!</p>
        </button>
      </div>
    </div>
  );
}

export default Section;
