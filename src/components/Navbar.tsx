import React from "react";
import logo from "../assets/logo.png";
import backIcon from "../assets/back.png";

const MobileNavbar: React.FC = () => {
  return (
 <nav className="navbar navbar-light bg-white shadow-sm fixed-top" style={{ height: "70px" }}> 
      <div className="container-fluid d-flex align-items-center justify-content-between position-relative" style={{ height: "100%" }}>
        
        {/* Back Button */}
        <button className="btn btn-link p-0" onClick={() => window.history.back()}>
          <img src={backIcon} alt="Back" style={{ height: "32px" }} />
        </button>

        {/* Centered Logo - Use Absolute Centering */}
        <img src={logo} alt="Logo" className="position-absolute start-50 translate-middle-x" style={{ height: "50px" }} />

        {/* Right Icons */}
        <div className="d-flex gap-3">
          <button className="btn btn-link p-0 d-flex text-black align-items-center justify-content-center">
            <i className="bi bi-plus-lg fs-4"></i>
          </button>
          <button className="btn btn-link p-0 d-flex text-black align-items-center justify-content-center">
            <i className="bi bi-bell fs-4"></i>
          </button>
          <button className="btn btn-link p-0 d-flex text-black align-items-center justify-content-center">
            <i className="bi bi-gear fs-4"></i>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default MobileNavbar;
