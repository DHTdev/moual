import React from "react";
import { useTranslation } from "react-i18next";
import { Footer } from "../footer/Footer";

export const LetContact = () => {
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        };
  return (
    <>
      <div className="letContact">
        <div className="letContactContainer">
          <div>
            <h2 className="bigTitle">{t("home.contact.title")}</h2>
            <p className="paragraph">{t("home.contact.subtitle")}</p>
          </div>
          <button className="contactUsButton">
            {t("home.contact.button")}
          </button>
        </div>
      </div>
    </>
  );
};
