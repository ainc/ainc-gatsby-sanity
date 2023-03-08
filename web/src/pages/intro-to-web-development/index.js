import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle"
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import * as styles from './intro-to-web-development.module.css'
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';


const IntroWebDevPage = ({ data }) => {

    return (
        <Layout>
            <main>
             <Container className={`py-5 ${styles.intro}`}>
                <Title className='pt-5 pb-2 text-center text-uppercase'>intro to web development</Title>
                <Col xl={{offset: 5, span: 6}}>
            <BrandButton className='text-uppercase mb-5'>register now</BrandButton>
            </Col>
            <Row>
                <Col xl={{span:4, offset:4}}>
                <p className={`text-center fw-bold ${styles.text}`}>Awesome Inc U's beginner coding course for adults, giving students the core skills and knowledge to start the journey towards professional web development. Your next adventure starts here.</p>
                </Col>
            </Row>
            </Container>
             <Container className={` ${styles.upcomingProgram}`}>
                <Title className='text-white text-uppercase text-center pt-5 pb-5'>upcoming program dates</Title>
             </Container>
             <Container className={` ${styles.whyLearn}`}>
                <Col lg={{offset: 3, span: 6}}>
                <Title className='text-uppercase mt-5 text-end'>why learn from awesome inc u?</Title>
                <p className='text-end'>
                At Awesome Inc, everything we do starts with our Core Values. We care about people, and making a difference in our community. 
                That's why we want to help everyone we can to learn the life changing skill of coding. And while doing that, we've seen that the best way to learn a new skill is to get the right help on your journey. 
                It's so easy to waste time trying to learn something by yourself, constantly running into problems, and getting frustrated along the way, but we're here to help! With coaching from Senior Developers 
                and a curriculum built for you, we're ready to meet you where you're at, even if you're at step 0.
                </p>
                </Col>
            <Row>
                <Col lg={{offset: 2, span: 4}}>
                    
                <StaticImage className={`mt-5 mb-5 ${styles.arrow}`} src='../../images/arrow.png' alt='arrow'></StaticImage> 
                </Col>
                
                <Col lg={{offset:0, span: 6}}>
                <BrandButton className='text-uppercase w-50 mb-3'>hear from students</BrandButton>
                </Col>
             
                </Row>
             </Container>
             <Container className={styles.awesome}>
             <Col lg={{offset:3, span: 6}}>
                <StaticImage className='' src='../../images/laptop-video.png' alt='laptop'></StaticImage>
                </Col>
                <Title className='text-uppercase text-center text-white'>what makes it awesome?</Title>
                <Col lg={{offset: 2, span: 8}}>
                <p className='mt-5 text-center text-white'>The best learning doesn't just happen when you're taught information. It comes when you connect with others who are learning alongside you. 
                Intro to Web is designed to both teach you the skills, and foster connections. Intro also offers more flexibility as a part-time, evening course; It covers most of the introductory topics used in our more 
                intensive Bootcamp program, but at a more manageable pace. It'll help you build a solid foundation in web development using technologies like HTML, CSS, and JavaScript. And if you don't even know what those are... 
                it's ok!
                </p>
                <p className='mt-4 pb-5 text-center text-white'>Prior Awesome Inc students have come from a variety of backgrounds, including manufacturing, retail, design, food service, law, and healthcare. 
                Classes are two nights per week, two hours per night, for nine weeks. In addition to in-class hours, our instructional team is available remotely for Q&A throughout the week via Slack.
                </p>
                </Col>
             </Container>
             <Container className={styles.curriculum}>
                <Title className='text-uppercase text-start'>curriculum</Title>
                <p className='fw-lighter fst-italic text-start'>If reading this list makes your eyes glaze over... we get it. Maybe we can talk on the phone to explain the details.</p>
                <Col>
                <ol>
                    <li>Developer Tools and Environment Setup</li>
                    <li>HTML and How the Web Works</li>
                    <li>Styling pages with CSS and Bootstrap</li>
                    <li>Templates and the DRY Principle</li>
                    <li>JavaScript (variables,conditionals,loops,arrays,objects,functions) </li>
                    <li>Interactive JavaScript and the DOM</li>
                    <li>Getting Data from APIs</li>
                    <li>Final Project</li>
                </ol>
                <BrandButton className='text-uppercase w-25 mb-5'>let's chat</BrandButton>
                </Col>
             </Container>
             <Container className={styles.courseOutcomes}>
                <Row className='pb-5'>
                    <Col>
                    
                    </Col>
                    <Col>
                    <Title className='text-uppercase'>course outcomes</Title>
                    <li>Write code in languages like HTML, CSS, and JavaScript</li>
                    <li>Create interactive websites</li>
                    <li>Make friends and learn how to continue practicing web development beyond this course</li>
                    <li>Build a Final Project like these:</li>
                    </Col>
                </Row>
             </Container>
             <Container className={styles.tuitionCredit}>
                {/* ask kyle how to do the images/background??? */}
                <Title className='pt-5 text-uppercase text-white text-center'>tuition credit</Title>
                <Col lg={{offset: 2, span: 8}}>
                <p className='text-center text-white pb-5'>100% of this course payment can be used as tuition credit for our Web Developer Bootcamp. Candidates must enroll in the Bootcamp program within 
                one year of completing the Intro to Web Development course. Please note that completion of this course does not guarantee admission to the Web Developer Bootcamp – the standard 
                application process still applies.
                </p>
                </Col>
             </Container>
             <Container className={styles.faq}>
                <Title className='text-uppercase text-center mb-5'>faq</Title>
                <Col>
                <Accordion>
                <Accordion.Header>Do I need to bring a computer?</Accordion.Header>
                <AccordionBody>Yes. Each student will need to provide his/her own laptop for the course. Microsoft Windows-based PC's or Apple macOS computers will work. We recommend a laptop made within the past 3-4 years. 
                    Computers should be free from viruses/malware. We have a very limited number of rental laptops available for $25/day, which can be reserved online.</AccordionBody>
                <AccordionHeader>Do I need to have prior programming experience?</AccordionHeader>
                <AccordionBody>No prior programming experience is required, but students should be comfortable typing, navigating a file / folder structure, and using a web browser.</AccordionBody>
                <AccordionHeader>How many students will there be in my class?</AccordionHeader>
                <AccordionBody>This course is capped at 16 students.</AccordionBody>
                <AccordionHeader>Are there any age limits for students in the Intro to Web Development course?</AccordionHeader>
                <AccordionBody>The Intro To Web Development is designed for adult learners.</AccordionBody>
                <AccordionHeader>Where do I park?</AccordionHeader>
                <AccordionBody>See map for parking options.</AccordionBody>
                </Accordion>
                </Col>
             </Container>
             <Container className={styles.register}>
                <Col lg={{offset: 5, span:6}}>
                <BrandButton className='secondary text-uppercase mb-5'>register now</BrandButton>
                </Col>
             </Container>
             <Container className={styles.questions}>
                <Title className='text-white text-center py-5'>Still have questions?</Title>
                <Col lg={{offset: 5, span: 6}}>
                <BrandButton className='text-uppercase mb-5 fw-bold'>contact us</BrandButton>
                </Col>
             </Container>
            </main>
        </Layout>
    )
}
export default IntroWebDevPage;