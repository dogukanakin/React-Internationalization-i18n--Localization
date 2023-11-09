import React from 'react'
import { useTranslation } from 'react-i18next'
import PostList from './PostList'
import './home.css'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className='container'>
      <header>
        <h1>{t('home')}</h1>
        <h2>{t('welcome')}</h2>
        <p>{t('this is a description')}</p>
      </header>
      <div className='alert alert-success' role='alert'>
        <PostList />
      </div>
    </div>
  )
}

export default Home
