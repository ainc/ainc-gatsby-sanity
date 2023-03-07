import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../../components/UI/Title/Title'
import Layout from "../../components/Layout/Layout";
import { Link, useStaticQuery, graphql } from 'gatsby'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
// import { styles } from '../../styles/Variables'
import * as styles from '../program/program.module.scss'
import BrandButton from '../../components/UI/BrandButton/BrandButton';


const ProgramPage = ({ data }) => {
  const allProgram = (data.sanityProgram || {});
  const allSanityFiveAcrossSponsors = (data.allSanityFiveAcrossSponsors.nodes || {});
  const titleSponsorName = (data.allSanityFiveAcrossSponsors.nodes[0].titleSponsorName || {});
  const titleSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[0].titleSponsorLink || {});
  const titleSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[0].titleSponsorImage.asset.gatsbyImageData || {});

  const presentingSponsorName = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSponsorName || {});
  const presentingSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSponsorLink || {});
  const presentingSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSponsorImage.asset.gatsbyImageData || {});

  const suppourtingSponsors = (data.allSanityFiveAcrossSponsors.nodes[0].suppourtingSponsors || {});
  const teams = (data.sanityProgram.teams || {});
  const judges = (data.sanityProgram.judges || {});

  return (
    <Layout>
      <Container fluid className={styles.mainHeading}>
        <Col>
          <Row>
            <Title className='text-uppercase text-center text-white mt-5'>Welcome to</Title>
          </Row>
          <Row>
            <Col xs={{ offset: 1, span: 12 }}>
              <StaticImage className='my-5 mw-100 w-75' src='../../images/5across-banner.png'></StaticImage>
            </Col>
          </Row>
          <Row>
            <ul>
                <Subtitle className='text-center'>    {allProgram.date} </Subtitle>
            </ul>
          </Row>
          <Row>
            <Col xs={6}>
              <GatsbyImage image={titleSponsorImage}></GatsbyImage>
            </Col>
            <Col xs={6}>
              <GatsbyImage className='mt-3' image={presentingSponsorImage}></GatsbyImage>
            </Col>
          </Row>
        </Col>
      </Container>
      <Container className={styles.details}>
        <Col>
          <Row>
            <Subtitle className='text-uppercase text-black mt-4 mb-4'>Tonight's Details</Subtitle>
          </Row>
          <Row>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Vote on raadz</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Teams</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Judges</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Sponsors</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Podcasts</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Become a mentor</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Free ticket for next 5 across</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className={`secondary my-1 w-100 text-uppercase ${styles.buttons}`}>Startup pipeline</BrandButton>
            </Col>
          </Row>
          <Row xs={12} className='mb-4'>
            <Col xs={{ offset: 0, span: 12 }}>
              <BrandButton className={`secondary my-2 w-100 text-uppercase ${styles.buttons}`}>More about awesome inc</BrandButton>
            </Col>
          </Row>
        </Col>
      </Container>
      <Container className={styles.tonightsTeams}>
        <Subtitle className='text-center my-5 text-black text-uppercase'>Tonight's Teams</Subtitle>
        <Col xs={12}>
          {teams.map((team) => (
            <Row>
              <ul>
                <GatsbyImage className={styles.teamImage}
                objectFit='scale-down'
                image={team.image.asset.gatsbyImageData} alt={team.alt} />
                <p className="text-center mt-4">{team.title}</p>
                <hr></hr>
              </ul>
            </Row>
          ))}
        </Col>
      </Container>
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
      <Container className={styles.sponsors}>
        <Row>
          <Col xs={{offset: 2, span: 10}} md={{offset: 1, span: 12}}>
            <StaticImage className='my-4 mw-100 w-75' src='../../images/5across-banner.png'></StaticImage>
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
      <Container className={styles.experienceMore}>
        <Row>
          <Col xs={12} md={12}>
            <Title className='text-uppercase text-white text-center mt-4'>Experience even more</Title> 
          </Col>
        </Row>
        <Row>
          <Col xs={{offset: 2, span: 8}} md={{offset: 4, span: 12}}>
            <StaticImage className='my-4' src='../../images/5across-logo-white.png'></StaticImage>
          </Col>
        </Row>
        <Col xs={{offset: 2, span: 8}} md={{offset: 4, span: 3}}>
          <StaticImage className='my-2 ms-5' src='../../images/ainc_podcast_logo.png'></StaticImage>
          <p className={`mb-2 ms-3 text-center text-uppercase text-white ${styles.podcastText}`}>5 minute postgame recap</p>
          <StaticImage className='my-2 ms-5' src='../../images/middle-tech.png'></StaticImage>
          <p className={`mb-4 ms-3 text-center text-uppercase text-white ${styles.podcastText}`}>5 Across deep dive</p>
        </Col>
      </Container>
      <Container className={styles.becomeMentor}>
        <Col xs={12}>
          <Subtitle className='fw-bold my-5 brand text-center text-uppercase'>Become a startup mentor</Subtitle>
          <Row>
            <Col xs={{offset: 2, span: 10}} md={{offset: 4, span: 5}}>
              <BrandButton className={`secondary my-5 w-75 text-uppercase ${styles.buttons} `}>
                Fill out this google form to apply
              </BrandButton>  
            </Col>
          </Row>
          
        </Col>
      </Container>
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
  }
  allSanityFiveAcrossSponsors {
    nodes {
      presetingSponsorName
      presentingSponsorLink
      presentingSponsorImage {
        asset {
          gatsbyImageData
        }
      }
      titleSponsorName
      titleSponsorLink
      titleSponsorImage {
        asset {
          gatsbyImageData
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