import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import "./blog.scss";
import BlockContent from '@sanity/block-content-to-react';
import { FaBell, FaLongArrowAltRight, FaBook } from "react-icons/fa";
import '../../styles/main.scss'


const BlogPage = ({ data }) => {
    return (
        <Layout>
            <Container>
                <Row className="mt-5" style={{ marginTop: '5rem' }}>
                    <Col xs={4} className='d-flex justify-content-center'>
                        <Title className="text-uppercase">Blog</Title>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }} className='d-flex justify-content-center'>
                        {/* <div className="lgx-heading"> */}
                        {/* <p className="center"> */}
                        <a href="#modal-notify-me" data-toggle="modal" data-target="#modal-notify-me"><FaBell size={40} className='link--brand'/></a>
                        {/* </p> */}
                    </Col>
                </Row>
            </Container>
            <Container className='px-1 pb-3 px-lg-5 pb-lg-5'>
                <Row className="mt-2">
                    {data.allSanityBlog.edges.map((edge) => {
                        return (
                            <Col xs={12} md={6} lg={4} className="mt-5">
                                <Container className='blog-card border border-2 rounded-1' style={{height: "540px"}}>
                                    <Row className='p-3 h-100'>
                                        <Col xs={12} className='p-0'>
                                            <Container className="blog-image d-flex align-items-end relative" style={{
                                                    backgroundImage: `url(${edge.node.thumbnail.asset.url})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center center",
                                                    height: "300px",
                                                    width: "100%",
                                                }}>
                                                <Row className='bg h-100 w-100'>
                                                    <Col className='book h-100 d-flex justify-content-center align-items-center'>
                                                        <Link to={`/blog/${edge.node.slug.current}`} className='bg-white p-3 rounded-circle'>
                                                            <FaBook size={40} className='text--brand'/>
                                                        </Link>
                                                        
                                                    </Col>
                                                </Row>
                                                <Row className='blog-details'>
                                                    <Col xs={{span: 4}} lg={{ span: 3}} className="d-flex justify-content-start pb-2">
                                                        <GatsbyImage objectFit='cover' image={edge.node.reference.picture.asset.gatsbyImageData} alt={edge.node.reference.name} className="rounded-circle border border-3 border-white my-2 ms-3"/>
                                                    </Col>
                                                    <Col xs={{span: 7}} lg={{ span: 9}} className="d-flex justify-content-start align-content-center flex-column mt-3 px-0">
                                                        <Title className="text--small text--brand link--brand">{edge.node.reference.title}</Title>
                                                        <h6 className='text-white'>{edge.node.date}</h6>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                        <Col xs={12} className='' style={{height: "230px"}}>
                                            <Container className='p-0 d-flex flex-column justify-content-between h-100'>
                                                <Row>
                                                    <div className='pt-3'>
                                                        <Title className="fs-4 text-break">{edge.node.title}</Title>
                                                    </div>
                                                    <div className='pb-3'>
                                                        <Subtitle className="fs-6 text-break">{edge.node.previewText}</Subtitle>
                                                    </div>
                                                </Row>
                                                <Row>
                                                    <div className='pt-3 pb-0'>
                                                            <a><h6 className='text--brand link--brand'>Read More <FaLongArrowAltRight size="25"/></h6></a>
                                                    </div>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </Layout>
    )
}

export const query = graphql`
    query BlogPageQuery {
        allSanityBlog {
            edges {
                node {
                    date
                    slug {
                        current
                    }
                    title
                    previewText
                    thumbnail {
                        asset {
                          url
                        }
                      }
                    reference {
                        name
                        picture {
                            asset {
                            gatsbyImageData
                            }
                        }
                        title
                    }
                }
            }
        }
    }
`

export default BlogPage;