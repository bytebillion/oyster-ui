import React, { useState } from 'react';
import './FormOne.css';

const FormOne = ({ onNextButtonClick, handleDoneButtonClick }) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const handleNextClick = () => {
    // Call the callback provided by the parent component
    onNextButtonClick();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className='login-form-head'>Lets Personalise Your<br/> <span className='highlight'>Writing</span> Experience</h2>
        <h3 className='login-form-head-2'>Start by telling us your writing needs.</h3>
        <h1 className='login-form-head-3'>Most of my writing is for:</h1>
        
        <div className="login-buttons-container">
          <button
            className={` ${activeButton === 1 ? 'active' : ''} button-login`}
            onClick={() => handleButtonClick(1)}
          >
            School
          </button>
          <button
            className={` ${activeButton === 2 ? 'active' : ''} button-login`}
            onClick={() => handleButtonClick(2)}
          >
            Work
          </button>
          <button
            className={` ${activeButton === 3 ? 'active' : ''} button-login`}
            onClick={() => handleButtonClick(3)}
          >
            Blogger
          </button>
        </div>

        <div className="login-buttons-container-2">
          <button onClick={()=> handleDoneButtonClick()} className='button-later-form'>
            Later
          </button>
          <button className='button-next-form' onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormOne;