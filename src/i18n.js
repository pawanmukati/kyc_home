import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/locales/en/translation.json';
import es from '../src/locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;