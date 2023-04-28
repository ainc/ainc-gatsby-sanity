import * as React from 'react'
// import ReactTable from "react-table"
import Layout from '../../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby";
import Title from '../../../components/UI/Title/Title'
import Subtitle from '../../../components/UI/Subtitle/Subtitle'
import BrandButton from "../../../components/UI/BrandButton/BrandButton"
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import "../../../styles/main.scss"
import * as styles from './adults.module.scss'

const AdultsPage = ({ data }) => {


    const [timeFilter, setTimeFilter] = React.useState('all');
    const [buttonTimeFilter, setButtonTimeFilter] = React.useState('Select Schedule');
    
    const [typeFilter, setTypeFilter] = React.useState('all');
    const [buttonTypeFilter, setButtonTypeFilter] = React.useState('Course Subject');
    

    const handleRadioChangeTime = (e) => {
        // const value = ;
        setTimeFilter(e.target.id);
        setButtonTimeFilter(e.target.text);
    }

    const handleRadioChangeType = (e) => {
        // console.log(e.target.id)
        // const value = e.target.value;
        setTypeFilter(e.target.id);
        setButtonTypeFilter(e.target.text);
    }
    

    console.log("Time: " + timeFilter)
    console.log("Type: " + typeFilter)
    // console.log(selectedFTClass)

    // console.log(option1)
    // console.log(typeFilter)
    var TimeCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === timeFilter)
    if(timeFilter === 'all'){
        TimeCourses = data.allSanityCourses.edges
    }

    var TypeCourses = TimeCourses.filter((course) => course.node.courseType === typeFilter)
    if (typeFilter === 'all' || typeFilter === undefined){
        TypeCourses = TimeCourses
    }
    

    // const partialTimeCourses = TimeCourses.filter((course) => course.node.timeRequirement === "part-time" && course.node.courseType === "coding")
    
    const tableColumns = ["COURSE", "FORMAT", "TOPICS", "TECHNOLOGIES", "SCHEDULE", "DESIGNED FOR", "LEARN MORE"]

    return (
        <Layout>
            <Container className=''>
                <Row className='pt-5 mt-5'>

                    <Col col="5" className={`my-5 all-padding`}>
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
                <Row>
                    <Col lg="12" className=''>
                        <Title className="my-3 fs-3">Course Options: </Title>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3">
                    Schedule:
                        <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-primary">
                                {buttonTimeFilter}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item id="all" onClick={handleRadioChangeTime}>All</Dropdown.Item>
                                <Dropdown.Item id="full-time" onClick={handleRadioChangeTime}>Full Time</Dropdown.Item>
                                <Dropdown.Item id="part-time" onClick={handleRadioChangeTime}>Part Time</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col lg="3">
                    Subject:
                        <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                {buttonTypeFilter}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item id="all" onClick={handleRadioChangeType}>All</Dropdown.Item>
                                <Dropdown.Item id="coding" onClick={handleRadioChangeType}>Coding</Dropdown.Item>
                                <Dropdown.Item id="other" onClick={handleRadioChangeType}>Other</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                
                <Row className='mt-5 white-space-auto overflow-auto'>
                    
                    <Col>
                        <table>
                            <tr>
                                {tableColumns.map((column) => (
                                    <th className={styles.titleCell}><h5>{column}</h5></th>
                                    
                                ))}
                                
                            </tr>
                            {TypeCourses.length === 0 ? (
                                <h1>No Courses Found</h1>
                                ) : (
                                    TypeCourses.map((course) => (
                                        <tr>
                                            <td className={styles.cell}>
                                                <a href={course.node.courseLink}>
                                                    <GatsbyImage alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} height="100" width="100"/>
                                                </a>
                                                <br/>
                                                {course.node.courseSeason}
                                            </td>
                                            <td className={styles.cell}>{course.node.format}</td>                                                                                                                                                                                
                                            <td className={styles.cell}>{course.node.topics}</td>
                                            <td className={styles.cell}>{course.node.technologies}</td>
                                            <td className={styles.cell}>{course.node.startDate} - {course.node.endDate} <br/>{course.node.schedule}</td>
                                            <td className={styles.cell}>{course.node.designedFor ? course.node.designedFor : ""}</td>
                                            <td className={`${styles.cell}`}><BrandButton className="p-1">Application Closed</BrandButton></td>
                                        </tr>
                                    ))
                                )}
                                 
                            
                            
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