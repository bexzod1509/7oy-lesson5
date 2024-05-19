import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetSearchProductsQuery } from "../../context/productsApi";
import "./Navbar.css";
import logo from "../../assets/logo.png";
function Navbar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handlenavigate = (id) => {
    navigate(`/product/${id}`);
    setValue("");
  };
  let { data } = useGetSearchProductsQuery({ q: value });
  let Search = data?.products.map((el) => (
    <div onClick={() => handlenavigate(el.id)} key={el.id} className="items">
      <img src={el.images[0]} width={50} alt="" />
      <span>{el.title}</span>
    </div>
  ));
  return (
    <div className="container">
      <div className="a">
        <div className="a1">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Shop All</NavLink>
          <NavLink to={"/"}>Blog</NavLink>
        </div>
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <div className="a2">
          <NavLink to={"/contact"}>Contact Us</NavLink>
          <div className="a3">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="search"
              placeholder="Search Product"
            />
            {value.trim() && data?.products.length > 1 ? (
              <div className="module">{Search}</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
