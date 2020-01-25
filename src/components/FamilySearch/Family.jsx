import React from 'react'
import { get } from 'lodash'
import { getPrimaryID, isSpouse, getSecondaryID, findPerson, getSiblingIDs, findSiblings } from '../../helpers/helpers'

const Family = ({ id, familyData}) => {
  let family = []
  const primaryID = getPrimaryID(id)
  const primary = findPerson(familyData, primaryID)
  const secondaryID = getSecondaryID(id)
  const secondary = findPerson(familyData, secondaryID)
  const siblings = findSiblings(familyData, getSiblingIDs(id), id)

  if (isSpouse(id)) {
    family.push({...primary, relation: 'spouse', siblings})
  } else {
    if (secondary) {
      family.push({ ...secondary, relation: 'spouse' }, { ...primary, relation: 'child', siblings})
    } else {
      family.push({ ...primary, relation: 'child', siblings})
    }
  }

  return <>
    Family members:
    {family.map(member => {
      const { id, relation, name, siblings } = member
      return <div key={id}>
        {relation} of {name}
        {siblings ? <>
          <p>Siblings: </p>
          { siblings.map(sibling => {
            const sib = get(sibling, '[0]')
            return <>
              <p>{sib.name}</p>
            </>
          })}
        </> : null}
      </div>
    })}
  </>
}

export default Family
