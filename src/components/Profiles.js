import React from 'react'
import styled from 'styled-components'
import resume from '../resume.json'

export default () => {
  return (
    <Container className="profile-links">
      {resume.basics.profiles.map(x => {
        return (
          <Profile>
            <Icon src={x.icon} color={x.iconColor} />
            <span>{x.network}</span>
            <span>{x.url}</span>
          </Profile>
        )
      })}
    </Container>
  )
}

const Container = styled.header`
  display: flex;
`
const Profile = styled.div`
`
const Icon = styled.img`
  height: 32px;
  width: 32px;
`
