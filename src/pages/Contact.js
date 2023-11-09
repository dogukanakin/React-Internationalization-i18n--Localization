import React from 'react'
import { useTranslation } from 'react-i18next'

function Contact () {
  const { t } = useTranslation()

  return (
    <div className='container mt-5'>
      <div className='alert alert-success' role='alert'>
        <h1 className='display-4'>{t('page.welcome.contact')}</h1>
        <p className='lead'>
          {t(
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?'
          )}
        </p>
      </div>
    </div>
  )
}

export default Contact
