import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'
import SEO from '../../../components/seo'
import Title from '../../../components/UI/Title/Title'
import Subtitle from '../../../components/UI/Subtitle/Subtitle'
import IndiaLayout from '../../../components/IndiaLayout/IndiaLayout'
import * as styles from './about.module.css'

const IndiaAbout = () => {
    return (
        <IndiaLayout>
            <main>
            <SEO />
            <Container>
                <Row>
                    <Title className='mt-5 mb-4 text-center text-uppercase'>we exist to help people to learn to code.</Title>
                    <p className='text-center mb-5'>
                        Awesome Inc was founded on the basis of the "give-first" mentality. 
                        Awesome Inc started in 2009 and has grown beyond the US to help kids learn to code.
                    </p>  
                </Row>
            </Container>
            <hr/>
            <Container>
                <Row>
                    <Subtitle className='text-center my-4'>Meet the team</Subtitle>
                    <Col sm={6} md={{span:5, offset:2}} lg={{span: 4, offset: 2}}>
                        <StaticImage className={styles.images} src='../../../images/india/bryce.jpeg' alt='Bryce Anderson'/>
                        <p className='mt-2'>Bryce Anderson</p>
                        <p className='mb-4'>
                            Bryce Anderson is an entrepreneur based in Lexington, KY (USA). He has founded multiple companies and currently runs 
                            four of them with over 900 employees. Having been involved with Awesome Inc in the US for the last 10 years, he’s 
                            excited to launch the coding school in Bhopal. He’s been to India several times visiting his family and can’t wait 
                            to spend more time there.
                        </p>
                    </Col>
                    <Col sm={6} md={{span:5}} lg={{span:4, offset:1}}>
                        <StaticImage className={styles.images} src='../../../images/india/ashlin.jpeg' alt='Ashlin Mathews'/>
                        <p className='mt-2'>Ashlin Mathews</p>
                        <p className='mb-4'>
                            Ashlin is a Senior Software Engineer and has worked for Bloomberg LP for the past 11 years. He currently lives in Dallas, TX (USA) 
                            but grew up in Bhopal. Ashlin brings a high level of software experience and will serve as a Technical Advisor. He’s excited to 
                            help launch the Awesome Inc coding school in his home town.
                        </p>
                    </Col>
                </Row>
            </Container>
            </main>
        </IndiaLayout>
    )
}

export default IndiaAbout;