import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Cargar archivos JSON de traducción
  .use(LanguageDetector) // Detectar el idioma del navegador
  .use(initReactI18next) // Inicializar react-i18next
  .init({
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;