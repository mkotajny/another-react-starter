import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en/translation.json';
import translationFR from './translations/fr/translation.json';

// the translations
const resources = {
	en: { translation: translationEN },
	fr: { translation: translationFR },
};

i18n
	.use(detector)
	.use(backend)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
