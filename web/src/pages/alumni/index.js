import React, { useState } from "react";
import { graphql, Link } from "gatsby";
// import {
//   mapEdgesToNodes,
//   filterOutDocsWithoutSlugs,
//   filterOutDocsPublishedInTheFuture
// } from "../../lib/helpers";
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";

import GraphQLErrorList from "../../components/graphql-error-list";
import Layout from "../../containers/layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import Profile from "../../components/Profile/Profile";

import "./alumni.scss";

export const query = graphql`
  query AlumniPageQuery {
    allSanityBootcampAlumni {
      nodes {
        id
        name
        github
        portfolio
        linkedin
        class {
          title
          date
        }
        job
        picture {
          asset {
            gatsbyImageData(layout: CONSTRAINED, width: 300, aspectRatio: 1)
          }
        }
      }
    }
    allSanityBootcampClass(sort: { date: DESC }) {
      edges {
        node {
          title
          date
        }
      }
    }
  }
`;

const AlumniPage = props => {
  const { data, errors } = props;
  const [selectedClass, setSelectedClass] = useState("");

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const alumniNodes = (data.allSanityBootcampAlumni.nodes || {})

  const classList = data.allSanityBootcampAlumni && data.allSanityBootcampAlumni.nodes
    ? data.allSanityBootcampAlumni.nodes
      .map((node) => node.class.title)
      .filter((className, index, arr) => arr.indexOf(className) === index)
      .sort((a, b) => {
        const aClass = data.allSanityBootcampClass.edges.find(({ node }) => node.title === a).node;
        const bClass = data.allSanityBootcampClass.edges.find(({ node }) => node.title === b).node;
        return new Date(bClass.date) - new Date(aClass.date); // sort based on date in descending order
      })
      .map((gradClass) => (
        <button
          className={`classButton ${selectedClass === gradClass ? "active" : ""}`}
          key={gradClass}
          onClick={() => setSelectedClass(gradClass)}
        >
          {gradClass}
        </button>
      ))
    : null;

  // Add an "All Cohorts" button to the class list
  const allCohortsButton = (
    <button
      className="classButton"
      key="All Cohorts"
      onClick={() => setSelectedClass("")}
    >
      All Cohorts
    </button>
  );
  classList.unshift(allCohortsButton);

  let filteredNodes = alumniNodes;
  if (selectedClass) {
    filteredNodes = alumniNodes.filter(node => node.class.title === selectedClass);
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Title className="my-4">Bootcamp Alumni</Title>
            <p>The <Link className="text--brand link--brand fw-bold" to="/bootcamp">Web Developer Bootcamp</Link> is a 16-week, intensive training program to help people launch careers in software development. It includes over 500 hours of hands-on training, gaining experience while building 10+ software projects in an Agile environment, using HTML, CSS, JavaScript, PHP, Laravel, React, cloud deployment, GitHub, and more.</p>
            <p>Bootcamp alumni have been hired by more than 50 employers. Initial job titles have included Software Engineer, Software Developer, Web Developer, Application Developer, QA Engineer, DevOps Analyst, Salesforce Consultant, and UX/UI Designer.</p>
            <p className="fst-italic">Ribbons indicate an alum's first programming job following Bootcamp</p>
            <Subtitle>Alumni List</Subtitle>
          </Col>
        </Row>

        <div>
          {classList}
        </div>

        <Row>
          {filteredNodes.map((node) => (
            <Col sm={10} md={5} lg={5} xl={3} className="mb-4" key={node.id}>
              <Profile
                name={node.name}
                image={node.picture.asset.gatsbyImageData}
                linkedin={node.linkedin}
                github={node.github}
                website={node.portfolio}
                position={node.job}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center my-5">
            <Title>COMPANIES THAT HAVE HIRED OUR GRADUATES</Title>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-5">
          <Col sm={6} md={5} lg={5} xl={10} className="mb-4">
            <StaticImage quality='90' className="apax-logo me-3 mb-4" src="./images/apaxsoftware-logo.png" />
            <StaticImage quality='90' className="bigfans-logo me-3" src="./images/bigassfans-logo.png" />
            <StaticImage quality='90' className="blueframe-logo me-3" src="./images/blueframe-logo.png" />
            <StaticImage quality='90' className="cabemtechnologies-logo me-3" src="./images/cabemtechnologies-logo.png" />
            <StaticImage quality='90' className="infosys-logo" src="./images/infosys-logo.png" />
            <StaticImage quality='90' className="lightwell-logo me-3" src="./images/lightwell-logo.png" />
            <StaticImage quality='90' className="nymblsystems-logo me-3" src="./images/nymblsystems-logo.png" />
            <StaticImage quality='90' className="prospecttrax-logo me-3" src="./images/prospecttrax-logo.png" />
            <StaticImage quality='90' className="silverfern-logo me-3" src="./images/silverfern-logo.png" />
            <StaticImage quality='90' className="vetdata-logo" src="./images/vetdata-logo.png" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AlumniPage;