import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import loginimage from "../../assets/loginbottom.png";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
// import Calender from "../../assets/Calender.svg";
import "react-calendar/dist/Calendar.css";
import moment from "moment";


const PersonalDetailsStage = ({ submit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const dateOfBirth = moment(dob).format("L");
  const location = useLocation()


  const params = new URLSearchParams(location.search);
  const couponCode = params.get('couponcode');

  return (
    <>
      <div className="col-md-6 mb-4">
        <div className="login_form">
          <h1>Personal Details</h1>
          <p className="login_desc">Just few more steps...</p>
          <div>
            <div>
              <label className="personal_page_label">Full Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                className="number_input"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="personal_page_label">Date of Birth*</label>
              <DatePicker
                className="user_dob_picker"
                onChange={setDob}
                value={dob}
                dayPlaceholder="dd"
                monthPlaceholder="mm"
                yearPlaceholder="yyyy"
                calendarIcon={
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width={23}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                }
              />
            </div>
            <div
              className={
                name?.length > 0 && dateOfBirth?.length === 10
                  ? "active_loginbtn"
                  : "login_btn"
              }
            >
              <button
                onClick={async () => {
                  const res = await submit({ name, dob });
                  if (res) {

                    if (couponCode) {
                      navigate(`/pricing?couponcode=${couponCode}`);
                    } else {
                      navigate("/afterLogin")
                    }
                  }
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="login_border">
          <div className="banner_top">
            <p>
              To Err is Human. <br /> To Use Oyster,
              <span className="divine"> Divine.</span>
            </p>
          </div>
          <div className="login_banner">
            <img src={loginimage} alt="" className="login_banner_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetailsStage;
