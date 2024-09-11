import { useState, useEffect } from "react"
import OtpStage from "../Authentication/OtpStage";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import PersonalDetailsStage from "../Authentication/PersonalDetailsStage";

const ModalLogin = ({ footerLogin, email, setEmail }) => {
  const [status, setStatus] = useState("signup");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [otpfound, setOtpFound] = useState(false);
  const navigate = useNavigate();
  const {
    handleAuthVerify,
    handlePersonalDetails,
    handleOtpResend,
  } = useAuth();

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
            navigate("/dashboard");
          }
        });
      } else {
        console.log("Something went wrong...email is empty");
      }
      // TODO verify otp request above.
      // console.log("otp verification: ", res ? "success" : "failed");
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
          navigate("/dashboard");
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


  return (
    <div>
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
          footerLogin={footerLogin}
        />

      {status === "loggedIn" && (
        <PersonalDetailsStage
          email={email}
          setEmail={setEmail}
          submit={handlePersonalDetails}
        />
      )}
    </div>

  )
}

export default ModalLogin