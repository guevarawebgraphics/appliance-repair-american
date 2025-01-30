import React from "react";
import profileImage from "../assets/profile.png";
import { FaStar } from "react-icons/fa"; 

const Profile: React.FC = () => {
  return (
    <div className="container mt-3" style={{ paddingTop: "80px" }}>
      <div className="card p-3 border-0 shadow-sm rounded-3">
        <div className="d-flex align-items-start gap-3">
          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "70px", height: "70px", objectFit: "cover" }}
          />

          {/* Profile Details */}
          <div className="w-100">
            {/* Name & Stars Row */}
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="mb-0">Mark Oliver</h3>
              
              {/* Star Rating */}
              <div className="d-flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-warning" size={20} />
                ))}
              </div>
            </div>

            {/* Other Info */}
            <p className="mb-0 text-muted">Master Tech</p>
            <p className="mb-0 text-muted">Stuart, FL 34994</p>
            <p className="mb-0 text-muted">Services Martin & St. Lucie County</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
