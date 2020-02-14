import { replace, includes, find, filter, map } from 'lodash'

export const formatID = id => replace(id, /_/g, '-')

export const removeDash = id => replace(id, /-/g, '')

export const getPrimaryID = id => id.substring(0, id.length - 2)
export const getSecondaryID = id => id.concat('-S')
export const isSpouse = id => includes(id.toLowerCase(), 's')
export const findPerson = (data, id) => find(data, person => person.id === id)

export const formatSearch = string => replace(string, /[()-./]/g, '')

export const getSiblings = (data, siblingIDs) => {
  const allOffspring = map(siblingIDs, person => {
    const siblingsArray = filter(data, sibling => {
      return person === sibling.id ? sibling : null
    })
    return siblingsArray
  })

  return allOffspring
}

export const findSiblings = (data, siblingIDs, id) => {
  const allOffspring = getSiblings(data, siblingIDs)

  const siblings = allOffspring.filter(offspring => {
    const siblings = offspring.length !== 0 && offspring[0]['id'] !== id
    return siblings
  })
  return siblings
}

export const getSiblingIDs = id => {
  let siblingIDs = []
  for (let i = 0; i < 20; i++) {
    siblingIDs.push(id.concat(`-${i}`))
  }

  return siblingIDs
}


export const makeTreeData = data => {
  let treeData = []

  for (let i = 0; i < data.length; i++) {
    treeData.push({
      id: data[i].id,
      title: data[i].name,
      ParentId: getPrimaryID(data[i].id) || null
    })
  }

  return treeData
}
