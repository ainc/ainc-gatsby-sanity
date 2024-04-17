import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Card, Col } from "react-bootstrap";

import Subtitle from '../../../../components/UI/Subtitle/Subtitle'
import img1 from '../../../../images/garrettfahrbach-wall.jpg'
import img2 from '../../../../images/kyleraney-wall.jpg'
import * as styles from './alumnicard.module.scss'
const AlumniCard = (props) => {
    return(
        <Card className='text-left' style={{backgroundColor: '#f5f5f5', width: 'fit-content', marginBottom: '0rem'}}>
            <div className='d-flex align-items-cente justify-content-center'>
                <Card.Img src={img1} style={{width: '165px'}}/>
            </div>
            <Card.Title className={styles.nameText}>Zachary Andrews</Card.Title>
            <Card.Text className={styles.jobText}>Software Developer</Card.Text>
            <div className='d-flex align-items-start'>
                <Card.Img src={img2}  style={{height: '35px'}}/>
            </div>
        </Card>
    )
}

export default AlumniCard;