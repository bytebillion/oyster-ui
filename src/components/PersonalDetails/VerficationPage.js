import React from "react";
import axios from "../../libs/axios";
import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import CountDownTimer from "../Authentication/CountDownTimer";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};
const VerficationPage = ({ modalOpen, setModalOpen, number, setOpen }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isResendOtpEnabled, setIsResendOtpEnabled] = useState(false);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("/api/user/verify", {
        otp: otp.join(""),
      });
      // console.log(res);
      if (res.status === 200) {
        toast.success("OTP Verified");
        setModalOpen(false);
        setOpen(false);
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editNumber = () => {
    try {
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={customStyles}
    >
      <div className="personall_details_form verification_form">
        <h1>Verification</h1>
        <p className="verfication_sub_text">
          Please enter OTP sent onto your Phone Number.
        </p>
        <div className="otp_input_form">
          <div className="otp_inputs_container">
            <div className="d-flex align-items-center justify-content-between">
              <p className="phone_number">
                +91 {number?.slice(0, 5)} {number?.slice(5, 10)}
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
                  <CountDownTimer setIsExpired={setIsResendOtpEnabled} />
                </span>
                <span
                  onClick={
                    isResendOtpEnabled
                      ? () => {
                          //   resendOtp();
                          setIsResendOtpEnabled(false);
                        }
                      : undefined
                  }
                  className={
                    isResendOtpEnabled
                      ? "login-otp-resend cursor-pointer"
                      : "login-otp-resend-disabled"
                  }
                >
                  Resend OTP
                </span>
              </div>
              <p className="change_num" onClick={editNumber}>
                Edit Number
              </p>
            </div>
          </div>
          <div className="otp_box d-flex justify-content-center">
            {otp.map((data, index) => {
              return (
                <input
                  className="login_otp_field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>

          <button onClick={verifyOtp} className="login_form_inut_cta">
            Continue
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default VerficationPage;
