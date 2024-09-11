import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/privacy1.png";
import img2 from "../../assets/privacy2.png";
import Header from "../HomePageNew/subcomponents/Header";
import Footer from "../HomePageNew/subcomponents/Footer";
function TermsConditions() {
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
      <div className="container-fluid">
        <img className="PrivacyPolicy-img1-left" src={img1} alt="" />
        <img className="PrivacyPolicy-img2-right" src={img2} alt="" />
        <div className="row  PrivacyPolicy-row px-5 pb-5">
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
            <span>Terms & Conditions</span>
          </div>
          <div className="PrivacyPolicy-border px-4 pb-5">
            <div className="PrivacyPolicy-head">
              Last updated on Nov 29th, 2022
            </div>
            <div className="PrivacyPolicy-txt">
              The Website Owner, including subsidiaries and affiliates
              (“Website” or “Website Owner” or “we” or “us” or “our”) provides
              the information contained on the website or any of the pages
              comprising the website (“website”) to visitors (“visitors”)
              (cumulatively referred to as “you” or “your” hereinafter) subject
              to the terms and conditions set out in these website terms and
              conditions, the privacy policy and any other relevant terms and
              conditions, policies and notices which may be applicable to a
              specific section or module of the website.
            </div>
            <div className="PrivacyPolicy-txt">
              Welcome to our website. If you continue to browse and use this
              website you are agreeing to comply with and be bound by the
              following terms and conditions of use, which together with our
              privacy policy govern APP N TAP TECHNOLOGIES PRIVATE LIMITED''s
              relationship with you in relation to this website.
            </div>
            <div className="PrivacyPolicy-txt">
              The term 'APP N TAP TECHNOLOGIES PRIVATE LIMITED' or 'us' or 'we'
              refers to the owner of the website whose registered/operational
              office is D - 99, Sector 52, Noida Gautam Buddha Nagar UTTAR
              PRADESH 201301. The term 'you' refers to the user or viewer of our
              website.
            </div>
            <div className="PrivacyPolicy-head">
              The use of this website is subject to the following terms of use:{" "}
            </div>
            <div className="mt-4">
              <ul className="ps-3">
                <li className="PrivacyPolicy-txt-li">
                  The content of the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  Your use of any information or materials on this website is
                  entirely at your own risk, for which we shall not be liable.
                  It shall be your own responsibility to ensure that any
                  products, services or information available through this
                  website meet your specific requirements.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  This website contains material which is owned by or licensed
                  to us. This material includes, but is not limited to, the
                  design, layout, look, appearance and graphics. Reproduction is
                  prohibited other than in accordance with the copyright notice,
                  which forms part of these terms and conditions.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  All trademarks reproduced in this website which are not the
                  property of, or licensed to, the operator are acknowledged on
                  the website.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  Unauthorized use of this website may give rise to a claim for
                  damages and/or be a criminal offense.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  From time to time this website may also include links to other
                  websites. These links are provided for your convenience to
                  provide further information.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  You may not create a link to this website from another website
                  or document without APP N TAP TECHNOLOGIES PRIVATE LIMITED’s
                  prior written consent.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  Your use of this website and any dispute arising out of such
                  use of the website is subject to the laws of India or other
                  regulatory authority. We as a merchant shall be under no
                  liability whatsoever in respect of any loss or damage arising
                  directly or indirectly out of the decline of authorization for
                  any Transaction, on Account of the Cardholder having exceeded
                  the preset limit mutually agreed by us with our acquiring bank
                  from time to time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default TermsConditions;
