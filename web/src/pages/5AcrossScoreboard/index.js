import React, {useState} from "react";
import { graphql } from "gatsby";
import * as styles from "./5AcrossScoreboard.module.scss";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../components/UI/Title/Title";


const FiveAcrossScoreboard = ({ data }) => {
    // Extract the nodes array from the data structure and sort them in order by points 
    const nodes = data.allGoogleSheet.nodes[0].Sheet1;
    nodes.sort((a, b) => b.points - a.points);   
    nodes.forEach((node, index) => {
        node.rank = index + 1; 
    });

    // State to manage filtered data
    const [filteredData, setFilteredData] = useState(nodes);

    const filterByName = (data, name) => {
        const nodes = data.allGoogleSheet.nodes[0].Sheet1;

        const filteredData = nodes.filter((item) =>
          item.fName.trim().toLowerCase().includes(name.toLowerCase())
        );
        return filteredData;
      };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 
       
        const formData = new FormData(e.target);
        
        const name = formData.get("name");

        const filteredData = filterByName(data, name);
        setFilteredData(filteredData);
    };


    return(
   <Layout>
        <Col className="p-5">
        <Row>
            <Title
                style={{ color: "#ED3742" }}
                className="text--huge text-center mt-4  mx-center"
            >
                Attendes standings
                <p style={{ color: 'black', width: '75%'}} className="mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Title>
        </Row>

        <form  className="p-1" id="filterForm" onSubmit={handleSubmit}>
        <label className="px-2" htmlFor="name">Enter Name:</label>
            <input
                className="px-2"
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
            />
            <button className="mx-2" type="submit">Filter</button>
        </form>

        <table className={`${styles.table}`}>
            <thead>
                <tr className="text-white">
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Events attended</th>
                <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                    <tr>
                    <th scope="row"  className="text-white">{item.rank}</th>
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
