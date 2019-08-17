import React from 'react'
import styled from 'styled-components'
import styles from './styleguide'
import Header from './components/Header'
import Profiles from './components/Profiles'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

export default () => {
  return (
    <Profile className="profile">
      <ProfileContainer className="profile-container">
        <Header />
        <Profiles />
        <Education />
        <WorkExperience />
      </ProfileContainer>
    </Profile>
  )
}

const Profile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`
const ProfileContainer = styled.div`
  width: ${styles.dimensions.maxWidth};
  padding: ${styles.dimensions.lg} 0;
`
