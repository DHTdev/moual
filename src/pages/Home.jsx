import React from "react";
import Nav from "../navBar/Nav";
import { useTranslation } from "react-i18next";
import image1 from "../assets/unsplash_Fa9b57hffnM.jpg";
import image2 from "../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import image3 from "../assets/unsplash_vJP-wZ6hGBg.jpg";
import priceTag from "../assets/price-tag.png";
import handshake from "../assets/people.png";
import shield from "../assets/secure document.png";
import { LetContact } from "./LetContact";
import { Footer } from "../footer/Footer";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const ourPromiseIcons = [priceTag, handshake, shield];
  const whatWeDoIcons = [
    "fi fi-sr-square-terminal",
    "fi fi-sr-smartphone",
    "fi-sr-shield-check",
    "fi fi-sr-network-cloud",
    "fi fi-sr-bug",
    "fi-sr-users",
  ];
  const ourPromiseText = t("home.aboutUs.ourPromise", { returnObjects: true });
  const whyUs = t("home.aboutUs.whyUs.reasons", { returnObjects: true });
  const whatWeDo = t("home.services.services", { returnObjects: true });
  return (
    <>
      <header className="head">
        <Nav />
        <div className="headerContent">
          <h1 className="bigTitle">{t("home.header.title")}</h1>
          <p className="paragraph">{t("home.header.subtitle")}</p>
        </div>
      </header>
      <div className="aboutContent">
        <div className="rightSide">
          <h1 className="bigTitle">Modual</h1>
          <h3 className="aboutUs">{t("home.aboutUs.title")}</h3>
          <div className="images">
            <div className="leftImages">
              <img src={image1} alt="" loading="lazy" className="aboutUsImages" />
              <img src={image3} alt="" loading="lazy" className="aboutUsImages" />
            </div>
            <img src={image2} alt="" loading="lazy" className="aboutUsImages" />
          </div>
        </div>
        <div className="leftSide">
          <p className="paragraph">{t("home.aboutUs.text")}</p>
        </div>
      </div>

      <div className="ourPromise">
        {ourPromiseText.map((text, index) => (
          <div className="promise" key={index}>
            <div className="promiseContainer">
              <img src={ourPromiseIcons[index]} alt="promise-icon" loading="lazy" />
              <h2 className="promiseTitle">{text.title}</h2>
            </div>
            <p>{text.text}</p>
          </div>
        ))}
      </div>
      {/* why choose us section */}
      <div className="whyChooseUs">
        <h2 className="aboutUs">{t("home.aboutUs.whyUs.title")}</h2>
        <div className="reasons">
          {whyUs.map((reason, index) => (
            <p key={index} className="reason">
              {reason}
            </p>
          ))}
        </div>
      </div>
      {/* what we Do */}
      <div className="whatWeDo">
        <div className="whatWeDoContainer">
          <h2 className="bigTitleWhatWeDo">{t("home.services.title")}</h2>
          <div>
            <h4 className="subTitle">{t("home.services.subtitle")}</h4>
          </div>
          <div className="services">
            {whatWeDo.map((service, index) => (
              <div className="service" key={index}>
                <div className="serviceTitleContainer">
                  <i className={whatWeDoIcons[index]}></i>
                  <h3 className="serviceTitle">{service.title}</h3>
                </div>
                <div>
                  <p className="serviceParagraph">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* how we work */}
      <section id="howWeWork" className="howWeWork">
        <div className="overlay"></div>
        <div className="howWeWorkContainer">
          <h2 className="bigTitleWhatWeDo howWeWorkTitle">
            {t("home.howWeWork.title")}
          </h2>
          <h4 className="subTitle">{t("home.howWeWork.subtitle")}</h4>
          <div className="stepsContainer">
            <div className="steps">
              {t("home.howWeWork.steps", { returnObjects: true }).map(
                (step, index) => (
                  <div className="step" key={index}>
                    {" "}
                    <div className="step">
                      <p className="stepNumber">{index + 1}.</p>
                      <h3 className="stepTitle">
                        {step.title}
                      </h3>
                      <p className="stepText">
                        {step.text}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <hr />
      <LetContact />
      <Footer />
    </>
  );
};
