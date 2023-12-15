import React from "react";
import { Col, Row } from "react-bootstrap";

import BrandButton from "../../components/UI/BrandButton/BrandButton";

import * as styles from './FiveAcrossWinnersCard.module.scss'


const FiveAcrossWinnersCard = (props) => {

    let d = new Date(props.fiveAcrossDate)
    let formattedDate = d.toLocaleDateString('en-GB', { //formats date as MMMM YYYY
        month: 'long', year: 'numeric'
      });
    
    //if no video is set by sanity, then default link to 5Across playlist
    let setDefaultVideo = props.founderVideo ? props.founderVideo : "https://www.youtube.com/playlist?list=PL_YvoQ-KM3YHl7D29MzJClPvRqp_PL7me" 

    return (
        <Row className="my-5">
            <Col sm="12">
                <div className={styles.headerBorder}>
                    {/* need to change headings to start from h1 and increase by one for accessibility */}
                    <h4 className={`${styles.headingSubtitle}`}><span>{formattedDate}</span></h4>
                    <h4 className="mt-3">{props.companyTitle}</h4>
                    <h4 className={styles.bodyText}>Founders:</h4>
                    <h4 className={`mb-3 ${styles.bodyText}`}>{props.founders}</h4>
                    <div className={styles.videoButton}>
                        <a href={setDefaultVideo}>
                            <BrandButton>Watch Video</BrandButton>
                        </a>
                    </div>
                </div>
                
            </Col>
        </Row>
    )
};

export default FiveAcrossWinnersCard;
