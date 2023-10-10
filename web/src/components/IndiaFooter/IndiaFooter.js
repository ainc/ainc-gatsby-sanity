import * as React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import BrandButton from '../UI/BrandButton/BrandButton'
import { FaEnvelope, FaPhone, FaClock, FaTwitter, FaFacebook, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import * as styles from './IndiaFooter.module.scss'

const IndiaFooter = () => {
    return (
        <section className={styles.footerBackground} role="contentinfo">
            
        <Container>
            <Row>
                <Col xs md={7} lg={6}>
                    <Row className='justify-content-center'>
                    <a href='/india' className={styles.aincLogoGap} >
                        <StaticImage src='../../images/ainc-logo-text-triangle-layer-red.png' alt='Awesome Inc Logo' role="img"/>
                    </a>
                    </Row>
                    <Row className={styles.firstColRow}>
                        <ul className={styles.infoList}>
                            <li className={styles.mainLine}>
                                Bhopal, Madhya Pradesh, India
                            </li>
                        
                        <li>
                            <FaEnvelope className={styles.redIcon}/>
                            <a href='mailto:info_india@awesomeinc.org'>info_india@awesomeinc.org</a>
                        </li>
                        </ul>
                    </Row>
                </Col>

                <Col xs={6} sm={6} md={2}>
                    <h2 className={styles.infoListTitle}>quicklinks</h2>
                    <ul className={styles.infoList}>
                        <li><a href='/india/about'>About Us</a></li>
                        <li><a href='/#core-values'>Core Values</a></li>
                    </ul>
                </Col>
                <Col xs={6} sm={6} md={2}>
                    <h2 className={styles.infoListTitle}>courses</h2>
                    <ul className={styles.infoList}>
                        <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSeXn05oQn5hM3egYp9czGxLd2kPZhcdvUhK0jDrwIc_4Bx5aw/viewform'>
                            Week of Code</a></li>
                        <li><a href=''>Coding Club <small>(Coming Soon)</small></a></li>
                    </ul>
                </Col>
            </Row>
            <Row className={styles.bottomRow}>
                <Col>
                <ul className={styles.copyrightInlineList}>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/privacy'>Privacy Policy</a></li>
                    <li><a href='/terms'>Terms of Service</a></li>
                    </ul>
                    </Col>
                    <Col>
                    <ul class={styles.socialsInlineList}>
                        <li><a href='https://www.linkedin.com/company/awesome-inc-india/' aria-label="Visit our LinkedIn"><FaLinkedinIn/></a></li>
                    </ul>
                    </Col>
            </Row>
        </Container>
        </section>
    )
}

export default IndiaFooter