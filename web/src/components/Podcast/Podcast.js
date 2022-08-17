import React from "react";
import * as styles from "./podcast.module.scss";
import moment from 'moment';

import { GatsbyImage} from "gatsby-plugin-image";

import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import { Container, Col, Row, Image } from "react-bootstrap";

const Podcast = (props) => {

    const DateSplit = props.date.split(" ");
    // const DateFormatted = `${moment(String(DateSplit[2]), 'MMM').format('MMMM')} ${DateSplit[1]}, ${DateSplit[3]}` // July, September, December
    const DateFormatted = `${DateSplit[2]} ${DateSplit[1]}, ${DateSplit[3]}` //Use this one for month format Jul, Sep, Dec
    
    //remove html tags from a string, leaving only the inner text
    function removeHTML(str){ 
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
    }

    var SummaryText = ""

    if (removeHTML(props.summary).length > 111) {
        if (((removeHTML(props.summary)).slice(0,111).split(":")[1]) == null){
            SummaryText = ""
        }
        else{
        SummaryText = ((removeHTML(props.summary)).slice(0,111).split(":")[1]) + '...'
        }
    }
    
    return (
        <a href={props.link}>
            <div className={styles.box}>
                <div className={styles.insideBox}>
                    <img className={styles.image} src={props.img}></img>
                    <h5 className={styles.title}>{props.title}</h5>
                    {/* <h6 className={styles.subtitle}>{props.creator}</h6> */}
                    {/* <h6 className={styles.subtitle}>{props.date}</h6> */}
                    <h6 className={styles.subtitle}>{DateFormatted}</h6>
                    <h6 className={styles.summary}>{`${SummaryText}`}</h6>
                </div>
            </div>
        </a>
    )
}

export default Podcast;