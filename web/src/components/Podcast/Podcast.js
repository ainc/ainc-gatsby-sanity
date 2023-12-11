import React from "react";
import { parse } from 'node-html-parser';

import * as styles from "./podcast.module.scss";

const Podcast = (props) => {

    const DateSplit = props.date.split(" ");
    // const DateFormatted = `${moment(String(DateSplit[2]), 'MMM').format('MMMM')} ${DateSplit[1]}, ${DateSplit[3]}` // July, September, December
    const DateFormatted = `${DateSplit[2]} ${DateSplit[1]}, ${DateSplit[3]}` //Use this one for month format Jul, Sep, Dec

    //function to remove html tags from text
    var removeHTML = (str) => { 
        const summaryText = parse(str).innerText
        return summaryText  
    }

    var SummaryText = ""
     //if summary is more than 100 characters then condense
    if (removeHTML(props.summary).length > 100) {
        SummaryText = (removeHTML(props.summary)).replace(/&nbsp;/g, " ").slice(0,100) + '...' //remove all html,"&nbsp;", and condense summary (2 lines)
    }
    
    return (
        
        <a href={props.link}>
            <div className={styles.box}>
                <div className={styles.insideBox}>
                    <img className={styles.image} src={props.img}></img>
                    <h5 className={styles.title}>{props.title}</h5>
                    <h6 className={styles.subtitle}>{DateFormatted}</h6>
                    <h6 className={styles.summary}>{`${SummaryText}`}</h6>
                </div>
            </div>
        </a>
    )
}

export default Podcast;