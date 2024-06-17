import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Title from "../../../../components/UI/Title/Title";
import Subtitle from "../../../../components/UI/Subtitle/Subtitle";

const KPIBox = ( props ) => {
    return(
        <Card className='text-center d-flex align-items-center justify-content-center' style={{backgroundColor: 'white', borderRadius: '15px', 
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', width: '300px', height: '200px'}}>
            <div>
                <Title className='brand'>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
            </div>
        </Card>
    )
}

export default KPIBox;