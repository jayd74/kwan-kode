import React from 'react'
import styled from 'styled-components'
import { map } from 'lodash'

const MemberRow = ({familyData, className}) => {
  return map(familyData, member => {
    return <div className={className} key={member.id}>{member.id} - {member.name}</div>
  })
}

export default styled(MemberRow)`
  padding: 10px;

  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`
