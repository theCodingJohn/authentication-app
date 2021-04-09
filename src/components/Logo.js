import React from "react";

import logo from "../assets/images/devchallenges.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="row">
        <div className="col">
          <img className="logo" src={logo} alt="devchallenges logo" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
