import React from 'react'
import { get, isEmpty } from 'lodash'
import { getPrimaryID, isSpouse, getSecondaryID, findPerson, getSiblingIDs, findSiblings } from '../../helpers/helpers'

const Family = ({ id, familyData}) => {
  let family = []
  const primaryID = getPrimaryID(id)
  const primary = findPerson(familyData, primaryID)
  const secondaryID = getSecondaryID(id)
  const secondary = findPerson(familyData, secondaryID)
  const siblings = findSiblings(familyData, getSiblingIDs(getPrimaryID(id)), id)
  const children = findSiblings(familyData, getSiblingIDs(id))

  if (isSpouse(id)) {
    family.push({...primary, relation: 'spouse', siblings})
  } else {
    if (secondary) {
      family.push({ ...secondary, relation: 'spouse' }, { ...primary, relation: 'child', siblings, children})
    } else {
      family.push({ ...primary, relation: 'child', siblings, children})
    }
  }

  return <>
    Family members:
    {family.map(member => {
      const { id, relation, name, siblings, children } = member
      const hasSiblings = !isEmpty(siblings)
      const hasChildren = !isEmpty(children)

      const siblingsList = hasSiblings ? <>
        {siblings.map(sibling => {
          const sib = get(sibling, '[0]')
          return <p key={sib.id}>{sib.name}</p>
        })}
      </> : null

      const childrenList = hasChildren ? <>
        {children.map(sibling => {
          const sib = get(sibling, '[0]')
          return <p key={sib.id}>{sib.name}</p>
        })}
      </> : null

      return <div key={id}>
        {relation} of {name}
        {siblingsList}
        {childrenList}
      </div>
    })}
  </>
}

export default Family
