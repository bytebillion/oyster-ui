import axios from "../../libs/axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./user";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      //	split token and check expiry
      const tokenParts = token.split(".");
      const encodedPayload = tokenParts[1];
      const rawPayload = atob(encodedPayload);
      const user = JSON.parse(rawPayload);
      const exp = user.exp;
      const now = new Date();
      if (exp > now.getTime() / 1000) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  //	LOGIN METHODS

  async function handleLoginWithGoogle(event) {
    event.preventDefault();
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_FRONTEND_BASE_URL + "/verify";
    const GOOGLE_OAUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
    const scope = "https://www.googleapis.com/auth/userinfo.email";

    const url = `${GOOGLE_OAUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
    window.open(url, "_blank");
  }

  async function handleAuthRequest(email) {
    try {
      const res = await axios.post("/api/auth/init", { email });
      if (res.status === 200) {
        toast.success("OTP sent");
        return true;
      } else {
        toast.error("OTP sending failed");
        return false;
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      return false;
    }
  }

  async function handleOtpResend({ email }, callback) {
    try {
      const res = await axios.post("/api/auth/resend", { email });
      if (res.status === 200) {
        callback && callback(res.data);
        toast.success("OTP sent");
        return true;
      } else {
        toast.error("OTP sending failed");
        return false;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message ?? "Something went wrong");
      return false;
    }
  }

  async function handleAuthVerify({ email, otp }, callback) {
    try {
      const res = await axios.post("/api/auth/verify", { email, otp });
      if (res.status === 200) {
        callback(res.data);
        toast.success("Authenticated Successfully!");
        setIsAuthenticated(true);
        return true;
      } else {
        toast.error("Authentication failed");
        return false;
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      return false;
    }
  }

  // PERSONAL INFO [AUTH REQUIRED]
  async function handlePersonalDetails({ name, dob }) {
    try {
      if (!name && !dob) {
        toast.error("Please fill all the fields");
        return false;
      }

      let res = await axios.post("/api/user/personal", {
        name,
        dob,
      });
      if (res.status === 200) {
        toast.success("Personal info saved");
        return true;
      } else {
        toast.error("Personal info saving failed");
        return false;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message ?? "Something went wrong");
      console.log(error);
      return false;
    }
  }

  function logout(event) {
    event && event?.preventDefault();
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    console.log("logged out");
    navigate("/auth");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        handleLoginWithGoogle,
        handleAuthRequest,
        handleAuthVerify,
        handleOtpResend,
        handlePersonalDetails,
        logout,
      }}
    >
      {children}
      <ToastContainer position="top-right" newestOnTop />
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
