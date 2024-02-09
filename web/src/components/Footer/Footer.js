import * as React from 'react'
import { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaEnvelope, FaPhone, FaClock, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

import BrandButton from '../UI/BrandButton/BrandButton'

import * as styles from './Footer.module.scss'


const Footer = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const query = useStaticQuery(graphql`
    query footerQuery { 
      sanityFooter {
        courses {
          behavior
          title
          url
        }
        quicklinks {
          behavior
          title
          url
        }
        sponsors {
          link
          alt
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);  

  const footerData = (query.sanityFooter || {});

  return (
    <section className={styles.footerBackground}>
      <footer>
      <Container className={styles.footerBackground}>
        <Row>
          {/* Main column */}
          <Col xs md={4} aria-label="main-navigation" role="navigation">
            <Row className='justify-content-center'>
              <a className={styles.aincLogoGap} href='/'>
                <StaticImage placeholder="blurred" src='../../images/ainc-logo-text-triangle-layer-red.png' alt="Awesome Inc logo" />
              </a>
            </Row>
            <Row className={styles.firstColRow}>
              <ul className={styles.infoList}>
                <li className={styles.mainLine}>
                  348 E Main St, Lexington, KY
                </li>
                <li>
                  <FaEnvelope className={styles.redIcon} />
                  <a href='mailto:info@awesomeinc.org'>info@awesomeinc.org</a>
                </li>
                <li>
                  <FaPhone className={styles.redIcon} />
                  <a href='tel:8599604600'>859.960.4600</a>
                </li>
                <li>
                  <FaClock className={styles.redIcon} />
                  Hours: Mon-Fri, 9am-5pm
                </li>
              </ul>
            </Row>
            <Row className={styles.firstColRow}>

              {/*Newsletter Form*/}
              <BrandButton onClick={handleShow}>Newsletter Sign Up</BrandButton>
              <Modal show={show} onHide={handleClose} centered size='lg' aria-labelledby='contained-modal-title-vcenter'>
              <form
                action="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeIncNewsletterSignup2023/formperma/ZflzBD0xW1Q8eO4jlDWQZZsk1Icbxxwtl6FTQMbZNl8/htmlRecords/submit"
                name="form"
                id="form"
                class="validate"
                method="POST"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
              >
                <input type="hidden" name="zf_referrer_name" value="" />{/*<!-- To Track referrals , place the referrer name within the " " in the above hidden input field --> */}
                <input
                  type="hidden"
                  name="zf_redirect_url"
                  value="https://www.awesomeinc.org/confirmation/newsletter"
                />
                <input
                  type="hidden"
                  name="zc_gad"
                  value=""
                />
                <input type="hidden" name="zf_redirect_url" value=""></input>
                {/*<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --> */}
                <Modal.Body>
                <label for="First Name" style={{marginLeft: '4px'}}>First Name</label>
                <input
                  className="form-control"
                  placeholder="John"
                  type="text"
                  maxlength="255"
                  name="Name_First"
                  fieldType="7"
                /><br />
                <label for="Last Name" style={{marginLeft: '4px'}}>Last Name</label>
                <input
                  class="form-control"
                  placeholder="Hancock"
                  type="text"
                  maxlength="255"
                  name="Name_Last"
                  fieldType="7"
                /><br />
                {/*<!--Email-->*/}
                <label for="Email Address" style={{marginLeft: '4px'}}>Email Address</label>
                <input
                  class="form-control"
                  placeholder="john@123.com"
                  type="text"
                  maxlength="255"
                  name="Email"
                  fieldType="9"
                />
                <br />
                {/*<!-- Phone -->*/}
                <label for="Company" style={{marginLeft: '4px'}}>Phone</label>
                <input
                  class="form-control"
                  placeholder="(123) 456-7890"
                  type="text"
                  compname="PhoneNumber"
                  maxlength="20"
                  name="PhoneNumber_countrycode"
                  phoneFormat="1"
                  isCountryCodeEnabled={false}
                  fieldType="11"
                  id="international_PhoneNumber_countrycode"
                />
                <br />
              {/*<!-- Checkbox --> */}
                <label style={{marginLeft: '4px'}}>I'm interested in...</label>
                <div className ="form-check">
                  <input
                      type="checkbox"
                      id="Checkbox_1"
                      class="form-check-input"
                      name="Checkbox"
                      value="Startups and Entrepreneurship - Fellowship"
                    />
                    <label className={`form-check-label`} style={{marginLeft: '4px'}} for="Checkbox_1">
                      Startups and Entrepreneurship - Fellowship
                    </label>
                  <br />
                  <input
                      type="checkbox"
                      id="Checkbox_2"
                      class="form-check-input"
                      name="Checkbox"
                      value="Coworking and Community - Workspace"
                    />
                    <label className={`form-check-label`} style={{marginLeft: '4px'}} for="Checkbox_2">
                      Coworking and Community - Workspace
                    </label>
                  <br />
                  <input
                      type="checkbox"
                      id="Checkbox_3"
                      class="form-check-input"
                      name="Checkbox"
                      value="Coding and Education - Awesome Inc U"
                    />
                    <label className={`form-check-label`} style={{marginLeft: '4px'}} for="Checkbox_3">
                      Coding and Education - Awesome Inc U
                    </label>
                  <br />
                  <input 
                  type="checkbox" 
                  id="Checkbox_4"
                  class="form-check-input"
                  name="Checkbox" 
                  value="Awesome Inc News and Events" />
                    <label for="Checkbox_4" className={`form-check-label`} style={{marginLeft: '4px'}}>
                      Awesome Inc News and Events
                    </label>
                  <br />
                </div>
                <BrandButton type="submit">
                  Submit
                </BrandButton>
                </Modal.Body>
              </form>
              </Modal>
            </Row>
          </Col>

          {/* Quicklinks column */}
          <Col xs={6} sm={6} md={2} aria-label="quicklinks-navigation" role="navigation">
            <h2 className={styles.infoListTitle}>Quicklinks</h2>
            <ul className={styles.infoList}>
              {
                footerData.quicklinks.map((node,i) => (
                  <li key={i}>
                    <a href={node.url} target={node.behavior ? '_blank' : '_self'} key={i}>
                      {node.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </Col>

          {/* Courses column */}
          <Col xs={6} sm={6} md={2} aria-label="courses-navigation" role="navigation">
            <h2 className={styles.infoListTitle}>Courses</h2>
            <ul className={styles.infoList}>
              {
                footerData.courses.map((node,i) => (
                  <li key={i}>
                    <a href={node.url} target={node.behavior ? '_blank' : '_self'} key={i}>
                      {node.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </Col>

          {/* Sponsors column */}
          <Col xs sm={6} md={4} aria-label="sponsors-navigation" role="navigation">
            <h2 className={styles.infoListTitle}>Sponsors</h2>
            <Row className={styles.sponsorsRow}>
              {
                footerData.sponsors.map((node,i) => (
                  <Col xs={6} key={i}>
                    <a href={node.link} key={i}>
                      <GatsbyImage className='my-2'
                        image={getImage(node.image.asset.gatsbyImageData)}
                        alt={node.alt}
                        key={i}
                      />
                    </a>
                  </Col>
                ))
              }
            </Row>


          </Col>
        </Row>

        {/* Bottom row */}
        <Row className={styles.bottomRow} aria-label="bottom-navigation" role="navigation">
          <Col>
            <ul className={styles.copyrightInlineList}>
              <li><a href='/about'>About</a></li>
              <li><a href='/careers'>Careers</a></li>
              <li><a href='/privacy'>Privacy Policy</a></li>
              <li><a href='/terms'>Terms of Service</a></li>
            </ul>
          </Col>
          <Col aria-label="social-navigation" role="navigation">
            <ul className={styles.socialsInlineList}>
              <li><a href='https://twitter.com/awesomeinclex'aria-label="Visit our Twitter"><FaTwitter /></a></li>
              <li><a href='https://www.facebook.com/awesomeinclex'aria-label="Visit our Facebook"><FaFacebookF /></a></li>
              <li><a href='https://www.linkedin.com/school/awesome-inc/'aria-label="Visit our LinkedIn"><FaLinkedinIn /></a></li>
              <li><a href='https://www.instagram.com/awesomeinclex/'aria-label="Visit our Instagram"><FaInstagram /></a></li>
              <li><a href='https://www.youtube.com/user/AincTelevision/featured'aria-label="Visit our Youtube"><FaYoutube /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      </footer>
    </section>
  )
  
}

export default Footer