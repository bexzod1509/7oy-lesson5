import React from "react";
import "./Footer.css";
import logomini from "../../assets/logomini.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="g">
          <div className="g1">
            <img src={logomini} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h1>Contact us</h1>
            <p>E: info@example.com</p>
            <p>P: +94 7670000000</p>
            <p>A: 123 Hospital rd,</p>
            <p>Kalubowila, Dehiwela</p>
          </div>
          <div>
            <h1>Useful links</h1>
            <p>Shop All </p>
            <p>Tempered Glass</p>
            <p>Back-cover</p>
            <p>About Us</p>
          </div>
          <div>
            <div className="g2">
              <img src={whatsapp} alt="" />
              <h4>Whatsapp</h4>
            </div>
            <div className="g2">
              <img src={facebook} alt="" />
              <h4>Facebook</h4>
            </div>
            <div className="g2">
              <img src={instagram} alt="" />
              <h4>Instargram</h4>
            </div>
            <div className="g2">
              <img src={tiktok} alt="" />
              <h4>Tik Tok</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
