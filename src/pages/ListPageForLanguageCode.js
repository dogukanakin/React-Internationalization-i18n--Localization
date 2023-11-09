import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'

const apiUrls = {
  listpage: {
    lists: 'http://127.0.0.1:8000/tr/api/lists/'
  }
}

const ListPagesForLanguage = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData () {
    try {
      const listResponse = await fetch(apiUrls.listpage.lists) // Corrected the API URL

      if (!listResponse.ok) {
        throw new Error('Veri çekme hatası')
      }

      const listData = await listResponse.json()

      console.log('List Data:', listData)

      setLists(listData)
    } catch (error) {
      console.error('Veri çekerken hata:', error)
    }
  }

  const renderLists = () => {
    return lists.map(list => (
      <tr key={list.id}>
        <td>{list.name_trans}</td>
        <td>{list.year}</td>
      </tr>
    ))
  }

  return (
    <div>
      <Table striped>
        <thead
          style={{
            backgroundColor: '#343a40',
            color: 'white'
          }}
        >
          <tr>
            <th>List Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>{renderLists()}</tbody>
      </Table>
    </div>
  )
}

export default ListPagesForLanguage
