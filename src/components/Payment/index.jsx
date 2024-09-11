import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext, UserDispatchContext } from "../context/user";
// import axios from "../../libs/axios";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailed from "./PaymentFailed";
// import { paymentStatus, subscription } from "../../libs/constants";

export default function Payment() {
  // const location = useLocation();
  // const query = new URLSearchParams(location?.search);
  // const paymentId = query.get("paymentId");

  // const setUser = useContext(UserDispatchContext);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [isPaymentSucess, setIsPaymentSuccess] = useState(true); // we are coming here from razorpay modal only when payment is success

  // async function handlePaymentId() {
  //   const response = await axios.get("/api/user");
  //   console.log("Payment", response);
  //   if (response?.data) {
  //     const user = response?.data?.data;
  //     const payment = user?.payments?.find((payment) => {
  //       console.log(payment?.id, paymentId);
  //       return payment?.id === paymentId;
  //     });

  //     console.log(payment);

  //     if (payment && payment?.status === paymentStatus.success) {
  //       setUser(user);
  //       setIsPaymentSuccess(true);
  //     }
  //     console.log("user", user);
  //   }
  // }

  function onClickBackToHome() {
    navigate("/dashboard");
  }

  // useEffect(() => {
  //   handlePaymentId();
  // }, []);

  return (
    <div>
      {isPaymentSucess ? <PaymentSuccess /> : <PaymentFailed />}
      <button onClick={onClickBackToHome}>back to home</button>
    </div>
  );
}
