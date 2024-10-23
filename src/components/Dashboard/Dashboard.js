import React, { useEffect, useState } from "react";
import LeftPane from "./LeftPane";
import Main from "./Main";
import { useMediaQuery } from "@chakra-ui/react";
import MobileDashboard from "./MobileDashboard";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [userData, setUserData] = useState(null);

  const params = new URLSearchParams(location.search);
  const paymentSuccess = params.get('razorpay_payment_id');

  useEffect(() => {
    navigate("/dashboard")
    // eslint-disable-next-line
  }, [paymentSuccess])



  return (
    <div className="flex h-[100%] w-[100%]" style={{backgroundColor:"#ECECEC"}}>
      {isMobile ? (
        <MobileDashboard userData={userData} setUserData={setUserData} />
      ) : (
        <>
          <LeftPane userData={userData} setUserData={setUserData}  />
          <Main userData={userData} setUserData={setUserData} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
