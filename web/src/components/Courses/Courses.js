import React from "react";
import * as styles from "./courses.module.scss";
import moment from 'moment';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import { Container, Col, Row, Image } from "react-bootstrap";

const Courses = ( { props }) => {
    return (
        <a href={props.link}> {/* Makes the whole box a clickable link*/}
            <div className={styles.box}> {/* "card" styling */}
                <div className={styles.insideBox}> {/* spacing from the main box so its not on the edges*/}
                    <GatsbyImage className={styles.image} image={props.image} alt="Test"/>
                    <h5 className={styles.title}>{props.title} - {props.courseSeason}</h5>
                    <h6 className={styles.subtitle}>Format: {props.format}<br></br> Dates: {props.startDate} - {props.endDate}<br></br> Schedule: {props.schedule}</h6>
                    <h6 className={styles.summary}>{props.summary}: {props.technologies}</h6>
                </div>
            </div>
        </a>
    )
}

export default Courses;