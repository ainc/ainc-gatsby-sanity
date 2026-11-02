import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Col, Row, Image } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import * as styles from "./accomplishments.module.scss";

import SocialMedia from "../../components/SocialMedia/SocialMedia";
import TeamMember from "../../components/TeamMember/TeamMember";
import OutlineDiv from "../../components/DivOutline/DivOutline";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";

import ModalCustom from "../../components/Modal/ModalCustom";

const Accomplishments = () => {
  const query = useStaticQuery(graphql`
    query accomplishmentsQuery {
      allSanityAccomplishments {
        nodes {
          header
          reviewVideo
          impactReport
          reviewPoster
          accomplishment1Link
          accomplishment2Link
          accomplishment3Link
          accomplishment1 {
            asset {
              gatsbyImageData
            }
          }
          accomplishment2 {
            asset {
              gatsbyImageData
            }
          }
          accomplishment3 {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const accomplishments = query.allSanityAccomplishments.nodes.at(-1) || {};

  const [lgShow, setLgShow] = useState(false);
  const handleShow = () => setLgShow(true);
  const handleClose = () => setLgShow(false);

  const [impactReportShow, setImpactReportShow] = useState(false);
  const handleImpactReportShow = () => setImpactReportShow(true);
  const handleImpactReportClose = () => setImpactReportShow(false);
  return (
    <section className={styles.accomplishment}>
      <Container>
        <Row>
          <Title className={`text-white text-center my-5`}>
            {accomplishments.header}
          </Title>
          <Col lg={{ span: 8, offset: 2 }}>
            <Row>
              <Col
                className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center ${styles.imageLinks}`}
                md={4}
                sm={12}
              >
                <a href={accomplishments.accomplishment1Link} role="button">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <GatsbyImage
                      objectFit="scale-down"
                      className={styles.imageLinks}
                      image={
                        accomplishments.accomplishment1.asset.gatsbyImageData
                      }
                      alt="Accomplishment 1"
                    />
                  </motion.div>
                </a>
              </Col>
              <Col
                className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center ${styles.imageLinks}`}
                md={4}
                sm={12}
              >
                <a href={accomplishments.accomplishment2Link} role="button">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <GatsbyImage
                      objectFit="scale-down"
                      className={styles.imageLinks}
                      image={
                        accomplishments.accomplishment2.asset.gatsbyImageData
                      }
                      alt="Accomplishment 2"
                    />
                  </motion.div>
                </a>
              </Col>
              <Col
                className={`align-items-md-start mb-sm-2 d-flex justify-content-md-top justify-content-sm-center ${styles.imageLinks}`}
                md={4}
                sm={12}
              >
                <a href={accomplishments.accomplishment3Link} role="button">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <GatsbyImage
                      objectFit="scale-down"
                      image={
                        accomplishments.accomplishment3.asset.gatsbyImageData
                      }
                      className={styles.imageLinks}
                      alt="Accomplishment 3"
                    />
                  </motion.div>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-center d-flex justify-content-center mt-3 mb-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Col className="">
              <BrandButton
                onClick={handleShow}
                className="secondary px-3 mx-5 my-3"
              >
                Watch our year in review video
              </BrandButton>
              <a href={accomplishments.impactReport} target="_blank">
                <BrandButton className="secondary px-3 mx-5">
                  Read our impact report
                </BrandButton>
              </a>
              {/*To get impact report to be modal */}
              {/*<BrandButton onClick={handleImpactReportShow} className='secondary px-3 mx-5'>Read our impact report</BrandButton>*/}
              <a
                href="/assets/Awesome-Inc-Year-in-Review-2024.pdf"
                target="_blank"
              >
                <BrandButton className="secondary px-3 mx-5 my-3">
                  View our year in review poster
                </BrandButton>
              </a>
            </Col>
          </motion.div>
        </Row>
        <ModalCustom
          lgShow={lgShow}
          hide={handleClose}
          bgDark={false}
          centered
          content={
            <iframe
              width="100%"
              height="500"
              src={accomplishments.reviewVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          }
        />
        {/* impact report modal
    <ModalCustom 
    lgShow = {impactReportShow} 
    hide = {handleImpactReportClose}
    bgDark = {false} 
    centered
    content = {
        <iframe 
        width="100%" 
        height="500" 
        src={accomplishments.impactReport}
        title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
    }/>*/}
      </Container>
    </section>
  );
};

export default Accomplishments;
