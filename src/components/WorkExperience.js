import React from 'react'
import styled from 'styled-components'
import resume from '../resume.json'

export default () => {
  return (
    <Container className="work-container">
      {resume.work.map(x => {
        return (
          <div>
            <div className="work-company">
              {x.company}
            </div>

            <div className="work-position">
              {x.position}
            </div>
          </div>
        )
      })}
    </Container>
  )
}

const Container = styled.div`

`
