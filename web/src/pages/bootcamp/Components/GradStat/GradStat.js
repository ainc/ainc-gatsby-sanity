import React from 'react'
import Title from '../../../../components/UI/Title/Title';
import Subtitle from '../../../../components/UI/Subtitle/Subtitle';
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

function GradStat(props) {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center text-center'>
            <GatsbyImage image={props.image} alt={props.alt} style={{ maxWidth: "160px", height: "130px", objectFit: 'contain'}}/>
            <div className='mt-3'>
                <h2 className="text-white fw-bolder">{props.stat}</h2>
            </div>
            <div>
                <h3 className="text-white subtitle--small">{props.subtitle}</h3>
            </div>
            <div>
                <h6 className="fst-italic fw-lighter fs-5 text-white subtitle--small">{props.subtext}</h6>
            </div>
        </div>
    )
}

export default GradStat;
