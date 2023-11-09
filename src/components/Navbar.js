import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const apiUrls = {
  languageSettings: 'http://127.0.0.1:8000/tr/api/settings'
}

const Navbar = ({ history }) => {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const toggleLanguage = newLanguage => {
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)

    const domain = window.location.host
    const newUrl = `http://${domain}/${newLanguage}-${newLanguage}/`
    window.history.pushState({}, document.title, newUrl)
    window.location.reload()

    fetch(apiUrls.languageSettings + '/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language: newLanguage })
    })
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                {t('home')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                {t('contact')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <select
            className='form-select d-flex'
            style={{ width: '70px' }}
            onChange={e => toggleLanguage(e.target.value)}
            value={language}
          >
            <option value='en' className='lang'>
              EN
            </option>
            <option value='tr' className='lang'>
              TR
            </option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
