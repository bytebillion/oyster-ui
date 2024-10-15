import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Verify from "./components/Authentication/google";
// import Pricing from "./components/Pricing/Pricing";
import Dashboard from "./components/Dashboard/Dashboard.js"; 
import Home from "./components/Home";
import AuthContextProvider from "./components/context/auth";
import UserContextProvider from "./components/context/user";
import ChatBot from "./components/chatBot/ChatBot"; 

// import HomePage from "./components/HomePage/HomePage";
import HomePageNew from "./components/HomePageNew/index";
import Restricted from "./components/Restricted";
import Payment from "./components/Payment";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import CancellationRefundPolicy from "./components/CancellationRefundPolicy/CancellationRefundPolicy";
import TermsConditions from "./components/Terms&Conditions/Terms&Conditions";

import ContactUs from "./components/ContactUs/ContactUs";
// import AuthForm from "./components/Authentication/AuthForm";
import LoginForm from "./components/HomePageNew/LoginForm/LoginForm";
import PricingHome from "./components/HomePageNew/subcomponents/PricingHome";
import Blogs from "./components/HomePageNew/subcomponents/Blogs/Blogs";
import About from "./components/HomePageNew/subcomponents/About";
import HomeLtd from "./components/HomePageNew/subcomponents/HomeLtd.jsx"
import SignUp from "./components/HomePageNew/subcomponents/NewSignUp/SignUp.jsx";
import LogIn from "./components/HomePageNew/subcomponents/NewSignUp/LogIn.jsx";
import SupportCenter from "./components/HomePageNew/subcomponents/Resources/SupportCenter.jsx";
import ComparisonMain from "./components/HomePageNew/subcomponents/Resources/ComparisonMain.jsx";
import MainDash from "./components/Dashboard/New Dashboard/MainDash.jsx";
import MyAccount from "./components/Dashboard/New Dashboard/MyAccount.jsx";
// import PricingLtd from "./components/HomePageNew/subcomponents/PricingLtd.jsx"


function App() {
  return (
    <>
      <AuthContextProvider>
        <UserContextProvider>
          <Routes>
            {/* <Route exact path="/auth" element={<AuthForm />} /> */}
            <Route exact path="/auth" element={<LogIn />} />
            <Route exact path="/new-dashboard" element={<MainDash />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/verify" element={<Verify />} />
            <Route exact path="/" element={<HomePageNew />} />
            {/* <Route exact path="/pricing" element={<Pricing />} /> */}
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/pricing-home" component={PricingHome} />

            <Route
              exact
              path="/Cancellation-&-Refund-Policy"
              element={<CancellationRefundPolicy />}
            />
            <Route
              exact
              path="/Terms-&-Conditions"
              element={<TermsConditions />}
            />
            <Route
              exact
              path="/editor/:id"
              element={
                <Restricted>
                  <Home />
                </Restricted>
              }
            />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/pricing-ltd" element={<HomeLtd />} />
            <Route exact path="/new-sign-up" element={<SignUp />} />
            {/* <Route exact path="/new-login" element={<LogIn />} /> */}
            <Route exact path="/support-center" element={<SupportCenter />} />/comparison-main
            <Route exact path="/comparison" element={<ComparisonMain />} />





            <Route exact path="/pricing" element={<PricingHome />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/afterLogin" element={<LoginForm />} />

            <Route path="/payment" element={<Payment />} />
            <Route path="/chat-bot" element={<ChatBot />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </UserContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
