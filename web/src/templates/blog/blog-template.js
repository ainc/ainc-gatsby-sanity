import React, {useState} from 'react'
import BlockContent from '@sanity/block-content-to-react';
import { graphql, Link } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import BrandButton from '../../components/UI/BrandButton/BrandButton';
import ModalCustom from '../../components/Modal/ModalCustom';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout'
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import {PortableText} from '@portabletext/react'
import urlBuilder from '@sanity/image-url'
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import '../../styles/main.scss'

const Blog = ({ pageContext }) => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    const blogInfo = pageContext.post

    const urlFor = (source) => {
        return urlBuilder({projectId: 'y716vocf', dataset: 'production'}).image(source)
    }

    const serializer = {
        types: {
            image: props => (
                // <pre>{JSON.stringify(props)}</pre>
                <Row>
                    <Col xs={{span: 10}} lg={{span: 8}}>
                        <img 
                            src={urlFor(props.value.asset)
                                .auto('format')
                                .url()} 
                            alt={props.value.alt} 
                            style={{maxWidth: "100%"}}/>
                    </Col>
                </Row>
            )
        },
    }      

    return (
        <Layout>
            <Container>
                <Row>
                    <Col sm={{span: 8, offset: 2}}>
                        <Title className="mt-5">{blogInfo.title}</Title>
                        <Container className='my-4'>
                                <Row className=''>
                                    <Col xs={{ span: 2}} sm={{span:1}} className="d-flex justify-content-center p-0 rounded-circle border border-1 border-dark">
                                        <GatsbyImage objectFit='cover' image={blogInfo.reference.picture.asset.gatsbyImageData} alt={blogInfo.reference.name} className="rounded-circle border border-3 border-white p-1"/>
                                    </Col>
                                    <Col xs={{ span: 9}} sm={{ span: 10}} className="d-flex justify-content-start align-content-center flex-column mt-0 mt-sm-3 mx-0 mx-sm-1">
                                        <Title className="fs-6 text--brand  mb-0">{blogInfo.reference.name}, {blogInfo.reference.title}</Title>
                                        <h6 className='text--grey'>{blogInfo.date}</h6>
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
                            <PortableText value={blogInfo._rawBody} components={serializer}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Blog