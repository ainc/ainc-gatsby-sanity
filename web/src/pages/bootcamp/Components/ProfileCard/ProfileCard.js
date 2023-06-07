import React, { Component } from 'react'
import Subtitle from '../../../../components/UI/Subtitle/Subtitle'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProfileCard = (props) => {
    
    return (
        <div className="text-center mx-lg-5 mt-2">
            <GatsbyImage image={props.image} alt="Profile Image" className="img-circle" style={{maxWidth: "34%", borderRadius: "50%", marginBottom: "-120px"}}/>
            <div className="background--gray rounded mt-4 pt-4">
                <Subtitle className="text-white text--fs-60 mt-4 pt-lg-5">Meet {props.name}</Subtitle>
                <p className="text-white text--fs-30 py-2 mx-3 mt-2">{props.text1}</p>
                <p className="text-white text--fs-30 pt-2 pb-4 mx-3">{props.text2}</p>
            </div>
        </div>
    )
}

export default ProfileCard
