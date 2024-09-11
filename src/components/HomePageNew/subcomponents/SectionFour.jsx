// SectionFour.js

import React from "react";
import "./SectionFour.css";
import { USE_CASES } from "../Utils/constants";
import { useNavigate } from "react-router-dom";

const SectionFour = ({ showGetStartedButton = true }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="section-four">
        <div>
          <h2 className="section-heading-four">Usecases</h2>
        </div>
        <div className="use-case-section">
          {USE_CASES.map((cases, index) => {
            return (
              <div key={index} className={`use-cases-section-${index}`}>
                <div className="left-use-case">
                  <img src={cases.useCasesImages} alt={`img-${index}`} />
                </div>
                <div className="right-use-case">
                  <div className="right-usecase-content">
                    <div className="testimonial-buttons">
                      {/* <button className="slide-button">{cases.useCaseButton}</button> */}
                    </div>
                    <div className="useCaseTitles">{cases.title}</div>
                    <div className="useCaseDesc">{cases.description}</div>
                    {showGetStartedButton && (
                      <div
                        className="useCaseGetButton"
                        onClick={() => navigate(cases.getStartedButtonRoute)}
                      >
                        {cases.getStartedButton}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionFour;
