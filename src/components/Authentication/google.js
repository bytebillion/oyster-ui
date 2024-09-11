import React, { useEffect } from "react";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/spinner";
import axios from "../../libs/axios";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/auth";

const GoogleVerify = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fragment = window.location.hash.substr(1);
      const params = new URLSearchParams(fragment);
      const accessToken = params.get("access_token");

      if (!accessToken) {
        navigate("/");
        return;
      }

      axios
        .post("/api/auth/login/google", {
          access_token: accessToken,
        })
        .then((res) => {
          if (res.status === 200) {
            const token = res.data?.token;
            setIsAuthenticated(true);
            localStorage.setItem("token", token);
            navigate("/dashboard");
          } else if (
            res.status === 401 &&
            res.data?.message === "User not found"
          ) {
            toast.error("User not found");
            navigate("/auth");
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/auth");
        });
    } catch (error) {
      console.log(error);
    }
  }, [navigate, setIsAuthenticated]);

  
  return (
    <div
      style={{
        padding: "4px",
        height: "100vh",
        width: "100%",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Spinner size="6xl" w="30px" h="30px" m="auto" mb="10px" />
      <h3 textAlign="center">Loading... Do not refresh the page.</h3>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default GoogleVerify;
