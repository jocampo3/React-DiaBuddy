import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en', // default language
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        interpolation: {
            escapeValue: false // React already escapes output by default
        },
        compatibilityJSON: 'v3',  // Add this to handle environments without Intl support
    });

export default i18n;
