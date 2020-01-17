import React, { Component } from 'react'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

import { get, map } from 'lodash'

const firebaseConfig = {
  apiKey: "AIzaSyCIOqrvNf3TKk8y4EVonfMBxA31ib-OWFE",
  authDomain: "kwan-kode.firebaseapp.com",
  databaseURL: "https://kwan-kode.firebaseio.com",
  projectId: "kwan-kode",
  storageBucket: "kwan-kode.appspot.com",
  messagingSenderId: "444898478883",
  appId: "1:444898478883:web:300d4e040bec6559e85a96",
  measurementId: "G-PCYZESK5LQ"
};
firebase.initializeApp(firebaseConfig)

class FamilyChart extends Component {
  constructor(){
    super()
    this.state = {
      familyData: []
    }
  }

  componentDidMount() {
    const dbref = firebase.database().ref('/13EYRiCF6kz79_PKvpSoFV706o7NMC9FbEqSvtC5zKYI/')
    dbref.on('value', (snapshot) => {
      const data = snapshot.val();
      const getData = get(data, 'Sheet1')
      this.setState({
        familyData: getData
      })
    })
  }

  render() {
    const { familyData } = this.state
    return map(familyData, member => {
      return <div key={member.id}>{member.name}</div>
    })
  }
}

export default FamilyChart
