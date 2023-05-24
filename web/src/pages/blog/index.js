import React, {useState} from 'react'
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../../components/seo'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ModalCustom from '../../components/Modal/ModalCustom';
import { FaBell, FaLongArrowAltRight, FaBook } from "react-icons/fa";
import '../../styles/main.scss'
import "./blog.scss";


const BlogPage = ({ data }) => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    return (
        <Layout>
            <SEO />
            <Container>
                <Row className="mt-5" style={{ marginTop: '5rem' }}>
                    <Col xs={4} className='d-flex justify-content-center'>
                        <Title className="text-uppercase">Blog</Title>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }} className='d-flex justify-content-center'>
                        <a onClick={handleShow}><FaBell size={40} className='link--brand'/></a>
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
                    {data.allSanityBlog.edges.map((edge) => {
                        return (
                            <Col xs={12} md={6} lg={4} className="mt-4 px-0 px-sm-2">
                                <Container className='blog-card border border-2 rounded-1' style={{height: "540px"}}>
                                    <Row className='p-3 h-100'>
                                        <Col xs={12} className='p-0'>
                                            <Container className="blog-image d-flex align-items-end relative" style={{
                                                    backgroundImage: `url(${edge.node.thumbnail.asset.url})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center center",
                                                    height: "270px",
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
                                                        <GatsbyImage objectFit='cover' image={edge.node.reference.picture.asset.gatsbyImageData} alt={edge.node.reference.name} className="rounded-circle border border-3 border-white my-2 ms-0"/>
                                                    </Col>
                                                    <Col xs={{span: 7}} lg={{ span: 9}} className="d-flex justify-content-start align-content-center flex-column mt-3 px-0">
                                                        <Title className="author">{edge.node.reference.name}, {edge.node.reference.title}</Title>
                                                        <p className='date text-white'>{edge.node.date}</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                        <Col xs={12} className='' style={{height: "230px"}}>
                                            <Container className='p-0 d-flex flex-column justify-content-between h-100'>
                                                <Row>
                                                    <div className='pt-3'>
                                                        <Link to={`/blog/${edge.node.slug.current}`}>
                                                            <Title className="title fs-6 text-break link--red">{edge.node.title}</Title>
                                                        </Link>
                                                    </div>
                                                    <div className='pb-3'>
                                                        <p className="description text-break">{edge.node.previewText}</p>
                                                    </div>
                                                </Row>
                                                <Row>
                                                    <div className='pt-3 pb-0'>
                                                        <Link to={`/blog/${edge.node.slug.current}`}><h6 className='text--brand link--brand'>Read More <FaLongArrowAltRight size="25"/></h6></Link>
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