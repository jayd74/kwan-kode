import React from 'react'
import { getPrimaryID, isSpouse, getSecondaryID, findPerson } from '../../helpers/helpers'

const Family = ({ id, familyData}) => {
  let family = []
  const primaryID = getPrimaryID(id)
  const primary = findPerson(familyData, primaryID)
  const secondaryID = getSecondaryID(id)
  const secondary = findPerson(familyData, secondaryID)

  if (isSpouse(id)) {
    family.push({...primary, relation: 'spouse'})
  } else {
    if (secondary) {
      family.push({ ...secondary, relation: 'spouse' }, {...primary, relation: 'child'})
    } else {
      family.push({ ...primary, relation: 'child'})
    }
  }

  return <>
    Family members:
    {family.map(member => {
      return <div key={member.id}>
        {member.relation} of {member.name}
      </div>
    })}
  </>
}

export default Family
