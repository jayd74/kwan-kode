import React from 'react'
import { getPrimary, isSpouse, getSecondary, findPerson } from '../../helpers/helpers'

const Family = ({ id, familyData}) => {
  let family = []

  if (isSpouse(id)) {
    const primaryID = getPrimary(id)
    const primary = findPerson(familyData, primaryID)
    family.push({...primary, relation: 'Spouse'})
  } else {
    const secondaryID = getSecondary(id)
    const secondary = findPerson(familyData, secondaryID)
    family.push({ ...secondary, relation: 'Spouse' })
  }

  return <div>
    Family members:
    {family.map(member => {
      return <div key={member.id}>
        {member.name}, Relation: {member.relation}
      </div>
    })}
  </div>
}

export default Family
