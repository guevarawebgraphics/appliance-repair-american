import React from "react";

const MobileNavbar: React.FC = () => {
    return (
      
<nav className="navbar navbar-light bg-white shadow-sm fixed-bottom w-100">
  <div className="container-fluid d-flex justify-content-around align-items-center py-2">
    
    {/* Home */}
    <button className="btn d-flex flex-column align-items-center">
      <i className="bi bi-house-door fs-4"></i>
      <span className="small">Home</span>
    </button>

    {/* Calendar */}
    <button className="btn d-flex flex-column align-items-center">
      <i className="bi bi-calendar-event fs-4 text-muted"></i>
      <span className="small text-muted">Calendar</span>
    </button>

    {/* CoPilot */}
    <button className="btn d-flex flex-column align-items-center">
      <i className="bi bi-headset fs-4 text-muted"></i>
      <span className="small text-muted">CoPilot</span>
    </button>

    {/* Analytics */}
    <button className="btn d-flex flex-column align-items-center">
      <i className="bi bi-bar-chart fs-4 text-muted"></i>
      <span className="small text-muted">Analytics</span>
    </button>

    {/* Guild */}
    <button className="btn d-flex flex-column align-items-center">
      <i className="bi bi-share fs-4 text-muted"></i>
      <span className="small text-muted">Guild</span>
    </button>

  </div>
</nav>

  );
};

export default MobileNavbar;
