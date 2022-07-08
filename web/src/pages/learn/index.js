import * as React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import "../../styles/main.scss"

const LearnPage = ({ data }) => {


  return (
    <Layout pageTitle="Awesome Inc U - Learn to Code">
      
      {/* Header section */}
      <Container fluid>
        <Row>
          <Col>
            <StaticImage src="../../images/macbook-code-learn.png" alt="Coding laptop" />
          </Col>
          <Col className="m-auto">
            <Title className="brand" >Learn to Code</Title>
            <p className="fst-italic">with Awesome Inc</p>
            <BrandButton className="secondary mr-3">Youth</BrandButton>
            <BrandButton className="secondary mx-3">Adult</BrandButton>
          </Col>
        </Row>
      </Container>

      {/* Calls to action section */}
      <Container>
        <Row>
          <Col xs={12} sm={{ offset: 1, span: 5}}>
            <Title className="brand text-normal text-align">A Course For Everyone</Title>
            <p className="text-center">
              Whether you are an adult looking to make a career change or have a child that wants to learn how to build apps and video games, we have a class for you. You don't need to be a genius to learn how to code. All you need is determination. Our courses have helped launch people into new careers in tech and prepared students to study Computer Science through college and beyond.
            </p>
          </Col>
          <Col xs={12} sm={{ span: 4}}>
            <StaticImage src='../../images/student-learn-to-code-shirt.jpg' alt='learn to code' />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} sm={{ offset: 1, span: 4}}>
          <StaticImage src='../../images/student-learn-to-code-week-of-code.jpg' alt='learn to code youth classes' />
          </Col>
          <Col xs={12} sm={{ span: 6}}>
            
            <Title className="brand text-normal">Youth</Title>
            <p className="text-black subtitle--small fw-bold">Build apps, games, and websites with friends.</p>
            <p className="text-center">
              Whether you are an adult looking to make a career change or have a child that wants to learn how to build apps and video games, we have a class for you. You don't need to be a genius to learn how to code. All you need is determination. Our courses have helped launch people into new careers in tech and prepared students to study Computer Science through college and beyond.
            </p>
            <BrandButton className="secondary btn--small text-end">Learn More</BrandButton>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} sm={{ offset: 2, span: 4}}>
            <Title className="brand text-normal text-end">Adult</Title>
            <p className="text-black fw-bold text-end">
              Launch your new career or learn a new skill.
            </p>
            <p className="text-end">
              If you can write an email, we can help you learn to code. Great for aspiring entrepreneurs and career switchers.
            </p>
            <BrandButton className="secondary btn--small text-end float-end">Learn More</BrandButton>
          </Col>
          <Col xs={12} sm={{ span: 4}}>
            <StaticImage src='../../images/student-learn-to-code-shirt.jpg' alt='learn to code' />
          </Col>
        </Row>

      </Container>

    </Layout>
  )
}

export default LearnPage;