import React from 'react'
import styled from 'styled-components'
import styles from '../styleguide'
import resume from '../resume.json'

export default () => {
  console.log(resume)

  return (
    <Header className="profile-bio">
      <div>
        <Avatar photo={resume.basics.picture} />
      </div>

      <div>
        <Name className="name">{resume.basics.name}</Name>
        <Headline className="headline">{resume.basics.label}</Headline>
        <div className="summary">{resume.basics.summary}</div>
      </div>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  padding-bottom: ${styles.dimensions.lg};
  border-bottom: 1px solid ${styles.colors.platinum};
  margin-bottom: ${styles.dimensions.lg};

  ${styles.media.small`
    flex-direction: column;
    align-items: center;
    text-align: left;
  `}
`
const Avatar = styled.div`
  background-image: url(${props => props.photo});
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 200px;
  margin-right: ${styles.dimensions.md};
  border-radius: 5px;

  ${styles.media.small`
    margin-bottom: ${styles.dimensions.md};
  `}
`
const Name = styled.div`
  ${styles.typography.jumbo};
`
const Headline = styled.div`
  ${styles.typography.label};
  margin-bottom: ${styles.dimensions.md};
`
