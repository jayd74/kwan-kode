import React, { useState } from 'react'
import FamilySearch from '../FamilySearch';
import FamilyTree from '../FamilyTree';
import NavBar from '../NavBar'

const KwanKode = ({data}) => {
  const [page, setPage] = useState('')

  const RenderPage = () => {
    switch (page) {
      case 'tree':
        return <FamilyTree data={data} />
      case 'search':
        return <FamilySearch data={data} setPage={setPage} />
      default:
        return null
    }
  }

  return <>
    <NavBar setPage={setPage} />
    <RenderPage />
  </>
}

export default KwanKode
