import React from "react";
import phone from "../../assets/bigphone.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="container">
      <div className="b">
        <div>
          <p>Mobile</p>
          <h1>Backcover</h1>
          <h2>Tempered Glass</h2>
          <button>Shop all !</button>
        </div>
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

export default Hero;
