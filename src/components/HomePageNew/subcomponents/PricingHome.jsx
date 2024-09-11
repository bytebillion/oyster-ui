import React, { useContext, useEffect, useState, useCallback } from "react";
import "./PricingHome.css";
import Header from "./Header";
// import { openRazorpayModal } from "../../../libs/razorpay";
import { AuthContext } from "../../context/auth";
import { UserDispatchContext } from "../../context/user";
import Spinner from "../../Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentSucess from "../../Pricing/PaymentSucess/PaymentSucess";
import { pricingPlans } from "../Utils/pricingPlans";
import roundTick from "../../../assets/Checkbox.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../../libs/axios";
import Footer from "./Footer";
import { loadStripe } from '@stripe/stripe-js/pure';

function PricingHome() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  // eslint-disable-next-line
  const setUser = useContext(UserDispatchContext);
  const userEmail = localStorage.getItem("userEmail");
  const [isCouponExist, setISCouponExist] = useState(false)
  const [showPaymentDone, setPaymentDone] = useState(false);
  // eslint-disable-next-line
  const [loadingProfessional, setLoadingProfessional] = useState(false);
  // eslint-disable-next-line
  const [loadingStudent, setLoadingStudent] = useState(false);
  // const [country, setCountry] = useState(null);
  const [isIndia, setIsIndia] = useState(false);
  // const [status, setStatus] = useState(null)
  // eslint-disable-next-line
  const [errorMsg, setErrorMessage] = useState(null)
  // eslint-disable-next-line
  const [getcouponUrl, setgetCouponUrl] = useState(null) //get coupon url
  // eslint-disable-next-line
  const [loadingStates, setLoadingStates] = useState({
    basic: false,
    freelancer: false,
    enterprise: false,
  });
  const params = new URLSearchParams(location.search);
  const couponCode = params.get('couponcode');


  function onClickGoBack() {
    setPaymentDone(false);
    navigate("/dashboard");
  }

  async function onClickCheckout(plan) {
    const createChatApiURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/payment/checkoutindpay`;
    const body = {
      amount: plan?.inrprice,
      currency: "INR",
      description: plan?.name,
      customer: {
        // name: "Gaurav Kumar",
        email: userEmail,
      },
      notes: {
        policy_name: isCouponExist,
        couponCode,
        isLtd: plan?.isLtd,

      },
      callback_url: `${process.env.REACT_APP_FRONTEND_URL}/dashboard`,
      redirect: true,
      callback_method: "get"
    };


    try {
      const { data } = await axios.post(createChatApiURL, body);
      if (data?.success) {
        window.location.href = data?.oneTimepayment?.short_url;

      } else if (!data?.success) {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log("errorqweqw", `${error?.response?.data?.messgae === 'Auth token not found' ?  "Please Login" : error?.response?.data?.messgae  }`)
      toast.error(`${error?.response?.data?.messgae === 'Auth token not found' ?  "Please Login" : error?.response?.data?.messgae  }`);
      navigate("/auth");

    }





    // // let planId = isIndia ? isCouponExist ? plan.discount_Plan : plan.id_india : plan.id_international;
    // let planId = isIndia ? isCouponExist ? plan.discount_Plan : plan.id_india : isCouponExist ? plan.discount_Plan : plan.id_india;

    // // let planId = "plan_NECIcMohSsxEl1" //Test live testing month
    // // let planId = "plan_NEDFu4VBc6ltau"  //Test live testing year
    // let applyCoupon = couponCode

    // if (!auth.isAuthenticated) {
    //   auth.logout();
    //   navigate("/auth");
    //   return;
    // }

    // plan.name === "Freelancer Plan"
    //   ? setLoadingProfessional(true)
    //   : setLoadingStudent(true);

    // if (plan.showRequestDemoButton) {
    //   await openRazorpayModal(planId, applyCoupon, setPaymentDone, setUser, navigate, setErrorMessage);
    // }

  }

  // process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY_LIVE,

  const makepayment = async (subName) => {
    // const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY_TEST); //test
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY_LIVE); //live

    const body = {
      subName: subName,
      userEmail: userEmail,
      isCouponExist: isCouponExist,
      applyCoupon: couponCode
    };

    const stripePaymentURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/payment/create-checkout-main`

    try {
      const response = await axios.post(stripePaymentURL, body);

      // console.log("response321", response.data.id)
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id
      })

      if (result.error) {
        // console.log("result stripe if", result)
        console.error(result.error);
        // Handle the error, e.g., show an error message to the user
        toast.error("Error during payment");
      }
      // else {
      //   console.log("result stripe else", result)
      //   // Payment initiation successful, now start checking the payment status
      //   checkPaymentStatus(response.data.id);
      // }
    } catch (error) {
      console.error("Error making payment:", error);
      toast.error(`${error?.response?.data?.messgae === 'Auth token not found' ?  "Please Login" : error?.response?.data?.messgae  }`);
      navigate("/auth")
    }
  }



  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const sessionId = urlParams.get('session_id');

  //   if (sessionId) {
  //     // Redirect to the final success URL
  //     window.location.href = `http://localhost:3000/pricing?session_id=${sessionId}`;
  //   }
  // }, []);


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



  // {/* ---------  displaying the couponcode url script start ----------- */ }

  const urlget = async () => {
    const apiUrL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/coupon/getCouponCode`

    const { data } = await axios.get(apiUrL);
    setgetCouponUrl(data?.data[0]?.allCoupons)
  }
  useEffect(() => {
    urlget()


  }, [])

  // {/* ---------  displaying the couponcode url script end ----------- */ }

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
      };

      const apiEndpoint = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/iscouponexist/checkcoupon`;
      const { data } = await axios.post(apiEndpoint, body);
      if (data?.success) {
        setISCouponExist(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [couponCode, userEmail]);

  useEffect(() => {
    if (auth.isAuthenticated && couponCode) {
      checkCoupon();
    }
  }, [couponCode, auth.isAuthenticated, checkCoupon]);

  return (
    <>
      <Header />
      <ToastContainer position="top-right" />
      <div className="pricing-section">
        <div className="section-header">
          <div className="ai-container">
            <div className="ai-text">Powered by AI</div>
          </div>
          <h2 className="pricing-heading">
            Flexible pricing plan for your startup
          </h2>
          <br />
          <p className="pricing-desc">
            Pricing that scales with your business immediately.
          </p>

          {/* {getcouponUrl?.map((urldata) => {
            return (
              <p>
                {urldata?.url}
              </p>
            )
          })} */}

        </div>
        <div className="pricing-columns">
          {pricingPlans.map((plan, index) => {
            return (
              <div className="pricing-column" key={plan.id}>
                <div className="pricing-container">
                  <div className="section-header">
                    <div className="pricing-badge">PRICING</div>
                    <div className="plan-name">{plan.name}</div>
                  </div>
                  <div className="price-info">
                    <div className="price-symbol">{index === 0 ? "" : isIndia ? "₹" : "$"}</div>
                    <div className="price-amount">

                      {isCouponExist ?
                        <span className="price-value">{index === 0 ? "" : isIndia ? plan.discount_indianOldPrice : plan.internationalPrice}</span>
                        :
                        <span className="price-value">{index === 0 ? "" : isIndia ? plan.indianOldPrice : plan.internationalOldPrice}</span>
                      }

                      {isCouponExist ?
                        <span className="new-price-value">{index === 0 ? "" : isIndia ? plan.discount_indianPrice : plan.discount_internationPrice}</span>
                        :
                        <span className="new-price-value">{index === 0 ? "" : isIndia ? plan.indianPrice : plan.internationalPrice}</span>
                      }

                    </div>
                  </div>
                  <div className="plan-info">
                    <div className="billing-type">{plan.billed}</div>
                  </div>
                  <div className="features">
                    {plan.features.map((feature, index) => (
                      <div className="feature" key={index}>
                        <img src={roundTick} alt="" />
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="request-demo">
                    {plan.showRequestDemoButton && (
                      <>
                        <button
                          className="request-button"
                          onClick={() => { isIndia ? onClickCheckout(plan) : makepayment(plan.subName); }}

                        >
                          {loadingStates[plan.id] && <Spinner />}Subscribe
                        </button>

                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          }
          )}
        </div>
        {showPaymentDone && <PaymentSucess handlePaymentDone={onClickGoBack} />}
      </div>
      <Footer />
    </>
  );
}

export default PricingHome;
