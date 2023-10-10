import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import * as styles from '../program/program.module.scss'

const ProgramLinkTree = ({ props }) => {
  return (
    <Container className={styles.details}>
      <Col>
        <Row>
          <Subtitle className='text-uppercase text-center text-black mt-4 mb-4'>Tonight's Details</Subtitle>
        </Row>
        <Row>
          <Col xs={6} className=''>
            <a href="https://raadz.com/5across" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Vote on raadz</BrandButton>
            </a>
          </Col>
          <Col xs={6} className=''>
            <a href="#teams" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Teams</BrandButton>
            </a>
          </Col>
          <Col xs={6} className=''>
            <a href="https://raadz.com/#judges" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Judges</BrandButton>
            </a>
          </Col>
          <Col xs={6} className=''>
            <a href="https://raadz.com/#sponsors" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Sponsors</BrandButton>
            </a>
          </Col>
          <Col xs={6} className=''>
            <a href="https://raadz.com/#podcasts" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Podcasts</BrandButton>
            </a>
          </Col>
          <Col xs={6} className=''>
            <a href="https://raadz.com/#mentor" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Become a mentor</BrandButton>
            </a>
          </Col>
          <Col xs={6} className=''>
            <a href="" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Free ticket for next 5 across</BrandButton>
            </a>
          </Col>
          <Col xs={6} className=''>
            <a href="https://raadz.com/5across" target="_blank">
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Startup pipeline</BrandButton>
            </a>
          </Col>
        </Row>
        <Row xs={12} className='mb-4'>
          <Col xs={{ offset: 0, span: 12 }}>
            <a href="https://raadz.com/5across" target="_blank">
              <BrandButton className={`secondary my-2 w-100 text-uppercase ${styles.buttons}`}>More about awesome inc</BrandButton>
            </a>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default ProgramLinkTree;