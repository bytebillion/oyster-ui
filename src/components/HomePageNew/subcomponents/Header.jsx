  // Header.jsx

  import React, { useEffect, useState } from "react";
  import "./Header.css";
  import { Link, useNavigate, useLocation } from "react-router-dom";
  import logo from "../../../assets/LogoLatest.svg";
  import crossIcon from "../../../assets/cross-23.png";

  const Header = ({ style }) => {
    const navigate = useNavigate();

    const navigateHeader = (navigateUrl) => {
      switch (navigateUrl) {
        case "/":
          navigate(navigateUrl);
          break;
        case "/blogs":
          navigate(navigateUrl);
          break;
        case "/pricing":
          navigate(navigateUrl);
          break;
        case "/resources":
          navigate(navigateUrl);
          break;
          case "/comparison":
            navigate(navigateUrl);
            break;
        case "/about":
          navigate(navigateUrl);
          break;

        default:
          break;
      }
      window.scrollTo(0, 0);
    };

    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location.pathname);

    useEffect(() => {
      setCurrentLocation(location.pathname);
    }, [location]);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <header
        className={`main-header sm ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
        style={style}
      >
        <div className="header-container">
          <div className="logo-header" onClick={() => navigateHeader("/")}>
            <img src={logo} alt="" />
          </div>

        <div className={`menu-items ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
          <div className="menu-bar">
          <div
              className={`menu-item ${
                currentLocation === "/pricing" ? "active" : ""
              }`}
              onClick={() => navigateHeader("/pricing")}
            >
              Pricing
            </div>
            <div
              className={`menu-item ${
                currentLocation === "/blogs" ? "active" : ""
              }`}
              onClick={() => navigateHeader("/blogs")}
            >
              Blogs
            </div>
            <div
              className={`menu-item ${currentLocation === "/about" ? "active" : ""}`}
              onClick={() => navigateHeader("/about")}
            >
              About Us
            </div>
            {/* <div
              className={`menu-item ${currentLocation === "" ? "active" : ""}`}
              onClick={() => navigateHeader("/resources")}
            >
              Resources
            </div> */}
            
            <div
              className={`menu-item ${
                currentLocation === "/resources" ? "active" : ""
              }`}
              // onClick={() => navigateHeader("/resources")}
            >
              Resources
              <div className="submenu">
                <div onClick={() => navigateHeader("/comparison")}>All Comparisons</div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-buttons">
            <button className="login">
              <Link to="/auth">Log In</Link>
            </button>
            <Link to="/new-sign-up">
              <button className="start">Start for FREE</button>
            </Link>
          </div>
        </div>
        <div className="desktop-menu-buttons">
          <button className="login">
            <Link to="/auth">Log In</Link>
          </button>
          <Link to="/new-sign-up">
            <button className="start">Start for FREE</button>
          </Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <img src={crossIcon} alt="Cross Icon" className="cross-icon" />
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>

          {isMobileMenuOpen && (
            <div className="mobile-popup">
              <div className="popup-menu">
                <div className="back-button" onClick={toggleMobileMenu}>
                  <img src={crossIcon} alt="Back Icon" className="back-icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  export default Header;
