import React from "react";
import "./Category.css";
import div from "../../assets/div.png";
import delivery from "../../assets/delivery.png";
import price from "../../assets/price.png";
import quality from "../../assets/quality.png";
function Category() {
  return (
    <div className="container">
      <div className="f">
        <img src={div} alt="" />
        <p>Why Choose US</p>
      </div>
      <div className="f1">
        <div className="f2">
          <img src={delivery} alt="" />
          <h1>Fast Delivery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="f2">
          <img src={price} alt="" />
          <h1>Cheap Price</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="f2">
          <img src={quality} alt="" />
          <h1>Premium Quality</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Category;
