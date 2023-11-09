import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const RedirectToLanguage = () => {
  const { language, page } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/${language}-${language}/${page}`)
  }, [language, page, navigate])
}

export default RedirectToLanguage
