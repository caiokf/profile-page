import React from 'react'
import styled from 'styled-components'
import styles from '../styleguide'
import resume from '../resume.json'

export default () => {
  return (
    <Container className="work-container">
      <Header>Work Experience</Header>

      {resume.work.map(x => {
        return (
          <Experience>
            <Position className="work-position">{x.position}</Position>
            @
            <Company href={x.website || '#'} target="_blank" className="work-company">{x.company}</Company>
          </Experience>
        )
      })}
    </Container>
  )
}

const Container = styled.div`

`
const Header = styled.div`
  ${styles.typography.header};
`
const Experience = styled.div`
  margin-bottom: ${styles.dimensions.md};
`
const Position = styled.span`
  margin-right: ${styles.dimensions.sm};
  font-weight: 500;
`
const Company = styled.a`
  margin-left: ${styles.dimensions.sm};
`
