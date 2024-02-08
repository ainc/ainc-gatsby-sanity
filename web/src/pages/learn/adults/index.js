import * as React from 'react'
// import ReactTable from "react-table"
import Layout from '../../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import SEO from '../../../components/seo'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby";
import Title from '../../../components/UI/Title/Title'
import "../../../styles/main.scss"
import CourseTable from '../../../components/CourseTable/CourseTable'
import CourseCardSmall from '../../../components/CourseCardSmall/CourseCardSmall'
import * as styles from "./adults.module.scss"
import CourseCardLong from '../../../components/CourseCardLong/CourseCardLong'
// import Icon from '../../../assets/svg/book-circle.svg'
import DottedLine from '/src/assets/svg/DottedLine.svg'
import GreyTriangle from '/src/assets/svg/GreyTriangle.svg'
import Subtitle from '../../../components/UI/Subtitle/Subtitle'
// import { styles } from '../../../styles/Variables'

const AdultsPage = ({ data }) => {

    const FTCodingCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === "full-time" && course.node.courseType === "coding")
    const PTCodingCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === "part-time" && course.node.courseType === "coding")
    const otherCourses = data.allSanityCourses.edges.filter((course) => course.node.courseType === "other")
    const adultCourses = data.allSanityCourses.edges.filter((course) => course.node.ageGroup === "adult")
    const bootcampCourse = data.allSanityCourses.edges.filter((course) => course.node.courseTitle === "Web Developer Bootcamp")
    const introToWebCourse = data.allSanityCourses.edges.filter((course) => course.node.courseTitle === "Intro To Web Development")
    const salesforceCourse = data.allSanityCourses.edges.filter((course) => course.node.courseTitle === "SalesForce Career Accelerator")

    const tableColumns = ["COURSE", "FORMAT", "TOPICS", "TECHNOLOGIES", "SCHEDULE", "DESIGNED FOR", "LEARN MORE"]

    return (
        <Layout>
            <Container>
            
                <Row className={`${styles.box} pt-2 mt-3`}>
                    <Col sm="5" className={`my-5 pt-3 all-padding`}>
                        <Row className={`justify-content-center`}>
                            <Col md={{span: 9, offset: 3}}>
                                <Title className=''>ADULT</Title>
                                <Subtitle className='fs-5 '><i>Coding Courses</i></Subtitle>
                            </Col>
                            <Col md="6">
                                <p className='fs-6'><i>Full and Part-Time Courses for Career Switchers, Professionals, and Hobbyists</i></p>
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col col="6">
                        <StaticImage quality="90" className="img-responsive" src='../../../images/mac-code.png' alt='computer with code' height={"450"} width={"450"} style={{left: '20%'}}/>
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row className='mt-5'>
                    <Col lg={{span: 5, offset: 6}} className='text-center mb-5' >
                        <p>Learning to code is difficult, but so is learning to salsa dance or learning to play the guitar. Consistent practice, week after week, is how you become a great programmer.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <a href="https://youtu.be/mL5h5DqhXjM" target="_blank">
                            <StaticImage src='../../../images/macbook-youtube-video.png' alt='macbook youtube' quality="90" />
                        </a>
                    </Col>
                    <Col xs="12" md="6" className='d-flex align-items-end mb-5'>
                        <p><i>"Starbucks to Software Developer in 12 Weeks."
                        <br/>Web Developer Bootcamp Student Spotlight: David V.</i></p>
                    </Col>
                </Row>
                
                
                <Row className='mt-5'>
                    <Col className="mb-5 white-space-auto overflow-auto" lg="12">
                        {/* Add SVG's here */}
                        <CourseCardSmall courseInfo={adultCourses} />
                    </Col>
                </Row>

                <Container fluid className={`${styles.backgroundTop} mt-5`}>
                    <Col className="my-5 white-space-auto overflow-auto" lg={{ offset: 1, span: 10 }}>
                        <Title className='text-center text--brand fs-2 text-black pb-5 text-uppercase'>Become a Professional Developer In 16 Weeks</Title>
                        {/* Add SVG's here */}
                        {/*<Subtitle className={styles.cardTopper}>{bootcampCourse.map((course) => course.node.designedFor)}</Subtitle>*/}
                        <CourseCardLong courseInfo={bootcampCourse} stripeColor='#323232'/>
                    </Col>
                </Container>

                <Container fluid className = {styles.backgroundMid}>
                    <Col className="my-5 white-space-auto overflow-auto" lg={{ offset: 1, span: 10 }} >
                        <Title className="text-center text--brand fs-2 text-white align-text-top text-uppercase">Flexible Courses</Title>
                        <Subtitle className="text-center text--brand fs-2 text-white align-text-top pb-5 text-uppercase">Learn To Code Without Quitting Your Job</Subtitle>
                        {/* Add SVG's here */}
                        {/*<Subtitle className={styles.cardTopper}>{introToWebCourse.map((course) => course.node.designedFor)}</Subtitle>*/}
                        <CourseCardLong courseInfo={introToWebCourse} stripeColor='#939597'/>
                    </Col>
                </Container>

                <Container fluid className = {styles.backgroundBottom}>
                    <Col className="my-5 white-space-auto overflow-auto" lg={{ offset: 1, span: 10 }}>
                        <Title className="text-center text--brand fs-2 text-white align-top text-uppercase">Non-Coding Courses</Title>
                        <Subtitle className="text-center text--brand fs-2 text-white align-top pb-5 text-uppercase">To Help You Grow Your Career</Subtitle>
                        {/* Add SVG's here */}
                        {/*<Subtitle className={styles.cardTopper}>{salesforceCourse.map((course) => course.node.designedFor)}</Subtitle>*/}
                        <CourseCardLong courseInfo={salesforceCourse} stripeColor='#C12029'/>
                    </Col>
                </Container>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
    allSanityCourses {
      edges {
        node {
          courseTitle
          courseType
          courseSeason
          timeRequirement
          description
          designedFor
          startDate(formatString: "MMMM D, YYYY")
          endDate(formatString: "MMMM D, YYYY")
          picture {
            asset {
              gatsbyImageData(height: 200)
            }
          }
          topics
          technologies
          schedule
          courseLink
          ageGroup
          format
        }
      }
    }
  }
  
`;

export default AdultsPage;