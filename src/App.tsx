import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import BottomBar from "./components/BottomBar";
import likeIcon from "./assets/like.png";
import barGraphIcon from "./assets/bar_graph.png";
import washingMachine from "./assets/washing-machine.png";
import earnIcon from "./assets/earn-img.png";
import rewardIcon from "./assets/reward.png";

import "./index.css";

const App: React.FC = () => {
  return (
    <div className="bg-light d-flex justify-content-center">
      {/* Wrapper to Limit Width for Mobile */}
      <div className="w-100" style={{ maxWidth: "480px" }}> {/* Adjust width for mobile */}

        {/* Navbar */}
        <Navbar />

         {/* Profile */}
        <Profile />


        

        <div className="container mt-4">
          <div className="row g-3 align-items-stretch">
            <div className="col">
              <h4 className="semi-bold">June, 12</h4>
            </div>
            <div className="col"  style={{ textAlign: "right" }}>
              <p className="text-muted">Last 28 days</p>
            </div>
          </div>
        </div>

        {/* Ensure Equal Height for Cards */}
        <div className="container mt-2">
          <div className="row g-3 align-items-stretch">
            
            {/* Copilot Card */}

            <div className="col-6">
              <div className="bg-white shadow-sm rounded-3 p-4 d-flex align-items-center justify-content-center gap-2 h-100">
                {/* headset Icon */}
                <i className="bi bi-headset" style={{ fontSize: "32px" }}></i>

                {/* Text Aligned with Icon */}
                <p className="text-muted mb-0">Copilot</p>
              </div>
            </div>



            
          {/* Jobs Booked Card */}
          <div className="col-6">
            <div className="bg-white shadow-sm rounded-3 p-4 d-flex align-items-center justify-content-center gap-2 h-100">
              {/* ✅ Calendar Icon */}
              <i className="bi bi-calendar-date" style={{ fontSize: "32px" }}></i>

              {/* ✅ Text Aligned with Icon */}
              <p className="text-muted mb-0">3 Jobs <br /> Booked Today</p>
            </div>
          </div>


            
            

          {/* New Job Request Card */}
          <div className="col-6">
            <div className="bg-white shadow-sm rounded-3 p-4 d-flex flex-column justify-content-center h-100">
              
              {/* 2-Column Layout Inside the Box */}
              <div className="row g-0 h-100 align-items-center">
                
                {/* Left Side: Icon + Amount */}
                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                    <img src={likeIcon} alt="Like" className="w-25 mb-2" />
                  <p className="fw-bold fs-5 mb-0 primary-font">$100</p>
                </div>

                {/* Right Side: Description */}
                <div className="col-6 d-flex flex-column align-items-center justify-content-center text-center">
                  <p className="text-muted mb-1">New Job Request</p>
                  <p className="text-secondary small mb-0">Dryer, no Heat, Stuart</p>
                </div>

              </div>
            </div>
          </div>

            


          
          {/* Earnings Card */}
          <div className="col-6">
            <div className="bg-white shadow-sm rounded-3 p-4 d-flex flex-column justify-content-center h-100">
              
              {/* 2-Column Layout Inside the Box */}
              <div className="row g-0 h-100 align-items-center">
                
                {/* Left Side: Icon + Amount */}
                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                  <img src={barGraphIcon} alt="Graph" className="w-25 me-2" />
                  <p className="fw-bold fs-5">$2150</p>
                </div>

                {/* Right Side: Description */}
                <div className="col-6 d-flex flex-column align-items-center justify-content-center text-center">
                    <p className="text-muted">Earnings</p>
                    {/* <img src={upIcon} alt="Up Icon" className="w-20 mt-1 mx-auto" /> */}
                    
                  <i className="bi bi-arrow-up-circle-fill text-success w-20 mx-auto" style={{ fontSize: "20px", width: "20px", height: "20px" }} ></i>
                </div>

              </div>
            </div>
          </div>

          
          </div>
        </div>


        <div className="container mt-4">
            <h5 className="semi-bold">Latest Update</h5>
        </div>

        {/* Card Container */}
        <div className="container mt-4">
          <div className="bg-white shadow-sm rounded-3 p-4 position-relative h-100">
            
            {/* Row with Image & Text */}
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={washingMachine} alt="Washing Machine" className="mt-1 mx-auto" style={{ height: "70px" }} />
              </div>

              <div className="col-8 align-items-center justify-content-center">
                <label className="fw-bold">Next Job in 3 hours.</label>
                <p className="text-muted">
                  Be prepared and Kick Ass. Watch suggested Repair videos, wash your butt and put on the uniform..
                </p>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-secondary border-2" style={{ borderColor: "#BCC1CA" }} />

            {/* ✅ Icons + Arrow Down in One Row (Ensuring Equal Height) */}
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Left Side: Icon Buttons */}
              <div className="d-flex gap-3 align-items-center">
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar text-success text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-hand-thumbs-up text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-youtube text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-info-circle-fill text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
              </div>

              {/* ✅ Right Side: Arrow Down (Properly Aligned) */}
              <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
              </button>

            </div>
            
          </div>
        </div>


        {/* Card Container */}
        <div className="container mt-4">
          <div className="bg-white shadow-sm rounded-3 p-4 position-relative h-100">
            
            {/* Row with Image & Text */}
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={rewardIcon} alt="Washing Machine" className="mt-1 mx-auto" style={{ height: "70px" }} />
              </div>

              <div className="col-8 align-items-center justify-content-center">
                <label className="fw-bold">Next Job in 3 hours.</label>
                <p className="text-muted">
                  Be prepared and Kick Ass. Watch suggested Repair videos, wash your butt and put on the uniform..
                </p>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-secondary border-2" style={{ borderColor: "#BCC1CA" }} />

            {/* ✅ Icons + Arrow Down in One Row (Ensuring Equal Height) */}
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Left Side: Icon Buttons */}
              <div className="d-flex gap-3 align-items-center">
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar text-success text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-hand-thumbs-up text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-youtube text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-info-circle-fill text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
              </div>

              <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
              </button>


            </div>
            
          </div>
        </div>

        
        
        {/* Card Container */}
        <div className="container mt-4">
          <div className="bg-white shadow-sm rounded-3 p-4 position-relative h-100">
            
            {/* Row with Image & Text */}
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={washingMachine} alt="Washing Machine" className="mt-1 mx-auto" style={{ height: "70px" }} />
              </div>

              <div className="col-8 align-items-center justify-content-center">
                <label className="fw-bold">Next Job in 3 hours.</label>
                <p className="text-muted">
                  Be prepared and Kick Ass. Watch suggested Repair videos, wash your butt and put on the uniform..
                </p>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-secondary border-2" style={{ borderColor: "#BCC1CA" }} />

            {/* ✅ Icons + Arrow Down in One Row (Ensuring Equal Height) */}
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Left Side: Icon Buttons */}
              <div className="d-flex gap-3 align-items-center">
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar text-success text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-hand-thumbs-up text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-youtube text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-info-circle-fill text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
              </div>

              {/* Right Side: Arrow Down (Properly Aligned) */}
              <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
              </button>

            </div>
            
          </div>
        </div>

        

        <div className="container mt-4">
          <button className="btn btn-link p-0 d-flex align-items-center justify-content-center mx-auto">
              <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
            </button>
        </div>


        

        <div className="container mt-4">
            <h5 className="semi-bold">Earn While you Learn</h5>
        </div>



                
        {/* Card Container */}
        <div className="container mt-4">
          <div className="bg-white shadow-sm rounded-3 p-4 position-relative h-100">
            
            {/* Row with Image & Text */}
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={earnIcon} alt="Washing Machine" className="mt-1 mx-auto" style={{ height: "70px" }} />
              </div>

              <div className="col-8 align-items-center justify-content-center">
                <label className="fw-bold">Dryer Repair: Squeaking, Squealing, Thu...</label>
                <p className="text-muted">
                 First 75 days 1 hours
                </p>
              </div>
            </div>

            {/* ✅ Icons + Arrow Down in One Row (Ensuring Equal Height) */}
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Left Side: Icon Buttons */}
              <div className="d-flex gap-3 align-items-center">
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar text-success text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-hand-thumbs-up text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-youtube text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-info-circle-fill text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
              </div>

              {/* Right Side: Arrow Down (Properly Aligned) */}
              <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
              </button>

            </div>
            
          </div>
        </div>

        
                {/* Card Container */}
        <div className="container mt-4">
          <div className="bg-white shadow-sm rounded-3 p-4 position-relative h-100">
            
            {/* Row with Image & Text */}
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={earnIcon} alt="Washing Machine" className="mt-1 mx-auto" style={{ height: "70px" }} />
              </div>

              <div className="col-8 align-items-center justify-content-center">
                <label className="fw-bold">Dryer Repair: Squeaking, Squealing, Thu...</label>
                <p className="text-muted">
                 First 75 days 1 hours
                </p>
              </div>
            </div>

            {/* ✅ Icons + Arrow Down in One Row (Ensuring Equal Height) */}
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Left Side: Icon Buttons */}
              <div className="d-flex gap-3 align-items-center">
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar text-success text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-hand-thumbs-up text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-youtube text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-info-circle-fill text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
              </div>

              {/* Right Side: Arrow Down (Properly Aligned) */}
              <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
              </button>

            </div>
            
          </div>
        </div>

        

                {/* Card Container */}
        <div className="container mt-4">
          <div className="bg-white shadow-sm rounded-3 p-4 position-relative h-100">
            
            {/* Row with Image & Text */}
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={earnIcon} alt="Washing Machine" className="mt-1 mx-auto" style={{ height: "70px" }} />
              </div>

              <div className="col-8 align-items-center justify-content-center">
                <label className="fw-bold">Dryer Repair: Squeaking, Squealing, Thu...</label>
                <p className="text-muted">
                 First 75 days 1 hours
                </p>
              </div>
            </div>

            {/* ✅ Icons + Arrow Down in One Row (Ensuring Equal Height) */}
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Left Side: Icon Buttons */}
              <div className="d-flex gap-3 align-items-center">
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar text-success text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-hand-thumbs-up text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-youtube text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
                <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-info-circle-fill text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
                </button>
              </div>

              {/* Right Side: Arrow Down (Properly Aligned) */}
              <button className="btn btn-link p-0 d-flex align-items-center justify-content-center">
                <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
              </button>

            </div>
            
          </div>
        </div>


                

        <div className="container mt-4"  style={{ marginBottom: "150px" }}>
          <button className="btn btn-link p-0 d-flex align-items-center justify-content-center mx-auto">
              <i className="bi bi-chevron-down text-secondary" style={{ fontSize: "24px", width: "24px", height: "24px" }}></i>
            </button>
        </div>



        
        
        
        <BottomBar />

        
      </div>
    </div>
  );
};

export default App;
