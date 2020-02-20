import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AppBar } from '@material-ui/core';
import SearchBar from '../SearchBar';

const NavBar = props => {
  const { className, page, setPage, person, setPerson, data } = props
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const searchBar = page === 'search' ? <>
    <SearchBar
      data={data}
      setResults={setResults}
      showResults={showResults}
      setShowResults={setShowResults}
      results={results}
      person={person}
      setPerson={setPerson}
    />
  </> : null

  const changePage = page => {
    setPage(page)
    setResults([])
  }

  useEffect(() => {
    results.length > 0 ? setShowResults(true) : setShowResults(false)
  }, [results])

  return <AppBar>
    <nav className={className}>
      <ul>
        <li onClick={() => changePage('search')}>Search</li>
        <li onClick={() => changePage('tree')}>Family Tree</li>
      </ul>
      {searchBar}
    </nav>
  </AppBar>
}

export default styled(NavBar)`
  display: flex;
  height: 80px;
  align-items: center;

  ul {
    list-style-type: none;
    padding-left: 10px;
    flex-shrink: 0;
  }

  li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
