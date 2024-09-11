import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/Footer-Logo.svg";

const Footer = () => {
  const navigate = useNavigate();
  // const [showResourcesSubMenu, setShowResourcesSubMenu] = useState(false);

  // const handleResourcesHover = () => {
  //   setShowResourcesSubMenu(true);
  // };

  // const handleResourcesLeave = () => {
  //   setShowResourcesSubMenu(false);
  // };
  // window.scrollTo(0, 0);
  return (
    <div className="footer-container">
      <div className="footer-part-1">
        <div className="footer-col-1">
          <img className="footer-logo" src={logo} alt="Logo" />
          <div className="footer-description">
            At Oyster, we are dedicated to elevating your writing and
            communication to new heights by providing a sophisticated writing
            assistance platform powered by AI. We're passionate about helping
            individuals, professionals, and students harness the power of words,
            express themselves with confidence, and achieve their goals. With
            cutting-edge technology and a commitment to excellence, we have
            become a trusted partner for those seeking to write more
            effectively, work efficiently, and communicate with impact. Join us
            in this journey towards clearer, more compelling, and more confident
            communication.
          </div>

          <div className="cta-button" onClick={() => navigate("/new-sign-up")}>
            Start for FREE
          </div>
        </div>
        <div className="footer-col-2">
          <div className="footer-menu-items">
           
            <div className="f-menu-item" onClick={() => navigate("/pricing")}>
              Pricing
            </div>
            <div className="f-menu-item" onClick={() => navigate("/about")}>
              About Us
            </div>
            <div className="f-menu-item" onClick={() => navigate("/blogs")}>
              Blog
            </div>
            <div className="main-footer-menu"><span className="f-menu-item" onClick={() => navigate("/")}>   Resources</span>
            <span className="f-sub-menu-item" onClick={() => navigate("/comparison")}>   All Comparisions</span>
          
            </div>
            
          </div>
        </div>
      </div>
      <div className="footer-part-2">
        <div className="contact-details">
          Logix Cyber Park C-28 & 29, C Block, Phase 2, Industrial Area, <br />
          Sector 62, Noida, Uttar Pradesh 201301
          <br />
          contact@appoyster.com
          <br />
          +91-7905505630
          <br />
        </div>
        <div className="privacy-links">
          <span className="cursor" onClick={() => navigate("/privacy-policy")}>
            {" "}
            Privacy Policy{" "}
          </span>
          |
          <span
            className="cursor"
            onClick={() => navigate("/Terms-&-Conditions")}
          >
            {" "}
            Terms & Condition{" "}
          </span>
          |
          <span
            className="cursor"
            onClick={() => navigate("/Cancellation-&-Refund-Policy")}
          >
            {" "}
            Cancellation & Refund Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
