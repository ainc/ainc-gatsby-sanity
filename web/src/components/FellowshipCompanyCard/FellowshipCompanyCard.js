import React from "react";
import * as styles from './FellowshipCompanyCard.module.scss';
import "../../styles/main.scss"
import { Container } from "react-bootstrap";
import Title from "../UI/Title/Title";


const FellowshipCompanyCard = (props) => {

    const year = (props.date).split("-")[0] //Change date to year

    return (
        <Container className={`${styles.box}`}>

            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </head>
                
            <div className={`d-block h-100`} style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center center",

            }}>
            <Container className={`${styles.overlayText} p-3`}>
                <div className="d-flex justify-content-between mb-2">
                    <a href={props.url}>
                        <Title className={`link--red fs-6`} style={{letterSpacing: "0rem"}}>{props.name}</Title>
                    </a>
                    <Title className={`text--red fs-6 fst-italic`} style={{letterSpacing: "0rem"}}>{year}</Title>
                </div>
                
                <div className="text-start">
                    <h6 className="fst-italic fw-light">{props.description}</h6>
                </div>

                <div className="text-end px-3 ">
                    <a href={props.url}>
                        <i class={`link--bright-red text--red bi bi-arrow-right-square-fill fs-3`}></i>
                    </a>
                </div>
            </Container>
        </div>
    </Container>
    );
};

export default FellowshipCompanyCard;