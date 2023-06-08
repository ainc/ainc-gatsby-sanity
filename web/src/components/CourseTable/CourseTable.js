import React from "react";
import * as styles from "./coursetable.module.scss";
import moment from 'moment';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import {Table, Col, Row, Container} from "react-bootstrap";
// import BrandButton from "../components/UI/BrandButton/BrandButton"
import BrandButton from "../UI/BrandButton/BrandButton";
import "./coursetable.module.scss"



const CourseTable = ({ tableColumns, tableInfo }) => {


    return (
        <div className="wrapper">
        <table className="my-5">
            <thead>
            <tr>
                {tableColumns.map((column) => (
                    <th className={styles.titleCell}>
                        <h5 className={styles.titleText}>{column}</h5>
                    </th>
                ))}
            </tr>
            </thead>

            <tbody>
           
            {tableInfo.map((course) => (
                <tr>
                    <td className={`${styles.cell}`} data-title={tableColumns[0]}>
                    <a href={course.node.courseLink}>
                        {course.node.picture !== null ? (
                            <GatsbyImage className={styles.logo} alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} layout="constrained" width={100}/>
                        ) : (
                            <Subtitle className="text--brand link--bright-red">{course.node.courseTitle}</Subtitle>
                        )}
                        </a>
                        
                        <strong className={styles.subtitle}>{course.node.courseTitle}</strong>
                        <br/>
                        <strong>{course.node.courseSeason}</strong>
                    </td>
                    <td className={styles.cell} data-title={tableColumns[1]}><h6>{course.node.format}</h6></td>                                                                                                                                                                                
                    <td className={styles.cell}data-title={tableColumns[2]}><h6>{course.node.topics}</h6></td>
                    <td className={styles.cell} data-title={tableColumns[3]}><h6>{course.node.technologies}</h6></td>
                    <td className={styles.cell} data-title={tableColumns[4]}><h6>{course.node.startDate} - {course.node.endDate}
                    <br/>{course.node.schedule} </h6></td>
                    <td className={styles.cell}data-title={tableColumns[5]}><h6>{course.node.designedFor ? course.node.designedFor : ""}</h6></td>
                    <td className={styles.cell}data-title={tableColumns[6]}><BrandButton className="p-1">Application Closed</BrandButton></td>
                </tr>
            ))}
            </tbody>
            
        </table>
        </div>
    )
}


export default CourseTable;