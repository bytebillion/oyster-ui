import React, { useEffect, useState } from "react";
import "./AuthForm.css";
import logo from "../../assets/logo.png";
import { useAuth } from "../context/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthStage from "./AuthStage";
import OtpStage from "./OtpStage";
import PersonalDetailsStage from "./PersonalDetailsStage";
import { useMediaQuery } from "@chakra-ui/react";

const AuthForm = ({ footer }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [status, setStatus] = useState("signup");
  const [loading, setLoading] = useState(false);
  const [otpfound, setOtpFound] = useState(false);
  const {
    handleAuthRequest,
    handleAuthVerify,
    handlePersonalDetails,
    handleOtpResend,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation()

  const params = new URLSearchParams(location.search);
  const couponCode = params.get('couponcode');
  const couponCodeLtd = params.get('couponcodeLtd');

  // console.log("couponCode in auth", couponCode)
  // console.log("location", location)

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerifyKeyPress = async (e, event) => {
    if (e.key === "Enter") {
      // TODO verify otp request.
      let otp1 = "";
      otp.map((o) => (otp1 += o));
      if (otp1 === "" || otp1 === null) return;
      // TODO	call sign up with OTP
      let res = null;


      if (email !== "") {
        res = await handleAuthVerify({ otp: otp1, email }, (data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userEmail", email);
          if (data.newUser) {
            setStatus("loggedIn");
          } else {
            if (couponCode) {
              navigate(`/pricing?couponcode=${couponCode}`);
            } else if (couponCodeLtd) {
              navigate(`/pricing-ltd?couponcode=${couponCodeLtd}`);
            } else {
              navigate("/dashboard");
            }
          }
        });
      } else {
        console.log("Something went wrong...email is empty");
      }
      // TODO verify otp request above.
      if (res) {
        setStatus("loggedIn");
      }
    } else if (
      event.key === "Backspace" &&
      e.value.length === 0 &&
      e.previousSibling
    ) {
      e.previousSibling.focus();
    }
  };

  useEffect(() => {
    if (
      otp[0] !== "" &&
      otp[1] !== "" &&
      otp[2] !== "" &&
      otp[3] !== "" &&
      otp[4] !== "" &&
      otp[5] !== ""
    ) {
      setOtpFound(true);
    } else {
      setOtpFound(false);
    }
  }, [otp]);

  const verifyOtp = async () => {
    setLoading(true);
    let otp1 = "";
    otp.map((o) => (otp1 += o));
    if (otp1 === "" || otp1 === null) return;
    // TODO	call sign up with OTP
    let res = null;
    if (email !== "") {
      // eslint-disable-next-line
      res = await handleAuthVerify({ otp: otp1, email }, (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", email);
        if (data.newUser) {
          setLoading(false);
          setStatus("loggedIn");
        } else {
          setLoading(false);
          if (couponCode) {
            navigate(`/pricing?couponcode=${couponCode}`);
          } else if (couponCodeLtd) {
            navigate(`/pricing-ltd?couponcode=${couponCodeLtd}`);
          } else {
            navigate("/dashboard");
          }
        }
      });
    } else {
      console.log("Something went wrong...email is empty");
    }
    // TODO verify otp request above.
    // console.log("otp verification: ", res ? "success" : "failed");
  };

  const handleResendOtp = async () => {
    let res = null;
    if (email !== "") {
      // eslint-disable-next-line
      res = await handleOtpResend({ email });
    } else {
      console.log("Something went wrong...email is empty");
    }
  };

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
    <section className="login_screen">
      <div className={`container m-0 ${isMobile ? "p-3" : ""}`}>
        <div className="login_logo_wrapper">
          <Link to="/">
            <div className="logo_icon">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="row d-flex align-items-center">
          {status === "signup" && (
            <AuthStage
              email={email}
              setEmail={setEmail}
              handleKeyPress={handleSignupKeyPress}
              handleClick={handleSignupClick}
              loading={loading}
              footerTwo={footer}
            />
          )}
          {status === "otp" && (
            <OtpStage
              handleChange={handleChange}
              setStatus={setStatus}
              email={email}
              otp={otp}
              setOtp={setOtp}
              handleVerifyKeyPress={handleVerifyKeyPress}
              otpfound={otpfound}
              verifyOtp={verifyOtp}
              resendOtp={handleResendOtp}
              loading={loading}
            />
          )}
          {status === "loggedIn" && (
            <PersonalDetailsStage
              email={email}
              setEmail={setEmail}
              submit={handlePersonalDetails}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
