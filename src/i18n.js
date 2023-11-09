import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './locales/en/translation.json'
import frTranslations from './locales/fr/translation.json'
import trTranslations from './locales/tr/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { ...enTranslations }
      },
      fr: {
        translation: { ...frTranslations }
      },
      tr: {
        translation: { ...trTranslations }
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: { escapeValue: false }
  })

export default i18n
