import React, { useState, useContext } from "react";
import { UserContext } from "../../../../context/user";
import arrow from "../../../../../assets/Back arrow.svg";
import "./EditProfile.css";
import EditIcon from "../../../../../assets/ProfilePicEdit.svg";

const EditProfile = ({ setEditProfile }) => {
  const user = useContext(UserContext);

  const nameArr = user?.name.split(" ");
  const [firstName, setFirstName] = useState(nameArr[0] || "");
  const [lastName, setLastName] = useState(nameArr[1] || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");

  return (
    <div className="mobile-editProfile-container">
      <div className="container-1">
        <div className="back-icon" onClick={() => setEditProfile(false)}>
          <img src={arrow} alt="Back" />
        </div>
        <h3>Edit Profile</h3>
      </div>
      <div className="container-2">
        <div className="user_profile_pic">{user?.name?.substring(0, 1)}</div>
        <img className="EditPicIcon" src={EditIcon} alt="icon" />
      </div>
      <div className="container-3">
        {/* Form fields */}
        <form className="edit-profile-form">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <div className="phoneNum">
            
            
              <select className=" w-1/4 countryCode" placeholder="+91">
                <option value="" disabled selected>
                  +91
                </option>
                <option value="male">+1</option>
                
              </select>
              <input className="w-3/4 number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
           
            
          </div>
          <select placeholder="Gender">
            <option value="" disabled selected>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" placeholder="Country" />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
