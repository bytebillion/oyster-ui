import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import logo from "../../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  // const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">


      <div >
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>



      <div className="menu_icon" onClick={handleClick}>
        {clicked ? "X" : "☰"}
      </div>

      <ul className={clicked ? `nav_menu active` : `nav_menu`}>
        <div className="menu_box">
          {MenuList.map((item, index) => {
            return (
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
            );
          })}
          {/* <button className="navbar_login" onClick={() => navigate("")}>
              Login
            </button> */}
        </div>
        {/* <div className="auth_btn">
            {currentUser.user_email ? (
            <button className="signin_link">{currentUser.user_name}</button>
          ) : (
            <Link to="/login">
              <button className="signin_link">Sign In</button>
            </Link>
          )}
          </div>
          <div className="auth_btn">
            {currentUser.user_name ? (
            <button className="signout_link" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
          </div> */}
      </ul>

    </nav>
  );
};

export default Navbar;


