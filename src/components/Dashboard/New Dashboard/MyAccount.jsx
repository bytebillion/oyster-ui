import React, { useState, useEffect, useContext } from "react";
import LeftPaneLogo from "../../../assets/leftpane-logo.svg";
import myOysterActive from "../../../assets/oyster-home.svg";
import myAccountActive from "../../../assets/Group 9202.svg";
import support from "../../../assets/support-dash.svg";
import myOyster from "../../../assets/myOyster.svg";
import myAccount from "../../../assets/MyAccount.svg";
import LeftPaneMobileLogo from "../../../assets/Leftpane/final 1.png"
import trash from "../../../assets/Trash.svg";
import "./MyAccount.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext, UserDispatchContext } from "../../context/user";
import { useAuth } from "../../context/auth";


const MyAccount = () => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const user = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  const setUser = useContext(UserDispatchContext);
  const { setIsAuthenticated } = useAuth();


  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setUsername(user.name);
    }
  }, [user]);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  

  return (
    <div className="my-account-container">
      <div className="leftpane-dash">
      <img className="leftpane-mobile-logo" src={LeftPaneMobileLogo} alt="" />

        <img className="leftpane-logo" src={LeftPaneLogo} alt="" />
        <div className="leftpane-menu-cont">
          <Link to="/new-dashboard">
            <div className="leftpane-menu">
              <img
                src={
                  currentLocation === "/new-dashboard"
                    ? myOysterActive
                    : myOyster
                }
                alt=""
              />
              <h2
                className={`leftpane-content ${
                  currentLocation === "/new-dashboard" ? "active" : ""
                }`}
              >
                My Oyster
              </h2>
            </div>
          </Link>

          <Link to="/my-account">
            <div className="leftpane-menu">
              <img
                src={
                  currentLocation === "/my-account"
                    ? myAccountActive
                    : myAccount
                }
                alt=""
              />
              <h2
                className={`leftpane-content ${
                  currentLocation === "/my-account" ? "active" : ""
                }`}
              >
                My Account
              </h2>
            </div>
          </Link>

          <Link to="">
            <div className="leftpane-menu">
              <img className="menu-icons" src={trash} alt="" />
              <h2
                className={`leftpane-content ${
                  currentLocation === "" ? "active" : ""
                }`}
              >
                Trash
              </h2>
            </div>
          </Link>
        </div>
        <div className="support-menu-cont">
          <Link to="/support-center">
            <div className="support-menu-box">
              <img className="dash-sup" src={support} alt="" />{" "}
              <h2 className="leftpane-content-support">Support</h2>
            </div>
          </Link>
          <hr className="menu-divider"></hr>

          <div className="support-menu">
            <h2 className="leftpane-content-email">
              {email ?? "anon@appoyster.com"}
            </h2>
          </div>
          <div className="support-menu">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                console.log("logged out");
                setUser(null);
                navigate("/auth");
                setIsAuthenticated(false)
              }}
              className="leftpane-content-support pt-4"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="rightpane-myaccount">
        <div className="my-account-head">Account Settings</div>
        <div className="account-profile">
          <h2 className="acc-title">Profile</h2>
          <h3 className="acc-head">Full Name</h3>
          <div className="acc-field">
            <h3 className="acc-value">
              {" "}
              {user?.name ?? username ?? "Anonymous"}
            </h3>
            <h4 className="acc-update">update</h4>
          </div>
        </div>
        <div className="account-profile">
          <h2 className="acc-title">Email</h2>
          <h3 className="acc-head"> {email ?? "anon@appoyster.com"}</h3>
          <h2 className="acc-title">Password</h2>

          <div className="acc-fields">
            <h3 className="acc-head-pass">XXXXXX</h3>
            <h4 className="acc-update">create</h4>
          </div>
        </div>
        <div className="account-profile">
          <h2 className="acc-title">Linked Accounts</h2>

          <h3 className="acc-value-link">Google</h3>
          <h2 className="acc-title">Email Preferences</h2>
          <div className="acc-field">
            <h3 className="acc-values">
              choose the types of emails you want to receive from Oyster
            </h3>
            <h4 className="acc-update">update</h4>
          </div>
        </div>

        <div className="delete-account">
        <div className="delete-title">Delete account</div>
        <div className="delete-content">This account will no longer be available, and all your saved data will be permanently deleted.</div>

        </div>

      </div>
    </div>
  );
};

export default MyAccount;
