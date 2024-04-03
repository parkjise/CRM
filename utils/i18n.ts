import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import korean from "../utils/languages/kr.json";
import english from "../utils/languages/en.json";
import chinese from "./languages/cn.json";

const resources = {
  kr: {
    translation: korean,
  },
  en: {
    translation: english,
  },
  cn: {
    translation: chinese,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
