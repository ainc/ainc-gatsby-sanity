import React from "react";
import { useRef } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Container, Col, Row, Image } from "react-bootstrap";

import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import DropdownDataDisplay from "../../../components/DropdownDataDisplay/DropdownDataDisplay";
import HorizontalButtons from './HorizontalButtons';
import Layout from "../../../components/Layout/Layout";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import Title from "../../../components/UI/Title/Title";

import "../../../styles/main.scss"
import * as styles from "./fiveAcross.module.scss";
import image from "../../../images/5across-banner.png"

const fiveAcrossPage = ({ data }) => {

    const titleSponsorName = (data.allSanityFiveAcrossSponsors.nodes[1].titleSp.title || {});
    const titleSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[1].titleSp.link || {});
    const titleSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[1].titleSp.image.asset.gatsbyImageData || {});

    const presentingSponsorName = (data.allSanityFiveAcrossSponsors.nodes[1].presentingSp.title || {});
    const presentingSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[1].presentingSp.link || {});
    const presentingSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[1].presentingSp.image.asset.gatsbyImageData || {});

    const suppourtingSponsors = (data.allSanityFiveAcrossSponsors.nodes[0].suppourtingSponsors || {});
    const nextFiveAcross = (data.allSanityEvents.nodes || {});

    const fiveAcrossWinners = (data.allSanityFiveAcrossWinners.edges || {});
    const previousWinner = fiveAcrossWinners[fiveAcrossWinners.length - 1].node;


    let years = [];

    let pastWinnerDate = ""
    let pastWinnerYear = ""

    for (let pastWinner in fiveAcrossWinners) {
        // console.log(fiveAcrossWinners[pastWinner].node)
        pastWinnerDate = fiveAcrossWinners[pastWinner].node.WinningDate
        pastWinnerYear = pastWinnerDate.split("-")[0] //get only the year
        if (!years.includes(pastWinnerYear)) { //if year is not in list
            years.unshift(pastWinnerYear) //add the year to the list of years if it is not in there already (closest year to top)
        }
    }
    //Scroll to Recent Winner section
    const recentWinner = useRef(null);
    const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    };

    return (
    
        <Layout>
            {/* <section  > */}
            <Container fluid className={`${styles.mainHeading}`}>
                <Row>
                    <Col className="offset-sm-2" style={{ marginTop: "10%" }}>
                        <Row className="">
                            <Col sm="10" md="10" lg="6" className="">
                                <StaticImage placeholder="blurred" className="my-5 mw-100" src="../../../images/5across-banner.png" alt=''/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8" className="">
                                <Title className={`${styles.headingTitle} text-white mb-5`}>A Pitch Competition for Kentucky Entrepreneurs</Title>
                            </Col>
                        </Row>
                        <Row className="">
                            {nextFiveAcross.map((node) => (
                                <HorizontalButtons register={node.linkToEvent} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5 pt-2">
                <Subtitle className='text-center fw-bold'>5 Across has given over 250 founders a new platform and thousands of Kentuckians a fun place to engage with local startups.</Subtitle>
                <Row className="mt-5 d-flex justify-content-center">
                    <Col md="2" sm="6" className="mt-2 d-flex justify-content-center">
                        <StaticImage placeholder="blurred" quality="100" src="../../../images/5across-pitches.png" alt=''/>
                    </Col>
                    <Col md="2" sm="6" className="mt-2 d-flex justify-content-center">
                        <StaticImage placeholder="blurred" quality="100" src="../../../images/5across-time.png" alt='' />
                    </Col>
                    <Col md="2" sm="6" className="mt-2 d-flex justify-content-center">
                        <StaticImage placeholder="blurred" quality="100" src="../../../images/5across-prize.png" alt=''/>
                    </Col>
                    <Col md="2" sm="6" className="mt-2 d-flex justify-content-center">
                        <StaticImage placeholder="blurred" quality="100" src="../../../images/5across-start.png" alt=''/>
                    </Col>
                    <Col md="2" sm="6" className="mt-2 d-flex justify-content-center">
                        <StaticImage placeholder="blurred" quality="100" src="../../../images/5across-entry.png" alt=''/>
                    </Col>
                </Row>
                <Row className="my-5 d-flex justify-content-center">
                {nextFiveAcross.map((node) => (
                    <HorizontalButtons register={node.linkToEvent} />
                ))}
                </Row>
            </Container>
            <Container fluid className={`mt-5 ${styles.pastPitches}`}>
                <Row className="mx-5 justify-content-center text-center">
                    <Col md="10" sm="12">
                        <Title className={`${styles.largeText} text-white mt-5  text-uppercase`}>Over 10 years of putting the spotlight on Kentucky Entrepreneurs</Title>
                        <BrandButton className='mt-3 mb-5' onClick={() => scrollToSection(recentWinner)}>WATCH PAST PITCHES</BrandButton>
                    </Col>
                </Row>
            </Container>

            {/* NEXT 5ACROSS SECTION */}
            <Container fluid className={`justify-content-center ${styles.upcomingEventCircle}`}>
                <Row>
                    <Col className="text-center">
                        <Title className="text-white pt-5 mt-5 fs-2 text-uppercase">Join us at the next 5 Across</Title>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col className={`d-sm-none`}></Col>
                    <Col sm="2" className={`d-none d-sm-block`}></Col>

                    {/* White box */}
                    <Col lg="4" xs="8" className="bg-white rounded-4">
                        {nextFiveAcross.map((node) => (
                            <Container fluid className="mt-2">
                                <a href={node.linkToEvent}>
                                    <Row className=''>
                                        <Col lg="4" md="4" sm="4" className="">
                                            <Row className="d-flex flex-column align-items-center">
                                                <Col lg="10" className="d-none d-lg-block d-md-block">
                                                    <StaticImage placeholder="blurred" quality="100" src="../../../images/5across-banner.png" alt=''/>
                                                </Col>
                                            </Row>
                                        </Col>
                                        {/* changed headings in this section from h6, font size utilities currently aren't working but should look normal once the utilities work */}
                                        <Col className="justify-content-start">
                                            <h2 className="text--red fs-6 fw-bold">{node.date}</h2> {/*need to  */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="4" lg="4"></Col>
                                        <Col>
                                            <h4 className="text--black fw-light fs-5">Location: {node.location}</h4> {/*Location*/}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="4" lg="4"></Col>
                                        <Col>
                                            <h3 className="text--black fs-6">{node.eventName}</h3>{/*title */}
                                        </Col>
                                    </Row>
                                </a>
                            </Container>

                        ))}
                    </Col>
                    <Col className="d-sm-none"></Col>
                    <Col sm="2" className={`d-none d-sm-block`}></Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={{ span: 2, offset: 7 }} className="d-none d-md-block">
                        <StaticImage placeholder="blurred" quality="90" src="../../../images/5across-arrow.png" alt="5 across arrow" />
                    </Col>

                </Row>
            </Container>


            {/* RECENT WINNER SECTION */}
            <Container ref={recentWinner} className="mb-5 pb-5">
                <Row>
                    <Col className="my-5 text-center">
                        <Title className={`${styles.largeText} text-uppercase py-5`}>Our most recent winner</Title>
                    </Col>
                </Row>
                <Row className={`${styles.recentWinner} p-5`}>
                    <Col md="auto" className="">
                        <GatsbyImage image={previousWinner.image.asset.gatsbyImageData} />
                    </Col>
                    <Col className={`mt-5`}>
                        <h1 className={styles.recentWinnerText}>{previousWinner.companyTitle}</h1>
                        <Row className=''>
                            <h1 className={`fs-1 fst-italic fw-light`} style={{fontSize: '2.5vw'}}>Kentucky</h1>
                        </Row>
                        <Row>
                            <Col sm="2" className="mt-3">
                                <StaticImage placeholder="blurred" src="../../../images/5across-banner.png" alt=''/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* PREVIOUS WINNER SECTION */}
            <Container className="mt-5">
                <Row className="mt-5 text-center">
                    <Title className={`${styles.largeText} text-uppercase`}>Or Revisit a Previous Winner</Title>
                </Row>
                <Row>
                    {/* <Col/> */}
                    <Col className="text-center mt-5">
                        <DropdownDataDisplay
                            categories={years}
                            data={fiveAcrossWinners}
                        />
                    </Col>
                    {/* <Col/> */}
                </Row>
            </Container>

            {/* BRING THE FUN SECTION */}
            <Container className="my-5">
                <Row>
                    <Col className="my-5 text-center text-uppercase">
                        <Title>And Don't Forget Rule #17</Title>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col lg="11" className="d-flex m-auto">
                        <div>
                            <div className={`position-absolute mt-3`}>
                                <Title className={`${styles.bringTheFun} text-uppercase`}>Bring</Title>
                                <Title className={`${styles.bringTheFun} text-uppercase`}>the</Title>
                                <Title className={`${styles.bringTheFun} text-uppercase`}>Fun</Title>
                            </div>
                        </div>
                        <StaticImage placeholder="blurred" className={`${styles.unicornImage}`} quality="100" src="../../../images/dabbing_unicorn.png" alt=''/>
                    </Col>
                </Row>
            </Container>

            {/* SPONSORS SECTION */}
            <Container className={`${styles.sponserSection}`}>
                <Row>
                    <Col sm="auto" className="mx-auto text-center">
                        <Title className={`${styles.raiseTitle} text-uppercase px-3`}>Thank you to our sponsors</Title>
                    </Col>
                </Row>
                <Row className="text-center my-5">
                    <Col lg="12" className="my-3">
                        <Title className="fs-2">Title Sponsor</Title>
                    </Col>
                    <Col lg="12" className="my-2">
                        <a href={titleSponsorLink}>
                            <GatsbyImage image={titleSponsorImage} alt={titleSponsorName} />
                        </a>
                    </Col>
                    <Col lg="12" className="my-2">
                        <Title className="fs-2 my-5">Presenting Sponsor</Title>
                    </Col>
                    <Col lg="12" className="my-2">
                        <a href={presentingSponsorLink}>
                            <GatsbyImage image={presentingSponsorImage} alt={presentingSponsorName} />
                        </a>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col className="text-center">
                        <Title className="fs-2 my-5">Supporting Sponsors</Title>
                    </Col>
                </Row>
                <Row className="mb-5 text-center justify-content-center">
                    <Col lg="10">
                        <Row className="align-items-center justify-content-center">
                            {suppourtingSponsors.map((sponsor) => (
                                <Col lg="3" className="my-3">
                                    <a href={sponsor.link}>
                                        <GatsbyImage image={sponsor.image.asset.gatsbyImageData} alt={sponsor.alt} />
                                    </a>
                                </Col>

                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="mb-5">
                {/* Need to add SVG Grey Triangle to social media */}
                <SocialMedia />
            </Container>
        </Layout>
    )
}

export const query_upcoming_5a = graphql` 
query fiveAcrossQuery($currentDate: Date!) {
    allSanityEvents(
        filter: {reference: {eventTypeName: {eq: "5 Across"}}, date: {gte: $currentDate}}
        sort: {date: ASC}
        limit: 1
    ) {
        nodes {
            eventName
            date(formatString: "MMMM D, YYYY")
            host
            location
            linkToEvent
            picture {
            asset {
                gatsbyImageData
                }
            }
            reference {
            eventTypeName
            }
        }
    }
    allSanityFiveAcrossWinners(sort: {WinningDate: ASC}) {
        edges {
            node {
                WinningDate
                companyTitle
                FounderNames
                founderVideo
                image {
                    asset {
                        gatsbyImageData(aspectRatio: 1, height: 300)
                    }
                }
            }
        }
    }
    allSanityFiveAcrossSponsors {
        nodes {
          presentingSp {
            title
            link
            image {
                asset {
                  gatsbyImageData(height: 200)
                }
            }
          }
          titleSp {
            title
            link
            image {
                asset {
                  gatsbyImageData(height: 500)
                }
            }
          }
          suppourtingSponsors {
            image {
              asset {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            link
            alt
          }
        }
      }
}
`

export default fiveAcrossPage;