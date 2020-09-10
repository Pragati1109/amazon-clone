import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__option">
        <span className="footer__title">Get to Know Us</span>
        <div className="footer__column">
          <span>About Us</span>
          <span>Careers</span>
          <span>Press Releases</span>
          <span>Amazon Cares</span>
          <span>Gift a Smile</span>
        </div>
      </div>
      <div className="footer__option">
        <span className="footer__title">Connect with Us</span>
        <div className="footer__column">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
      </div>
      <div className="footer__option">
        <span className="footer__title">Make Money with Us</span>
        <div className="footer__column">
          <span>Sell on Amazon</span>
          <span>Sell under Amazon Accelerator</span>
          <span>Become an Affiliate</span>
          <span>Fulfilment by Amazon</span>
          <span>Advertise Your Products</span>
          <span>Amazon Pay on Merchants</span>
        </div>
      </div>
      <div className="footer__option">
        <span className="footer__title">Let Us Help You</span>
        <div className="footer__column">
          <span>Covid-19 and Amazon</span>
          <span>Your Account</span>
          <span>Returns center</span>
          <span>100% Purchase Protection</span>
          <span>Amazon App Download</span>
          <span>Amazon Assistant Download</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
