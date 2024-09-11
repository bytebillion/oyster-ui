import React from "react";
import loginimage from "../../assets/loginbottom.png";
import { Spinner } from "@chakra-ui/spinner";
import "./AuthStage.css";
const AuthStage = ({
  email,
  setEmail,
  handleKeyPress,
  handleClick,
  loading,
  footerTwo,
}) => {
  return (
    <div className="column-container ">
      <div className="col-md-6 mb-4 col-contain m-auto">
        <p className="mob-heading">
          To Err is Human. <br /> To Use Oyster,
          <span className="divine"> Divine.</span>
        </p>
        <div className="login_form">
          <h1>Welcome to Oyster</h1>
          <p className="login_sub_heading">
            Sign in with your new intelligent companion.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="number_input"
              placeholder="Enter your Email ID"
              onChange={(e) => {
                if (e.target.value.length > 50) return;
                setEmail(e.target.value);
              }}
              value={email}
              onKeyDown={handleKeyPress}
            />
            <div id="recaptcha-container" />
            <div
              className={email?.length > 0 ? "active_loginbtn" : "login_btn"}
            >
              <button
                disabled={loading}
                onClick={async () => handleClick()}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
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
                <span>{loading ? "Please wait" : "Login"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {!footerTwo ? (
        <div className="col-md-6">
          <div className="login_border">
            <div className="banner_top">
              <p className="desk-head">
                To Err is Human. <br /> To Use Oyster,
                <span className="divine"> Divine.</span>
              </p>
            </div>
            <div className="login_banner">
              <img src={loginimage} alt="" className="login_banner_img" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AuthStage;
