import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Cowboys</div>
        <div className="footer_copyright">KhanDoors Media 2018</div>
      </Fade>
    </footer>
  );
};

export default Footer;
