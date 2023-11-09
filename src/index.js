import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import { LanguageProvider } from './LanguageContext' // LanguageProvider ekleyin

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
