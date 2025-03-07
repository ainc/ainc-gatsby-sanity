import React, { useState } from "react";
import { graphql } from "gatsby";
import * as styles from "./5AcrossScoreboard.module.scss";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../components/UI/Title/Title";
import HorizontalButtons from "../events/5across/HorizontalButtons.js";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const FiveAcrossScoreboard = ({ data }) => {
    const [formName, setFormName] = useState(""); 
    const [filteredData, setFilteredData] = useState(data.allGoogleSheet.nodes[0].Sheet1);

    const nodes = data.allGoogleSheet.nodes[0].Sheet1;
    const nextFiveAcross = data.allSanityEvents.nodes || {};
    nodes.sort((a, b) => b.events - a.events);
    nodes.forEach((node, index) => {
        node.rank = index + 1;
    });

    const filterByName = (name) => {
        if (!name || name.trim() === "") {
            setFilteredData(nodes); 
            return;
        }

        const search = name.trim().toLowerCase();
        const filteredData = nodes.filter(({ firstName, lastName }) => {
            const fullName = firstName.toLowerCase().trim() + " " + lastName.toLowerCase().trim();
            return (
                firstName.toLowerCase().includes(search) ||
                lastName.toLowerCase().includes(search) ||
                fullName.includes(search)
            );
        });
        setFilteredData(filteredData);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setFormName(value);  
        filterByName(value);  
    };

    return (
        <Layout>
            <Col className="p-3">
                <Row>
                    <Title
                        style={{ color: "#ED3742" }}
                        className="text--huge text-center mt-4 mx-center"
                    >
                        Attendees standings
                        {/* <p style={{ color: "black", width: "75%" }} className="mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p> */}
                    </Title>
                    <Row className="d-flex flex-column align-items-center text-center">
                        <StaticImage
                            placeholder="blurred"
                            className="height"
                            src="../../images/5-Across-2025-Attendee-Giveaway-Ticket-Graphic.png"
                            alt=""
                        />   
                        <Row className="mt-3 justify-content-center">
                            {nextFiveAcross.map((node) => (
                                <HorizontalButtons key={node.linkToEvent} register={node.linkToEvent} />
                            ))}
                        </Row>
                    </Row>
                </Row>
                <Row className="px-4">
                    <input
                        className="px-2 my-2"
                        style={{width : '400px'}}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter name"
                        value={formName}  
                        onChange={handleInputChange}  
                    />
                </Row>
                <table className={`${styles.table}`}>
                    <thead>
                        <tr className="text-white">
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Events attended</th>
                            <th scope="col">Entries</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.rank}>
                                <th scope="row" className="text-white">{item.rank}</th>
                                <td>{item.firstName} {item.lastName.charAt(0)}.</td>
                                <td>{item.quantity}</td>
                                <td>{item.entries}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Col>
        </Layout>
    );
};

export const query_scoreboard = graphql`
query scoreboardQuery ($currentDate : Date) {
    allGoogleSheet {
        nodes {
            Sheet1 {
                firstName
                lastName
                quantity
                entries
              }
        }
    }
    allSanityEvents(
        filter: {
            reference: { eventTypeName: { eq: "5 Across" } }
            date: { gte: $currentDate }
        }
        sort: { date: ASC }
        limit: 1
    ) {
        nodes {
            eventName
            date(formatString: "MMMM D, YYYY")
            host
            location
            linkToEvent
            picture {
                asset {
                    gatsbyImageData
                }
            }
            reference {
                eventTypeName
            }
        }
    }
}
`;

export default FiveAcrossScoreboard;
