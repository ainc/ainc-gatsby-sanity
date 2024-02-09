import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import * as styles from "./press.module.css";
import { graphql, StaticQuery } from "gatsby";
// import { useLocation } from "@reach/router";
import SEO from "../../components/seo";


const PressPage = ({ data }) => {
    const allPress = data.allSanityPress.nodes || {};

    return (
        <Layout>
            {/* Press Header */}
            <section className={styles.pressHeader}>
                <Container fluid>
                <Row>
                    <Col>
                    <Title className="text-uppercase">Press</Title>
                    </Col>
                </Row>
                </Container>
            </section>
            {/* As Seen On */}
            <section className={styles.pressSeen}>
                <Container fluid="md">
                <Row>
                    <Col>
                    <Title className="brand text-center text-uppercase">
                        As Seen On
                    </Title>
                    </Col>
                </Row>
                <Row className={styles.logos}>
                    <Col xs={12} sm={{ span: 2, offset: 1 }}>
                    <StaticImage placeholder="blurred"
                        src="../../images/press/nbc-logo.png"
                        alt="NBC logo"
                        width={80}
                    />
                    </Col>
                    <Col xs={12} sm={2}>
                    <StaticImage placeholder="blurred"
                        src="../../images/press/course_report.png"
                        alt="Course Report logo"
                        width={190}
                    />
                    </Col>
                    <Col xs={12} sm={2}>
                    <StaticImage placeholder="blurred"
                        src="../../images/press/abc-logo.png"
                        alt="ABC logo"
                        width={80}
                    />
                    </Col>

                    <Col xs={12} sm={2}>
                    <StaticImage placeholder="blurred"
                        src="../../images/press/good_day_ky.png"
                        alt="Good Day Kentucky logo"
                        width={90}
                    />
                    </Col>
                    <Col xs={12} sm={2}>
                    <StaticImage placeholder="blurred"
                        src="../../images/press/fox-logo.png"
                        alt="Fox logo"
                        width={150}
                    />
                    </Col>
                </Row>
                <hr></hr>

                {/* Press List */}

                <section className={styles.pressList}>
                    <Container>
                    <Row>
                        <Col>
                        <ul>
                            {allPress.map(node => (
                            <li>
                                {node.date}{" "}
                                <a className={"link--brand"} href={node.linkToArticle}>
                                {node.title}
                                </a>
                                , {node.author}
                            </li>
                            ))}
                        </ul>
                        </Col>
                    </Row>
                    </Container>
                </section>
                </Container>
            </section>
        </Layout>  
    );
  };
  
export const query_press = graphql`
query {
    allSanityPress(sort: {date: DESC}) {
      nodes {
        author
        linkToArticle
        title
        date(formatString: "MMM D, YYYY")
      }
    }
  }`;

export default PressPage