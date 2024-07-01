import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue",
        },
      },
      de: {
        translation: {
          welcome: "Willkommen",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
