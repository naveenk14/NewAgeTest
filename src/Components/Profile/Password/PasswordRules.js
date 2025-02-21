import React from "react";
import tikIcon from '../../../assets/tikIcon.svg'

const PasswordRules = () => {
  return (
    <div className="col-5 password_contain" style={{ paddingLeft: "70px" }}>
      <h6>Password Must Contain</h6>
      <div className="mt-3">
        <img src={tikIcon} alt="" className="me-2" />
        <span>At least 8 characters</span>
      </div>
      <div className="mt-2">
        <img src={tikIcon} alt="" className="me-2" />
        <span>Lowercase letter (a-z)</span>
      </div>
      <div className="mt-2">
        <img src={tikIcon} alt="" className="me-2" />
        <span>Uppercase letter (A-Z)</span>
      </div>
      <div className="mt-2 number_contain">
        <img src={tikIcon} alt="" className="me-2" style={{opacity:".4"}}/>
        <span>Number (0-9)</span>
      </div>
      <div className="mt-2 number_contain">
        <img src={tikIcon} alt="" className="me-2" style={{opacity:".4"}}/>
        <span>Special characters (!"# %&'()*+,-./:;?@[\]^_`{}~)</span>
      </div>
    </div>
  );
};

export default PasswordRules;
