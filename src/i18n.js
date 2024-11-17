import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import az from "./locales/az/translation.json";

const resources = {
  en: {
    translation: en,
  },
  az: {
    translation: az,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: localStorage.getItem("lang"),
});

export default i18n;
