import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'

const apiUrls = {
  movies: 'http://127.0.0.1:8000/tr/api/movies/'
}

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [language, setLanguage] = useState(window.navigator.language)

  useEffect(() => {
    loadData()
  }, [language])

  async function loadData () {
    try {
      const moviesResponse = await fetch(apiUrls.movies)

      if (!moviesResponse.ok) {
        throw new Error('Veri çekme hatası')
      }

      const moviesData = await moviesResponse.json()

      setMovies(moviesData)
    } catch (error) {
      console.error('Veri çekerken hata:', error)
    }
  }

  const renderMovies = () => {
    return movies.map(movie => (
      <tr key={movie.id}>
        {language === 'tr-TR' && <td>{movie.nameTr}</td>}
        {language === 'en-US' && <td>{movie.nameEn}</td>}
        {language === 'ar-ar' && <td>{movie.nameAr}</td>}
        {language === 'fr-FR' && <td>{movie.nameFr}</td>}
        <td>{movie.year}</td>
      </tr>
    ))
  }

  return (
    <div>
      <select
        onChange={e => setLanguage(e.target.value)}
        value={language}
        style={{ marginBottom: '10px' }}
      >
        <option value='tr-TR'>Türkçe</option>
        <option value='en-US'>English</option>
        <option value='ar-ar'>العربية</option>
        <option value='fr-FR'>Français</option>
      </select>
      <Table striped>
        <theadx
          style={{
            backgroundColor: '#343a40',
            color: 'white'
          }}
        >
          <tr>
            {language === 'tr-TR' && <th>İsim</th>}
            {language === 'en-US' && <th>Name</th>}
            {language === 'ar-ar' && <th>الاسم</th>}
            {language === 'fr-FR' && <th>Nom</th>}
            <th>year</th>
          </tr>
        </theadx>
        <tbody>{renderMovies()}</tbody>
      </Table>
    </div>
  )
}

export default MovieList
