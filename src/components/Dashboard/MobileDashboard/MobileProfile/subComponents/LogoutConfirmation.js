import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import logout from "../../../../../assets/Logout.svg";
import "./LogoutConfirmation.css"; // Import your CSS file

const LogoutConfirmation = ({ onConfirm }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      html: `
        <div class="sweetalert-title">
          Logout
          
        </div>
        <div>
        <hr class="divider" /></div>
        <div class="sweetalert-text">
          Are you sure you want to log out?
        </div>
      `,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, Logout",
      reverseButtons: true,
      customClass: {
        popup: "custom-popup", // Apply custom CSS class to the popup
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
        navigate("/auth");
      }
    });
  };

  return (
    <div>
      <div className="subBox" onClick={handleLogout}>
        <div className="class-1">
          <img src={logout} alt="icon" />
          <p className="mob-p">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
