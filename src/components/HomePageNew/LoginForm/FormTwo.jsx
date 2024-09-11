import React from "react";
import "./FormTwo.css";

const FormTwo = ({ onDoneButtonClick }) => {
  const handleDoneClick = () => {
    onDoneButtonClick();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-form-head">Tell us about your team</h2>
        <form className="login-form-fields">
          <div>
            <label className="label-dropdown" htmlFor="selectOption1">
              My primary function is
            </label>
            <select
              className="dropdowwn-form"
              id="selectOption1"
              name="selectOption1"
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Operations">Operations</option>
              <option value="Legal">Legal</option>
              <option value="Quality">Quality</option>
              <option value="IT">IT</option>
              <option value="Software Development">Software Development</option>
              <option value="Production/Manufacturing">
                Production/Manufacturing
              </option>
              <option value="Advertising">Advertising</option>
              <option value="Business Development">Business Development</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Administration">Administration</option>
              <option value="Content Writer">Content Writer</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          <div>
            <label className="label-dropdown" htmlFor="selectOption2">
              My Company size is
            </label>
            <select
              className="dropdowwn-form"
              id="selectOption2"
              name="selectOption2"
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="1-49">1-49</option>
              <option value="50-499">50-499</option>
              <option value="500-999">500-999</option>
              <option value="1000+">1000+</option>
            </select>
          </div>

          <div>
            <label className="label-dropdown" htmlFor="selectOption3">
              My role is
            </label>
            <select
              className="dropdowwn-form"
              id="selectOption3"
              name="selectOption3"
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="individualContributor">
                Individual Contributor
              </option>
              <option value="manager">Manager</option>
              <option value="seniorManager">Senior Manager</option>
              <option value="vicePresident">Vice President</option>
              <option value="director">Director</option>
              <option value="head">Head</option>
              <option value="ceo">CEO</option>
              <option value="cfo">CFO</option>
              <option value="cxo">CXO</option>
            </select>
          </div>
        </form>
        <div className="login-buttons-container-2">
          <button className="button-later-form" onClick={()=> onDoneButtonClick()}>Later</button>
          <button className="button-next-form" onClick={handleDoneClick}>
            {/* On cicking this button,it will navigates to /dashboard i.e. navigate("/dashboard"); */}
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;