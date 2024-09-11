import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/privacy1.png";
import img2 from "../../assets/privacy2.png";
import Header from "../HomePageNew/subcomponents/Header";
import Footer from "../HomePageNew/subcomponents/Footer";
function CancellationRefundPolicy() {
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
            <span>Cancellation & Refund Policy</span>
          </div>
          <div className="PrivacyPolicy-border px-4 pb-5">
            <div className="PrivacyPolicy-head">
              Last updated on Nov 29th, 2022
            </div>
            <div className="PrivacyPolicy-txt">
              APP N TAP TECHNOLOGIES PRIVATE LIMITED believes in helping its
              customers as far as possible, and has therefore a liberal
              cancellation policy. Under this policy:
            </div>
            <div className="mt-4">
              <ul className="ps-3">
                <li className="PrivacyPolicy-txt-li">
                  Cancellations will be considered only if the request is made
                  immediately after placing the order. However, the cancellation
                  request may not be entertained if the orders have been
                  communicated to the vendors/merchants and they have initiated
                  the process of shipping them.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  APP N TAP TECHNOLOGIES PRIVATE LIMITED does not accept
                  cancellation requests for perishable items like flowers,
                  eatables etc. However, refund/replacement can be made if the
                  customer establishes that the quality of product delivered is
                  not good.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  In case of receipt of damaged or defective items please report
                  the same to our Customer Service team. The request will,
                  however, be entertained once the merchant has checked and
                  determined the same at his own end. This should be reported
                  within 7 days of receipt of the products.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  In case you feel that the product received is not as shown on
                  the site or as per your expectations, you must bring it to the
                  notice of our customer service within 7 days of receiving the
                  product. The Customer Service Team after looking into your
                  complaint will take an appropriate decision.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  In case of complaints regarding products that come with a
                  warranty from manufacturers, please refer the issue to them.
                </li>
                <li className="PrivacyPolicy-txt-li">
                  In case of any Refunds approved by the APP N TAP TECHNOLOGIES
                  PRIVATE LIMITED, it’ll take 9-15 days for the refund to be
                  processed to the end customer
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

export default CancellationRefundPolicy;
