import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar';

import { media } from '../../helpers/media'
import MemberRow from './MemberRow';
import SearchBar from '../SearchBar';
import Profile from './Profile';

const FamilySearch = ({ data }) => {
  const [results, setResults] = useState([])
  const [person, setPerson] = useState([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    results.length > 0 ? setShowResults(true) : setShowResults(false)
  }, [results])

  return <>
    <AppBar>
      <SearchContainer>
        <SearchBar setResults={setResults} data={data} />
        {showResults ?
          <SearchResults showResults={showResults}>
            <MemberRow familyData={results} person={person} setPerson={setPerson} setShowResults={setShowResults}/>
          </SearchResults>
        : null }
      </SearchContainer>
    </AppBar>
    <Profile person={person} setPerson={setPerson} familyData={data}/>
  </>
}

export default FamilySearch

const SearchResults = styled.div`
  background: white;
  color: black;
  max-height: 200px;
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  overflow: scroll;
  position: absolute;
  top: 52px;
  z-index: 2000;

  ${media.phone} {
    max-width: 355px;
  }
`

const SearchContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
`
