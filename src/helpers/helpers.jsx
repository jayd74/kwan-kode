import { replace, includes, find } from 'lodash'

export const formatID = id => replace(id, /_/g, '-')

export const removeDash = id => replace(id, /-/g, '')

export const getPrimary = id => id.substring(0, id.length - 2)
export const getSecondary = id => id.concat('-S')

export const isSpouse = id => includes(id.toLowerCase(), 's')
export const findPerson = (data, id) => find(data, person => person.id === id)
