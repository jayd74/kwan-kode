import React from 'react'
import styled from 'styled-components'
import { AppBar } from '@material-ui/core';

const NavBar = ({setPage, className}) => {

  return <>
    <AppBar>
      <nav className={className}>
        <ul>
          <li onClick={() => setPage('search')}>Search</li>
          <li onClick={() => setPage('tree')}>Family Tree</li>
        </ul>
      </nav>
    </AppBar>
  </>
}

export default styled(NavBar)`
  li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
