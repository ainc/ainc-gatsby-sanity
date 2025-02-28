import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../components/UI/Title/Title";


const FiveAcrossScoreboard = ({ data }) => {
    // Extract the nodes array from the data structure and sort them in order by points 
    const nodes = data.allGoogleSheet.nodes[0].Sheet1;
    nodes.sort((a, b) => b.points - a.points);
    
    
    return(
   <Layout>
        <Col className="p-5">
        <Row>
            <Title
                style={{ color: "#ED3742" }}
                className="text--huge text-center mt-4 "
            >
                5 across scoreboard
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Title>
        </Row>
        <table className="table" border={3}>
            <thead>
                <tr>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Events attended</th>
                <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
                {nodes.map((item, index) => (
                    <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.fName} {item.lName.charAt(0)}.</td>
                    <td>{item.totalEvents}</td>
                    <td>{item.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>          
        </Col>
    </Layout>
   )
}
export const query_scoreboard = graphql`
query {
    allGoogleSheet {
      nodes {
        Sheet1 {
            points
            totalEvents
            streak
            fName
            lName
        }
      }
    }
  }
`;


export default FiveAcrossScoreboard;
