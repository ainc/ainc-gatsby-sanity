import * as React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import { graphql, Link } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import BrandButton from '../../components/UI/BrandButton/BrandButton';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout'
import { SocialMediaIcons } from '../../components/SocialMediaIcons/SocialMediaIcons';

// import Diagonal from '../../components/Layout/Diagonal/Diagonal'
// import ButtonAndImage from '../../components/ButtonAndImage/ButtonAndImage'
// import ImageOutline from '../../components/ImageOutline/ImageOutline'
// import { StaticImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle';
// import Subtitle from "/src/components/UI/Subtitle/Subtitle";
import '../../styles/main.scss'

const Blog = ({ pageContext }) => {
    console.log(pageContext.post)
    const blogInfo = pageContext.post
    return (
        <Layout>
            <Container>
                <Row>
                    <Col sm={{span: 8, offset: 2}}>
                        <Title className="mt-5">{blogInfo.title}</Title>
                        <Container className='my-4'>
                            {/* <Row> */}
                                {/* <Col sm={{span: 8}}> */}
                                <Row className=''>
                                    <Col sm={{ span: 1}} className="d-flex justify-content-center p-0 rounded-circle border border-1 border-dark">
                                        <GatsbyImage objectFit='cover' image={blogInfo.reference.picture.asset.gatsbyImageData} alt={blogInfo.reference.name} className="rounded-circle border border-3 border-white p-1"/>
                                    </Col>
                                    <Col sm={{ span: 10}} className="d-flex justify-content-start align-content-center flex-column mt-3 mx-1">
                                        <Title className="fs-6 text--brand  mb-0">{blogInfo.reference.name}, {blogInfo.reference.title}</Title>
                                        <h6 className='text--grey'>{blogInfo.date}</h6>
                                    </Col>
                                </Row>
                                    {/* <Subtitle>This is blog {blogInfo.title}</Subtitle> */}
                                {/* </Col> */}
                            {/* </Row> */}
                        </Container>
                        <BrandButton className="text-uppercase mb-5">Notify Me</BrandButton>
                        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                        <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                        <a class="a2a_button_facebook"></a>
                        <a class="a2a_button_twitter"></a>
                        <a class="a2a_button_email"></a>
                        </div>
                        <script async src="https://static.addtoany.com/menu/page.js"></script>
                        {/* <SocialMediaIcons/> */}
                        <BlockContent blocks={blogInfo._rawBody} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Blog