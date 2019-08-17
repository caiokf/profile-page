import React from 'react'
import styled from 'styled-components'
import resume from '../resume.json'

export default () => {
  console.log(resume)

  return (
    <Header className="profile-bio">
      <div>
        <Avatar photo={resume.basics.picture} />
      </div>
      <div>
        <h1 className="name">{resume.basics.name}</h1>
        <div className="headline">{resume.basics.label}</div>
        <div className="summary">{resume.basics.summary}</div>

        <div className="email">{resume.basics.email}</div>
      </div>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
`
const Avatar = styled.div`
  background-image: url(${props => props.photo});
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 200px;
`
