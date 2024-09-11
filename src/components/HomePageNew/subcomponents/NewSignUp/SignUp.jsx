import React, { useState, useEffect, useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import greenTick from "../../../../assets/Group 9204.svg";
import greyTick from "../../../../assets/Group 9205.svg";
import { Link } from "react-router-dom";
import axios from "../../../../libs/axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { provider, auth } from "../../../../firebase.js"
import { signInWithPopup } from "firebase/auth"
import { useAuth } from "../../../context/auth.js";
import { UserDispatchContext, useUpgradeModal } from "../../../context/user.js";
import { getDaysDiff } from "../../../../libs/utility.js";


const passwordValidations = [
  {
    label: "8 characters",
    check: (password) => password.length >= 8,
  },
  {
    label: "Contains one alphabet",
    check: (password) => /[a-zA-Z]/.test(password),
  },
  {
    label: "Contains uppercase",
    check: (password) => /[A-Z]/.test(password),
  },
  {
    label: "Contains number",
    check: (password) => /\d/.test(password),
  },
  {
    label: "Contains lowercase",
    check: (password) => /[a-z]/.test(password),
  },
];

const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [allValidationsPassed, setAllValidationsPassed] = useState(false);
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const { setIsAuthenticated } = useAuth();
  const { setshowupgrade } = useUpgradeModal();
  const setUser = useContext(UserDispatchContext);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  useEffect(() => {
    // Check if all password validations pass
    const allValid = passwordValidations.every((validation) =>
      validation.check(password)
    );
    setAllValidationsPassed(allValid);
  }, [password]);

  const getUser = (isLoggedIn) => {
    if(isLoggedIn) {
      axios.get("/api/user").then((res) => {
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

  const loginCalling = async (data) => {
    try {
      const loginUserURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/newauth/login`;
      const body = {
        email: data?.data?.email,
        password: password
      };

      try {
        const { data } = await axios.post(loginUserURL, body);
        if (data?.success) {
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
      toast.error(error); console.log("error", error);
    }
  }



  const handleNextClick = async () => {
    // Perform action when "Next" button is clicked, e.g., navigate to the next step
    if (allValidationsPassed) {
      try {
        const registeredUserURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/newauth/init`;
        const body = {
          email: email,
          fullname: fullName,
          password: password
        };
        const { data } = await axios.post(registeredUserURL, body);
        if (data?.success) {

          loginCalling(data)


        } else if (!data?.success) {
          toast.error(data?.message);
        }



      } catch (error) { 
        toast.error(error); 
        console.log("error", error); 
      }
      // Your logic here


    } else {
      console.log("Next button clicked, some validations failed.");
    }
  };


  const loginWithGoogle = async () => {
    try {
      const googleLoginData = await signInWithPopup(auth, provider)
      if (googleLoginData.user) {
        const loginUserURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/newauth/login/google`;

        const body = {
          email: googleLoginData?.user?.email,
          uid: googleLoginData?.user?.uid,
          accessToken: googleLoginData?.user?.accessToken,
          userData: googleLoginData?.user?.reloadUserInfo,
          fullname: googleLoginData?.user?.displayName
        };

        try {
          const { data } = await axios.post(loginUserURL, body);
          if (data?.success) {
            getUser(true)
            if(data.signInData.token) {
              setIsAuthenticated(true)
            }
            localStorage.setItem("token", data.signInData?.token);
            localStorage.setItem("userEmail", googleLoginData?.user?.email);
            localStorage.setItem("emailVerified", googleLoginData?.user?.emailVerified);
            // localStorage.setItem("expiresIn", data.signInData?.expiresIn);
            localStorage.setItem("isAnonymous", googleLoginData?.user?.isAnonymous);
            localStorage.setItem("operationType", data.signInData?.operationType);
            // localStorage.setItem("refreshToken", data.signInData?.refreshToken);
            // localStorage.setItem("registered", data.signInData?.registered);
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Error during login request:", error);
        }

      }
    } catch (err) {
      console.log("Error", err)
    }
  }


  return (
    <>
      <Header />
      <div className="sign-up-container">
        <form className="sign-up-form">
          <div className="sign-up-header" onClick={loginWithGoogle}>Start your free Oyster trial</div>
          {/* <div className="sign-up-google" onClick={loginWithGoogle}  >Sign up with Google</div> */}
          <button type="button" class="login-with-google-btn" onClick={loginWithGoogle} >
            Sign up with Google
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
              Full Name
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
              placeholder="Enter your Full Name here"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

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
              htmlFor="workEmail"
            >
              Work Email
            </InputLabel>
            <TextField
              sx={{
                width: "100%",
                height: "100%",
                background: "rgba(176, 186, 195, 0.40)",
                borderRadius: "12px",
              }}
              id="workEmail"
              type="email"
              fullWidth
              margin="normal"
              required
              placeholder="Enter your Email here"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

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
                color: "rgba(0, 0, 0, 0.50)",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
              id="password"
              type="password"
              fullWidth
              margin="normal"
              required
              placeholder="Create your Password here"
              onChange={handlePasswordChange}

            />
            <div className="password-validations">
              {passwordValidations.map((validation, index) => (
                <div key={index} className="validation-item">
                  {validation.check(password) ? (
                    <img src={greenTick} alt="" />
                  ) : (
                    <img src={greyTick} alt="" />
                  )}
                  <span>{validation.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
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
              onClick={handleNextClick}
              disabled={!allValidationsPassed}
            >
              sign up
            </Button>
          </div>
          <div className="login-section">
            <span className="login-text">Already a Member? </span>
            <Link to="/auth" className="login-link">LOG IN</Link>          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
