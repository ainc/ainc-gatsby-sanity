

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
import BlogPreview from './BlogPreview';
import  '../../styles/main.scss'; 
import * as styles from "../blog/blog-list-template";



const BlogPage = ({pageContext, data }) => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    const [blogData, setBlogData] = useState([]);

    const defaultBgImageUrl = '/web/src/images/logo.png'

    const blogs = (data.allSanityBlog.edges)

    const {currentBlog, numBlogs} = pageContext
    const isFirst = currentBlog === 1
    const isLast = currentBlog === numBlogs
    const prevPage = currentBlog - 1 === 1 ? "" : (currentBlog - 1).toString()
    const nextPage = (currentBlog + 1).toString()

    React.useEffect(() => {
        setBlogData(data.allSanityBlog.edges)
        // console.log("hihi", pageContext)

    })

    return (
        <Layout>
            <SEO />
            <Container>
                {currentBlog}
            
                <Row className="mt-5" style={{ marginTop: '5rem' }}>
                    <Col xs={4} className='d-flex justify-content-center'>
                        <Title className="text-uppercase">Blogggg</Title>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }} className='d-flex justify-content-center'>
                        <a onClick={handleShow}><FaBell size={40} className='link--brand' /></a>
                    </Col>
                    <ModalCustom
                        lgShow={lgShow}
                        hide={handleClose}
                        title="Subscribe to our blog"
                        centered
                        content={
                            //Pass HTML here
                            <Container fluid>
                                <form action="https://forms.zohopublic.com/virtualoffice9155/form/Signup/formperma/oGBr66VPX7l_Drlh1scVwCic8K1-QgeS5bvJGtjwwik/htmlRecords/submit" 
                                name="form" 
                                id="form" 
                                method="POST" 
                                accept-charset="UTF-8" 
                                enctype="multipart/form-data"
                                >
                                <input type="hidden" name="zf_referrer_name" value="" />{/*<!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->*/}
                                <input type="hidden" name="zf_redirect_url" value="" />{/*<!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->*/}
                                <input type="hidden" name="zc_gad" value="" />{/*<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->*/}
                                <Subtitle>You'll receive a monthly email with new blog info.</Subtitle>
                                <Row>
                                {/*<!--Name-->*/}
                                    <label style={{marginLeft:'0px'}}>First Name</label>
                                    <input type="text" maxlength="255" name="Name_First" fieldtype="7" placeholder="John" className='form-control' style={{marginLeft:'15px', width: '80%'}}/>
                                </Row>
                                <Row>
                                    <label style={{marginLeft:'0px'}}>Last Name</label>
                                    <input type="text" maxlength="255" name="Name_Last" fieldtype="7" placeholder="Hancock" className='form-control' style={{marginLeft:'15px', width: '80%'}}/>
                                </Row>
                                {/*<!--Email-->*/}
                                <Row>
                                    <label style={{marginLeft:'0px'}}> Email Address </label>
                                    <input type="text" maxlength="255" name="Email" fieldtype="9" placeholder="john@123.com" className='form-control' style={{marginLeft:'15px', width: '80%'}}/>
                                </Row>
                                <BrandButton type="submit" className='mt-3' style={{marginRight: 'auto'}}><em>Submit</em></BrandButton>
                                </form>
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

            <h5 className='text-center mb-5 mt-5'>
                <Row className={`${styles.pageNumberAll}` }>
                    <Col >
                    {!isFirst && (
                            <a href={`${prevPage == 1 ? "" : `/blog/${prevPage}`}`} rel="prev" className={styles.page}>
                            ← Previous Page 
                            </a>
                        )}
                    </Col>
                    <Col>
                        {Array.from({ length: numBlogs }, (_, i) => (
                                <a href = {`/blog/${i === 0 ? "" : i + 1}`} className={styles.page} key={`pagination-number${i + 1}`}  style={{
                                    textDecoration: 'none',
                                    color: i + 1 === currentBlog ? '#323333' : '',
                                }}>
                                {i + 1}
                                </a>
                        ))}
                    </Col>
                    <Col>
                    {!isLast && (
                            <a href={`/blog/${nextPage}`} className={styles.page} rel="next">
                            Next Page →
                            </a>
                        )}
                   
                    </Col>
                </Row>
            </h5>
        </Layout>
    )
}

export const query = graphql`
    query BlogPageQuery {
        allSanityBlog (
            sort: {date: DESC}
           
         ) {
            totalCount
            edges {
                node {
                    date(formatString: "MMMM DD, YYYY")
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
                            gatsbyImageData(
                                width: 100
                                height: 100
                                layout: FIXED
                            )
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


