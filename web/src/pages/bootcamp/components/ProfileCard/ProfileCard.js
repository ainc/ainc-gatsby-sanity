import React, { Component } from 'react'
import Subtitle from '../../../../components/UI/Subtitle/Subtitle'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProfileCard = (props) => {
    
    return (
        <div className="text-center mx-5 mt-2">
            <img src={props.src} alt="Profile Image" className="img-circle" style={{maxWidth: "34%", borderRadius: "50%", marginBottom: "-130px"}}/>
            <div className="background--gray rounded mt-5 pt-4">
                <Subtitle className="text-white fs-2 mt-4 pt-5">Meet {props.name}</Subtitle>
                <p className="text-white text--micro py-2 mx-3 mt-2">{props.text1}</p>
                <p className="text-white text--micro pt-2 pb-4 mx-3">{props.text2}</p>
            </div>
        </div>
    )
}

export default ProfileCard
