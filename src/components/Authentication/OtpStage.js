import React from "react";
import loginimage from "../../assets/loginbottom.png";
import CountDownTimer from "./CountDownTimer";
import { Spinner } from "@chakra-ui/spinner";
import { useMediaQuery } from "@chakra-ui/react";

const OtpStage = ({
  email,
  setStatus,
  setOtp,
  otp,
  handleChange,
  handleVerifyKeyPress,
  otpfound,
  verifyOtp,
  resendOtp,
  loading,
  footerLogin
}) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");


  return (
    <div className={`${!isMobile ? "justify-start w-70%" : "normal w-full"}`}>
   
      <div className="col-md-8 footerM" >
        <div className="login_form">
          <h1>Knock knock! Your Intelligent Writing Companion is here.</h1>
          <p className="otp_login_sub_heading">
            Enter the OTP below to let it in 
          </p>
          <div>
            <div className="w-75 d-flex justify-content-between mb-4">
              <div>
                <p className="login-otp-email">{email}</p>
                <p
                className="change_num"
                onClick={() => {
                  setStatus("signup");
                  setOtp(new Array(6).fill(""));
                }}
              >
                Edit Email
              </p>
                <div className="d-flex">
                  <span className="login-otp-timer">
                    <svg
                      className="me-2"
                      width={20}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#000"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <CountDownTimer resendOtp={resendOtp} />
                  </span>
                </div>
              </div>
            
            </div>
            <div className={`${isMobile ? "100%" : "w-75"} otp_box d-flex justify-content-center ms-3`}>
              {otp.map((data, index) => {
                return (
                  <input
                    autoFocus={index === 0 ? true : false}
                    className="verify_otp"
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleVerifyKeyPress(e.target, e)}
                  />
                );
              })}
            </div>
            <div className={otpfound ? "active_verify_btn" : "verify"}>
              <button
                onClick={verifyOtp}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  width: isMobile ? "100%" : ""
                }}
              >
                {loading && (
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Spinner w="20px" h="20px" />
                  </span>
                )}
                <span>{loading ? "Please wait" : "Verify"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {!footerLogin ?
        <div className="col-md-6">
          <div className="login_border">
            <div className="banner_top">
              <p>
                To Err is Human. <br /> To Use Oyster,
                <span className="divine"> Divine.</span>
              </p>
            </div>
            <div className="login_banner">
              <img src={loginimage} alt="" className="login_banner_img" />
            </div>
          </div>
        </div>
        :null
      }

    </div>
  );
};

export default OtpStage;


