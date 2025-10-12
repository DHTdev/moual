import React from "react";
import firstImage from "../assets/first-image.jpg";
import secondImage from "../assets/second-image.jpg";
import Nav from "../navBar/Nav";
import { useTranslation } from "react-i18next";
import SoftWareDevelopment from "../assets/unsplash_Fa9b57hffnM.jpg";
import CloudServices from "../assets/cloud-services.jpg";
import CyberSecurity from "../assets/cyber-security.jpg";
import ITConsulting from "../assets/it-consulting.jpg";
import MobileAppDevelopment from "../assets/mobile-app-development.jpg";
import NetworkSolutions from "../assets/network-solutions.jpg";
import { LetContact } from "./LetContact";
import { Footer } from "../footer/Footer";

export const Services = () => {

    const { t, i18n } = useTranslation();
    const servicesImages = [SoftWareDevelopment, MobileAppDevelopment, CyberSecurity, CloudServices, ITConsulting, NetworkSolutions];
  return (
    <>
      <header>
        <Nav />
        <div className="servicesHeader">
          <div>
            <div className="leftSection">
              <h1 className="bigTitle">{t("Services.title")}</h1>
              <p className="paragraph">
                {t("Services.subtitle")}
              </p>
            </div>
            <div className="headerImg">
              <img src={firstImage} alt="firstImage" className="first-image" />
              <img
                src={secondImage}
                alt="secondImage"
                className="second-image"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="servicesContent">
        <div className="servicesContainer">
          <div className="services">
            {t("Services.services", { returnObjects: true }).map((service, index) => (
            <div className={`service ${index % 2 === 0 ? "reverse" : ""}`} key={index}>
              <div className="leftSection">
                <img src={servicesImages[index]} alt="" />
              </div>
              <div className="rightSection">
                <h2 className="serviceTitle">{service.title}</h2>
                <p className="paragraph">
                  {service.text}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      <LetContact />
      <Footer />
    </>
  );
};

