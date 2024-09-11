import React, { useEffect } from "react";
import "./PrivacyPolicy.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/privacy1.png";
import img2 from "../../assets/privacy2.png";
import Header from "../HomePageNew/subcomponents/Header";
import Footer from "../HomePageNew/subcomponents/Footer";
function PrivacyPolicy() {
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
      <Header />
      <div className="container-fluid PrivacyPolicy-container">
        <img className="PrivacyPolicy-img1-left" src={img1} alt="" />
        <img className="PrivacyPolicy-img2-right" src={img2} alt="" />
        <div className="row px-5 pb-5">
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
            <span>Privacy Policy</span>
          </div>
          <div className="PrivacyPolicy-border px-4 pb-5">
            <div className="PrivacyPolicy-head">
              Last updated on Nov 29th, 2022
            </div>
            <div className="PrivacyPolicy-txt">
              This privacy policy sets out how APP N TAP TECHNOLOGIES PRIVATE
              LIMITED uses and protects any information that you give APP N TAP
              TECHNOLOGIES PRIVATE LIMITED when you use this website.
            </div>
            <div className="PrivacyPolicy-txt">
              APP N TAP TECHNOLOGIES PRIVATE LIMITED is committed to ensuring
              that your privacy is protected. Should we ask you to provide
              certain information by which you can be identified when using this
              website, and then you can be assured that it will only be used in
              accordance with this privacy statement.
            </div>
            <div className="PrivacyPolicy-txt">
              APP N TAP TECHNOLOGIES PRIVATE LIMITED may change this policy from
              time to time by updating this page. You should check this page
              from time to time to ensure that you are happy with any changes.
            </div>
            <div className="PrivacyPolicy-head">
              We may collect the following information:{" "}
            </div>

            <div className="mt-4">
              <ul className="ps-3">
                <li className="PrivacyPolicy-txt-li">Name and job title</li>
                <li className="PrivacyPolicy-txt-li">
                  Contact information including email address
                </li>
                <li className="PrivacyPolicy-txt-li">
                  Demographic information such as postcode, preferences, and
                  interests
                </li>
                <li className="PrivacyPolicy-txt-li">
                  Other information relevant to customer surveys and/or offers
                </li>
              </ul>
            </div>
            <div className="PrivacyPolicy-head">
              What we do with the information we gather{" "}
            </div>
            <div className="PrivacyPolicy-txt">
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons:
            </div>
            <div className="mt-4">
              <ul className="ps-3">
                <li className="PrivacyPolicy-txt-li">
                  Internal record keeping.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  We may use the information to improve our products and
                  services.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  We may periodically send promotional emails about new
                  products, special offers or other information which we think
                  you may find interesting using the email address which you
                  have provided.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  From time to time, we may also use your information to contact
                  you for market research purposes. We may contact you by email,
                  phone, fax or mail. We may use the information to customize
                  the website according to your interests.
                </li>
              </ul>
            </div>
            <div className="PrivacyPolicy-txt">
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorised access or disclosure we have put in
              suitable measures.
            </div>
            <div className="PrivacyPolicy-head">How we use cookies</div>
            <div className="PrivacyPolicy-txt">
              A cookie is a small file that asks permission to be placed on your
              computer's hard drive. Once you agree, the file is added and the
              cookie helps analyses web traffic or lets you know when you visit
              a particular site. Cookies allow web applications to respond to
              you as an individual. The web application can tailor its
              operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences.
            </div>
            <div className="PrivacyPolicy-txt">
              We use traffic log cookies to identify which pages are being used.
              This helps us analyses data about webpage traffic and improve our
              website in order to tailor it to customer needs. We only use this
              information for statistical analysis purposes and then the data is
              removed from the system.
            </div>
            <div className="PrivacyPolicy-txt">
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us.
            </div>
            <div className="PrivacyPolicy-txt">
              You can choose to accept or decline cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer. This may prevent
              you from taking full advantage of the website.
            </div>
            <div className="PrivacyPolicy-head">
              Controlling your personal information{" "}
            </div>
            <div className="PrivacyPolicy-txt">
              You may choose to restrict the collection or use of your personal
              information in the following ways:
            </div>
            <div className="mt-4">
              <ul className="ps-3">
                <li className="PrivacyPolicy-txt-li">
                  whenever you are asked to fill in a form on the website, look
                  for the box that you can click to indicate that you do not
                  want the information to be used by anybody for direct
                  marketing purposes .
                </li>
                <li className="PrivacyPolicy-txt-li">
                  if you have previously agreed to us using your personal
                  information for direct marketing purposes, you may change your
                  mind at any time by writing to or emailing us at
                  contact@appoyster.com
                </li>
              </ul>
            </div>
            <div className="PrivacyPolicy-txt">
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties which we think you may
              find interesting if you tell us that you wish this to happen.
            </div>
            <div className="PrivacyPolicy-txt">
              If you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default PrivacyPolicy;
