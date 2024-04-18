import  React from 'react';
import { Col, Card } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from './AlumniAvatarCard.module.scss'


export default function AlumniAvatarCard ({ alumniImage, name, jobTitle, companyLogo }) {
    return (
    <Card className='' style={{width: 'fit-content', backgroundColor: '#d1d3d4'}}>
        <Col className="flex-column justify-content-center align-items-center">
            <GatsbyImage className={styles.alumniImage} image={alumniImage} alt={name}/>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.job}>{jobTitle}</p>
            <div style={{height: '50px'}}>
                <GatsbyImage className={styles.companyLogo} image={companyLogo} alt={jobTitle}/>
            </div>
        </Col>
    </Card>
    )   
}
