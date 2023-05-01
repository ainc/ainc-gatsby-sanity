import React from "react";
import * as styles from "./coursetable.module.scss";
import moment from 'moment';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Container, Col, Row, Image } from "react-bootstrap";
// import BrandButton from "../components/UI/BrandButton/BrandButton"
import BrandButton from "../UI/BrandButton/BrandButton";



const CourseTable = ({ tableColumns, tableInfo }) => {
    return (
        <table className="">
            <tr>
                {tableColumns.map((column) => (
                    <th className={styles.titleCell}><h5 className={styles.titleText}>{column}</h5></th>
                    
                ))}
                
            </tr>
            {tableInfo.map((course) => (
                <tr>
                    <td className={styles.cell}>
                    <a href={course.node.courseLink}>
                        {course.node.picture !== null ? (
                            <GatsbyImage alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} layout="contrained" width={100}/>
                        ) : (
                            <Subtitle className="text--brand link--bright-red">{course.node.courseTitle}</Subtitle>
                        )}
                        </a>
                        
                        <br/>
                        {course.node.courseSeason}
                    </td>
                    <td className={styles.cell}><h6>{course.node.format}</h6></td>                                                                                                                                                                                
                    <td className={styles.cell}><h6>{course.node.topics}</h6></td>
                    <td className={styles.cell}><h6>{course.node.technologies}</h6></td>
                    <td className={styles.cell}><h6>{course.node.startDate} - {course.node.endDate}
                    <br/>{course.node.schedule}</h6></td>
                    <td className={styles.cell}><h6>{course.node.designedFor ? course.node.designedFor : ""}</h6></td>
                    <td className={styles.cell}><BrandButton className="p-1">Application Closed</BrandButton></td>
                </tr>
            ))}
            
        </table>
    )
}

export default CourseTable;