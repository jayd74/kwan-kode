import React, { useState } from 'react'
import FamilySearch from '../FamilySearch';
import FamilyTree from '../FamilyTree';
import NavBar from '../NavBar'

const KwanKode = ({data}) => {
  const [page, setPage] = useState('')
  const [person, setPerson] = useState([])

  const RenderPage = () => {
    switch (page) {
      case 'tree':
        return <FamilyTree data={data} />
      case 'search':
        return <FamilySearch data={data} setPage={setPage} person={person} />
      default:
        return null
    }
  }

  return <>
    <NavBar data={data} page={page} setPage={setPage} person={person} setPerson={setPerson} />
    <RenderPage />
  </>
}

export default KwanKode
