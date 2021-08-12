import React from "react";
import "./comingsoon.css";
import Logo from "../../images/logo.png";

function CommingSoon() {
  return (
    <div className="coming__soon">
      <div className="container">
        <div className="coming-soon-content text-center">
          <img src={Logo} alt="logo" className="fullwidth" />
          <p className="coming-soon-white">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

export default CommingSoon;
