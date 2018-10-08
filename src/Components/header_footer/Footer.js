import React from "react";
import { CityLogo } from "../UI/Icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <h1>Footer</h1>
      <div className="footer_logo">
        <CityLogo width="70px" height="70px" link linkTo="/" />
      </div>
      <div className="footer_discl">
        Manchester City 2018. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
