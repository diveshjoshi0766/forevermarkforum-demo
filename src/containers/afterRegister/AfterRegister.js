import React from "react";
import "./AfterRegister.css";

function AfterRegister() {
  return (
    <div className="coming__soon">
      <div className="container">
        <div className="coming-soon-content text-center">
          {/* <img src={Logo} alt="logo" className="fullwidth" /> */}
          <p className="fullwidth" style={{fontFamily: "'PT Sans Narrow', sans-serif", fontSize: "8vh", fontWeight: "100"}}>Thank you for registering!</p>
          <p className="fullwidth" style={{fontFamily: "'PT Sans Narrow', sans-serif"}}>All details pertaining to the Form will be shared<br/>on the registered email id.</p>
          <p className="fullwidth" style={{fontFamily: "'PT Sans Narrow', sans-serif", fontSize: "4vh"}}>See you on 24th August, 2021!</p>
          {/* <p className="coming-soon-white">Coming Soon</p> */}
        </div>
      </div>
    </div>
  );
}

export default AfterRegister;