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

// import Icon from '../../../assets/svg/book-circle.svg'
import DottedLine from '/src/assets/svg/DottedLine.svg'
import GreyTriangle from '/src/assets/svg/GreyTriangle.svg'
// import { styles } from '../../../styles/Variables'

const AdultsPage = ({ data }) => {

    const FTCodingCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === "full-time" && course.node.courseType === "coding")
    const PTCodingCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === "part-time" && course.node.courseType === "coding")
    const otherCourses = data.allSanityCourses.edges.filter((course) => course.node.courseType === "other")
   
    
    const tableColumns = ["COURSE", "FORMAT", "TOPICS", "TECHNOLOGIES", "SCHEDULE", "DESIGNED FOR", "LEARN MORE"]

    return (
        <Layout>

            <Container>
            
                <Row className='pt-5 mt-5'>
                    <Col sm="5" className={`my-5 all-padding`}>
                        <Row className={`justify-content-center`}>
                            <Col md={{span: 9, offset: 3}}>
                                <Title>ADULT</Title>
                                <h5><i>Coding Courses</i></h5>
                            </Col>
                            <Col md="6">
                                <h6><i>Full and Part-Time Courses for Career Switchers, Professionals, and Hobbyists</i></h6>
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col col="6">
                        <StaticImage quality="90" className="img-responsive" src='../../../images/mac-code.png' alt='computer with code' height={"400"} width={"400"}/>
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row className='mt-5'>
                    <Col lg={{span: 10, offset: 1}} className='text-center mb-5' >
                        <p>Learning to code is difficult, but so is learning to salsa dance or learning to play the guitar. Consistent practice, week after week, is how you become a great programmer.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <a href="https://youtu.be/mL5h5DqhXjM">
                            <StaticImage src='../../../images/macbook-youtube-video.png' alt='macbook youtube' quality="90" />
                        </a>
                    </Col>
                    <Col xs="12" md="6" className='d-flex align-items-end mb-5'>
                        <h6><i>"Starbucks to Software Developer in 12 Weeks."
                        <br/>Web Developer Bootcamp Student Spotlight: David V.</i></h6>
                    </Col>
                </Row>
                
                
                <Row className='mt-5'>
                    <Col className="mb-5 white-space-auto overflow-auto" lg="12">
                        <Title className="text-center text--brand fs-2">BECOME A PROFESSIONAL DEVELOPER IN 16 WEEKS</Title>
                        {/* Add SVG's here */}
                        <div className='d-flex justify-content-center'>
                            <DottedLine style={{maxWidth: "10px", maxHeight: "55px"}} className='mb-3 mt-5' />
                        </div>
                        <CourseTable tableColumns={tableColumns} tableInfo={FTCodingCourses}/>
                    </Col>
                    <Col className="my-5 white-space-auto overflow-auto" lg="12">
                        <Title className="text-center text--brand fs-2">LEARN TO CODE WITHOUT QUITTING YOUR JOB</Title>
                        {/* Add SVG's here */}
                        <div className='d-flex justify-content-center'>
                            <DottedLine style={{maxWidth: "10px", maxHeight: "55px"}} className='mb-3 mt-4' />
                        </div>
                        <CourseTable tableColumns={tableColumns} tableInfo={PTCodingCourses}/>
                    </Col>
                    <Col className="my-5 white-space-auto overflow-auto" lg="12">
                        <Title className="text-center text--brand fs-2">NON-CODING COURSES TO HELP YOU GROW YOUR CAREER</Title>
                        {/* Add SVG's here */}
                        <div className='d-flex justify-content-center'>
                            <DottedLine style={{maxWidth: "10px", maxHeight: "55px"}} className='mb-3 mt-4' />
                        </div>
                        <CourseTable tableColumns={tableColumns} tableInfo={otherCourses}/>
                    </Col>
                </Row>
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
          startDate(formatString: "MMMM d, YYYY")
          endDate(formatString: "MMMM d, YYYY")
          picture {
            asset {
              gatsbyImageData
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