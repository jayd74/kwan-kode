import { replace } from 'lodash'

export const formatID = id => replace(id, /_/g, '-')

export const removeDash = id => replace(id, /-/g, '')
