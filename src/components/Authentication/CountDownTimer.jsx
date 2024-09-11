import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

export default function CountDownTimer({
  expiry = 30000,
  // startTimer = true,
  resendOtp,
}) {
  const [isResendOtpEnabled, setIsResendOtpEnabled] = useState(false);
  const { seconds, restart } = useTimer({
    expiryTimestamp: Date.now() + expiry,
    onExpire: () => setIsResendOtpEnabled(true),
  });

  return (
    <>
      {seconds}s
      <span
        onClick={
          isResendOtpEnabled
            ? () => {
                resendOtp();
                restart(Date.now() + expiry);
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
    </>
  );
}
