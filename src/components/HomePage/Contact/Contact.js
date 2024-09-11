import React from "react";
import "./Contact.css";
import mask1 from "../../../assets/mask1.png";
import mask2 from "../../../assets/mask3.png";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact_screen">
      <img className="mask_1" src={mask1} alt="mask_1" />
      <img className="mask_2" src={mask2} alt="mask_2" />
      <div className="contact_content">
        <h3>We’d Love to Hear From You!</h3>
        <p>
          You are one step closer to sorting your writing worries. Want to know
          how Oyster can help with your specific writing needs? Fill in the form
          and we will get in touch.
        </p>
        <button onClick={() => navigate("/auth")}>Continue</button>
      </div>
    </div>
  );
};

export default Contact;
