import React, {useState, useEffect} from 'react'
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
import { FacebookProvider, Comments } from 'react-facebook';

import '../../styles/main.scss'

import * as styles from './blog-template.module.scss'

const Blog = ({ pageContext }) => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    const blogInfo = pageContext.post;

    const authorImage = getImage(blogInfo.reference.picture.asset.gatsbyImageData);
/*
    useEffect(() => {
        if (typeof window.FB !== 'undefined' && window.FB.XFBML) {
            window.FB.XFBML.parse();
        }
      }, []);
    */
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
                                        image={authorImage} 
                                        // image={'../../images/ainc-logo-horizontal-white-text.png'}
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

                        <SocialMediaIcons text={`${blogInfo.title} | Awesome Inc`} link={`https://www.awesomeinc.org/blog/${blogInfo.slug.current}`}/>
                        <Container className="my-5 px-0">
                            <Markdown content={blogInfo.body}/>
                        </Container>
                        <Container>
                            {/*
                            <FacebookProvider appId="405237331509908" >
                                <Comments href={`https://www.awesomeinc.org/blog/${blogInfo.slug.current}`} />
                            </FacebookProvider>
                            */}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Blog