import * as React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Row, Col, CarouselItem } from 'react-bootstrap'
import SEO from '../../components/seo'
import Carousel from 'react-bootstrap/Carousel'
import { StaticImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import "../../styles/main.scss"
import * as styles from './courses.module.css'
import styled from 'styled-components'
import BlockQuote from '../../components/BlockQuote/BlockQuote'
import BackgroundPicture from '/src/images/phone-booth-abstract.jpg'

const ProvenBackground = styled.div`
&:before {
  content: "a"; 
  color: rgba(0,0,0,0);
  background-image: ${props => (props.bgImage !== undefined) ? `url( ${Object.values(props.bgImage)[0]} )` : undefined};
  filter: opacity(50%) blur(1pt);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 450px;
  text-align: left;
  display: block;
  z-index: -1;
  position: absolute;
}

`

const LearnPage = ({ data }) => {
  return (
    <Layout>
      {/* Header section */}
     
      <Container fluid>
        <Row>
          <Col>
            <StaticImage src="../../images/macbook-code-learn.png" alt="Coding laptop" />
          </Col>
          <Col className="m-auto">
            <Title className="brand text-uppercase" >Learn to Code</Title>
            <p className="fst-italic">with Awesome Inc</p>
            <a href="../learn/youth">
              <BrandButton className="secondary mr-3">Youth</BrandButton>
            </a>
            <a href="../learn/adults">
              <BrandButton className="secondary mx-3">Adult</BrandButton>
            </a>
           
          </Col>
        </Row>
      </Container>

      {/* Calls to action section */}
     
      <Container className={styles.callAction}>
        <Row>
          <Col xs={{span: 10, offset: 1 }}>
          
        <Row>
          <Col xs={12} sm={6} md={{ span: 6 }}>
            <Title className="brand text-center">A Course For Everyone</Title>
            <p className="text-black subtitle fw-bold text-uppercase text-center">Join one now</p>
            <p className="text-center">
              Whether you are an adult looking to make a career change or have a child that wants to learn how to build apps and video games, we have a class for you. You don't need to be a genius to learn how to code. All you need is determination. Our courses have helped launch people into new careers in tech and prepared students to study Computer Science through college and beyond.
            </p>
          </Col>
          <Col xs={12} sm={{ span: 5}} md={{ span: 6 }}>
            <StaticImage src='../../images/student-learn-to-code-shirt.jpg' alt='learn to code' />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} sm={{ span: 5}}>
          <StaticImage src='../../images/student-learn-to-code-week-of-code.jpg' alt='learn to code youth classes' />
          </Col>
          <Col xs={12} sm={{ span: 5 }}>
            <Title className="brand text-normal text-left">Youth</Title>
            <p className="text-black subtitle--small fw-bold text-left">Build apps, games, and websites with friends.</p>
            <p className="text-left mb-2">
            Students age 9-16 love making games and apps with us. Turn screen time into career-skill time.
            </p>
            <a href="../learn/youth">
              <BrandButton className="secondary btn--small text-end float-left">Learn More</BrandButton>
            </a>
           
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} sm={{ span: 6}}>
            <Title className="brand text-normal text-end">Adult</Title>
            <p className="text-black fw-bold text-end">
              Launch your new career or learn a new skill.
            </p>
            <p className="text-end mb-2">
              If you can write an email, we can help you learn to code. Great for aspiring entrepreneurs and career switchers.
            </p>
            <a href="../learn/adults">
              <BrandButton className="secondary btn--small text-end float-end">Learn More</BrandButton>
            </a>
           
          </Col>
          <Col xs={12} sm={{ span: 5}}>
            <StaticImage className="p-2 mt-2"src='../../images/learn/adult-coding-laptop.jpeg' alt='learn to code' />
          </Col>
        </Row>

        </Col>
        </Row>
      </Container>
      
      {/* Proven Success Section */}
      
      <section>
        <ProvenBackground bgImage={{BackgroundPicture}}>
        <Container className="py-3"fluid>
        <Row><Col xs={12}> <Title className="brand test text-center normal text-end">Proven Success</Title></Col></Row>
        <Row>
          <Col xs={12} md={{offset: 4, span: 4}}>
          <p className="text-center">Since 2013, over 1500 people have learned to code with us. Here's what they have to say:</p>
          </Col></Row>
        <Row>
          <Col xs={12} md={{ offset: 2, span: 8}}>
           <Carousel className={styles.carousel} indicators={false} controls={false} fade={true}>
             
              <Carousel.Item interval={5000}>
              <BlockQuote>
                <p>I went from having no software skills at all to being able to create something from scratch.
                </p>
                <small>— Kelly, Bootcamp Graduate</small>
                </BlockQuote>
              </Carousel.Item>
              
              
              <Carousel.Item interval={5000}>
              <BlockQuote>
                <p>The way the classes are structured and the one on one attention the kids get from the teachers is amazing. My kids absolutely love these classes.
                </p>
                <small>—Coding Club Parent</small>
                </BlockQuote>
              </Carousel.Item>
            
              <Carousel.Item interval={5000}>
                <BlockQuote>
                <p>The future was very uncertain, but Awesome Inc was very dedicated to helping me out, not just during the Bootcamp but also after I graduated and giving me job leads and giving me job search advice.                  
                </p>
                <small>—Clark, Bootcamp Graduate</small>
                </BlockQuote>
              </Carousel.Item>
              
            
              <Carousel.Item interval={5000}>
                <BlockQuote>
                <p>I work 40 hours a week now, I get to coach lacrosse still, I put my kids to bed pretty much every night. I can’t put a price on that because it’s what I was looking for in a career change.                  
                </p>
                <small>—Josh, Bootcamp Graduate</small>
                </BlockQuote>
              </Carousel.Item>
              
              <Carousel.Item>
                <BlockQuote>
                <p>Our son enjoys his time at Awesome Inc very much. I am certain his future career lies in the tech field, and we are grateful for the opportunities that Awesome Inc is providing to him to learn and grow.
                </p>
              <small>—Coding Club Parent</small>
              </BlockQuote>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>

        </Container>
        </ProvenBackground> </section>
      
      
      <section className={styles.learnPress}>

      <Container fluid="md">
                        <Row>
                            <Col>
                            <Title className="brand text-center text-uppercase">As Seen On</Title>
                            </Col>
                        </Row>
                        <Row className={styles.logos}>
                        <Col xs={12} sm={{span: 2, offset:1}} ><StaticImage src='../../images/press/nbc-logo.png' alt="NBC logo" width={80} /></Col>
                        <Col xs={12} sm={2}><StaticImage src='../../images/press/course_report.png' alt="Course Report logo" width={190} /></Col>
                        <Col xs={12} sm={2}><StaticImage src='../../images/press/abc-logo.png' alt="ABC logo" width={80}/></Col>                        
                        <Col xs={12} sm={2}><StaticImage src='../../images/press/good_day_ky.png' alt="Good Day Kentucky logo" width={90}/></Col>
                        <Col xs={12} sm={2}><StaticImage src='../../images/press/fox-logo.png' alt="Fox logo" width={150}/></Col>
                        </Row>
                        </Container>
      </section>
    </Layout>
  )
}
export default LearnPage;