import * as React from 'react'
import { Col, Container, Row, Badge } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle"
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import * as styles from './intro-to-web-development.module.scss'
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { graphql } from 'gatsby';
import laptopGIF from '../../images/animated-projects.gif'

export const query = graphql` 
query($currentDate: Date!) {
        allSanityCourses(filter: {startDate: {gte: $currentDate}}) {
      nodes {
        startDate(formatString: "MM.D.YYYY")
        endDate(formatString: "MM.D.YYYY")
        courseSeason
        courseTitle
        courseType
      }
      max(field: courseTitle)
    }
  }
  `;

const IntroWebDevPage = ({ data }) => {
    const allSanityCourses = (data.allSanityCourses.nodes || {})
    
    
    
    return (
        <Layout>
            <main>
                <Container className={`py-5 ${styles.intro}`}>
                    <Col>
                    <Title className='pt-5 pb-2 text-center text-uppercase'>intro to web development</Title>
                    </Col>
                    <Col xs={{offset:3}} sm={{offset:3}} md={{offset:4}} lg={{offset: 5}} xl={{ offset: 5, span: 6 }}>
                       <a href='https://www.eventbrite.com/e/intro-to-web-development-remote-spring-2023-tickets-479978607937'><BrandButton className='px-3 text-uppercase mb-5'>register now</BrandButton></a> 
                    </Col>
                    </Container>
                    <Container className={`my-5 ${styles.bottomIntro}`}>
                    <Row>
                        <Col xs={{span:12}} md={{span: 8, offset: 2}} lg={{ span: 6, offset: 3}} xl={{ span: 4, offset: 4 }}>
                            <p className={`text-center fw-bold ${styles.text}`}>Awesome Inc U's beginner coding course for adults, 
                            giving students the core skills and knowledge to start the journey towards professional web development. 
                            Your next adventure starts here.</p>
                        </Col>
                    </Row>
                </Container>
                <Container className={` ${styles.upcomingProgram}`}>
                    <Title className='text-white text-uppercase text-center pt-5 pb-5'>upcoming program dates</Title>
                    {allSanityCourses.map((node) => (
                        <div>
                        <h4 className={`${styles.programText}  pt-3 text-uppercase text-white fw-bold text-center`}>{node.courseSeason}</h4>
                        <h5 className={`${styles.programText} text-white fw-bold text-center`}>{node.startDate}</h5>
                        <h5 className='mb-1 text-uppercase text-center text-white'>to</h5>
                        <h5 className={`${styles.programText} pb-5 text-white fw-bold text-center`}>{node.endDate}</h5>
                        </div>
                        
                        
                    ))}
                   
                    </Container>
                  
                <Container className={` ${styles.whyLearn}`}>
                    <Col sm={12} md={{offset: 3, span:8}} lg={{ offset: 1, span: 9 }} xl={{ offset: 2, span: 8}}>
                        <Title className='text-uppercase mt-5 text-end'>why learn from awesome inc u?</Title>
                        <p className={`${styles.paragraphs} text-end`}>
                            At Awesome Inc, everything we do starts with our Core Values. We care about people, and making a difference in our community.
                            That's why we want to help everyone we can to learn the life changing skill of coding. And while doing that, we've seen that the best way to learn a new skill is to get the right help on your journey.
                            It's so easy to waste time trying to learn something by yourself, constantly running into problems, and getting frustrated along the way, but we're here to help! With coaching from Senior Developers
                            and a curriculum built for you, we're ready to meet you where you're at, even if you're at step 0.
                        </p>
                    </Col>
                    <Row>
                        <Col xs={4} sm={4} md={{span:6}} lg={{offset:1, span: 5}} xl={{ offset: 2, span: 4 }}>

                            <StaticImage className={`mt-5 mb-5 ${styles.arrow}`} src='../../images/arrow.png' alt='arrow'></StaticImage>
                        </Col>

                        <Col xs={8} sm={8} md={{span:6}} lg={{span:6}} xl={{ span: 6 }}>
                            <a href='https://www.youtube.com/embed/8IryuzzI2DA?rel=0&controls=0'><BrandButton className='text-uppercase mb-3'>hear from students</BrandButton></a>
                        </Col>

                    </Row>
                </Container>
                <Container className={styles.awesome}>
                    <Col xs={{offset:1, span: 10}} sm={{offset:1, span:10}} md={{offset:2, span:8}} lg={{ offset: 3, span: 6 }}>
                        <a href='https://www.youtube.com/embed/8IryuzzI2DA?rel=0&controls=0' target="_blank"><StaticImage src='../../images/laptop-video.png' alt='laptop'></StaticImage></a>
                    </Col>
                    <Title className='text-uppercase text-center text-white'>what makes it awesome?</Title>
                    <Col sm={12} md={12} lg={12} xl={{ offset: 1, span: 10 }}>
                        <p className={` ${styles.paragraphs} mt-3 text-center text-white`}>The best learning doesn't just happen when you're taught information. It comes when you connect with others who are learning alongside you.
                            Intro to Web is designed to both teach you the skills, and foster connections. Intro also offers more flexibility as a part-time, evening course; It covers most of the introductory topics used in our more
                            intensive Bootcamp program, but at a more manageable pace. It'll help you build a solid foundation in web development using technologies like HTML, CSS, and JavaScript. And if you don't even know what those are...
                            it's ok!
                        </p>
                        <p className={` ${styles.paragraphs} mt-4 pb-5 text-center text-white`}>Prior Awesome Inc students have come from a variety of backgrounds, including manufacturing, retail, design, food service, law, and healthcare.
                            Classes are two nights per week, two hours per night, for nine weeks. In addition to in-class hours, our instructional team is available remotely for Q&A throughout the week via Slack.
                        </p>
                    </Col>
                </Container>
                <Container className={` ${styles.curriculum}`}>
                <Col md={12} lg={12} xl={{span: 8, offset: 1}}>
                    <Title className=' ps-2 mt-5 mb-3 text-uppercase text-start'>curriculum</Title>
                    <p className={` ${styles.curriculumList} mb-5 ps-2 fw-lighter fst-italic text-start`}>If reading this list makes your eyes glaze over... we get it. Maybe we can talk on the phone to explain the details.</p>
                    </Col>
                   <Row>
                    <Col sm={12} md={6} lg={6} xl={{ span: 5, offset: 1}}>
                        <ol>
                            <li className={` ${styles.curriculumList} mb-2`}>Developer Tools and Environment Setup</li>
                            <li className={` ${styles.curriculumList} mb-2`}>HTML and How the Web Works</li>
                            <li className={` ${styles.curriculumList} mb-2`}>Styling pages with CSS and Bootstrap</li>
                            <li className={` ${styles.curriculumList} mb-2`}>Templates and the DRY Principle</li>
                            <li className={` ${styles.curriculumList} mb-2`}>JavaScript (variables, conditionals, loops, arrays, objects, functions) </li>
                            <li className={` ${styles.curriculumList} mb-2`}>Interactive JavaScript and the DOM</li>
                            <li className={` ${styles.curriculumList} mb-2`}>Getting Data from APIs</li>
                            <li className={` ${styles.curriculumList} mb-2`}>Final Project</li>
                        </ol>
                        <a href='https://www.awesomeinc.org/'><BrandButton className='ms-3 mt-3 text-uppercase mb-5'>let's chat</BrandButton></a>
                    </Col>
                    <Col md={6} lg={{span: 6}} xl={{span: 5}}>
                        <StaticImage className='mb-3 pe-3' src='../../images/bootcamp/languages/languages-showcase.png'></StaticImage>
                        </Col>
                        </Row>
                </Container>
                <Container className={`py-4 mt-4 ${styles.courseOutcomes}`}>
                    <Row className='pb-1 pt-4'>
                        <Col sm={12} md={6} lg={{span:6}} xl={{offset: 1, span:5}}>
                        <img className='img-fluid' src={laptopGIF} alt='monitor and laptop'></img>
                        </Col>
                        <Col sm={12} md={6} lg={{span: 6}} xl={{ span: 5}}>
                            <Title className='text-uppercase pb-5 text-center'>course outcomes</Title>
                            <li className={styles.outcomeList}>Write code in languages like HTML, CSS, and JavaScript</li>
                            <li className={styles.outcomeList}>Create interactive websites</li>
                            <li className={styles.outcomeList}>Make friends and learn how to continue practicing web development beyond this course</li>
                            <li className={styles.outcomeList}>Build a Final Project like these:</li>
                        </Col>
                        
                    </Row>
                </Container>
                <Container className={styles.tuitionCredit}>
                    {/* ask kyle how to do the images/background??? */}
                    <Title className='pt-5 text-uppercase text-white text-center'>tuition credit</Title>
                    <Col lg={{ offset: 2, span: 8 }}>
                        <p className='text-center text-white pb-5'>100% of this course payment can be used as tuition credit for our <a className='text--red' href='https://www.awesomeinc.org/bootcamp'>Web Developer Bootcamp</a>. Candidates must enroll in the Bootcamp program within
                            one year of completing the Intro to Web Development course. Please note that completion of this course does not guarantee admission to the Web Developer Bootcamp – the standard
                            application process still applies.
                        </p>
                    </Col>
                    
                </Container>
                <Container className={styles.faq}>
                    <Title className='text-uppercase text-center my-5'>faq</Title>
                    <Col xl={{span: 10, offset: 1}}>
                        <Accordion className='mb-5 pb-4' >
                            <AccordionItem eventKey="0">
                                <Accordion.Header><Badge className=' my-3 me-2 rounded-circle' bg="danger" >1</Badge>Do I need to bring a computer?</Accordion.Header>
                                <AccordionBody>Yes. Each student will need to provide his/her own laptop for the course. Microsoft Windows-based PC's or Apple macOS computers will work. We recommend a laptop made within the past 3-4 years.
                                    Computers should be free from viruses/malware. We have a very limited number of rental laptops available for $25/day, which can be reserved online.</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="1">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >2</Badge>Do I need to have prior programming experience?</AccordionHeader>
                                <AccordionBody>No prior programming experience is required, but students should be comfortable typing, navigating a file / folder structure, and using a web browser.</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="2">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >3</Badge>How many students will there be in my class?</AccordionHeader>
                                <AccordionBody>This course is capped at 16 students.</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="3">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >4</Badge>Are there any age limits for students in the Intro to Web Development course?</AccordionHeader>
                                <AccordionBody>The Intro To Web Development is designed for adult learners.</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="4">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >5</Badge>Where do I park?</AccordionHeader>
                                <AccordionBody>See map for parking options.</AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </Col>
                </Container>
                <Container className={styles.register}>
                    <Col  xs={{offset:3, span: 6}} sm={{offset: 3, span: 6}} md={{offset: 4, span: 4}} lg={{offset:4, span: 4}} xl={{ offset: 5, span: 6 }}>
                        <a href='https://www.eventbrite.com/e/intro-to-web-development-remote-spring-2023-tickets-479978607937' >
                            <BrandButton className={`${styles.registerButton} secondary text-uppercase my-5`}>register now</BrandButton></a>
                            {/* still need to fit button between arrows for smaller screen sizes/fix button responsiveness for entire page */}
                    </Col>
                </Container>
                <Container className={styles.questions}>
                    <Title className='text-white text-center mt-5 pt-5 pb-4'>Still have questions?</Title>
                    <Col xs={{offset:3}} sm={{offset:3, span: 12}} md={{offset:4, span:4}} lg={{ offset: 5, span: 6 }}>
                        <BrandButton className='text-uppercase mb-5 fw-bold'>contact us</BrandButton>
                    </Col>
                </Container>
            </main>
        </Layout>
    )
}
export default IntroWebDevPage;