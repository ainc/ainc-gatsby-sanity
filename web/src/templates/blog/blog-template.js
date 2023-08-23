import React, {useState} from 'react'
import { graphql, Link } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import BrandButton from '../../components/UI/BrandButton/BrandButton';
import ModalCustom from '../../components/Modal/ModalCustom';
import SEO from '../../components/seo';
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import Markdown from '../../components/MarkDown/MarkDown';
import Layout from '../../components/Layout/Layout'
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

import '../../styles/main.scss'

import * as styles from './blog-template.module.scss'

const Blog = ({ pageContext }) => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    const blogInfo = pageContext.post

    return (
        <Layout>
            <SEO title={blogInfo.title} description={blogInfo.previewText} />
            <Container>
                <Row>
                    <Col sm={{span: 8, offset: 2}}>
                        <Title className="mt-5">{blogInfo.title}</Title>
                        <Container className='my-4'>
                                <Row className=''>
                                    <Col xs={{ span: 2}} sm={{span:1}} className="d-flex justify-content-center p-0 rounded-circle border border-1 border-dark">
                                        <GatsbyImage 
                                            objectFit='cover' 
                                            image={blogInfo.reference.picture?.asset.gatsbyImageData || '../../images/ainc-logo-horizontal-white-text.png' } 
                                            alt={blogInfo.reference.name} 
                                            className="rounded-circle border border-3 border-white p-1"
                                        />
                                    </Col>
                                    <Col xs={{ span: 10}} sm={{ span: 10}} className="d-flex justify-content-start align-content-center flex-column mt-2 mt-sm-1 mx-0 mx-sm-1">
                                        <Title className={`${styles.author} mb-0`}>{blogInfo.reference.name}, {blogInfo.reference.title}</Title>
                                        <p className={`${styles.date} text--grey`}>{blogInfo.date}</p>
                                    </Col>
                                </Row>
                        </Container>
                        <BrandButton className="text-uppercase px-2 py-0 py-sm-1" onClick={handleShow}>Notify Me</BrandButton>

                        <ModalCustom 
                            lgShow={lgShow} 
                            hide={handleClose} 
                            title="Subscribe to our blog" 
                            content={
                            //Pass HTML here
                                <Container>
                                    <Row>
                                        <Subtitle>Create form here</Subtitle>
                                    </Row>
                                    <Row>
                                        <BrandButton>Hello</BrandButton>
                                    </Row>
                                </Container>
                            }
                        />

                        <SocialMediaIcons text={`${blogInfo.title} | Awesome Inc`} link={`https://www.awesomeinc.org/blog/${blogInfo.slug.current}`}/>
                        <Container className="my-5 px-0">
                            <Markdown content={blogInfo.body}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Blog