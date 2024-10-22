import React, { useContext, useEffect, useState } from "react";
import ProfileIcon from "../../assets/Dashboard/LeftPane/ProfileIcon.png";
import support from "../../assets/Dashboard/LeftPane/Vector.png";
import logo from "../../assets/Dashboard/LeftPane/OYSTER-WHITE.png";
import settingIcon from "../../assets/Dashboard/LeftPane/settingIcon.png"
import homeLogo from "../../assets/Dashboard/LeftPane/homeIcon.png"
import editIcon from "../../assets/Dashboard/LeftPane/editIcon.png"
import signInIcon from "../../assets/Dashboard/LeftPane/signInIcon.png"
import { useAuth } from "../context/auth";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { UserContext } from "../context/user";
import "./LeftPane.css";
import { getDaysDiff } from "../../libs/utility";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import { subscription } from "../../libs/constants";

import {
  UserDispatchContext, useUpgradeModal,
} from "../context/user";
const LeftPane = ({ setUserData, userData }) => {
  const user = useContext(UserContext);
  const { setIsAuthenticated } = useAuth();
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [daysLeft, setDaysLeft] = useState(15);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const setUser = useContext(UserDispatchContext);
  async function onClickCheckout() {
    if (!isAuthenticated) {
      logout();
    }
    navigate("/pricing");
  }

  useEffect(() => {
    if (user) {
      if (user?.createdAt) {
        const daysDiff = getDaysDiff(new Date(user.createdAt), new Date());
        const daysLeft = 15 - daysDiff;
        setDaysLeft(daysLeft >= 0 ? daysLeft : 0);
      }

      setEmail(user.email);
      setUsername(user.name);
    }
  }, [user]);

  console.log("user", user)

  // const initials = username?.substring(0, 1);
  return (
    // px-3
    <div className="pt-6 px-3 w-[15rem] font-roboto shadow-xl h-screen flex flex-col justify-between bg-[#1C2333]">


      <div className="h-[12%]">
        <div>
          <img src={logo} alt="logo" className="h-6 w-23 mt-4 ml-3" />
        </div>
        {/* <div className="mt-12 mb-4 bg-[#D8E6FD] rounded-lg py-2 px-2">
      <div className="flex">
        <div className="user_profile">{user?.name?.substring(0, 1)}</div>
        <div className="text-[#000000] md:text-[14px] lg:text[15px] font-[500] user_profile_name">
          {user?.name ?? username ?? "Anonymous"}
          {daysLeft > 0 &&
          (user?.subscription == null ||
            user?.subscription?.subscription ===
              subscription.not_subscribed) ? (
            <>
              <div className="user_profile_name_desc">
                {daysLeft} days free trial left
              </div>
              <button onClick={onClickCheckout}>
                {loading && <Spinner />}
                Subscribe
              </button>
            </>
          ) : user?.subscription == null ||
            user?.subscription?.subscription ===
              subscription.not_subscribed ? (
            <>
              <div className="user_profile_name_desc">Trial Over</div>
              <button onClick={onClickCheckout}>
                {loading && <Spinner />}
                Subscribe
              </button>
            </>
          ) : user?.subscription?.subscription ===
              subscription.subscribed ? (
            <div>Subscribed</div>
          ) : (
            <>
              <div>Subscription Expired</div>
              <button onClick={onClickCheckout}>
                {loading && <Spinner />}
                Subscribe
              </button>
            </>
          )}
        </div>
      </div>
      <div className="mt-2 flex text-[#7D7A7A] text-xs justify-start items-center gap-3 font-[400]">
        <div style={{ width: "16px" }}>
          <svg className="mx-2" width="100%" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.10156 4.09375V11.9128L5.01108 8.00327L1.10156 4.09375Z"
              fill="#947B7B"
            />
            <path
              d="M1.87891 3.31055L6.82842 8.26006C7.45353 8.88517 8.54373 8.88517 9.16884 8.26006L14.1184 3.31055H1.87891Z"
              fill="#947B7B"
            />
            <path
              d="M9.95017 9.03975C9.42989 9.56058 8.73693 9.84803 7.99982 9.84803C7.26272 9.84803 6.56975 9.56058 6.04948 9.03975L5.79293 8.7832L1.88672 12.6894H14.1129L10.2067 8.7832L9.95017 9.03975Z"
              fill="#947B7B"
            />
            <path
              d="M10.9883 8.00327L14.8978 11.9128V4.09375L10.9883 8.00327Z"
              fill="#947B7B"
            />
          </svg>
        </div>
        <div className="w-[90%] truncate">{email ?? "anon@appoyster.com"}</div>
      </div>
    </div> */}
      </div>



      <div className="h-[88%] flex flex-col justify-between mt-[20px]" >
        <div>
        <div
          className=" my-2 flex text-[#AAB3C5] text-[16px] font-[400] rounded-lg py-2 px-2 cursor-pointer"          
        >
          <img className="mr-1 h-[23px] w-[24px]" src={homeLogo} alt="acc" />
          Home
        </div>

        <div
          className=" my-2 ml-1 flex text-[#AAB3C5] text-[16px] font-[400] rounded-lg py-2 px-2 cursor-pointer"          
        >
          <img className="mr-1 h-[18px] w-[18px]" src={editIcon} alt="acc" />
          Grammar Editor
        </div>
        
        </div>
       


        <div style={{ borderTop: "1px solid #1F2937" }}>

          <div
            className="my-2 flex text-[#AAB3C5] text-[16px] font-[400]  rounded-lg py-2 px-2 cursor-pointer"
            onClick={() => setShowPersonalDetails(true)}
          >
            <img className="mr-2 mt-0.5 h-[18px] w-[18px]" src={ProfileIcon} alt="acc" />
            Profile
          </div>
          <div className="my-3 flex text-[#AAB3C5] text-[16px] font-[400]  rounded-lg py-2 px-2 cursor-pointer">
            <img className="mr-1 mt-0.5 h-[18px] w-[18px]" src={settingIcon} alt="Support" />
            Settings
          </div>
          <button
            className="my-3 w-full items-center flex text-[#AAB3C5] text-[16px] font-[400] rounded-lg py-2 px-2 cursor-pointer "
            onClick={() => {
              localStorage.removeItem("token");
              console.log("logged out");
              setUser(null);
              setUserData(null);
              navigate("/auth");
              setIsAuthenticated(false)
            }}

          >
             <img className="mr-1 mt-0.5 h-[18px] w-[18px]" src={signInIcon} alt="Support" />
             Log out
          </button>

        </div>


      </div>


      <PersonalDetails
        user={user}
        open={showPersonalDetails}
        setOpen={setShowPersonalDetails}
      />
    </div>

    // <div className="pt-6 px-3 w-[15rem] font-roboto shadow-xl h-screen" >

    //   <div >
    //     <img src={logo} alt="logo" />
    //   </div>
    //   <div className="mt-12 mb-4 bg-[#D8E6FD] rounded-lg py-2 px-2" >
    //     <div className="flex ">
    //       <div className="user_profile">{user?.name?.substring(0, 1)}</div>
    //       <div className="text-[#000000] md:text-[14px] lg:text[15px] font-[500] user_profile_name">
    //         {user?.name ?? username ?? "Anonymous"}

    //         {daysLeft > 0 &&
    //         (user?.subscription == null ||
    //           user?.subscription?.subscription ===
    //             subscription.not_subscribed) ? (
    //           <>
    //             <div className="user_profile_name_desc">
    //               {daysLeft} days free trial left
    //             </div>
    //             <button onClick={onClickCheckout}>
    //               {loading && <Spinner />}
    //               Subscribe
    //             </button>
    //           </>
    //         ) : user?.subscription == null ||
    //           user?.subscription?.subscription ===
    //             subscription.not_subscribed ? (
    //           <>
    //             <div className="user_profile_name_desc">Trial Over</div>
    //             <button onClick={onClickCheckout}>
    //               {loading && <Spinner />}
    //               Subscribe
    //             </button>
    //           </>
    //         ) : 
    //         // new Date(user?.subscription?.endDate) >= new Date() ? (
    //         //   <div>Subscribed</div>
    //         user?.subscription?.subscription ===
    //             subscription.subscribed ? 
    //             (<div>Subscribed</div>
    //         ) : (
    //           <>
    //             <div>Subscription Expired</div>
    //             <button onClick={onClickCheckout}>
    //               {loading && <Spinner />}
    //               Subscribe
    //             </button>
    //           </>
    //         )}

    //         {/* {new Date() <= new Date(user?.subscription?.endDate) ? (
    //           <div>Subscribed</div>
    //         ) : user?.subscription?.subscription !== subscription.trial ? (
    //           <div>Subscription Ended</div>
    //         ) : (
    //           <>
    //             <div className="user_profile_name_desc">
    //               {daysLeft > 0
    //                 ? `${daysLeft} days free trial left`
    //                 : "Trial period has ended, subscribe now!"}
    //             </div>

    //           </>
    //         )} */}
    //       </div>
    //     </div>
    //     <div className="mt-2 flex text-[#7D7A7A] text-xs justify-start items-center gap-3 font-[400]">
    //       <div style={{ width: "16px" }}>
    //         <svg className="mx-2" width="100%" viewBox="0 0 16 16" fill="none">
    //           <path
    //             d="M1.10156 4.09375V11.9128L5.01108 8.00327L1.10156 4.09375Z"
    //             fill="#947B7B"
    //           />
    //           <path
    //             d="M1.87891 3.31055L6.82842 8.26006C7.45353 8.88517 8.54373 8.88517 9.16884 8.26006L14.1184 3.31055H1.87891Z"
    //             fill="#947B7B"
    //           />
    //           <path
    //             d="M9.95017 9.03975C9.42989 9.56058 8.73693 9.84803 7.99982 9.84803C7.26272 9.84803 6.56975 9.56058 6.04948 9.03975L5.79293 8.7832L1.88672 12.6894H14.1129L10.2067 8.7832L9.95017 9.03975Z"
    //             fill="#947B7B"
    //           />
    //           <path
    //             d="M10.9883 8.00327L14.8978 11.9128V4.09375L10.9883 8.00327Z"
    //             fill="#947B7B"
    //           />
    //         </svg>
    //       </div>

    //       <div className="w-[90%] truncate">
    //         {email ?? "anon@appoyster.com"}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="">
    //     <div
    //       className="my-2 flex text-[#3F3B3C] text-sm font-[400] bg-[#D8E6FD] rounded-lg py-2 px-2 cursor-pointer"
    //       onClick={() => setShowPersonalDetails(true)}
    //     >
    //       <img className="mr-4 h-fit" src={account} alt="acc" />
    //       Account
    //     </div>
    //     <div className="my-3 flex text-[#3F3B3C] text-sm font-[400] bg-[#D8E6FD] rounded-lg py-2 px-2 cursor-pointer">
    //       <img className="ml-1 mr-4 h-fit" src={support} alt="Support" />
    //       Support
    //     </div>
    //   </div>
    //   <PersonalDetails
    //     user={user}
    //     open={showPersonalDetails}
    //     setOpen={setShowPersonalDetails}
    //   />
    // </div>
  );
};

export default LeftPane;
