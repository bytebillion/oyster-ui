import React from "react";
import "./SectionImage.css";
import imageSection from "../../../assets/Contact-home.svg";

const SectionImage = () => {
  return (
    <div className="section-image">
      <div>
        <h2 className="image-head">
          Stop Sounding Like AI,<br/>Be Original!
        </h2>
        {/* <h4 className="image-sub-button"> Application</h4> */}
        {/* <h2 className="image-head-2">Great work starts with your app</h2> */}
        <img src={imageSection} className="image-class" alt="" />
        {/* <p className="image-para">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture <br/> that empowers you to do you best work.
        </p> */}
      </div>
      {/* <div className="image-buttons">
        <button className="image-button-one">Learn More</button>
        <button className="image-button-two">About Us</button>
      </div> */}
    </div>
  );
};

export default SectionImage;
