import React, { useEffect, useState } from 'react';
import { get, forEach } from 'lodash'

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";
import { firebaseConfig } from './config/firebase'

import FamilySearch from './components/FamilySearch';
import { formatID } from './helpers/helpers'

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
    const newID = formatID(id)
    formattedData.push({
      id: newID,
      name,
      yearBorn,
      yearLeft
    })
  })

  return (
    <FamilySearch data={formattedData} />
  );
}

export default App;
