import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import translationEN from "../language/anglais.json";
import translationDU from "../language/dutch.json";
  const resources = {
    en: { translation: translationEN },
    du: { translation: translationDU },
  };
i18n
.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        du: {
            translation: translationDU,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;