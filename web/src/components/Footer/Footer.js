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
    <Container fluid className={styles.footerBackground}>
      <Container>

        <Row>
          {/* Main column */}
          <Col xs md={4}>
            <Row className='justify-content-center'>
              <Link className={styles.aincLogoGap} href='/'>
                <StaticImage src='../../images/ainc-logo-text-triangle-layer-red.png' alt="Awesome Inc logo" />
              </Link>
            </Row>
            <Row className={styles.firstColRow}>
              <ul className={styles.infoList}>
                <li className={styles.mainLine}>
                  348 E Main St, Lexington, KY
                </li>
                <li>
                  <FaEnvelope className={styles.redIcon} />
                  <Link to='mailto:info@awesomeinc.org'>info@awesomeinc.org</Link>
                </li>
                <li>
                  <FaPhone className={styles.redIcon} />
                  <Link to='tel:8599604600'>859.960.4600</Link>
                </li>
                <li>
                  <FaClock className={styles.redIcon} />
                  Hours: Mon-Fri, 9am-5pm
                </li>
              </ul>
            </Row>
            <Row className={styles.firstColRow}>
              <BrandButton>Newsletter Sign Up</BrandButton>
            </Row>
          </Col>

          {/* Quicklinks column */}
          <Col xs={6} sm={6} md={2}>
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
          <Col xs={6} sm={6} md={2}>
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
          <Col xs sm={6} md={4}>
            <h2 className={styles.infoListTitle}>Sponsors</h2>
            <Row className={styles.sponsorsRow}>
              {
                footerData.sponsors.map((node,i) => (
                  <Col xs={6} key={i}>
                    <Link href={node.link} key={i}>
                      <GatsbyImage className='my-2'
                        image={getImage(node.image.asset.gatsbyImageData)}
                        alt={node.alt}
                        key={i}
                      />
                    </Link>
                  </Col>
                ))
              }
            </Row>


          </Col>
        </Row>

        {/* Bottom row */}
        <Row className={styles.bottomRow}>
          <Col>
            <ul className={styles.copyrightInlineList}>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/careers'>Careers</Link></li>
              <li><Link to='/privacy'>Privacy Policy</Link></li>
              <li><Link to='/terms'>Terms of Service</Link></li>
            </ul>
          </Col>
          <Col>
            <ul className={styles.socialsInlineList}>
              <li><Link to='https://twitter.com/awesomeinclex'><FaTwitter /></Link></li>
              <li><Link to='https://www.facebook.com/awesomeinclex'><FaFacebookF /></Link></li>
              <li><Link to='https://www.linkedin.com/school/awesome-inc/'><FaLinkedinIn /></Link></li>
              <li><Link to='https://www.instagram.com/awesomeinclex/'><FaInstagram /></Link></li>
              <li><Link to='https://www.youtube.com/user/AincTelevision/featured'><FaYoutube /></Link></li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  )
  
}

export default Footer