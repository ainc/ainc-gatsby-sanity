import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SEO from '../../components/seo'
import Title from '../../components/UI/Title/Title'
import Layout from "../../components/Layout/Layout";
import { Link, useStaticQuery, graphql } from 'gatsby'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
// import { styles } from '../../styles/Variables'
import * as styles from '../program/program.module.scss'
import BrandButton from '../../components/UI/BrandButton/BrandButton';
import ProgramLinkTree from './ProgramLinkTree';

const ProgramPage = ({ data }) => {
  const allProgram = (data.sanityProgram || {});
  const allSanityFiveAcrossSponsors = (data.allSanityFiveAcrossSponsors.nodes || {});
  const titleSponsorName = (data.allSanityFiveAcrossSponsors.nodes[0].titleSp.title || {});
  const titleSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[0].titleSp.link || {});
  const titleSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[0].titleSp.image.asset.gatsbyImageData || {});
  const titleSponsorSecondaryImage = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSp.secondaryImage?.asset.gatsbyImageData || {});

  const presentingSponsorName = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSp.title || {});
  const presentingSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSp.link || {});
  const presentingSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSp.image.asset.gatsbyImageData || {});
  const presentingSponsorSecondaryImage = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSp.secondaryImage?.asset.gatsbyImageData || {});

  const suppourtingSponsors = (data.allSanityFiveAcrossSponsors.nodes[0].suppourtingSponsors || {});

  const teams = (data.sanityProgram.teams || {});
  const judges = (data.sanityProgram.judges || {});
  const nextEventLink = (data.sanityProgram.next_event_link.url)

  return (
    <Layout>
      {/* still need to fix heading levels to increase by one */}
      <Container fluid className={styles.mainHeading}>
        <Col>
          <Row>
            <Title className='text-uppercase text-center text-white mt-5'>Welcome to</Title>
          </Row>
          <Row>
            <Col xs={{ offset: 1, span: 10 }}>
              <StaticImage placeholder="blurred" className='my-5 mw-100 w-75' src='../../images/5across-banner.png'></StaticImage>
            </Col>
          </Row>
          <Row>
            <Subtitle className='text-center'>    {allProgram.date} </Subtitle>
          </Row>
          <Row>
            <Col xs={{offset: 3, span: 6}} >
              <GatsbyImage image={titleSponsorSecondaryImage} alt={titleSponsorName} className="mt-3" />
            </Col>
          </Row>
          <Row>
            <Col xs={{offset: 4, span: 4}} className='mb-3'>
              <GatsbyImage image={presentingSponsorSecondaryImage} alt={presentingSponsorName} className="mt-3" />
            </Col>
          </Row>
        </Col>
      </Container>
      <ProgramLinkTree nextEventLink={nextEventLink}/>
      <section id='teams'>
      <Container className={styles.tonightsTeams}>
        <Subtitle className='text-center my-5 text-black text-uppercase'>Tonight's Teams</Subtitle>
        <Col xs={12}>
          {teams.map((team) => (
            <Row>
              
                <GatsbyImage className={styles.teamImage}
                objectFit='scale-down'
                image={team.image.asset.gatsbyImageData} alt={team.alt} />
                <p className="text-center mt-4">{team.title}</p>
                <hr></hr>
              
            </Row>
          ))}
        </Col>
      </Container>
      </section>
      <section id='judges'>
      <Container className={styles.tonightsJudges}>
        <Subtitle className='text-center text-uppercase text-white pt-4 pb-2 mt-3'>Tonight's Judges</Subtitle>
        {/* TODO: Create this section similarly to how we did the team's section */}
        <Row>
          {judges.map((judge) => (
            
              <Col xs={6} lg={{offset: 3, span: 6}}>
              
 
                <GatsbyImage className={styles.judgeImage}
                // objectFit="scale-down"
                image={judge.image.asset.gatsbyImageData} alt={judge.alt}/>
                <h3 className={`text-center fw-bold text-uppercase ${styles.judgeText}`}>{judge.names}</h3>
                <h4 className={`text-center mb-1 text-uppercase ${styles.judgeText}`}>{judge.title}</h4>
                <h4 className={`text-center text-uppercase ${styles.judgeText}`}>{judge.accolades}</h4>
            
              
              </Col>
        
          ))}
        </Row>
      </Container>
      </section>
      <section id='sponsors'>
      <Container>
        <Row>
          <Col xs={{offset: 2, span: 10}} md={{offset: 1, span: 12}}>
            <StaticImage placeholder="blurred" className='my-4 mw-100 w-75' src='../../images/5across-banner.png'></StaticImage>
          </Col>
        </Row>
        <Row>
          <Subtitle className='text-uppercase fw-bold text-center mb-3'>Thanks its sponsors</Subtitle>
        </Row>
        <Row>
          <Col xs={7} className="my-1 d-flex align-items-center justify-content-center">
            <a href={titleSponsorLink}>
              <GatsbyImage image={titleSponsorImage} alt={titleSponsorName} />
            </a>
          </Col>
          <Col xs={5} className="mt-4 d-flex align-items-center justify-content-center">
            <a href={presentingSponsorLink}>
              <GatsbyImage image={presentingSponsorImage} alt={presentingSponsorName} />
            </a>
          </Col>
        </Row>
        <Row className={styles.supportSponsors}>
          <Row>
            {suppourtingSponsors.map((sponsor) => (
              <Col xs={6} lg={10} className="my-3 d-flex align-items-center justify-content-center">
                <a href={sponsor.link}>
                  <GatsbyImage image={sponsor.image.asset.gatsbyImageData} alt={sponsor.alt} />
                </a>
              </Col>

            ))}
          </Row>
        </Row>
      </Container>
      </section>
      <section id="podcasts">
      <Container className={styles.experienceMore}>
        <Row>
          <Col xs={12} md={12}>
            <Title className='text-uppercase text-white text-center mt-4'>Experience even more</Title> 
          </Col>
        </Row>
        <Row>
          <Col xs={{offset: 2, span: 8}} md={{offset: 4, span: 12}}>
            <StaticImage placeholder="blurred" className='my-4' src='../../images/5across-logo-white.png'></StaticImage>
          </Col>
        </Row>
        <Col xs={{offset: 2, span: 8}} md={{offset: 4, span: 3}}>
          <a href="https://podcasters.spotify.com/pod/show/awesomeinc" target='_blank'>
            <StaticImage placeholder="blurred" className='my-2 ms-5' src='../../images/ainc_podcast_logo.png'></StaticImage>
          </a>
          <p className={`mb-2 ms-3 text-center text-uppercase text-white ${styles.podcastText}`}>Awesome Inc's Podcast</p>
          <StaticImage placeholder="blurred" className='my-2 ms-5' src='../../images/middle-tech.png'></StaticImage>
          <p className={`mb-4 ms-3 text-center text-uppercase text-white ${styles.podcastText}`}>5 Across deep dive</p>
        </Col>
      </Container>
      </section>
      <section id='mentor'>
      <Container className={styles.becomeMentor}>
        <Col xs={12}>
          <Subtitle className='fw-bold my-5 brand text-center text-uppercase'>Become a startup mentor</Subtitle>
          <Row>
            <Col xs={{offset: 2, span: 10}} md={{offset: 4, span: 5}}>
              <a href="https://docs.google.com/forms/d/1azJ9L8NBpe-3KYMTgFOQ7l0Hn-0y26a2SrHI6SebNm8/viewform?edit_requested=true" target='_blank'>
              <BrandButton className={`secondary my-5 w-75 text-uppercase ${styles.buttons} `}>
                Fill out this google form to apply
              </BrandButton>  
              </a>
            </Col>
          </Row>
          
        </Col>
      </Container>
      </section>
    </Layout>
  )
};

export const query_program = graphql`
query query_program {
  sanityProgram {
    date(formatString: "MMMM D, YYYY")
    teams {
      title
      image {
        asset {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
    judges {
      title
      image {
        asset {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      title
      alt
      accolades
      names
    }
    next_event_link {
      url
    }
  }
  allSanityFiveAcrossSponsors(sort: {_createdAt: DESC}) {
    nodes {
      presentingSp {
        link
        title
        image {
          asset {
            gatsbyImageData
          }
        }
        secondaryImage {
          asset {
            gatsbyImageData
          }
        }
      }
      titleSp {
        link
        title
        image {
          asset {
            gatsbyImageData
          }
        }
        secondaryImage {
          asset {
            gatsbyImageData
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
  ;

export default ProgramPage