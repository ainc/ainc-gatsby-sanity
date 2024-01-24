import * as React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/UI/Title/Title';
import MarkDown from '../../components/MarkDown/MarkDown';

const Tutorials = ({ pageContext }) => {

    const tutorialContent = pageContext.post;
    return(
    <Layout>
        <Container>
            <Row key={tutorialContent.slug.current}>
                <Col>
                    <Title className="text-center my-5">{tutorialContent.title}</Title>
                </Col>
            </Row>
        </Container>
        <Container className="my-5 px-0">
            <MarkDown content={tutorialContent.body}/>
        </Container>
    </Layout>
    )
};

export default Tutorials;
