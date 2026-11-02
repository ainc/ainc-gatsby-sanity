import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import Courses from "../../components/Courses/Courses";
import Layout from "../../components/Layout/Layout";
import * as styles from "./learn.module.scss";
import Title from "../../components/UI/Title/Title";
import { Container, Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`
  query CoursesPageQuery {
    allSanityCourses {
      nodes {
        picture {
          asset {
            gatsbyImageData(layout: CONSTRAINED, width: 100, aspectRatio: 1)
          }
        }
        id
        courseLink
        courseTitle
        courseType
        designedFor
        endDate
        format
        learnMore
        schedule
        startDate
        technologies
        topics
        courseSeason
      }
    }
  }
`;

const AdultCoursesPage = (props) => {
  const { data, errors } = props;
  console.log(data.allSanityCourses.nodes);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const adultCoursesNodes = data.allSanityCourses.nodes || {};
  return (
    <Layout>
      <Container>
        <Col>
          <Title className={styles.headingText}>Adult Courses</Title>
        </Col>
      </Container>
      <Container className={`${styles.flexContainer}`}>
        {adultCoursesNodes.map((node) => (
          <div className={styles.flexItem} key={node.id}>
            <Courses
              startDate={node.startDate}
              endDate={node.endDate}
              schedule={node.schedule}
              title={node.courseTitle}
              courseSeason={node.courseSeason}
              image={node.picture.asset.gatsbyImageData}
              link={node.courseLink}
              summary={node.topics}
              technologies={node.technologies}
              format={node.format}
            />
          </div>
        ))}
      </Container>
    </Layout>
  );
};
export default AdultCoursesPage;
