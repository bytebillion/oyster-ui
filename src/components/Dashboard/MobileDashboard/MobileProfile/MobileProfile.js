import React, { useState, useContext } from "react";
import arrow from "../../../../assets/Back arrow.svg";
import profile from "../../../../assets/profile-1.svg";
import arrowRight from "../../../../assets/Arrow - Right 2.svg";
import listArrow from "../../../../assets/listArrow.svg";
import editProfile from "../../../../assets/EditProfile.svg";
import notification from "../../../../assets/notification.svg";
import Language from "../../../../assets/language.svg";
import support from "../../../../assets/support.svg";

import EditIcon from "../../../../assets/ProfilePicEdit.svg";
import "./MobileProfile.css";
import EditProfilePic from "./subComponents/EditProfile";
import SupportPro from "./subComponents/Support";

import { UserContext, UserDispatchContext } from "../../../context/user";
import { useNavigate } from "react-router";
import LogoutConfirmation from "./subComponents/LogoutConfirmation";
import Subscribe from "./subComponents/Subscribe";

const MobileProfile = ({ setMobProfile, setUserData, userData }) => {
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);
  const navigate = useNavigate();

  const [editProfilePic, setEditProfile] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const handleLogoutConfirmation = () => {
    localStorage.removeItem('token');
    console.log('logged out');
    setUser(null);
    setUserData(null);
    navigate("/auth");
  };

  return (
    <>
      {editProfilePic ? (
        <EditProfilePic setEditProfile={setEditProfile} />
      ) : showSupport ? (
        <SupportPro setShowSupport={setShowSupport} />
      ) : subscribe ? (
        <Subscribe setSubscribe={setSubscribe} />
      ) : (
        <div className="mobile-profile-container">
          <div className="box-1">
            <div className="back-icon" onClick={() => setMobProfile(false)}>
              <img src={arrow} alt="Back" />
            </div>
            <h3>MY Account</h3>
          </div>
          <div className="box-2">
            <div className="user_profile_Pic">{user?.name?.substring(0, 1)}</div>
            <img className="EditPic" src={EditIcon} alt="icon" />
            <p className="profile-name">{user?.name ?? "Anonymous"}</p>
            <div> </div>
            <p className="profile-mail">{user?.email ?? "Anonymous"}</p>
          </div>
          <div className="box-3" onClick={() => { setSubscribe(true); navigate("/pricing"); }}>
            <div className="premium d-flex">
              <img className="premium-icon" src={profile} alt="icon" />
              <span className="premium-span">
                <h2>Join Premium!</h2>
                <p>Get all features</p>
              </span>
            </div>
            <div>
              <img src={arrowRight} alt="icon" />
            </div>
          </div>
          <div className="box-4">
            <div onClick={() => setEditProfile(true)} className="subBox ">
              <div className="class-1">
                <img src={editProfile} alt="icon" />
                <div>
                  {" "}
                  <p>Edit Profile</p>
                </div>
              </div>
              <div className="class-2">
                <img src={listArrow} alt="icon" />
              </div>
            </div>
            <div className="subBox">
              <div className="class-1">
                <img src={notification} alt="icon" />
                <p>Notification</p>
              </div>
              <div className="class-2">
                <img src={listArrow} alt="icon" />
              </div>
            </div>
            <div className="subBox">
              <div className="class-1">
                <img src={Language} alt="icon" />
                <p>Language</p>
              </div>
              <div className="class-2">
                <img src={listArrow} alt="icon" />
              </div>
            </div>
            <div onClick={() => setShowSupport(true)} className="subBox">
              <div className="class-1">
                <img src={support} alt="icon" />
                <p>Support</p>
              </div>
              <div className="class-2">
                <img src={listArrow} alt="icon" />
              </div>
            </div>
            <div className="subBox">
              <div className="class-1">
                <img src={support} alt="icon" />
                <p>Privacy Policy</p>
              </div>
              <div className="class-2">
                <img src={listArrow} alt="icon" />
              </div>
            </div>
            <div >

              <LogoutConfirmation onConfirm={handleLogoutConfirmation} />

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileProfile;
