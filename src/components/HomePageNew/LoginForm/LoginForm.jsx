import React, { useState } from 'react';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo';
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [showFormTwo, setShowFormTwo] = useState(false);
  const navigate = useNavigate();


  const handleNextButtonClick = () => {
    setShowFormTwo(true);
  };

  const handleDoneButtonClick = () => {
    // Navigate to the Dashboard page
    navigate("/dashboard");
  };

  return (
    <div>
      {showFormTwo ? (
        <FormTwo onDoneButtonClick={handleDoneButtonClick} />
      ) : (
        <FormOne onNextButtonClick={handleNextButtonClick} handleDoneButtonClick={handleDoneButtonClick}/>
      )}
    </div>
  );
};

export default LoginForm;