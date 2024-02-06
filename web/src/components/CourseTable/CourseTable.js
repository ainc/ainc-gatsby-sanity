import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import BrandButton from "../UI/BrandButton/BrandButton";
import Subtitle from "../../components/UI/Subtitle/Subtitle";

import * as styles from "./coursetable.module.scss";


const CourseTable = ({ tableColumns, tableInfo }) => {
    return (
        <table className="">
            <tr>
                {tableColumns.map((column) => (
                    <th className={styles.titleCell}>
                        <h1 className={styles.titleText}>{column}</h1>
                    </th>
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
                    <td className={styles.cell}><h2>{course.node.format}</h2></td>                                                                                                                                                                                
                    <td className={styles.cell}><h2>{course.node.topics}</h2></td>
                    <td className={styles.cell}><h2>{course.node.technologies}</h2></td>
                    <td className={styles.cell}><h2>{course.node.startDate} - {course.node.endDate}
                    <br/>{course.node.schedule}</h2></td>
                    <td className={styles.cell}><h2>{course.node.designedFor ? course.node.designedFor : ""}</h2></td>
                    <td className={styles.cell}><BrandButton className="p-1">Application Closed</BrandButton></td>
                </tr>
            ))}
            
        </table>
    )
}

export default CourseTable;