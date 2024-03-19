import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";
import * as styles from "./coursecardlong.module.scss";
import Title from "../UI/Title/Title";
import Subtitle from '../UI/Subtitle/Subtitle'
import BrandButton from "../UI/BrandButton/BrandButton";

const CourseCardLong = ({title, description, courseInfo, stripeColor, fontColor }) => {
    const backgroundColor = {
        '--stripe-color': stripeColor,
    };
    return (
    <div>
        {courseInfo.map((course) => (
        <Container fluid className = {styles.background} style={{backgroundImage: `url(${course.node.background.asset.url})`}}>
            <Col className="my-5 white-space-auto overflow-auto" lg={{ offset: 1, span: 10 }} >
                <Title className="text-center text--brand fs-3 align-text-top text-uppercase" style={{color: fontColor}}>{title}</Title>
                <Subtitle className="text-center text--brand fs-3 align-text-top pb-5 text-uppercase" style={{color: fontColor}}>{description}</Subtitle>
                
                {/* Smaller card container */}
                <Container className={`${styles.box}`} style={backgroundColor}>
                    <Row>
                        <Col md='auto' className="d-flex align-items-center justify-content-center">
                            <GatsbyImage alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} className={`${styles.imageContainer} `} />
                        </Col>
                        <Col>
                            <Title className={`${styles.boxTitle} text-uppercase text--brand fw-bold mt-3`}>{course.node.courseTitle}</Title>
                            <Subtitle className={`${styles.boxDescription} text-uppercase text--brand fw-bold ml-2 text-black fs-5`}>{course.node.courseSeason} / {course.node.format}</Subtitle>
                            {course.node.courseTitle != 'SalesForce Career Accelerator' && (
                            <Subtitle className={`${styles.boxDescription} text--brand fw-bold ml-2 text-muted`}>{course.node.startDate} - {course.node.endDate} / {course.node.schedule}</Subtitle>
                            )}
                            {course.node.courseTitle === 'SalesForce Career Accelerator' && (
                            <Subtitle className={`${styles.boxDescription} text--brand fw-bold ml-2 text-muted`}>Rolling admission for Cohort, start dates mid-month</Subtitle>
                            )}
                            <a href={course.node.courseLink}>
                                <BrandButton className={`${styles.boxDescription} mb-3`}>Learn More</BrandButton>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Container>
         ))}
    </div>
    )

}

export default CourseCardLong;