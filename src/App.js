import './App.css'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from './i18n'
import { useEffect } from 'react'
import NotFound from './pages/NotFound'
import RedirectToLanguage from './pages/RedirectToLanguage'
const App = () => {
  useEffect(() => {
    fixLanguageCodeInURL()
  }, [])

  const fixLanguageCodeInURL = () => {
    const currentPath = window.location.pathname
    const lowercasePath = currentPath.toLowerCase()

    if (currentPath !== lowercasePath) {
      const newUrl = `${window.location.origin}${lowercasePath}${window.location.search}${window.location.hash}`
      window.history.replaceState({}, document.title, newUrl)
    }
  }

  const defaultLanguage = 'en-en'

  // Dil kodunu URL'den almak için bir işlev
  const getLanguageFromURL = () => {
    const path = window.location.pathname
    const languageCode = path.split('/')[1]
    return languageCode || defaultLanguage
  }

  const language = getLanguageFromURL()

  const selectedRoute = {
    path: `/${language}-${language}`,
    element: (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/redirect' element={<RedirectToLanguage />} />
      </Routes>
    )
  }

  const localizedLink = path => {
    return `/${language}${path}`
  }

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Navigate to={localizedLink('/')} replace />}
          />
          <Route
            path='/contact'
            element={<Navigate to={localizedLink('/contact')} replace />}
          />
          <Route
            path='*'
            element={<Navigate to={localizedLink('/NotFound')} replace />}
          />
          <Route path='/:language/*' element={selectedRoute.element} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
