import React from 'react'
import styled from 'styled-components'
import { map, replace } from 'lodash'

const MemberRow = ({ familyData, className, setPerson, setShowResults }) => {

  const showPerson = id => {
    setPerson(id)
    setShowResults(false)
  }

  const formatID = (id) => {
    const newID = replace(id, /_/g, '-')

    return newID
  }

  return map(familyData, member => {
    return <div className={className} key={member.id} onClick={() => showPerson(member)}>{formatID(member.id)}  {member.name}</div>
  })
}

export default styled(MemberRow)`
  padding: 10px;

  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`
