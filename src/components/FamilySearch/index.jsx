import React from 'react'
import Profile from './Profile';

const FamilySearch = ({ data, person, setPerson }) => {
  return <Profile person={person} setPerson={setPerson} familyData={data}/>
}

export default FamilySearch
