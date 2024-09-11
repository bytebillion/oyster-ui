import React, { useState } from "react";
import "./Footer.css";
// import logo from "../../../assets/logo.png";
// import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDisclosure } from '@chakra-ui/react'
import { useAuth } from "../../context/auth";

const Footer = ({ onOpen, setIsSignUpModalOpen, email, setEmail }) => {
  // const navigate = useNavigate();
  const { handleAuthRequest } = useAuth();
  // eslint-disable-next-line
  const [status, setStatus] = useState("signup");
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);


  const handleSignupKeyPress = async (e) => {
    if (e.key === "Enter") {
      let res = null;
      // TODO call signup with number
      if (email !== "") {
        res = await handleAuthRequest(email);
      } else {
        console.log("Something went wrong...email is empty");
      }
      if (res) {
        setStatus("otp");
        setLoading(false);
      }
    }
  };

  const handleSignupClick = async () => {
    setLoading(true);
    let res = null;
    if (email !== "") {
      res = await handleAuthRequest(email);
    } else {
      setLoading(false);
      return;
    }

    if (res) {
      setStatus("otp");
      setLoading(false);

    } else {
      console.log("otp request failed");
      setLoading(false);
    }
  };


  return (
    <div className="container-fluid footer_container">
      <div className="row d-flex">

        <div className="col-lg-6 col-md-12 col-sm-12 footer_left" >
          <div>
            <h3>Still switching apps to write compelling content ?</h3>
            <h2>
              Sign up <span>FREE</span> for Oyster, a powerful, end-to-end
              AI-based platform that checks your writing for grammar errors,
              plagiarism.
            </h2>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 footer_right " style={{ margin: "auto", justifyContent: "center" }}>
          <div className="signUpDiv" >
            <input
              type="email"
              name="email"
              id="email"
              className="footer_input"
              placeholder="Enter your Email ID"
              onChange={(e) => {
                if (e.target.value.length > 50) return;
                setEmail(e.target.value);
              }}
              value={email}
              onKeyDown={handleSignupKeyPress}
            />

            <p className="copyrightT" >
            Copyright © 2023 appoyster.com | All Rights Reserved
          </p>

          </div>
          <div className="signUpDiv" >
          
            <button onClick={async () => { handleSignupClick(); setIsSignUpModalOpen(true) }}>
              Sign up
            </button>
            <p className="copyrightPB" >
            Copyright © 2023 appoyster.com | All Rights Reserved
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;

