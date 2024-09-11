import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";
// import logo from "../../../assets/logo.png";
import "./Profile.css";


const Profile = () => {
    const [clicked, setClicked] = useState(false);


    const handleClick = () => {
        setClicked(!clicked);
    };


    return (
        <nav >
            <div className="menu_icon_P" onClick={handleClick}>
                {clicked ? "X" : "☰"}
            </div>

            <ul className={clicked ? `nav_menu active` : `nav_menu`}>
                <div className="menu_box">

                    <li className="profileHeading"  >My Account</li>

                    {ProfileMenu.map((item, index) => {
                        return (
                            <>
                                <li key={index}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "nav_link active" : "nav_link"
                                        }
                                      to={item.url}
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            </>
                        );
                    })}

                </div>

            </ul>

        </nav>
    );
};

export default Profile;


