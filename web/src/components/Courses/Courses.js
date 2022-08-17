import React from "react";
import * as styles from "./courses.module.scss";
import moment from 'moment';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import { Container, Col, Row, Image } from "react-bootstrap";

const Courses = ({ link, title, image, courseSeason, startDate, endDate, schedule, summary, format, technologies }) => {
    return (
        <a href={link}> {/* Makes the whole box a clickable link*/}
            <div className={styles.box}> {/* "card" styling */}
                <div className={styles.insideBox}> {/* spacing from the main box so its not on the edges*/}
                    <GatsbyImage className={styles.image} image={image} alt="Test"/>
                    <h5 className={styles.title}>{title} - {courseSeason}</h5>
                    <h6 className={styles.subtitle}>Format: {format}<br></br> Dates: {startDate} - {endDate}<br></br> Schedule: {schedule}</h6>
                    <h6 className={styles.summary}>{summary}: {technologies}</h6>
                </div>
            </div>
        </a>
    )
}

export default Courses;