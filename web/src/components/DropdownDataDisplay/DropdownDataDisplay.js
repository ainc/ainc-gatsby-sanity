import React from "react";
import { GatsbyImage} from "gatsby-plugin-image";
import { Container, Col, Row, Image } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FiveAcrossWinnersCard from "../FiveAcrossWinnersCard/FiveAcrossWinnersCard";
import * as styles from './DropdownDataDisplay.module.scss'
import styled from 'styled-components'
import * as variables from '../../styles/Variables'

const BrandDropdownButton = styled(DropdownButton)`
    button {
        font-family: ${variables.styles.fonts.baseFont};
        font-weight: 600;
        letter-spacing: 3px;
        background: ${variables.styles.colors.brand};
        padding: 0.5rem 2rem;
        color: white;
        display: inline-block;
        text-transform: uppercase;
        font-size: ${variables.styles.sizes.text};
        border: 2px solid ${variables.styles.colors.brand};
        border-radius: 4px;
        position: relative;

        @media only screen and (max-width: ${variables.styles.screens.mobile}) {
            font-size: ${variables.styles.sizes.text_tiny};
            padding: 0.3rem 1rem;
        }
    }
    
`


const DropdownDataDisplay = (props) => {

    const data = props.data
    const items = props.categories
    const currentYear = items[0]

    const [selectedItem, setSelectedItem] = React.useState("");

    let currentData = []

    for(let event in data){
        if(data[event].node.WinningDate.includes(selectedItem ? selectedItem : currentYear)){
            currentData.unshift(data[event])
            // console.log("TEST: ", data[event].node.WinningDate)
        }
    }
    // var currentChoice = ""
    console.log("Current Data: ", currentData)


  return (
    <Container fluid>
        {/* <Container fluid> */}
            <Row>
                <Col>
                    <BrandDropdownButton className="" variant="danger" title={selectedItem ? selectedItem : currentYear}>
                        {items.map((item) => 
                            <Dropdown.Item eventKey={item} onClick={() => setSelectedItem(item)}>{item}</Dropdown.Item>
                        )}
                    </BrandDropdownButton>
                </Col>
            </Row>
        {/* </Container> */}
        {/* <Container> */}
            <Row className="mt-5">
                {currentData.map((event) => (
                    <Col lg="4">
                        {/* <h1>{event.node.companyTitle}</h1> */}
                        <FiveAcrossWinnersCard
                            companyTitle={event.node.companyTitle}
                            founders={event.node.FounderNames}
                            founderVideo={event.node.founderVideo}
                            fiveAcrossDate={event.node.WinningDate}
                            // companyTitle={}
                        />
                    </Col>
                ))}
            </Row>
        {/* </Container> */}
    </Container>
    
  );
};

export default DropdownDataDisplay;
