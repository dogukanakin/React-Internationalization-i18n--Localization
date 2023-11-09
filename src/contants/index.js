// API URL'lerini saklamak için bir nesne oluşturun
const apiUrls = {
  tr: 'http://127.0.0.1:8000/tr/api/posts',
  en: 'http://127.0.0.1:8000/en/api/posts',
  fr: 'http://127.0.0.1:8000/fr/api/posts',
  ar: 'http://127.0.0.1:8000/ar/api/posts'
}

// İhtiyaç duyduğunuz dil koduna göre API URL'sini alın
const getApiUrl = lang => {
  if (apiUrls.hasOwnProperty(lang)) {
    return apiUrls[lang]
  } else {
    // Belirtilen dil kodu desteklenmiyorsa varsayılan bir URL döndürün
    return apiUrls.en // Varsayılan olarak İngilizce URL'si
  }
}

export default getApiUrl
