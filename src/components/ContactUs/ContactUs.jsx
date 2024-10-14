import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import img1 from "../../assets/privacy1.png";
import img2 from "../../assets/privacy2.png";
import mailImg from "../../assets/Email.svg";
import phoneImg from "../../assets/Phone.svg";
import mapImg from "../../assets/location.svg";
import Footer from "../HomePage/Footer/Footer";

import Navbar from "../HomePage/Navbar/Navbar";
import "./ContactUs.css";
// import { pink } from "@mui/material/colors";
// import { Padding } from "@mui/icons-material";
// import { color } from "@chakra-ui/react";

function ContactUs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="contactus-container">
        <div className="upper-container">
          <img className="PrivacyPolicy-img1-left" src={img1} alt="" />
          <img className="PrivacyPolicy-img2-right" src={img2} alt="" />
          <div className="row pb-5 px-1">
            <div
              className="PrivacyPolicy-head-head ps-0"
              onClick={() => navigate("/")}
            >
              <span className="pe-2">
                <svg width="30" height="30" viewBox="0 0 45 45" fill="none">
                  <mask
                    id="mask0_4107_62"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="45"
                    height="45"
                  >
                    <rect width="45" height="45" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_4107_62)">
                    <path
                      d="M22.5 37.5L7.5 22.5L22.5 7.5L25.1719 10.125L14.6719 20.625H37.5V24.375H14.6719L25.1719 34.875L22.5 37.5Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </span>
              <span>Contact Us</span>
            </div>

            {
              /* <div className="PrivacyPolicy-border px-4 pb-5">

              <div className="PrivacyPolicy-txt">
                Thank you for your interest in contacting us. We value your
                feedback, concerns, and queries. Please feel free to reach out to
                us through the contact details provided below:
              </div>
              <div className="PrivacyPolicy-head">Customer Care: </div>
              <div className="mt-4">
                <span className="PrivacyPolicy-head">Email : </span>
                <span className="PrivacyPolicy-txt" style={{ color: "#2E38DE" }}>
                  contact@appoyster.com
                </span>
              </div>
              <div className="mt-4">
                <span className="PrivacyPolicy-head">Phone : </span>
                <span className="PrivacyPolicy-txt" style={{ color: "#2E38DE" }}>
                  +91-7905505630
                </span>
              </div>
              <div className="mt-4">
                <span className="PrivacyPolicy-head">Address : </span>
                <span className="PrivacyPolicy-txt">
                  Spaces, Plot No.C-001A 16th & 17th Floor, Max Towers, Delhi
                  Noida Direct Flyway, Sector 16B, Noida, Uttar Pradesh 201301
                </span>
              </div>
              <div className="PrivacyPolicy-txt ">
                We strive to provide excellent customer service and will do our
                best to assist you in a timely manner. Your satisfaction is our
                priority.
              </div>
              <div className="PrivacyPolicy-txt mt-3">
                In addition to the email provided, you can also contact us through
                our website or social media channels. We appreciate your support
                and look forward to hearing from you. Thank you for choosing
                Oyster. Let us know how we can assist you! Our team is ready to
                help.
              </div>
            </div> */
              <div
                className="d-flex !flex-col w-[100%] pt-3"
                style={{ flexDirection: "column", padding: "50px" }}
              >
                <div className="main-div d-flex w-[100%] ">
                  <div className="box first">
                    <h2 className="heading">Get in touch today</h2>
                    <p className="para">
                      Thank you for your interest in contacting us. We value
                      your feedback, concerns, and queries. Please feel free to
                      reach out to us through the contact details provided
                      below:
                    </p>
                    <div className=" fourth h-20  mr-8  ">
                      <div className="paragraph-box">
                        <div className="icon-line">
                          <p>
                            <a href="mailto:contact@appoyster.com">
                              <span className="icon-svg">
                                <img className="contact-img" src={mailImg} alt="Mail Icon" />
                              </span>
                              <span className="icon-text">
                                contact@appoyster.com
                              </span>
                            </a>
                          </p>

                          <p>
                            <a href="tel:+91-79055 05630">
                              <span className="icon-svg">
                                <img  className="contact-img" src={phoneImg} alt="Mail Icon" />
                              </span>
                              <span className="icon-text">+91-79055 05630</span>
                            </a>
                          </p>
                          <p className="d-flex">
                            {/* <div > */}
                            {/* <p className="icon-svg"> */}
                            <img  className="contact-img" 
                              src={mapImg}
                              alt="Map Icon"
                              width="18px"
                              height="18px"
                            />
                            {/* </p> */}
                            <p className="icon-text">
                              Spaces, Plot No.C-001A 16th & 17th Floor, Max
                              Towers, Delhi Noida Direct Flyway, Sector 16B,
                              Noida, Uttar Pradesh 201301
                            </p>
                            {/* </div> */}
                          </p>
                        </div>
                        <div>
                          <p className="para">
                            We strive to provide excellent customer service and
                            will do our best to assist you in a timely manner.
                            Your satisfaction is our priority.
                            <br />
                            <br />
                            In addition to the email provided, you can also
                            contact us through our website or social media
                            channels. We appreciate your support and look
                            forward to hearing from you. Thank you for choosing
                            Oyster. Let us know how we can assist you! Our team
                            is ready to help.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" box third  h-20   p-10">
                    <form>
                      <div className="flex input-container">
                        <div className="w-1/2 ">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full input  "
                            placeholder="John Carter"
                          />
                        </div>
                        <div className="w-1/2 ">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full input"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>
                      <div className="flex input-container">
                        <div className="w-1/2">
                          <label className="form-label" htmlFor="phone">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full input"
                            placeholder="(123) 456 - 789"
                          />
                        </div>
                        <div className="w-1/2 ">
                          <label className="form-label" htmlFor="company">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full input"
                            placeholder="Facebook"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label className="form-label" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          className="w-full input-message"
                          placeholder="Please type your message here..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className=" font-bold  button  mt-2"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
                <div className=" box second h-20  mr-8  ">
                  <div className="paragraph-box">
                    <div className="icon-line">
                      <p>
                        <a href="mailto:contact@appoyster.com">
                          <span className="icon-svg">
                            <img  className="contact-img" src={mailImg} alt="Mail Icon" />
                          </span>
                          <span className="icon-text">
                            contact@appoyster.com
                          </span>
                        </a>
                      </p>

                      <p>
                        <a href="tel:+91-79055 05630">
                          <span className="icon-svg">
                            <img  className="contact-img" src={phoneImg} alt="Mail Icon" />
                          </span>
                          <span className="icon-text">+91-79055 05630</span>
                        </a>
                      </p>
                      <p className="d-flex">
                        {/* <div > */}
                        {/* <p className="icon-svg"> */}
                        <img className="contact-img" 
                          src={mapImg}
                          alt="Map Icon"
                          width="18px"
                          height="18px"
                        />
                        {/* </p> */}
                        <p className="icon-text">
                          Spaces, Plot No.C-001A 16th & 17th Floor, Max Towers,
                          Delhi Noida Direct Flyway, Sector 16B, Noida, Uttar
                          Pradesh 201301
                        </p>
                        {/* </div> */}
                      </p>
                    </div>
                    <div>
                      <p className="para">
                        We strive to provide excellent customer service and will
                        do our best to assist you in a timely manner. Your
                        satisfaction is our priority.
                        <br />
                        <br />
                        In addition to the email provided, you can also contact
                        us through our website or social media channels. We
                        appreciate your support and look forward to hearing from
                        you. Thank you for choosing Oyster. Let us know how we
                        can assist you! Our team is ready to help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
