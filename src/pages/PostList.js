import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './PostList.css'

const apiUrls = {
  tr: 'http://127.0.0.1:8000/tr/api/posts',
  en: 'http://127.0.0.1:8000/en/api/posts',
  fr: 'http://127.0.0.1:8000/fr/api/posts'
}

const PostList = () => {
  const { t, i18n } = useTranslation()
  const [posts, setPosts] = useState([])
  const language = i18n.language

  useEffect(() => {
    loadData()
  }, [language])

  const loadData = async () => {
    try {
      const response = await fetch(apiUrls[language])

      if (!response.ok) {
        throw new Error('Veri çekme hatası')
      }

      const postData = await response.json()
      setPosts(postData)
    } catch (error) {
      console.error('Veri çekerken hata:', error)
    }
  }

  const renderPosts = () => {
    return posts.map(post => (
      <div key={post.id} className='post-item'>
        <img src={post.image} alt={post.image} />
        <div className='post-details'>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.description}</p>
        </div>
        <button className='btn btn-primary'>{t('readMore')}</button>
      </div>
    ))
  }

  return <div className='post-grid'>{renderPosts()}</div>
}

export default PostList
