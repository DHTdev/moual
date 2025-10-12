import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import anglais from "../assets/united-kingdom.png";
import dutsh from "../assets/netherlands.png";
const Nav = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const avtiveMenu = () => {
    let menu = document.getElementById("hamburger");
    menu.classList.toggle("active");

    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  };

  return (
    <div className="navBar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav-links" id="nav-links">
        <Link to="/">
          <li>{t("nav.0")}</li>
        </Link>
        <Link to="/services">
          <li>{t("nav.1")}</li>
        </Link>
        <Link to="/jobs">
          <li>{t("nav.2")}</li>
        </Link>

        <Link to="/contact">
          <button className="contactUsButton" id="contact">
            {t("nav.3")}
          </button>
        </Link>
      </ul>
      <div className="contactAndLanguage">
        <Link to="/contact">
          <button className="contactUsButton" >
            {t("nav.3")}
          </button>
        </Link>
        <div className="languages">
          <img
            src={anglais}
            alt=""
            onClick={() => changeLanguage("en")}
          />
          <img
            src={dutsh}
            alt=""
            onClick={() => changeLanguage("du")}
          />
        </div>
      </div>
      <div
        class="hamburger"
        id="hamburger"
        onClick={() => {
          avtiveMenu();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Nav;
