import React, { useEffect, useState } from 'react';
import { get, forEach } from 'lodash'

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";
import { firebaseConfig } from './config/firebase'

import { formatID, formatSearch } from './helpers/helpers'
import KwanKode from './components/KwanKode';

const config = firebaseConfig
firebase.initializeApp(config)

const App = () => {
  const [familyData, setFamilyData] = useState([])

  useEffect(() => {
    const dbref = firebase.database().ref('/13EYRiCF6kz79_PKvpSoFV706o7NMC9FbEqSvtC5zKYI/')
    dbref.on('value', (snapshot) => {
      const data = snapshot.val();
      const getData = get(data, 'sheet')
      setFamilyData(getData)
    })
  }, [])

  let formattedData = []
  forEach(familyData, person => {
    const { id, name, yearBorn, yearLeft } = person
    const keywords = formatSearch(name).toLowerCase().split(' ')
    const newID = formatID(id)
    formattedData.push({
      id: newID,
      name,
      yearBorn,
      yearLeft,
      keywords
    })
  })

  return <>
    <KwanKode data={formattedData} />
  </>
}

export default App;
