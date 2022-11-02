import React from "react";
import { GatsbyImage} from "gatsby-plugin-image";
import { Container, Col, Row, Image } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FiveAcrossWinnersCard from "../FiveAcrossWinnersCard/FiveAcrossWinnersCard";
import * as styles from './DropdownDataDisplay.module.scss'



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
                    <DropdownButton variant="danger" title={selectedItem ? selectedItem : currentYear}>
                        {items.map((item) => 
                            <Dropdown.Item eventKey={item} onClick={() => setSelectedItem(item)}>{item}</Dropdown.Item>
                        )}
                    </DropdownButton>
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
