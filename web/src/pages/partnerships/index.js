import * as React from "react";
import { graphql } from "gatsby";
import { Col, Container, Row, Image } from "react-bootstrap";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout.js";
import { motion } from "framer-motion";
import Title from "../../components/UI/Title/Title";
import * as styles from "./partnership.module.scss";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ProgramForm from "../../components/Forms/YouthProgramGuide.js/partnershipsForm.js";
import ImageOutline from "../../components/ImageOutline/ImageOutline";
import { Carousel } from "react-bootstrap";
import Subtitle from "../../components/UI/Subtitle/Subtitle";

import PerkImage1 from "../../images/partnership/5across_june24-31.jpg";
import PerkImage2 from "../../images/partnership/5across_june24-16.jpg";
import PerkImage3 from "../../images/partnership/5across_june24-128.jpg";
import Desktop from "../../images/Rent_Workspace.png";
import Rocket from "../../images/accelerate-your-startup.png";
import HTMLBrackets from "../../images/Learn_To_Code.png";

import ApaxLogo from "../../images/partnership/chase_logo.png";
import ChaseLogo from "../../images/partnership/chase_logo.png";
import KineticLogo from "../../images/partnership/kinetic_logoStacked_RGB_R_white_bgnd.png";
import CommerceLexLogo from "../../images/partnership/commerce-lexington-logo.jpg";

export const query_partnership = graphql`
  query PartnersPage {
    allSanityPartnershipSponsors(sort: { fields: order, order: ASC }) {
      nodes {
        _id
        name
        position
        logo {
          asset {
            gatsbyImageData(
              width: 200
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;

const PartnershipsPage = ({ data }) => {
  const perksImages = [PerkImage1, PerkImage2, PerkImage3];
  const perkIcons = [Rocket, HTMLBrackets, Desktop];

  const sponsors = data.allSanityPartnershipSponsors.nodes;

  const leftLogos = sponsors.filter((s) => s.position === "left");
  const rightLogos = sponsors.filter((s) => s.position === "right");
  const bottomLogos = sponsors.filter((s) => s.position === "bottom");
  const partnershipOppurtunites = [
    {
      title: "HOF Support",
      description:
        "Support the Kentucky Entrepreneur Hall of Fame and help celebrate the founders building Kentucky’s next great companies.",
    },
    {
      title: "Fellowship Support",
      description:
        "Support founders in our mentor-driven fellowship program designed to accelerate Kentucky’s high‑tech startups.",
    },
    {
      title: "5 Across",
      description:
        "Give local founders a platform to pitch their startup companies, gain valuable feedback, and attract more customers.",
    },
    {
      title: "Investor 1‑1s",
      description:
        "Help create space for meaningful conversations between founders and investors from across the state of Kentucky.",
    },
    {
      title: "Newsletters",
      description:
        "Get your company in front of thousands of newsletter subscribers each month.",
    },
    {
      title: "Lunch and Learn",
      description:
        "Host educational sessions that position your team as experts while adding value to the startup community.",
    },
    {
      title: "Mentor Sessions",
      description: "Be a mentor to Kentucky startups and their founders.",
    },
  ];

  return (
    <Layout>
      <Container fluid className={`${styles.mainHeading}`}>
        <Row>
          <Col className="offset-sm-2" style={{ marginTop: "30%" }}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Row className=""></Row>
              <Row>
                <Col md="8" className="">
                  <Title className={`text-white mb-5`}>
                    Meet Our Awesome Partners
                    <p>Dedicated to curating Lexington's finest startups</p>
                  </Title>
                </Col>

                <Row>
                  <a href="#partnerForm">
                    <BrandButton className={`partnership`}>
                      LEARN MORE
                    </BrandButton>
                  </a>
                </Row>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/*Partners*/}
      <Container className="py-5">
        <Row className="align-items-center g-0">
          {/* Left logo grid */}
          <Col xs={12} lg={3} className={styles.logoGridColLeft}>
            <div className={styles.logoGrid}>
              {leftLogos.map((sponsor) => (
                <div key={sponsor._id} className={styles.logoCell}>
                  <GatsbyImage
                    image={sponsor.logo.asset.gatsbyImageData}
                    alt={sponsor.name}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </Col>

          {/* Center text block */}
          <Col xs={12} lg={6} className="text-center my-4 my-lg-0 px-3 px-lg-4">
            <h2 className={styles.heroWords}>
              SPONSORS.
              <br />
              PARTNERS.
              <br />
              FRIENDS.
            </h2>
            <p className={`${styles.heroSubtitle} `}>
              The people and partners who push the bluegrass forward with us.
            </p>
          </Col>

          {/* Right logo grid */}
          <Col xs={12} lg={3} className={styles.logoGridColRight}>
            <div className={styles.logoGrid}>
              {rightLogos.map((sponsor) => (
                <div key={sponsor._id} className={styles.logoCell}>
                  <GatsbyImage
                    image={sponsor.logo.asset.gatsbyImageData}
                    alt={sponsor.name}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Bottom row: 4 logos across */}
        <Row className="mt-0 g-0">
          <Col xs={12}>
            <div className={styles.logoGridBottom}>
              {bottomLogos.map((sponsor) => (
                <div key={sponsor._id} className={styles.logoCell}>
                  <GatsbyImage
                    image={sponsor.logo.asset.gatsbyImageData}
                    alt={sponsor.name}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/*Interst Form Section */}
      <Container
        id="partnerForm"
        fluid
        className={`${styles.formHeading} py-5`}
      >
        <Col md={6} className="mx-auto py-5 text-center">
          <Row>
            <div>
              <Title className="text-white">
                Interested in becoming a partner?
              </Title>
              <p className={`${styles.subHeading} mx-auto text-white`}>
                Fill out the form below and we will be in touch.
              </p>
            </div>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <ProgramForm />
            </Col>
          </Row>
        </Col>
      </Container>

      {/* Perks section*/}
      <Container className="text-center">
        <Row className="mb-5 ">
          <Title className={`${styles.values} mx-auto my-5 text-uppercase`}>
            Being a Partner Has It's Perks
          </Title>
          <p className={`${styles.subHeading} mx-auto`}>
            These are just a few of the reasons companies partner with
            AwesomeInc
          </p>
          <Col>
            {perksImages.map((image, index) => (
              <ImageOutline style={{ marginLeft: "5rem" }}>
                <Container
                  className={`${styles.perksImage}`}
                  style={{
                    backgroundImage: `linear-gradient(
                                    rgba(18, 2, 2, 0.409),
                                    rgba(18, 2, 2, 0.409)
                                    ), url(${image})`,
                  }}
                >
                  <Image
                    style={{
                      maxWidth: "100px",
                      height: "auto",
                      padding: "7px",
                    }}
                    src={perkIcons[index]}
                    alt=""
                  />
                  <p className={`${styles.finalSubText} text-white`}>
                    Cintrifuse is a non-profit organization and relies on the
                    support of our generous donors to continue fostering
                    innovation, empowering founders, and bulding a thriving
                    startup ecosystem in cincinnati. your support can make a
                    real difference in shaping the furture of entrepreneurship
                    and tech
                  </p>
                </Container>
              </ImageOutline>
            ))}
          </Col>
        </Row>
      </Container>

      {/*Oppurtunites Section */}
      <Container fluid className={styles.opportunitesHeading}>
        <Row className="text-center">
          <Title className="mx-auto mt-5 text--brand text-uppercase">
            Partnership Opportunities
          </Title>
          <p className="text--brand text--italic">
            Learn more about partnership options
          </p>
        </Row>
        <Container>
          <Row className="my-5">
            {/*this is bad data sponosors need to be replaced */}
            {partnershipOppurtunites.map(({ title, description }, index) => {
              const isSingleLast =
                partnershipOppurtunites.length % 3 === 1 &&
                index === partnershipOppurtunites.length - 1;

              return (
                <Col
                  key={title}
                  sm="12"
                  lg={isSingleLast ? { span: 4, offset: 4 } : 4}
                  className="mb-5"
                >
                  <div className={`${styles.cardContainer} text--brand mb-5`}>
                    <fieldset className={styles.cardBox}>
                      <legend className={styles.cardTitle}>{title}</legend>
                      <h4 className={`${styles.cardText} mb-4`}>
                        {description}
                      </h4>
                    </fieldset>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
      {/* Testimonial section */}
      {/* <Container className="py-5">
        <Title className={`${styles.greyUnderline} text-center mt-5`}>
          TESTIMONIALS
        </Title>
        <Carousel indicators={true} className={`${styles.carouselHeight} my-3`}>
          {sponsors.map((index) => (
            <Carousel.Item key={index}>
              <Row className="p-1 d-flex justify-content-center">
                <Image
                  style={{ maxWidth: "150px", height: "auto", padding: "15px" }}
                  src={AincLogo}
                  alt={`Sponsor ${index + 1}`}
                />
                <Row md={2} className="text-center">
                  <p className="mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Row>
                <Col className="p-3 d-flex flex-column align-items-center align-items-md-start">
                  <Subtitle className="mx-auto" style={{ color: "#C12029" }}>
                    company name
                  </Subtitle>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container> */}

      {/* Foot Section */}
      <Container fluid className={styles.finalSection}>
        <Row>
          <Col>
            <h2 className={`${styles.finalHeading}`}>
              We'd love to have you as a partner.
            </h2>
            <a href="#partnerForm">
              <BrandButton className={`${styles.finalButton} btn--small my-4`}>
                Learn More
              </BrandButton>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default PartnershipsPage;
