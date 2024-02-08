import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Col, Row, Card } from "react-bootstrap";

import BrandButton from "../UI/BrandButton/BrandButton";

import * as styles from "./coursecardsmall.module.scss";

const CourseCardSmall = ({ courseInfo }) => {

    return (
        <Container fluid className = 'd-flex align-items-stretch'>
            <Row>
        {courseInfo.map((course) => (
                <Col>
                    <Card className={`${styles.box}`}>
                        <GatsbyImage alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} className={`${styles.imageContainer} mt-3`}/>
                        {/* I couldn't get Card.Img to work with GatsbyImage- next best thing*/}
                        <Card.Body>
                            <Card.Title className='text-uppercase fw-bold align-middle fs-2'>{course.node.courseTitle}</Card.Title>
                            <Card.Text className={`${styles.descriptionText} fs-5`}>{course.node.description}</Card.Text>
                            <a href={course.node.courseLink}>
                                <BrandButton>Learn More</BrandButton>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
        ))}
            </Row>
        </Container>
    )
}

export default CourseCardSmall;
