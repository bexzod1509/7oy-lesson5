import React from "react";
import "./Banner.css";
import div from "../../assets/div.png";
import banner from "../../assets/banner.png";
function Banner() {
  return (
    <div className="container">
      <div className="d">
        <img src={div} alt="" />
        <p>about us</p>
        <h1>
          If you’re looking for a Premium Quality Tempered Glass or Back-cover
          for your Device{" "}
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </h2>
        <img style={{ marginTop: "80px" }} src={banner} alt="" />
      </div>
    </div>
  );
}

export default Banner;
