import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from "react";
import Header from "../Header";
import Footer from "../Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SignUp.css";
import axios from "../../../../libs/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { provider, auth } from "../../../../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { UserDispatchContext, useUpgradeModal } from "../../../context/user.js";
import { useAuth } from "../../../context/auth.js";
import { getDaysDiff } from "../../../../libs/utility.js";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isFirebaseUser, setIsFirebaseUser] = useState(null);
  const [otp, setOtp] = useState(null);
  const [sentOtp, setSendOtp] = useState(null);
  const [otpVerify, setOtpVerify] = useState(false);
  const [createPassword, setCreatePassword] = useState("");
  const { setIsAuthenticated } = useAuth();
  const { setshowupgrade } = useUpgradeModal();
  const setUser = useContext(UserDispatchContext);

  const emailRegex = useMemo(
    () =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    []
  );

  const getUser = (isLoggedIn) => {
    if(isLoggedIn) {
      axios.get("/api/user",{WithCredentials : true}).then((res) => {
        if (res.status === 200) {
          // setUserDetails(res.data.data)
          if (res.data.data) {
            setUser(res.data.data)
            const daysDiff = getDaysDiff(
              new Date(res.data.data?.createdAt),
              new Date()
            );
            const daysLeft = 15 - daysDiff;
      
            daysLeft > 0 && res.data.data?.subscription == null
              ? console.log(`${daysLeft} days free trial left`)
              : res.data.data?.subscription == null
              ? setshowupgrade(true)
              : new Date(res.data.data?.subscription.endDate) >= new Date()
              ? console.log("Subscribed")
              : console.log("Subscription Expired");
          }
        };
      });
    }
  }

  const loginCalling = async () => {
    try {
      const loginUserURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/newauth/login`;

      const body = {
        email: email,
        password: password,
      };

      try {
        const { data } = await axios.post(loginUserURL, body);
        if (data?.success) {
          // setUser(data.signInData)
          getUser(true)
          if(data.signInData.token) {
            setIsAuthenticated(true)
          }

          localStorage.setItem("token", data.signInData?.token);
          localStorage.setItem("userEmail", data.signInData?.email);
          localStorage.setItem("emailVerified", data.signInData?.emailVerified);
          localStorage.setItem("expiresIn", data.signInData?.expiresIn);
          localStorage.setItem("isAnonymous", data.signInData?.isAnonymous);
          localStorage.setItem("operationType", data.signInData?.operationType);
          localStorage.setItem("refreshToken", data.signInData?.refreshToken);
          localStorage.setItem("registered", data.signInData?.registered);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error during login request:", error);
      }
    } catch (error) {
      toast.error(error);
      console.log("error", error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const googleLoginData = await signInWithPopup(auth, provider);
      if (googleLoginData.user) {
        const loginUserURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/newauth/login/google`;

        const body = {
          email: googleLoginData?.user?.email,
          uid: googleLoginData?.user?.uid,
          accessToken: googleLoginData?.user?.accessToken,
          userData: googleLoginData?.user?.reloadUserInfo,
          fullname: googleLoginData?.user?.displayName,
        };

        try {
          const { data } = await axios.post(loginUserURL, body, {WithCredentials : true});
          if (data?.success) {
            getUser(true)
            if(data.signInData.token) {
              setIsAuthenticated(true)
            }
            localStorage.setItem("token", data.signInData?.token);
            localStorage.setItem("userEmail", googleLoginData?.user?.email);
            localStorage.setItem(
              "emailVerified",
              googleLoginData?.user?.emailVerified
            );
            localStorage.setItem(
              "operationType",
              data.signInData?.operationType
            );
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Error during login request:", error);
        }
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const isFirebaseUserHandler = useCallback(async () => {
    if (isValidEmail && email) {
      const isUserURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/newauth/isfirebaseuser`;

      const body = {
        email: email,
      };

      const { data } = await axios.post(isUserURL, body);
      setIsFirebaseUser(data?.success);

      if (!isFirebaseUser) {
        try {
          const res = await axios.post("/api/auth/init", {WithCredentials : true} ,{ email });
          if (res.status === 200) {
            setSendOtp(true);
            toast.success("OTP sent");
            return true;
          } else {
            toast.error("OTP sending failed");
            setSendOtp(false);
            return false;
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
          return false;
        }
      }
    } else {
      console.log("Invalid email format");
    }
  }, [email, isValidEmail, isFirebaseUser]);

  useEffect(() => {
    if (isValidEmail) {
      isFirebaseUserHandler();
    }
  }, [isValidEmail, email, isFirebaseUserHandler]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (email && emailRegex.test(email)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [email, emailRegex]);

  const otpVerifyHandler = async () => {
    try {
      if (email && otp && sentOtp) {
        const res = await axios.post("/api/auth/verify", { email, otp });
        if (res.status === 200) {
          setOtpVerify(true);
          setOtp(null);
          toast.success("Authenticated Successfully!");
          return true;
        } else {
          toast.error("Authentication failed");
          return false;
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      return false;
    }
  };

  const createPawdHandler = async () => {
    try {
      const loginUserURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/newauth/oldusersignup`;

      const body = {
        email: email,
        password: createPassword,
      };

      try {
        const { data } = await axios.post(loginUserURL, body);
        if (data?.success) {
          localStorage.setItem("token", data.signInData?.token);
          localStorage.setItem("userEmail", data.signInData?.email);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error during login request:", error);
      }
    } catch (error) {
      toast.error(error);
      console.log("error", error);
    }
  };

  return (
    <>
      <Header />
      <div className="sign-up-container">
        <form className="sign-up-form" id="login-form">
          <button
            type="button"
            className="login-with-google-btn"
            onClick={() => loginWithGoogle()}
          >
            Sign in with Google
          </button>
          <div className="or">-OR-</div>
          <div className="form-label">
            <InputLabel
              sx={{
                color: "#7C838A",
                marginBottom: "8px",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
              }}
              htmlFor="fullName"
            >
              Email
            </InputLabel>
            <TextField
              sx={{
                width: "100%",
                height: "100%",
                background: "rgba(176, 186, 195, 0.40)",
                borderRadius: "12px",
              }}
              id="fullName"
              fullWidth
              margin="normal"
              required
              placeholder="Enter your Email here"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {isFirebaseUser ? (
            <>
              <div className="form-label">
                <InputLabel
                  sx={{
                    color: "#7C838A",
                    marginBottom: "8px",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                  htmlFor="password"
                >
                  Password
                </InputLabel>
                <TextField
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(176, 186, 195, 0.40)",
                    borderRadius: "12px",
                  }}
                  id="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  required
                  placeholder="Create your Password here"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className="remember-forgot-container"
                disabled={!isValidEmail}
              >
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember Me"
                />
                <div className="forgot-password">Forgot Password?</div>
              </div>
            </>
          ) : isFirebaseUser === false ? (
            <>
              {otpVerify ? (
                <div className="form-label">
                  <InputLabel
                    sx={{
                      color: "#7C838A",
                      marginBottom: "8px",
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "500",
                    }}
                    htmlFor="password"
                  >
                    Create Password
                  </InputLabel>
                  <p
                    style={{
                      color: "#7C838A",
                      marginBottom: "8px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                    }}
                  >
                    (We have new measures in place for your security. Please
                    create a password for your login.)
                  </p>
                  <TextField
                    sx={{
                      width: "100%",
                      height: "100%",
                      background: "rgba(176, 186, 195, 0.40)",
                      borderRadius: "12px",
                    }}
                    id="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                    placeholder="Create your Password here"
                    onChange={(e) => setCreatePassword(e.target.value)}
                  />
                </div>
              ) : (
                <>
                  <div className="form-label">
                    <InputLabel
                      sx={{
                        color: "#7C838A",
                        marginBottom: "8px",
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                      htmlFor="otp"
                    >
                      Enter OTP
                    </InputLabel>
                    <TextField
                      sx={{
                        width: "100%",
                        height: "100%",
                        background: "rgba(176, 186, 195, 0.40)",
                        borderRadius: "12px",
                      }}
                      id="otp"
                      type="text"
                      fullWidth
                      margin="normal"
                      required
                      placeholder="Create your otp here"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div
                    className="remember-forgot-container"
                    disabled={!isValidEmail}
                  >
                    <div className="forgot-password">resend otp</div>
                  </div>
                </>
              )}
            </>
          ) : null}
          <Button
            sx={{
              width: "100%",
              background: "#6B6B6B",
              borderRadius: "8px",
              color: "white",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
            variant="contained"
            color="primary"
            className="Next-button"
            onClick={() => {
              otpVerify
                ? createPawdHandler()
                : otp
                  ? otpVerifyHandler()
                  : password && loginCalling();
            }}
            disabled={!isValidEmail}
          >
            {isFirebaseUser ? "Login" : "Next"}
          </Button>

          <div className="login-section">
            <span className="login-text">Create an Account </span>
            <Link to="/new-sign-up" className="login-link"> SIGN UP</Link>          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
