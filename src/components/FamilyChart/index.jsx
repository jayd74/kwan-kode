import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import AppBar from '@material-ui/core/AppBar';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to used
import "firebase/database";

import { firebaseConfig } from '../../config/firebase'
import MemberRow from './MemberRow';
import SearchBar from '../SearchBar';

const config = firebaseConfig
firebase.initializeApp(config)

const FamilyChart = () => {
  const [familyData, setFamilyData] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    const dbref = firebase.database().ref('/13EYRiCF6kz79_PKvpSoFV706o7NMC9FbEqSvtC5zKYI/')
    dbref.on('value', (snapshot) => {
      const data = snapshot.val();
      const getData = get(data, 'sheet')
      setFamilyData(getData)
    })

  }, [])
  return <div>
    <AppBar>
      <SearchBar setResults={setResults} data={familyData} />
    </AppBar>
    <Dropdown>
      <MemberRow familyData={results} />
    </Dropdown>
  </div>
}

export default FamilyChart

const Dropdown = styled.div`
  background: white;
  max-height: 200px;
  margin: 10px;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  overflow: scroll;
  position: absolute;
  top: 52px;
  z-index: 2000;
`
