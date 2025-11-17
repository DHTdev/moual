import React from "react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {

  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="footer">
        <hr />
        <div className="footerContainer">
          <div className="footerLogo" style={{maxWidth:"200px"}}>
            <img src={logo} alt="logo" className="logo" style={{maxWidth:"65%"}}  />
          </div>
          <div className="contactUs">
            <h2 className="bigTitle">Contact Us</h2>
            <ul>
              <li className="paragraph">
                3 RUE BOUTRIKA 3eme ETAGE N6 MESNANA
              </li>
              <li className="paragraph">info@modual.tech</li>
              <li className="paragraph">+212 607-654550</li>
            </ul>
          </div>
          <div className="usefulLink">
            <h2 className="bigTitle">Useful Links</h2>
            <ul>
              <Link to="/">
              <li className="paragraph">{t("nav.0")}</li>
              </Link>
              <Link to="/services">
              <li className="paragraph">{t("nav.1")}</li>
              </Link>
              <Link to="/contact">
              <li className="paragraph">{t("nav.3")}</li>
              </Link>
            </ul>
          </div>
          <div className="contactInfo">
            <h2 className="bigTitle">Social Media</h2>
            <div className="socialIcons">
              <i className="fi fi-brands-facebook"></i>
              <i className="fi fi-brands-twitter"></i>
              <i className="fi fi-brands-linkedin"></i>
              <i className="fi fi-brands-instagram"></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p className="paragraph">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
