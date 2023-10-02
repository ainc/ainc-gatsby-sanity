import React, { Component } from 'react'
import Subtitle from '../../../../components/UI/Subtitle/Subtitle'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../profileCard.module.scss'
const ProfileCard = (props) => {
    
    return (
        // <div className="text-center mx-5 mt-3">
        //     <GatsbyImage image={props.image} alt="Profile Image" className="img-circle" style={{maxWidth: "150px", borderRadius: "50%", marginBottom: "-100px"}}/>
        //     <div style={{maxHeight:"fit-content"}}className="background--gray rounded px-1 mt-5 pt-1">
        //         <Subtitle className="text-white mt-5 pt-2 pb-2 fancy-font">Meet {props.name}</Subtitle>
        //         <p className="text-white text--micro py-2 mb-1 mx-3 mt-1 px-2">{props.text1}</p>
        //         <p className="text-white text--micro py-2 mt-2 pb-4 mx-0 px-1">{props.text2}</p>
        //     </div>
        // </div>

        <div className={`${styles.profileCard} text-center`}>
            <GatsbyImage image={props.image} alt="Profile Image" className={`${styles.cardImg} img-circle`} />
        <div className={`${styles.cardContainer} background--gray rounded`}>
            <Subtitle className="text-white fs-2 mt-4 pt-4 fancy-font">Meet {props.name}</Subtitle>
            <p style={{fontSize:"10px", lineHeight:"10px"}} className="text-center text-white pt-2 mb-1 mx-3 mt-2 px-2">{props.text1}</p>
            <p style={{fontSize:"10px", lineHeight:"10px"}} className="text-center text-white text--micro pb-3 mx-3 px-0">{props.text2}</p>
        </div>
    </div>
    )
}

export default ProfileCard
