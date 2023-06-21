import React, { useState } from 'react'
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../../components/seo'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ModalCustom from '../../components/Modal/ModalCustom';
import { FaBell } from "react-icons/fa";
import BlogPreview from '../../templates/blog/BlogPreview';
import '../../styles/main.scss'
import "./blog.scss";


const BlogPage = ({ data }) => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    const [blogData, setBlogData] = useState([]);

    const defaultBgImageUrl = '/web/src/images/logo.png'

    React.useEffect(() => {
        setBlogData(data.allSanityBlog.edges)

    })

    return (
        <Layout>
            <SEO />
            <Container>
                <Row className="mt-5" style={{ marginTop: '5rem' }}>
                    <Col xs={4} className='d-flex justify-content-center'>
                        <Title className="text-uppercase">Blog</Title>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }} className='d-flex justify-content-center'>
                        <a onClick={handleShow}><FaBell size={40} className='link--brand' /></a>
                    </Col>
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
                </Row>
            </Container>
            <Container className='px-1 pb-3 pb-lg-5'>
                <Row className="mb-5 mx-3">
                    {blogData.map((edge) => {
                        return (
                            <BlogPreview
                                blog={edge}
                            />
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