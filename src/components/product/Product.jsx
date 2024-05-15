import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
function Product({ data }) {
  let products = data?.map((el) => (
    <div key={el.id} className="c1">
      <NavLink to={`/product/${el.id}`}>
        <img src={el.images[0]} alt="" />
      </NavLink>
      <p>sale !</p>
      <h1>{el.title}</h1>
    </div>
  ));
  return (
    <div className="container">
      <div className="c">{products}</div>
    </div>
  );
}

export default Product;
