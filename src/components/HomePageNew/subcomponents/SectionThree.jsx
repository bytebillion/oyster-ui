import React from "react";
import "./SectionThree.css";
import client1 from "../../../assets/TechRavenslogo-removebg-preview.png";
import client2 from "../../../assets/ClientLogoNew-removebg-preview.png";
import client3 from "../../../assets/Gopta_Logo-removebg-preview.png";
const SectionThree = () => {
  return (
    <div className="section-three">
    
    {/* <div className="centered-text-home">
      Join <span className="company-count">4,000+</span> companies already growing
    </div> */}
      <div className="logos">
        <div className="logos-slide">
          <span><img src={client1} alt="Fourth slide" /></span>
          <span><img src={client2} alt="First slide" /></span>
          <span><img src={client3} alt="Second slide" /></span>
          
        </div>
      </div>
      
    </div>
  );
};

export default SectionThree;
