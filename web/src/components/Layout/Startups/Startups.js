import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import Title from "../../../components/UI/Title/Title";
import { StaticQuery } from "gatsby";

const Startups = () => {
  return (
    <section id="startups">
      <Title className="pt-5 mb-3 text-uppercase text-center">Startups</Title>
      <Subtitle className="mb-5 text-uppercase text-center">
        Join Our Program
      </Subtitle>
      <Container>
        <Row>
          <Col>
            <div className="h-100 my-5">
              <a href="/idea">
                <motion.div
                  initial={{ opacity: 0.5, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <StaticImage
                    placeholder="blurred"
                    className="d-block mx-auto w-50 m-5"
                    quality="100"
                    objectFit="contain"
                    style={{ height: "150px", width: "150px" }}
                    src="../../../images/startups-pitch.png"
                    alt="Lightbulb Icon"
                  />
                </motion.div>
              </a>
              <Subtitle className="text-center brand fw-bold">
                Pitch Your Idea
              </Subtitle>
              <p className="text-center">
                We offer outlets for your idea to be heard. Share your idea with
                us or learn more about events that promote entrepreneurship.
              </p>
            </div>
          </Col>
          <Col>
            <div className="h-100 my-5">
              <a href="/fellowship">
                <motion.div
                  initial={{ opacity: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <StaticImage
                    className="d-block mx-auto m-5 bg--brand-light rounded-circle"
                    quality="100"
                    objectFit="contain"
                    height="150px"
                    width="150px"
                    style={{ width: "150px", height: "150px" }}
                    src="../../../images/accelerate-your-startup.png"
                    alt="Rocket Icon"
                  />
                </motion.div>
              </a>
              <Subtitle className="text-center brand fw-bold ">
                Accelerate Your Startup
              </Subtitle>
              <p className="text-center">
                Our <span className="fw-bold">Fellowship Program</span> is
                mentor-driven, designed to accelerate your high-tech startup.
              </p>
            </div>
          </Col>
          <Col>
            <div className="h-100 my-5">
              <a href="https://www.entrepreneurhof.com/">
                <motion.div
                  initial={{ opacity: 0.5, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <StaticImage
                    placeholder="blurred"
                    className="d-block mx-auto w-50 m-5"
                    quality="100"
                    objectFit="contain"
                    style={{ height: "150px", width: "150px" }}
                    src="../../../images/startups-showcase.png"
                    alt="Book Icon"
                  />
                </motion.div>
              </a>
              <Subtitle className="text-center brand fw-bold">
                Showcasing Kentucky Entrepreneurs
              </Subtitle>
              <p className="text-center">
                Discover the impact that Entrepreneurship has made in the
                Commonwealth.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Startups;
