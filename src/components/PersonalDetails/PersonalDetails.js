import React, { useEffect, useState } from "react";
import "./PersonalDetails.css";
import Modal from "react-modal";
import VerficationPage from "./VerficationPage";
import axios from "../../libs/axios";
import { toast } from "react-toastify";
import moment from "moment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};
const PersonalDetails = ({ open, setOpen, user }) => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setNumber(user.phoneNumber);
      setEmail(user.email);
      setName(user.name);
      setDob(user.dateOfBirth);
    }
  }, [user]);

  const sendDataToServer = async () => {
    try {
      const res = await axios.post("/api/user", {
        name,
        phone: number,
        dob,
      });
      if (res.status === 200) {
        if (user.phoneNumber === number)
          toast.success("Profile Updated Successfully");
        else toast.success("OTP sent to your phone number");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // format Date object to 2023-02-09 format using moment
  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
    >
      <div className="personall_details_form">
        <h1>Personal Details</h1>
        <div className="personal_details_input">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="personal_details_input">
          <input
            type="date"
            value={formatDate(dob)}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="personal_details_input">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={true}
            className="cursor-not-allowed text-gray-500"
          />
        </div>{" "}
        <div className="phone_input_box">
          <input
            value={number}
            onChange={(e) => {
              if (isNaN(e.target.value)) return;
              if (e.target.value.length <= 10) {
                setNumber(e.target.value);
              }
            }}
            type="text"
            className="createappointment_input_phone"
            placeholder="Enter phone number"
          />
          <span className="country_code">+91</span>
        </div>
        <button
          onClick={async () => {
            const res = await sendDataToServer();
            if (res) {
              if (user.phoneNumber !== number) setModalOpen(true);
              else setOpen(false);
            }
          }}
        >
          Continue
        </button>
        <VerficationPage
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          number={number}
          setOpen={setOpen}
        />
      </div>
    </Modal>
  );
};

export default PersonalDetails;
