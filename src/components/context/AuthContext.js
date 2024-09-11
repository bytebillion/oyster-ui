import React, { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleSignInClick(event) {
    event.preventDefault();
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
    const GOOGLE_OAUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

    const url = `${GOOGLE_OAUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`;
    window.open(url, "_blank");
  }

  function handleSignOutClick(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    console.log("logged out");
    setIsAuthenticated(false)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        handleSignInClick,
        handleSignOutClick,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
