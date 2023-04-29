import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../../lib/helpers";
import { Col, Container, Row } from 'react-bootstrap';
import GraphQLErrorList from "../../components/graphql-error-list";
import Profile from "../../components/Profile/Profile";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as styles from "./alumni.scss";

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
    allSanityBootcampClass(sort: { fields: date, order: DESC }) {
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
      .map((className) => (
        <button
          className={`classButton ${selectedClass === className ? "active" : ""}`}
          key={className}
          onClick={() => setSelectedClass(className)}
        >
          {className}
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
      <SEO title="Alumni" />
      <Container>
        <Row>
          <Col>
          <Title className="my-4">Bootcamp Alumni</Title>
          <p>The <a style={{ color: "#a21b22"}} href="/bootcamp">Web Developer Bootcamp</a> is a 16-week, intensive training program to help people launch careers in software development. It includes over 500 hours of hands-on training, gaining experience while building 10+ software projects in an Agile environment, using HTML, CSS, JavaScript, PHP, Laravel, React, cloud deployment, GitHub, and more.</p>
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
            <div className="col-sm-10 col-md-5 col-lg-5 col-xl-3 mb-4" key={node.id}>
              <Profile
                name={node.name}
                image={node.picture.asset.gatsbyImageData}
                linkedin={node.linkedin}
                github={node.github}
                website={node.portfolio}
                position={node.job}
              ></Profile>
            </div>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center my-5">
            <Title>COMPANIES THAT HAVE HIRED OUR GRADUATES</Title>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-5">
        <div className="col-sm-10 col-md-5 col-lg-5 col-xl-10 mb-4">
          <StaticImage quality='100' className="apax-logo me-3 mb-4" src="./images/apaxsoftware-logo.png"/>
          <StaticImage quality='100' className="bigfans-logo me-3" src="./images/bigassfans-logo.png"/>
          <StaticImage quality='100' className="blueframe-logo me-3" src="./images/blueframe-logo.png"/>
          <StaticImage quality='100' className="cabemtechnologies-logo me-3" src="./images/cabemtechnologies-logo.png"/>
          <StaticImage quality='100' className="infosys-logo" src="./images/infosys-logo.png"/>
          <StaticImage quality='100' className="lightwell-logo me-3" src="./images/lightwell-logo.png"/>
          <StaticImage quality='100' className="nymblsystems-logo me-3" src="./images/nymblsystems-logo.png"/>
          <StaticImage quality='100' className="prospecttrax-logo me-3" src="./images/prospecttrax-logo.png"/>
          <StaticImage quality='100' className="silverfern-logo me-3" src="./images/silverfern-logo.png"/>
          <StaticImage quality='100' className="vetdata-logo" src="./images/vetdata-logo.png"/>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default AlumniPage;