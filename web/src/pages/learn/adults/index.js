import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import * as styles from "./adults.module.scss";
import { graphql } from "gatsby";
import bootcamp1 from "../../../images/adults-bootcamp-nathan.png";
import bootcamp2 from "../../../images/adults-bootcamp-presentation.png";
import bootcamp3 from "../../../images/adults-bootcamp-laptop.png";
import bootcamp4 from "../../../images/adults-bootcamp-sign.png";
import bootcampTeamPic from "../../../images/adults-bootcamp-team.png";
import introWebDevImage from "../../../images/IntrotoWebDevelopment1.png";
import bookIcon from "../../../images/book-circle.svg";
import lightbulbIcon from "../../../images/Lightbulb-circle.svg";
import rocketIcon from "../../../images/rocket-circle.svg";

export const query = graphql`
  query MyQuery {
    allSanityCourses(
      filter: { courseTitle: { eq: "Intro To Web Development" } }
    ) {
      nodes {
        startDate(formatString: "MMMM DD")
        endDate(formatString: "MMMM DD")
        courseSeason
        courseTitle
        externalLink
      }
    }
    allSanityBootcampAlumni(
      filter: { featuredAlumni: { eq: true } }
      sort: { class: { date: DESC } }
    ) {
      nodes {
        id
        name
        job
        jobTitle
        class {
          title
          date
        }
        picture {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 520
              aspectRatio: 0.8
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;

function BootcampAlumniPeekSlider({ alumni }) {
  const count = alumni.length;
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: count >= 5,
    mode: "snap",
    rubberband: true,
    slides: {
      perView: 4.65,
      spacing: 22,
    },
    breakpoints: {
      "(max-width: 1399px)": {
        slides: { perView: 3.85, spacing: 20 },
      },
      "(max-width: 991px)": {
        slides: { perView: 2.55, spacing: 18 },
      },
      "(max-width: 575px)": {
        slides: { perView: 1.38, spacing: 14 },
      },
    },
  });

  return (
    <div className={styles.alumniCarouselBleed}>
      <div className={styles.alumniSliderWrap}>
        {count > 1 && (
          <>
            <button
              type="button"
              className={styles.alumniSliderNavPrev}
              aria-label="Previous alumni"
              onClick={() => instanceRef.current?.prev()}
            >
              <FaChevronLeft aria-hidden />
            </button>
            <button
              type="button"
              className={styles.alumniSliderNavNext}
              aria-label="Next alumni"
              onClick={() => instanceRef.current?.next()}
            >
              <FaChevronRight aria-hidden />
            </button>
          </>
        )}
        <div
          ref={sliderRef}
          className={`keen-slider ${styles.alumniKeenSlider}`}
        >
          {alumni.map((person) => (
            <div
              key={person.id}
              className={`keen-slider__slide ${styles.alumniKeenSlide}`}
            >
              <article className={styles.alumniCard}>
                <div className={styles.alumniCardMedia}>
                  <GatsbyImage
                    image={person.picture.asset.gatsbyImageData}
                    alt={person.name || "Bootcamp alumni"}
                    className={styles.alumniCardImage}
                  />
                  <div className={styles.alumniCardScrim} aria-hidden />
                  <div className={styles.alumniCardOverlay}>
                    {person.name && (
                      <p className={styles.alumniName}>{person.name}</p>
                    )}
                    {(person.job || person.jobTitle) && (
                      <p className={styles.alumniCompany}>
                        {(person.job || person.jobTitle).toUpperCase()}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const IntroWebDevPage = ({ data }) => {
  const sanityDataset = process.env.GATSBY_SANITY_DATASET || "production";
  const allSanityCourses = data.allSanityCourses.nodes || {};

  const featuredAlumni = (data.allSanityBootcampAlumni?.nodes || []).filter(
    (alumni) => alumni?.picture?.asset,
  );
  const externalLink = allSanityCourses.at(-1)?.externalLink;
  const awesomeSectionImage = introWebDevImage;
  const missionButtonLink = "#additional-resources";

  return (
    <Layout>
      <div className={styles.pageWrap}>
        <Container className={`py-5 ${styles.intro}`}>
          <Col>
            <Title
              className={`pt-5 pb-0 text-uppercase text-white fw-bold text-center ${styles.awesomeIncU}`}
            >
              Awesome Inc U
            </Title>
            <Title
              className={`pt-0 pb-2 text-uppercase text-white fw-bold text-center ${styles.CodingResources}`}
            >
              Coding Resources
            </Title>
          </Col>
          <Col
            xs={{ span: 6, offset: 3 }}
            sm={6}
            md={{ offset: 3 }}
            lg={{ offset: 3 }}
            xl={{ offset: 3, span: 6 }}
          >
            <a
              className="d-flex justify-content-center"
              href={externalLink}
              target="_blank"
            ></a>
          </Col>
        </Container>
        <Container className={`my-5 ${styles.bottomIntro}`}>
          <Row className="align-items-center">
            {/* LEFT SIDE — TEXT */}
            <Col xs={12} lg={5} className={styles.textColumn}>
              <Title className="pt-5 pb-2 text-uppercase text-danger fw-bold text-center">
                Awesome Inc U
              </Title>

              <p className={`${styles.text} ${styles.awesomeTextBelow}`}>
                Awesome Inc U was created to provide training and resources to
                hobbyists, professionals, career changers, and entrepreneurs. We
                expanded our offerings to pour into the youth of our community
                through after-school programs, summer camps, and other training
                sessions; all designed to introduce students to technology and
                prepare our future workforce for the needs of a high-tech
                community.
              </p>

              <p className={`${styles.text} ${styles.awesomeTextBelow}`}>
                Awesome Inc U’s signature program, the Web Developer Bootcamp,
                was created out of need from local and regional technology
                companies desperate for entry-level developers who could bolster
                their growth.
              </p>
            </Col>

            {/* RIGHT SIDE — 4 IMAGES */}
            <Col xs={12} lg={7} className="d-flex justify-content-center">
              <div className={styles.imageGrid}>
                <img
                  src={bootcamp1}
                  className={`${styles.gridImg} ${styles.photoTopLeft}`}
                  alt="Bootcamp students working"
                />
                <img
                  src={bootcamp2}
                  className={`${styles.gridImg} ${styles.photoBottomLeft}`}
                  alt="Bootcamp class session"
                />
                <img
                  src={bootcamp3}
                  className={`${styles.gridImg} ${styles.photoTopRight}`}
                  alt="Bootcamp teamwork"
                />
                <img
                  src={bootcamp4}
                  className={`${styles.gridImg} ${styles.photoBottomRight}`}
                  alt="Bootcamp coding activity"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className={styles.MISSIONACOMPLISHEDBOOTCAMP}>
          <Container className="py-5">
            <Row>
              <Col xs={12} lg={{ span: 5, offset: 7 }}>
                <Title
                  className={`text-uppercase text-center ${styles.missionHeading}`}
                >
                  MISSION ACOMPLISHED: BOOTCAMP
                </Title>
              </Col>
            </Row>
            <Row className={`align-items-center ${styles.missionRow}`}>
              <Col xs={12} lg={7} className="mb-4 mb-lg-0">
                <div className={styles.missionImageWrap}>
                  <img
                    src={bootcampTeamPic}
                    alt="Bootcamp team"
                    className={styles.missionImage}
                  />
                </div>
              </Col>
              <Col xs={12} lg={5}>
                <div className={styles.missionTextBlock}>
                  <p
                    className={`${styles.missionCopy} ${styles.programText} text-white`}
                  >
                    After nine incredible years, the Awesome Inc Bootcamp has
                    achieved what it set out to do - build a strong pipeline of
                    entry-level tech talent right here in Kentucky. Nearly 200
                    graduates have launched new careers, boosted their earning
                    potential, and helped close the talent gap in Lexington's
                    tech scene. The Bootcamp graduates started careers at over
                    85 different companies- some of those were Fellowship
                    Companies that grew through the resources gained during the
                    year-long accelerator program.
                  </p>
                  <p
                    className={`${styles.missionCopy} ${styles.programText} text-white`}
                  >
                    Now that the mission is complete, we're evolving. Our focus
                    is shifting from entry-level training to helping teams and
                    professionals level up with advanced coding, AI integration,
                    and tech-forward upskilling through the Tech Association of
                    the Bluegrass.
                  </p>
                  <p className={`${styles.missionCopy} mb-1 text-white`}>
                    The Bootcamp may have ended, but the mission continues - to
                    make Kentucky a place where innovation, talent, and
                    opportunity thrive. Explore our current coding courses and
                    resources to keep growing your skills and stay ahead in
                    tech.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 5, offset: 7 }}>
                <div className={styles.missionButtonWrap}>
                  <a href={missionButtonLink}>
                    <BrandButton
                      className={`text-uppercase ${styles.missionButton}`}
                    >
                      View Resources
                    </BrandButton>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container id="curriculum" className={``}>
          <Col
            sm={12}
            md={{ offset: 1, span: 10 }}
            lg={{ offset: 1, span: 10 }}
          >
            <Title
              className={`text-uppercase mt-5 text-center text-danger fw-bold ${styles.alumniSectionTitle}`}
            >
              meet our bootcamp alumni
            </Title>
          </Col>
        </Container>

        {featuredAlumni.length > 0 && (
          <BootcampAlumniPeekSlider alumni={featuredAlumni} />
        )}

        <Container>
          <Col
            sm={12}
            md={{ offset: 1, span: 10 }}
            lg={{ offset: 1, span: 10 }}
          >
            <p
              className={`${styles.paragraphs} text-center ${styles.alumniIntroCopy}`}
            >
              The talent developed through the Bootcamp program continues to
              provide high-level skills to their employers. If you are in the
              search for a developer with business and technical skills, visit
              our alumni page.
            </p>
            <div className={styles.alumniButtonWrap}>
              <a className={styles.alumniViewLink} href="/alumni">
                <BrandButton
                  className={`text-uppercase mb-4  ${styles.alumniViewButton}`}
                >
                  view here
                </BrandButton>
              </a>
            </div>
          </Col>
        </Container>
        <Container fluid className={styles.awesome}>
          <Container>
            <Row className={styles.awesomeOverlay}>
              <Col
                xs={12}
                sm={12}
                md={10}
                lg={8}
                xl={7}
                className={styles.awesomeContent}
              >
                <img
                  className={styles.awesomeSectionImage}
                  src={awesomeSectionImage}
                  alt="Awesome Inc U classroom"
                />
                <h3 className={styles.awesomeIntroHeading}>
                  INTRO TO WEB DEVELOPMENT
                </h3>
                <p className={styles.awesomeIntroText}>
                  Awesome Inc U&apos;s beginner coding course for adults, giving
                  students the core skills and knowledge to start the journey
                  towards professional web development. Your next adventure
                  starts here.
                </p>
                <a
                  className={styles.awesomeRegisterButton}
                  href={externalLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  REGISTER NOW
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container id="additional-resources" className="py-5 my-4">
          <Title
            className={`text-uppercase text-center text-danger mb-5 ${styles.resourceSectionTitle}`}
          >
            Additional Resources
          </Title>
          <Row className="justify-content-center g-0 mt-2 align-items-center">
            <Col
              xs={12}
              md={4}
              className={`d-flex justify-content-center ${styles.resourceCol}`}
            >
              <div
                className={`${styles.resourceCard} ${styles.resourceCardSide}`}
              >
                <div className={styles.resourceIconWrap}>
                  <img
                    src={bookIcon}
                    alt="Learn to Code icon"
                    className={styles.resourceIconImage}
                  />
                </div>
                <h4 className={styles.resourceCardTitle}>Learn to Code</h4>
                <div className={styles.resourceLinkList}>
                  <a
                    href="https://www.freecodecamp.org"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.resourceLink}
                  >
                    freecodecamp.org
                  </a>
                  <a
                    href="https://replit.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.resourceLink}
                  >
                    replit.com
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              className={`d-flex justify-content-center ${styles.resourceCol}`}
            >
              <div
                className={`${styles.resourceCard} ${styles.resourceCardFeatured}`}
              >
                <div className={styles.resourceIconWrap}>
                  <img
                    src={lightbulbIcon}
                    alt="APAX Software icon"
                    className={styles.resourceIconImage}
                  />
                </div>
                <h4
                  className={`${styles.resourceCardTitle} ${styles.resourceCardTitleFeatured}`}
                >
                  APAX Software
                </h4>
                <p className={styles.resourceCardDescription}>
                  Looking for a company that provides custom software
                  development, web &amp; app design, and ongoing support? Check
                  out our friends at APAX Software!
                </p>
                <a
                  href="https://apaxsoftware.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.resourceLearnMore}
                >
                  LEARN MORE
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              className={`d-flex justify-content-center ${styles.resourceCol}`}
            >
              <div
                className={`${styles.resourceCard} ${styles.resourceCardSide}`}
              >
                <div className={styles.resourceIconWrap}>
                  <img
                    src={rocketIcon}
                    alt="Build Your Business Fast icon"
                    className={styles.resourceIconImage}
                  />
                </div>
                <h4 className={styles.resourceCardTitle}>
                  Build Your
                  <br />
                  Business Fast
                </h4>
                <div className={styles.resourceLinkList}>
                  <a
                    href="https://www.wix.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.resourceLink}
                  >
                    Wix.com
                  </a>
                  <a
                    href="https://bubble.io"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.resourceLink}
                  >
                    Bubble.io
                  </a>
                  <a
                    href="https://webflow.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.resourceLink}
                  >
                    Webflow
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
export default IntroWebDevPage;
