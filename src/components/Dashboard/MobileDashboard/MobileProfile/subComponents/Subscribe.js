import React from "react";
import "./Subscribe.css";
import arrow from "../../../../../assets/Back arrow.svg";
import subsArrow from "../../../../../assets/Subs-arrow.svg"
import premiumPic from "../../../../../assets/profile-1.svg"

const Subscribe = ({ setSubscribe }) => {
  return (
    <div className="subscribe-container">
      <div className="container-1">
        <div className="back-icon" onClick={() => setSubscribe(false)}>
          <img src={arrow} alt="Back" />
        </div>
      </div>
      <div className="contain-2">
        <h2 className="subs-head">Subscribe to Premium</h2>
        <p className="subs-para">This is the Sample Text</p>
      </div>
      <div className="cont-3 d-flex mb-8">
        <div className="subs-list-1">
        <img src={premiumPic} alt="Back" className="pb-2"/>
        <p><span className="bold">$9.99</span>/month</p>
        </div>
        <hr className="hr"/>
        <div className="subs-list-2">
        <span className="arrow-img"> <img src={subsArrow} alt="Back" /></span>
        <span className="sublist">Feature 1</span>
        </div>
        <div className="subs-list-2">
        <span className="arrow-img"> <img src={subsArrow} alt="Back" /></span>
        <span className="sublist">Feature 1</span>
        </div>
        <div className="subs-list-2">
        <span className="arrow-img"> <img src={subsArrow} alt="Back" /></span>
        <span className="sublist">Feature 1</span>
        </div>
      </div>
      <div className="cont-3 d-flex">
        <div className="subs-list-1">
        <img src={premiumPic} alt="Back" className="pb-2"/>
        <p><span className="bold">$9.99</span>/month</p>
        </div>
        <hr className="hr"/>
        <div className="subs-list-2">
        <span className="arrow-img"> <img src={subsArrow} alt="Back" /></span>
        <span className="sublist">Feature 1</span>
        </div>
        <div className="subs-list-2">
        <span className="arrow-img"> <img src={subsArrow} alt="Back" /></span>
        <span className="sublist">Feature 1</span>
        </div>
        <div className="subs-list-2">
        <span className="arrow-img"> <img src={subsArrow} alt="Back" /></span>
        <span className="sublist">Feature 1</span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
