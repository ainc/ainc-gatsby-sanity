import * as React from 'react'
// import ReactTable from "react-table"
import Layout from '../../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby";
import Title from '../../../components/UI/Title/Title'
import Subtitle from '../../../components/UI/Subtitle/Subtitle'
import BrandButton from "../../../components/UI/BrandButton/BrandButton"
import "../../../styles/main.scss"
import * as styles from './adults.module.scss'
import courses from '../../../../../studio/schemas/documents/courses';
// import "../../../styles/main.scss"

const AdultsPage = ({ data }) => {

    const fullTimeCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === "full-time")
    const partialTimeCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === "part-time" && course.node.courseType === "coding")
    console.log(partialTimeCourses)

    return (
        <Layout>
            <Container className=''>
                <Row className='pt-5 mt-5'>

                    <Col col="5" className={`my-5 ${styles.allPadding}`}>
                        <Row className={`justify-content-center`}>
                            <Col md="3"/>
                            <Col md="9">
                                <Title className="">ADULT</Title>
                                <h5 className=''><i>Coding Courses</i></h5>
                            </Col>
                            <Col md="6" className=''>
                                <h6><i>Full and Part-Time Courses for Career Switchers, Professionals, and Hobbyists</i></h6>
                            </Col>
                        </Row>
                        
                    </Col>
                    
                    <Col col="6">
                        <StaticImage quality="100" className="img-responsive" src='../../../images/mac-code.png' alt='computer with code' height={"400"} width={"400"}/>

                    </Col>
                </Row>
                {/* <Container className='mx-5'> */}
                <Row className='mt-5'>
                    <Col xl="1"/>
                    <Col className='text-center mb-5'>
                        <p>Learning to code is difficult, but so is learning to salsa dance or learning to play the guitar. Consistent practice, week after week, is how you become a great programmer.</p>
                    </Col>
                    <Col xl="1"/>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <a href="https://youtu.be/mL5h5DqhXjM">
                            <StaticImage src='../../../images/macbook-youtube-video.png' alt='macbook youtube' quality="100" />
                        </a>
                    </Col>
                    <Col xs="12" md="6" className='d-flex align-items-end mb-5'>
                        <h6><i>"Starbucks to Software Developer in 12 Weeks."
                        <br/>Web Developer Bootcamp Student Spotlight: David V.</i></h6>
                    </Col>
                </Row>
                {/* </Container> */}
                <Row className='mt-5 white-space-auto overflow-auto'>
                    <Col>
                        <table>
                            <tr>
                                <th className={styles.titleCell}><h5>COURSE</h5></th>
                                {/* <th className={styles.titleCell}><h5>TIME REQUIREMENT</h5></th> */}
                                <th className={styles.titleCell}><h5>FORMAT</h5></th>
                                <th className={styles.titleCell}><h5>TOPICS</h5></th>
                                <th className={styles.titleCell}><h5>TECHNOLOGIES</h5></th>
                                <th className={styles.titleCell}><h5>SCHEDULE</h5></th>
                                <th className={styles.titleCell}><h5>DESIGNED FOR</h5></th>
                                <th className={styles.titleCell}><h5>LEARN MORE</h5></th>
                            </tr>
                            {fullTimeCourses.map((course) => (
                                <tr>
                                    <td className={styles.cell}>
                                        <a href={course.node.courseLink}>
                                            <GatsbyImage alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} height="100" width="100"/>
                                        </a>
                                        <br/>
                                        {course.node.courseSeason}
                                    </td>
                                    <td className={styles.cell}><h6>{course.node.timeRequirement}<br/>{course.node.format}</h6></td>                                                                                                                                                                                
                                    {/* <td className={styles.cell}><h6>{course.node.format}</h6></td> */}
                                    {/* <td className={styles.cell}><h6>{course.node.topics}</h6></td> */}
                                    {/* <td className={styles.cell}><h6>{course.node.timeRequirement}
                                    <br/>4 weeks remote
                                    <br/>12 weeks in-person</h6></td> */}
                                    <td className={styles.cell}><h6>{course.node.topics}</h6></td>
                                    <td className={styles.cell}><h6>{course.node.technologies}</h6></td>
                                    <td className={styles.cell}><h6>{course.node.startDate} - {course.node.endDate}
                                    <br/>{course.node.schedule}</h6></td>
                                    <td className={styles.cell}><h6>{course.node.designedFor ? course.node.designedFor : ""}</h6></td>
                                    <td className={`${styles.cell}`}><BrandButton className="p-1">Application Closed</BrandButton></td>
                                </tr>
                            ))}
                            
                            {/* <tr>
                                <td className={styles.cell}>
                                    <a href="https://www.awesomeinc.org/bootcamp">
                                        <StaticImage alt="Web Developer Bootcamp" src="https://d33wubrfki0l68.cloudfront.net/d1380c389d72856f90c1f8866e37016b16a75997/92da2/images/logos/aincu-bootcamp-logo.png" class="img-responsive"/>
                                    </a>
                                    <h6>Spring 2023</h6>
                                </td>
                                <td className={styles.cell}><h6>Full-Time
                                <br/>4 weeks remote
                                <br/>12 weeks in-person</h6></td>
                                <td className={styles.cell}><h6>CS and Programming Fundamentals, Full-Stack Web Development, Tech Job Skills</h6></td>
                                <td className={styles.cell}><h6>HTML, CSS, JavaScript, Python, SQL, Django, React, Git, Agile, Cloud</h6></td>
                                <td className={styles.cell}><h6>Feb 20 - May 12
                                <br/>Mon-Fri
                                <br/>8am - 5pm</h6></td>
                                <td className={styles.cell}><h6>Career switchers</h6></td>
                                <td className={`${styles.cell}`}><BrandButton className="p-1">Details & Application</BrandButton></td>
                            </tr> */}
                        </table>
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
              gatsbyImageData(layout: CONSTRAINED, width: 100, height: 100, aspectRatio: 0.5)
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