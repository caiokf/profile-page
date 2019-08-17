import React from 'react'
import styled from 'styled-components'
import styles from '../styleguide'
import resume from '../resume.json'

export default () => {
  return (
    <Container className="career-container">
      <Header>Career Overview</Header>

      {resume.career.reverse().map(x => {
        return (
          <CareerItem size={x.size}>
            <Bullet />
            <CareerDate>{x.date}</CareerDate>
            <CareerDescription>{x.description}</CareerDescription>
          </CareerItem>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: ${styles.dimensions.lg};

  ${styles.media.large`
    margin-right: ${styles.dimensions.lg};
  `}

  flex: 2;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  ${styles.typography.header};
`
const CareerItem = styled.div`
  padding: ${styles.dimensions.md};
  border-left: 10px solid ${styles.colors.platinum};
  display: flex;
  position: relative;
  flex: ${props => props.size};
`
const Bullet = styled.div`
  background-color: white;
  width: 16px;
  height: 16px;
  position: absolute;
  left: -18px;
  top: 17px;
  border: 5px solid ${styles.colors.yankeesBlue};
  border-radius: 50%;
`
const CareerDate = styled.div`
  flex: 2;
  font-weight: 700;
`
const CareerDescription = styled.div`
  flex: 7;
`
