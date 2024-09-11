import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import headerImg from "../../../assets/Edit.svg";
const Header = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/new-sign-up");
  };
  return (

    <div className="container-fluid " >
      <div className="row" >
        <div className="col-md-12 col-lg-6">
          <div className="content">
            <h1>
              <span className="header_span_1">Oyster </span>{" "}
              <span className="header_span_2">
                is your Intelligent Writing Companion.
              </span>
            </h1>
            <p>
              Sign up <span className="header_span_3">FREE</span> for Oyster, an
              AI powered single destination for your grammar and
              plagiarism checks. Enable mistake-free writing now!
            </p>
            <div className="btnGetStarted">
              <Link to="/new-sign-up">
                <button className="get_started_btn" onClick={handleChange}>
                  Get Started
                  <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
                    <path
                      d="M15.875 19.125L19.125 15.875C19.3542 15.6458 19.4688 15.3542 19.4688 15C19.4688 14.6458 19.3542 14.3542 19.125 14.125L15.8438 10.8438C15.6146 10.6146 15.3283 10.505 14.985 10.515C14.6408 10.5258 14.3542 10.6458 14.125 10.875C13.8958 11.1042 13.7812 11.3958 13.7812 11.75C13.7812 12.1042 13.8958 12.3958 14.125 12.625L15.25 13.75H11.2188C10.8646 13.75 10.5729 13.8696 10.3437 14.1087C10.1146 14.3487 10 14.6458 10 15C10 15.3542 10.12 15.6508 10.36 15.89C10.5992 16.13 10.8958 16.25 11.25 16.25H15.25L14.0938 17.4062C13.8646 17.6354 13.755 17.9221 13.765 18.2662C13.7758 18.6096 13.8958 18.8958 14.125 19.125C14.3542 19.3542 14.6458 19.4688 15 19.4688C15.3542 19.4688 15.6458 19.3542 15.875 19.125ZM15 27.5C13.2708 27.5 11.6458 27.1717 10.125 26.515C8.60417 25.8592 7.28125 24.9688 6.15625 23.8438C5.03125 22.7188 4.14083 21.3958 3.485 19.875C2.82833 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82833 11.6458 3.485 10.125C4.14083 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14042 10.125 3.48375C11.6458 2.82792 13.2708 2.5 15 2.5C16.7292 2.5 18.3542 2.82792 19.875 3.48375C21.3958 4.14042 22.7188 5.03125 23.8438 6.15625C24.9688 7.28125 25.8592 8.60417 26.515 10.125C27.1717 11.6458 27.5 13.2708 27.5 15C27.5 16.7292 27.1717 18.3542 26.515 19.875C25.8592 21.3958 24.9688 22.7188 23.8438 23.8438C22.7188 24.9688 21.3958 25.8592 19.875 26.515C18.3542 27.1717 16.7292 27.5 15 27.5Z"
                      fill="#FFF"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 header_image">
          <img src={headerImg} alt="images"></img>
          <button className="header_right_btn">Edit</button>
        </div>
      </div>
    </div>


    // <div>
    //   <div className="container-fluid home">
    //     <div className="col-md-12 col-lg-6">
    //       <div className="content">
    //         <h1>
    //           <span className="header_span_1">Oyster</span>{" "}
    //           <span className="header_span_2">
    //             is your Intelligent Writing Companion.
    //           </span>
    //         </h1>
    //         <p>
    //           Sign up <span className="header_span_3">FREE</span> for Oyster, an
    //           AI powered single destination for your grammar and
    //           plagiarism checks. Enable mistake-free writing now!
    //         </p>
    //         <Link to="/auth">
    //           <button className="get_started_btn" onClick={handleChange}>
    //             Get Started
    //             <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
    //               <path
    //                 d="M15.875 19.125L19.125 15.875C19.3542 15.6458 19.4688 15.3542 19.4688 15C19.4688 14.6458 19.3542 14.3542 19.125 14.125L15.8438 10.8438C15.6146 10.6146 15.3283 10.505 14.985 10.515C14.6408 10.5258 14.3542 10.6458 14.125 10.875C13.8958 11.1042 13.7812 11.3958 13.7812 11.75C13.7812 12.1042 13.8958 12.3958 14.125 12.625L15.25 13.75H11.2188C10.8646 13.75 10.5729 13.8696 10.3437 14.1087C10.1146 14.3487 10 14.6458 10 15C10 15.3542 10.12 15.6508 10.36 15.89C10.5992 16.13 10.8958 16.25 11.25 16.25H15.25L14.0938 17.4062C13.8646 17.6354 13.755 17.9221 13.765 18.2662C13.7758 18.6096 13.8958 18.8958 14.125 19.125C14.3542 19.3542 14.6458 19.4688 15 19.4688C15.3542 19.4688 15.6458 19.3542 15.875 19.125ZM15 27.5C13.2708 27.5 11.6458 27.1717 10.125 26.515C8.60417 25.8592 7.28125 24.9688 6.15625 23.8438C5.03125 22.7188 4.14083 21.3958 3.485 19.875C2.82833 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82833 11.6458 3.485 10.125C4.14083 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14042 10.125 3.48375C11.6458 2.82792 13.2708 2.5 15 2.5C16.7292 2.5 18.3542 2.82792 19.875 3.48375C21.3958 4.14042 22.7188 5.03125 23.8438 6.15625C24.9688 7.28125 25.8592 8.60417 26.515 10.125C27.1717 11.6458 27.5 13.2708 27.5 15C27.5 16.7292 27.1717 18.3542 26.515 19.875C25.8592 21.3958 24.9688 22.7188 23.8438 23.8438C22.7188 24.9688 21.3958 25.8592 19.875 26.515C18.3542 27.1717 16.7292 27.5 15 27.5Z"
    //                 fill="#FFFFFF"
    //               />
    //             </svg>
    //           </button>
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="col-md-12 col-lg-6 header_image">
    //       <img src={headerImg} alt="images"></img>
    //       <button className="header_right_btn">Edit</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
