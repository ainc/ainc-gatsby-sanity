import React, { Component } from 'react'
import Subtitle from '../../components/UI/Subtitle/Subtitle'

const ProfileCard = (props) => {
    
    return (
        <div className="text-center mx-5">
            <img src={props.src} alt="Profile Image" className="img-circle" style={{maxWidth: "34%", borderRadius: "50%", marginBottom: "-130px"}}/>
            <div className="background--gray rounded mt-5 pt-1">
                <Subtitle className="text-white fs-2 mt-5 pt-5">Meet {props.name}</Subtitle>
                <p className="text-white fs-6 py-2 mx-5">{props.text1}</p>
                <p className="text-white fs-6 pt-2 pb-4 mx-5">{props.text2}</p>
            </div>
        </div>
    )
}

export default ProfileCard
