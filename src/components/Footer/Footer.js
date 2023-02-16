import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="socil">
          <a href="https://www.facebook.com/same7.hammad/">
            <i className="fa fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/sameh-hammad-b20019246/">
            <i className="fa fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/SamehHammad17">
            <i className="fa fa-brands fa-twitter"></i>
          </a>
          <a href="http://wa.me/+201112967597">
            <i className="fa fa-brands fa-whatsapp-square"></i>
          </a>
          <a href="https://github.com/SamehHammad">
            <i className="fa fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
