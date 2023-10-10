import React from 'react'
import Title from '../../../../components/UI/Title/Title';
import Subtitle from '../../../../components/UI/Subtitle/Subtitle';
import { GatsbyImage } from "gatsby-plugin-image";

function GradStat(props) {
    return (
        <div>
            <div style={{width: "190px",weight: "150px", display:"block", marginLeft:"auto", marginRight: "auto"}}>
                <GatsbyImage image={props.image} alt={props.alt}/>
            </div>
            <h2 className="text-white py-3 fw-bolder">{props.stat}</h2>
            <h3 className="text-white subtitle--small">{props.subtitle}</h3>
            <h6 className="fst-italic fw-lighter fs-5 text-white subtitle--small">{props.subtext}</h6>
        </div>
    )
}

export default GradStat
