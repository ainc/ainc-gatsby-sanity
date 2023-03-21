import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandButton from "../../../components/UI/BrandButton/BrandButton"
import * as styles from "./youth.module.css"
import { graphql } from 'gatsby';
import YouthProgramGuide from '../../../components/Forms/YouthProgramGuide.js/YouthProgramForm.js';

const YouthPage = ({ data }) => {
    return (
        <Layout>
            <main>
                <Container className={` ${styles.youth}`}>
                    <Row>

                  
                    <Col lg={{span: 8, offset: 1}}>
                    <Title className={`mb-4 text-start text-uppercase text-white ${styles.titleText}`}>youth</Title>
                    <Subtitle className='fst-italic ontext-start text-white'>Coding Courses</Subtitle>
                    <Subtitle className='fst-italic ontext-start text-white'>Ages 9 - 16</Subtitle>
                    <p className='text-white text-start'>The coding club offers students an oppurtunity to learn how to code from professional software developers and to do it with like-minded peers.</p>
                    <p className='text-white text-start'>We inspire kids by introducing them to the awesome power of coding! Our students experience the joy of building their own games and apps 
                    in an engaging and safe space, whether in-person or online. And you'll love it too, knowing your kids are developing a practical skill, building a creative portfolio, 
                    and making great friends along the way.</p>
                    </Col>
                    <Col>
                    <YouthProgramGuide></YouthProgramGuide>
                    {/* <Card>
                        <Card.Header as="h5">Download our program guide for more info</Card.Header>
                        <Card.Body>
                            <form action="https://forms.zohopublic.com/virtualoffice9155/form/YouthProgramGuide/formperma/R7u651FVYVwtxnDViBIckJawdMEeJeCdnAgddE6o9x0/htmlRecords/submit"></form>
                        </Card.Body>
                    </Card> */}
                    </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{offset:1, span:4}} >
                        <StaticImage src='../../../images/learn/header-phone.png' alt='phone'></StaticImage>
                        </Col>
                        <Col lg={7}>
                        <Title className='text-uppercase text-start'>why should my child learn to code?</Title>
                        <p className='text-start'>Technology is all around us. Whether you are an app developer or an English professor, you will utilize technology in your daily work. 
                        Awesome Inc exists to take your child's screen time and turn it into career-skill time. Our courses increase communication, public speaking, organization, 
                        and social skills in a fun learning environment.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                        <Title className='text-uppercase text-start'>coding should be fun!</Title>
                        <p className='text-start'>Your kids will love learning to code while building video games, mobile apps, and websites!</p>
                        <BrandButton className='mb-3 text-uppercase'>join the club</BrandButton>
                        </Col>
                        <Col lg={3}>.
                        <StaticImage src='../../../images/learn/coding-fun.png' alt='fun'></StaticImage>
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.engaged}>
                    <Row>
                        <Col xl={{span:4, offset: 2}}>
                        <StaticImage src='../../../images/learn/laptop.png' alt='laptop'></StaticImage>
                        </Col>
                        <Col xl={{span:4, offset:1}}>
                        <Title className='mt-5 text-uppercase text-start text-white'>keep your kids engaged</Title>
                        <p className='text-start text-white'>Your kids will have the support of our instructors - professional coders just a step, or a click away!</p>
                        <BrandButton className='mb-5 text-uppercase'>meet the team</BrandButton>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                        <Title className='text-uppercase text-start'>coders are creative</Title>
                        <p className='text-start'>
                            Coding is like a choose-your-own-adventure for kids who love technology! They'll have a blast
                            developing their skills as they move through the specially designed pathways our team has created.
                        </p>
                        <BrandButton className='mb-3 text-uppercase'>
                            join the club
                        </BrandButton>
                        </Col>
                        <Col>
                        <StaticImage src='../../../images/learn/creative.png' alt='creative'></StaticImage>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                        <Title className='text-uppercase text-start'>Schedule</Title>
                            <p className='text-start'>
                                Students can sign up for two 90-minute long sessions each week. Our hours are Tuesday and Thursday, 4pm-7pm.
                            </p>
                            <p>Note: The Coding Club runs from September - May, taking a break during the summer. 
                                You can still sign up to reserve a spot if you are applying during the summer.</p>
                                <BrandButton className='mb-3 text-uppercase'>join the club</BrandButton>
                        
                        </Col>
                        <Col>
                        <StaticImage src='../../../images/learn/youth_schedule.png' alt='schedule'></StaticImage>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <StaticImage src='../../../images/learn/youth_schedule_tuesday.png' alt='tuesday schedule'></StaticImage>
                        </Col>
                        <Col>
                        <StaticImage src='../../../images/learn/youth_schedule_thurssday.png' alt='thursday schedule'></StaticImage>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                        <Title className='text-uppercase text-start'>coding club camps</Title>
                        <li>Immersive environment</li>
                        <li>Builds confidence</li>
                        <li>Find new friends with similar interests</li>
                        <li>From coding to outdoor activities and hilarious games</li>
                        <BrandButton className='mb-3 text-uppercase'>find a camp</BrandButton>
                        </Col>
                        <Col>
                        <StaticImage src='../../../images/learn/camps.png' alt='camps'></StaticImage>
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.clubMembership}>
                    <Title className='text-center text-uppercase text-white pt-5'>coding club membership</Title>
                    <p className='text-white text-center'>Note: The Coding Club runs from September - May, taking a break in the summer.
                    You can still sign up to reserve a spot if you are applying during the summer.</p>
                    <Row>
                        <Col className={`me-3 my-3 ${styles.plans}`} lg={{span:2, offset: 1}}>
                            <Subtitle className='text-center text-uppercase secondary'>1 month plan</Subtitle>
                            <StaticImage src='../../../images/learn/youth-1-month.png' alt='one-month-icon'></StaticImage>
                            <h3 className='text-center fw-bold '>$120</h3>
                            <h6 className='text-center fw-bold fst-italic'>Billed Monthly</h6>
                            <BrandButton className='mb-3 text-uppercase'>join the club</BrandButton>
                        </Col>
                        <Col className={`m-3 ${styles.plans}`} lg={2}>
                        <Subtitle className='text-center text-uppercase secondary'>3 month plan</Subtitle>
                        <StaticImage src='../../../images/learn/youth-3-month.png' alt='one-month-icon'></StaticImage>
                            <h3 className='text-center fw-bold '>$329</h3>
                            <h6 className='text-center fw-bold fst-italic'>Billed Quarterly</h6>
                            <BrandButton className='mb-3 text-uppercase'>join the club</BrandButton>
                        </Col>
                        <Col className={`m-3 ${styles.plans}`} lg={2}>
                        <Subtitle className='text-center text-uppercase secondary'>6 month plan</Subtitle>
                        <StaticImage src='../../../images/learn/youth-6-month.png' alt='one-month-icon'></StaticImage>
                            <h3 className='text-center fw-bold '>$600</h3>
                            <h6 className='text-center fw-bold fst-italic'>Billed Bi-yearly</h6>
                            <BrandButton className='mb-3 text-uppercase'>join the club</BrandButton>
                        </Col>
                        <Col className={`m-3 ${styles.plans}`} lg={2}>
                        <Subtitle className='text-center text-uppercase secondary'>12 month plan</Subtitle>
                        <StaticImage src='../../../images/learn/youth-12-month.png' alt='one-month-icon'></StaticImage>
                            <h3 className='text-center fw-bold '>$1080</h3>
                            <h6 className='text-center fw-bold fst-italic'>Billed every 12 months</h6>
                            <BrandButton className='mb-3 text-uppercase'>join the club</BrandButton>
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.questions}>
                <Title className='text-white text-center mt-5 pt-5 pb-4'>Still have questions?</Title>
                    <Col xs={{offset:3, span: 6}} sm={{offset:3, span: 6}} md={{offset:4, span:4}} lg={{ offset: 3, span: 6 }}>
                        <a className='d-flex justify-content-center' href='https://www.awesomeinc.org/contact'><BrandButton className='text-uppercase px-3 mb-5 fw-bold'>contact us</BrandButton></a>
                    </Col>
                </Container>
            </main>
        </Layout>
    )
}
export default YouthPage;