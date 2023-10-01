import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql, Link, useStaticQuery } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../../lib/helpers";
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import BrandButton from '../UI/BrandButton/BrandButton'
import { FaEnvelope, FaPhone, FaClock, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import * as styles from './Footer.module.scss'
import ApplyNowModal from '../../pages/fellowship/Components/ApplyNowModal';


const Footer = props => {

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

  const footerData = (query.sanityFooter || {})

  return (
    <section className={styles.footerBackground}>
      <footer>
      <Container className={styles.footerBackground}>
        <Row>
          {/* Main column */}
          <Col xs md={4} aria-label="main-navigation" role="navigation">
            <Row className='justify-content-center'>
              <a className={styles.aincLogoGap} href='/'>
                <StaticImage src='../../images/ainc-logo-text-triangle-layer-red.png' alt="Awesome Inc logo" />
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
              <ApplyNowModal 
              title="Newsletter Sign Up"
              link = "https://forms.zohopublic.com/virtualoffice9155/form/OnlineNewsletterSignup/formperma/63TqTON16miWuaZIxR3_tTM4HEyMqE9N_KJOPjJPEUA?gclid=undefined"
              />
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