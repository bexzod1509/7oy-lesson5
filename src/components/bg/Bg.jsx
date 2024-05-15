import React from "react";
import "./Bg.css";
import iphone from "../../assets/Phone.png";
function Bg() {
  return (
    <div className="container">
      <div className="e"></div>
      <div className="e1">
        <div>
          <h1>Shop Premium Tempered Glass in wholesale Price !</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
            <br />
            <br />
            LKR : 299
          </h2>
          <button>Shop Tempered Glass </button>
        </div>
        <img src={iphone} alt="" />
      </div>
    </div>
  );
}

export default Bg;
