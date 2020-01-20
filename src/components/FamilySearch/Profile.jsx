import React from 'react'
import styled from 'styled-components'

const Profile = ({ person, className }) => {
  return person.id ? <div className={className}>
    <Info>
      <p><span>ID: </span>{person.id}</p>
    </Info>
    <Info>
      <p><span>Name: </span>{person.name}</p>
    </Info>
  </div>
  : null
}

export default styled(Profile)`
  position: relative;
  top: 200px;
  max-width: 500px;
  margin: 0 auto;
`

const Info = styled.div`
  display: flex;

  span {
    font-weight: bold;
  }
`
