import React from 'react'
import styled from 'styled-components'
import styles from '../styleguide'
import resume from '../resume.json'

export default () => {
  return (
    <Container className="education-container">
      {resume.education.map(x => {
        return (
          <div>
            <Header>Education</Header>

            <div className="education-institution">
              {x.institution}
            </div>

            <div className="education-course">
              {x.area}
            </div>

            <div className="education-degree">
              {x.studyType}
            </div>

            <div className="education-start">
              {x.startDate}
            </div>

            <div className="education-end">
              {x.endDate}
            </div>
          </div>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: ${styles.dimensions.lg};
`
const Header = styled.div`
  ${styles.typography.header};
`
