import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./UpgradePlanModal.css";
import gems from "../../../assets/Gems.svg";
import upgrade from "../../../assets/upgrade.svg";
import { Link } from "react-router-dom";
function UpgradePlanModal({ handleupgrade }) {
  return (
    <Modal
      size="lg"
      className=""
      show={handleupgrade}
      onHide={handleupgrade}
      centered
    >
      <div className="container-fluid ">
        <div className="row ps-4">
          <div className="col">
            <div className="UpgradePlanModal-head pt-5 pb-4">
              Your 15 days trial period is over!
            </div>
            <div className="UpgradePlanModal-txt">
              Upgrade to premium now to enjoy unlimited features.
            </div>
            <Link
              to="/pricing"
              className="d-flex justify-content-start text-decoration-none py-5"
            >
              <Button
                className="UpgradePlanModal-Btn px-5 py-1"
                onClick={handleupgrade}
              >
                Upgrade Now
              </Button>
              <img className="UpgradePlanModal-gems-img " src={gems} alt=""/>
            </Link>
          </div>
          <div className="col">
            <img className="img-fluid" src={upgrade} alt="" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default UpgradePlanModal;
