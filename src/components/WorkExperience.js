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
            <Summary>{x.summary}</Summary>
            <Highlights>
              {x.highlights && x.highlights.map(h => {
                return (
                  <div>- {h}</div>
                )
              })}
            </Highlights>
            <Technologies>
              <TechLabel>Technologies: </TechLabel>
              <TechStack>{x.technologies}</TechStack>
            </Technologies>
          </Experience>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-right: ${styles.dimensions.lg};
`
const Header = styled.div`
  ${styles.typography.header};
`
const Experience = styled.div`
  padding: ${styles.dimensions.md};
  border: 1px solid ${styles.colors.platinum};
  margin-bottom: ${styles.dimensions.md};

`
const Position = styled.span`
  margin-right: ${styles.dimensions.sm};
  font-weight: 700;
`
const Company = styled.a`
  margin-left: ${styles.dimensions.sm};
`
const ExperienceSection = styled.div`
  margin-left: ${styles.dimensions.sm};
  margin-bottom: ${styles.dimensions.sm};
  ${styles.typography.label};
`
const Summary = styled(ExperienceSection)`
  margin-top: ${styles.dimensions.sm};
  text-align: justify;
`
const Highlights = styled(ExperienceSection)``
const Technologies = styled(ExperienceSection)`
  margin-bottom: 0;
`
const TechLabel = styled.span`
  color: ${styles.colors.codGray};
  font-weight: 500;
`
const TechStack = styled.span`

`
