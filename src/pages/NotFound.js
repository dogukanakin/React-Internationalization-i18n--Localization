// NotFound.js
import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div
      className='container'
      style={{ marginTop: '100px', textAlign: 'center' }}
    >
      <h1>404</h1>
      <h2>{t('Not Found')}</h2>
      <h3>{t('The page you are looking for does not exist')}</h3>
      <a href='/'>{t('Go to Home')}</a>
    </div>
  )
}

export default NotFound
