import React from 'react'
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import { StaticImage } from "gatsby-plugin-image";

function GradStat(props) {
    return (
        
        <div>
            <div>
                <img src={props.src} alt={props.alt} style={{maxWidth: "160px"}}/>
            </div>
            <Title className="text-white py-3">{props.stat}</Title>
            <Subtitle className="text-white">{props.subtitle}</Subtitle>
            <Subtitle className="fst-italic fw-lighter fs-5 text-white">{props.subtext}</Subtitle>
        </div>
    )
}

export default GradStat
