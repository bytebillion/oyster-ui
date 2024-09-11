// Your existing imports
import React, { useContext, useEffect, useState, useCallback } from "react";
import "./PricingHome.css";
import { AuthContext } from "../../context/auth";
import Spinner from "../../Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentSucess from "../../Pricing/PaymentSucess/PaymentSucess";
import { pricingPlansLtd } from "../Utils/pricingPlans";
import roundTick from "../../../assets/Checkbox.svg";
import { ToastContainer } from "react-toastify";
import axios from "../../../libs/axios";
import logo from "../../../assets/LogoLatest.svg";
import logoFooter from "../../../assets/Footer-Logo.svg";

const PricingLtd = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = localStorage.getItem("userEmail");
  const [isCouponExist, setISCouponExist] = useState(false);
  const [showPaymentDone, setPaymentDone] = useState(false);
  const [isIndia, setIsIndia] = useState(false);
  const [appSumoPlan, setAppSimoPlan] = useState(null);
  // eslint-disable-next-line
  const [loadingStates, setLoadingStates] = useState({
    basic: false,
    freelancer: false,
    enterprise: false,
  });
  const params = new URLSearchParams(location.search);
  const couponCode = params.get("couponcode");

  function onClickGoBack() {
    setPaymentDone(false);
    navigate("/dashboard");
  }

  async function onClickCheckout(plansLtd) {
    // Your existing code for checkout
  }

  const makepayment = async (subname) => {
    // Your existing code for making payment
  }

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        if (["India"].includes(data.country_name)) {
          setIsIndia(true);
        } else {
          setIsIndia(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!auth.isAuthenticated && couponCode) {
      switch (location.pathname) {
        case "/pricing":
          navigate(`/auth?couponcode=${couponCode}`);
          break;
        case "/pricing-ltd":
          navigate(`/auth?couponcodeLtd=${couponCode}`);
          break;
        default:
          break;
      }
    }
  }, [couponCode, navigate, location.pathname, auth]);

  const checkCoupon = useCallback(async () => {
    try {
      const body = {
        applyCoupon: couponCode,
        email: userEmail,
        currency: isIndia ? "INR" : "USD",
      };

      const isCouponExistURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/iscouponexist/checkcoupon`;
      const { data } = await axios.post(isCouponExistURL, body);
      if (data?.success) {
        setISCouponExist(true);
      }
      if (data?.data?.isAppSumo) {
        setAppSimoPlan(data?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [couponCode, userEmail, isIndia]);

  useEffect(() => {
    if (auth.isAuthenticated && couponCode) {
      checkCoupon();
    }
  }, [couponCode, auth.isAuthenticated, checkCoupon]);

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <div
            className="logo-header"
            onClick={() => navigate("/pricing-ltd")}
          >
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
      <ToastContainer position="top-right" />
      <div className="pricing-section">
        <div className="section-header">
          <div className="ai-container">
            <div className="ai-text">Powered by AI</div>
          </div>
          <h2 className="pricing-heading">
            Flexible pricing plans
          </h2>
          <br />
          <p className="pricing-desc">
            Pricing that scales with your business immediately.
          </p>
        </div>
        <div className="pricing-columns">
          {pricingPlansLtd.map((plansLtd, index) => (
            <div className="pricing-column" key={plansLtd.id}>
              <div className="pricing-container">
                <div className="section-header">
                  <div className="pricing-badge">PRICING</div>
                  <div className="plansLtd-name">{plansLtd.nameLtd}</div>
                  <div className="plansLtd-namePlan">{plansLtd.planName}</div>
                </div>
                <div className="price-info">
                  <div className="price-symbol">
                    {isIndia ? "₹" : "$"}
                  </div>
                  <div className="price-amount">
                    {isCouponExist ? (
                      <span className="new-price-value">
                        {isIndia
                          ? appSumoPlan?.isAppSumo
                            ? plansLtd?.appSumoPriceInd
                            : plansLtd.discount_indianLtdPrice
                          : appSumoPlan?.isAppSumo
                          ? plansLtd.appSumoPrice
                          : plansLtd.discount_internationLtdPrice}
                      </span>
                    ) : (
                      <span className="new-price-value">
                        {isIndia
                          ? plansLtd.indianLtdPrice
                          : plansLtd.internationalLtdPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="features">
                  {appSumoPlan
                    ? plansLtd.appSumoFeaturesLtd.map((feature, index) => (
                        <div className="feature" key={index}>
                          <img src={roundTick} alt="" />
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))
                    : plansLtd.featuresLtd.map((feature, index) => (
                        <div className="feature" key={index}>
                          <img src={roundTick} alt="" />
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))
                  }
                </div>
                <div className="request-demo">
                  {plansLtd.showRequestDemoButton && (
                    <button
                      className="request-button"
                      onClick={() => {
                        isIndia
                          ? onClickCheckout(plansLtd)
                          : makepayment(plansLtd.subName);
                      }}
                    >
                      {loadingStates[plansLtd.id] && <Spinner />}Subscribe
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showPaymentDone && <PaymentSucess handlePaymentDone={onClickGoBack} />}
      </div>
      {/* Conditionally rendering the footer */}
      {location.pathname !== "/pricing-ltd" && <footer className="footer">
        <div className="footer-logo">
          <img src={logoFooter} alt="" />
        </div>
        {/* ... (Your existing footer code) */}
      </footer>}
    </>
  );
};

export default PricingLtd;
