import React, { useState } from "react";
import { graphql, Link } from "gatsby";
// import {
//   mapEdgesToNodes,
//   filterOutDocsWithoutSlugs,
//   filterOutDocsPublishedInTheFuture
// } from "../../lib/helpers";
import { Col, Container, Row, Carousel, Button } from "react-bootstrap";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { FaCircle, FaRegCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import GraphQLErrorList from "../../components/graphql-error-list";
import Layout from "../../containers/layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Profile from "../../components/Profile/Profile";
import Companies from "../../components/Companies/Companies";

import "./alumni.scss";
import { styles } from "../../styles/Variables";

export const query = graphql`
  query AlumniPageQuery {
    allSanityBootcampEmployers {
      nodes {
        company
        picture {
          asset {
            gatsbyImageData
          }
        }
      }
    }
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
    allSanityAlumniTestimonials {
      nodes {
        author
        company
        description
        position
        picture {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickRight = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handleClickLeft = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {testimonials.map((node, index) => (
        <div
          key={index}
          className={`testimonial-div ${index === currentIndex ? "d-flex" : "d-none"}`}
        >
          <Row>
            <Col lg={4}></Col>
            <Col lg={6} className="offset-lg-2 test-info pt-3">
              <div className="test-images">
                <GatsbyImage image={node.picture.asset.gatsbyImageData} alt={node.company} />
              </div>
              <Title className="text-white">HEAR FROM EMPLOYERS</Title>
              <h2>{node.company}</h2>
              <p style={{ fontWeight: "bold" }}>{node.author}</p>
              <p style={{ fontStyle: "italic" }}>{node.position}</p>
              <p className="description mb-0">{node.description}</p>

              <div className="navBar float-end">
                <Button
                  style={{
                    background: "none",
                    border: "white",
                    color: "white",
                    paddingRight: "0.5rem"
                  }}
                  onClick={handleClickLeft}
                >
                  <FaArrowLeft className="ms-1" />
                </Button>
                {testimonials.map((_, index) =>
                  index === currentIndex ? (
                    <FaCircle key={index} className="ms-1" />
                  ) : (
                    <FaRegCircle key={index} className="ms-1" />
                  )
                )}
                <Button
                  style={{
                    background: "none",
                    border: "white",
                    color: "white",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem"
                  }}
                  onClick={handleClickRight}
                >
                  <FaArrowRight className="ms-1" />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

const AlumniPage = props => {
  const { data, errors } = props;
  const [selectedClass, setSelectedClass] = useState("");

  const testimonials = data.allSanityAlumniTestimonials.nodes || {};
  const employers = data.allSanityBootcampEmployers.nodes || {};

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const alumniNodes = data.allSanityBootcampAlumni.nodes || {};

  const classList =
    data.allSanityBootcampAlumni && data.allSanityBootcampAlumni.nodes
      ? data.allSanityBootcampAlumni.nodes
          .map(node => node.class.title)
          .filter((className, index, arr) => arr.indexOf(className) === index)
          .sort((a, b) => {
            const aClass = data.allSanityBootcampClass.edges.find(({ node }) => node.title === a)
              .node;
            const bClass = data.allSanityBootcampClass.edges.find(({ node }) => node.title === b)
              .node;
            return new Date(bClass.date) - new Date(aClass.date); // sort based on date in descending order
          })

          .map(gradClass => (
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
    <button className="classButton" key="All Cohorts" onClick={() => setSelectedClass("")}>
      All Cohorts
    </button>
  );

  classList.unshift(allCohortsButton);

  let filteredNodes = alumniNodes;
  if (selectedClass) {
    filteredNodes = alumniNodes.filter(node => node.class.title === selectedClass);
  } else {
    //sort based on class date and job for 'All Cohorts' button
    filteredNodes.sort((a, b) => {
      const dateA = new Date(a.class.date);
      const dateB = new Date(b.class.date);
      const dateComparison = dateB - dateA; //sort based on date in descending order

      if (dateComparison !== 0) {
        return dateComparison;
      }

      const jobComparison = b.job ? 1 : a.job ? -1 : 0; // prioritize node with job

      if (jobComparison !== 0) {
        return jobComparison;
      }
    });
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Row>
              <Title className="my-4">Bootcamp Alumni</Title>
              <p>
                The Web Developer Bootcamp is a 16-week, intensive training program to help people
                launch careers in software development. It includes over 500 hours of hands-on
                training, gaining experience while building 10+ software projects in an Agile
                environment, using HTML, CSS, JavaScript, PHP, Laravel, React, cloud deployment,
                GitHub, and more.
              </p>
              <p>
                Bootcamp alumni have been hired by more than 50 employers. Initial job titles have
                included Software Engineer, Software Developer, Web Developer, Application
                Developer, QA Engineer, DevOps Analyst, Salesforce Consultant, and UX/UI Designer.
              </p>
            </Row>
            <Row>
              <TestimonialCarousel testimonials={testimonials} />
            </Row>
            <Row>
              <p className="fst-italic mt-3">
                Ribbons indicate an alum's first programming job following Bootcamp
              </p>
              <Subtitle>Alumni List</Subtitle>
            </Row>
          </Col>
        </Row>

        <div>{classList}</div>

        <Row>
          {filteredNodes.map(node => (
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

        <Companies employers={employers} />
      </Container>
    </Layout>
  );
};

export default AlumniPage;
