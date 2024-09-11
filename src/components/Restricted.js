import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/auth";

const Restricted = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    } else {
      console.log("error while logging");
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};

export default Restricted;
