import React, { useState, useEffect, useContext } from "react";
import "./Pricing.css";
import pricing2 from "../../assets/pricing2.png";
import pricing3 from "../../assets/pricing3.png";
import pricing4 from "../../assets/pricing3.png";
import pricing5 from "../../assets/pricing2.png";
import PaymentSucess from "./PaymentSucess/PaymentSucess";
// import UpgradePlanModal from "./UpgradePlanModal/UpgradePlanModal";
import { subscriptionPrice } from "../../libs/constants";
import { openRazorpayModal } from "../../libs/razorpay";
import { UserDispatchContext } from "../context/user";
import config from "../../libs/config";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import Navbar from "../HomePage/Navbar/Navbar";
import Footer from "../HomePage/Footer/Footer"
import { useDisclosure } from "@chakra-ui/react";
import ReactModal from "react-modal";
import { useMediaQuery } from "@uidotdev/usehooks";
import ModalLogin from "../HomePage/ModalLogin";
import checkIcon from "../../../src/assets/CheckIcon.svg";


const Pricing = () => {
  const auth = useContext(AuthContext);
  const setUser = useContext(UserDispatchContext);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [loadingStudent, setLoadingStudent] = useState(false);
  const [loadingProfessional, setLoadingProfessional] = useState(false);
  const [showPaymentDone, setPaymentDone] = useState(false);

  const { onOpen } = useDisclosure()
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [email, setEmail] = useState("");
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: isSmallDevice ? "90%" : "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
    },
  };



  function onClickGoBack() {
    setPaymentDone(false);
    navigate("/dashboard");
  }

  async function onClickCheckout(planId) {
    if (!auth.isAuthenticated) {
      auth.logout();
    }

    planId === config.razorpay.planId.professional
      ? setLoadingProfessional(true)
      : setLoadingStudent(true);

    await openRazorpayModal(planId, setPaymentDone, setUser);

    planId === config.razorpay.planId.professional
      ? setLoadingProfessional(false)
      : setLoadingStudent(false);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      {isSignUpModalOpen ?
        <ReactModal
          shouldCloseOnOverlayClick={false}
          // shouldCloseOnEsc={false}
          style={customStyles}
          isOpen={isSignUpModalOpen}
          onRequestClose={() => setIsSignUpModalOpen(false)}
        >
          <ModalLogin footerLogin={"footerLogin"} email={email} setEmail={setEmail} />
        </ReactModal>
        : null
      }


      <Navbar />
      <div className="pricing_container">
        {/* Background Images */}
        <img className="pricing_images2" src={pricing2} alt="pricing_images2" />
        <img className="pricing_images3" src={pricing3} alt="pricing_images3" />
        <img className="pricing_images4" src={pricing4} alt="pricing_images4" />
        <img className="pricing_images5" src={pricing5} alt="pricing_images5" />

        <div className="pricing_header_super">
          <h1 className="pricing_header">
            Export Unlimited Documents <br />{" "}
            <span className="with_span">with</span>{" "}
            <span className="pricing_span">Oyster Premium</span>
          </h1>
        </div>
        <div className="price_content">
          <div className="d-flex">
            <div className="standard">
              <h5 className="text-center">Premium</h5>
              <div className="pricing_card">
                <div>
                  <p className="price_para" >Premium</p>
                  <h3>Yearly Plan
                    <span className="amtSpam" >₹ {subscriptionPrice.professional}/-</span>
                  </h3>

                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Grammar Check</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Spell Check</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Plagiarism Check</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Paraphrasing</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Redundancy</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Content Scheduler</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >SEO Recommendation</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Picky Mode</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Sentence Re-writing</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Formatting</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Analytics Dashboard</div>
                  </div>
                  <div className="mainC" >
                    <div><img src={checkIcon} alt="" /></div>
                    <div className="title" >Account roles and permissions</div>
                  </div>


                </div>
                <div>
                  <div className="pricing_price">
                    Starting at
                    <div className="d-flex">
                      <span className="price_tag">
                        ₹ {subscriptionPrice.professional}/-


                      </span>
                      <span className="monthTime"> for 12 months</span>
                    </div>
                   
                  </div>
                  <button
                    className="pricing_btn"
                    onClick={() =>
                      onClickCheckout(config.razorpay.planId.professional)
                    }
                  >
                    {loadingProfessional && <Spinner />} Get Started
                  </button>
                  <div className="price-trail mt-2">15 days free trial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPaymentDone && <PaymentSucess handlePaymentDone={onClickGoBack} />}
      <Footer setIsSignUpModalOpen={setIsSignUpModalOpen} onOpen={onOpen} email={email} setEmail={setEmail} />
    </>
  );
};

export default Pricing;
