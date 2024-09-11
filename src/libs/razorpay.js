import axios from "./axios";
import config from "./config";
// import { paymentStatus } from "./constants";
import { subscription as subscriptionStatus } from "./constants";
import { toast } from "react-toastify";

export async function openRazorpayModal(
  planId,
  applyCoupon,
  setPaymentDone = () => { },
  setUser = () => { },
  // setErrorMessage = () => { },
  navigate,
  isLtd
) {
  try {
    const response = await axios.post("/api/payment/checkout", {
      planId,
      applyCoupon
    });

    if (response.status === 200) {
      const subscription = response?.data?.subscription;
      const user = response?.data?.user;
      if (response?.data.error === true && response?.data.message.statusCode === 500) {
        // setErrorMessage(response?.data.message.error.description)
        toast.error(response?.data.message.error.description);
      }

      if (subscription) {
        var options = {
          key: config.razorpay.key,
          subscription_id: subscription?.id,
          // callback_url: `${config.backend.baseUrl}/payment/callback`,
          prefill: {
            name: user?.name, //your customer's name
            email: user?.email,
            // contact: user?.phone,
          },

          notes: { ...subscription?.notes, subscriptionId: subscription?.id, applyCoupon: applyCoupon }, // IMPORTANT!!! DO NOT REMOVE THIS
          theme: {
            color: "#3399cc",
          },
          modal: {
            ondismiss: function () {
              console.log("Checkout form closed");
            },
          },
          handler: async function (response) {
            // only executed when payment is success
            // alert(response.razorpay_payment_id);
            // console.log("payment response", response, user);

            const verifyPaymentRes = await axios.post(
              `/api/payment/verify?paymentId=${response?.razorpay_payment_id}`
            );
            const updatedUser = verifyPaymentRes?.data?.user;
            if (
              updatedUser?.subscription?.subscription ===
              subscriptionStatus.subscribed
            ) {
              setUser(updatedUser);
              setPaymentDone(true);
            }

            // window.location.replace(
            //   `${config.frontend.url}/payment?paymentId=${response?.razorpay_payment_id}`
            // );
          },
        };
        const rzp = new window.Razorpay(options);
        rzp?.open();
      }
    }
  } catch (err) {
    console.log(err);
    if (applyCoupon && !isLtd) {
      navigate(`/auth?couponcode=${applyCoupon}`)
    } else if (applyCoupon && isLtd) {
      navigate(`/auth?couponcodeLtd=${applyCoupon}`)
    } else {
      navigate(`/auth`)
    }
  }
}
