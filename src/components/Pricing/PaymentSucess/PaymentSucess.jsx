import React from "react";
import "./PaymentSucess.css";
import { Modal, Button } from "react-bootstrap";
import pay from "../../../assets/pay.svg";
// import { Link } from "react-router-dom";
function PaymentSucess({ handlePaymentDone }) {
  return (
    <Modal show={handlePaymentDone} onHide={handlePaymentDone} centered>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col text-center d-flex justify-content-center">
            <img className="img-fluid w-50" src={pay} alt="img-fluid" />
          </div>
        </div>
        <div className="row PaymentSucess-txt d-flex justify-content-center">
          Payment Successful
        </div>
        <div className="row pt-4 pb-5">
          <span className="col d-flex justify-content-center text-decoration-none">
            <Button
              className="PaymentSucess-Btn px-4"
              onClick={handlePaymentDone}
            >
              Go Back to Home Screen
            </Button>
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default PaymentSucess;
