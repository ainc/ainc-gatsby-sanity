import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";
import * as styles from "./coursecardlong.module.scss";
import Title from "../UI/Title/Title";
import Subtitle from '../UI/Subtitle/Subtitle'
import BrandButton from "../UI/BrandButton/BrandButton";

const CourseCardLong = ({ courseInfo, stripeColor }) => {
    const backgroundColor = {
        '--stripe-color': stripeColor,
    };
    return (
    <div>
        {courseInfo.map((course) => (
        <Container className={`${styles.box}`} style={backgroundColor}>
            <Row>
                <Col md='auto'>
                    <GatsbyImage alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} className={`${styles.imageContainer}`} />
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
         ))}
    </div>
    )

}

export default CourseCardLong;