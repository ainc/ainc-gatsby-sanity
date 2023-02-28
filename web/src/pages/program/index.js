import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../../components/UI/Title/Title'
import Layout from "../../components/Layout/Layout";
import { Link, useStaticQuery, graphql } from 'gatsby'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
// import { styles } from '../../styles/Variables'
import * as styles from '../program/program.module.css'
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
            <Col xs={{ offset: 0, span: 8 }}>
              <GatsbyImage image={titleSponsorImage}></GatsbyImage>
            </Col>
            <Col xs={{ offset: 4, span: 8 }} className=''>
              <GatsbyImage image={presentingSponsorImage}></GatsbyImage>
            </Col>
          </Row>
        </Col>
      </Container>
      <Container className={styles.details}>
        <Col>
          <Row>
            <Subtitle className='text-uppercase mt-3'>Tonight's Details</Subtitle>
          </Row>
          <Row>
            <Col xs={6} className=''>
              <BrandButton xs={6} className="secondary my-1 w-100">VOTE ON RAADZ</BrandButton>
              <BrandButton xs={6} className="secondary w-100">JUDGES</BrandButton>
              <BrandButton xs={6} className="secondary my-1 w-100">PODCASTS</BrandButton>
              <BrandButton xs={6} className="secondary w-100 text-uppercase mb-2">free ticket for next 5 across</BrandButton>
            </Col>
            <Col xs={6} className=''>
              <BrandButton xs={6} className="secondary my-1 w-100">TEAMS</BrandButton>
              <BrandButton xs={6} className="secondary w-100">SPONSORS</BrandButton>
              <BrandButton xs={6} className="secondary my-1 w-100">BECOME A MENTOR</BrandButton>
              <BrandButton xs={6} className="secondary w-100 text-uppercase">startup pipeline</BrandButton>
            </Col>
          </Row>
          <Row xs={12}>
            <Col xs={{ offset: 0, span: 12 }}>
              <BrandButton className="secondary mb-1 w-100">MORE ABOUT AWESOME INC</BrandButton>
            </Col>
          </Row>
        </Col>
      </Container>
      <Container className={styles.tonightsTeams}>
        <Subtitle className='text-center text-uppercase'>Tonight's Teams</Subtitle>
        <Col>
          {teams.map((team) => (
            <Row>
              <ul>
                <GatsbyImage image={team.image.asset.gatsbyImageData} alt={team.alt} />
                <h1>{team.title}</h1>
              </ul>
            </Row>
          ))}
        </Col>
      </Container>
      <Container className={styles.tonightsJudges}>
        <Subtitle className='text-center text-uppercase text-white my-5'>Tonight's Judges</Subtitle>
        {/* TODO: Create this section similarly to how we did the team's section */}
        <Col xs={6}>

        </Col>
        <Col xs={6}>

        </Col>
      </Container>
      <Container className={styles.sponsors}>
        <Row>
          <Col xs={{ offset: 2, span: 10 }}>
            <StaticImage className='my-2 mw-100 w-75' src='../../images/5across-banner.png'></StaticImage>
          </Col>
        </Row>
        <Row>
          <Subtitle className='text-uppercase text-center'>Thanks it's sponsors</Subtitle>
        </Row>
        <Row>
          <Col xs={7} className="my-1">
            <a href={titleSponsorLink}>
              <GatsbyImage image={titleSponsorImage} alt={titleSponsorName} />
            </a>
          </Col>
          <Col xs={5} className="mt-4">
            <a href={presentingSponsorLink}>
              <GatsbyImage image={presentingSponsorImage} alt={presentingSponsorName} />
            </a>
          </Col>
        </Row>
        <Row className={styles.supportSponsors}>
          <Row>
            {suppourtingSponsors.map((sponsor) => (
              <Row xs={{ offset: 3, span: 5 }} className="my-3">
                <a href={sponsor.link}>
                  <GatsbyImage image={sponsor.image.asset.gatsbyImageData} alt={sponsor.alt} />
                </a>
              </Row>

            ))}
          </Row>
        </Row>
      </Container>
      <Container className={styles.experienceMore}>

      </Container>
      <Container className={styles.becomeMentor}>

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
      image {
        asset {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      title
      alt
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