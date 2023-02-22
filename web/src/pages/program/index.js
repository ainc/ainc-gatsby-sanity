import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../../components/UI/Title/Title'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
// import { styles } from '../../styles/Variables'
import * as styles from '../program/program.module.css'

const ProgramPage = ({data}) => {
    const allProgram = (data.allSanityProgram.nodes || {});
    const allSanityFiveAcrossSponsors = (data.allSanityFiveAcrossSponsors.nodes || {});
    const titleSponsorName = (data.allSanityFiveAcrossSponsors.nodes[0].titleSponsorName || {});
    const titleSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[0].titleSponsorLink || {});
    const titleSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[0].titleSponsorImage.asset.gatsbyImageData || {});

    const presentingSponsorName = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSponsorName || {});
    const presentingSponsorLink = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSponsorLink || {});
    const presentingSponsorImage = (data.allSanityFiveAcrossSponsors.nodes[0].presentingSponsorImage.asset.gatsbyImageData || {});

    const suppourtingSponsors = (data.allSanityFiveAcrossSponsors.nodes[0].suppourtingSponsors || {});


    return (
        <Container fluid className={styles.mainHeading}>
            <Col>
            <Row>
                <Title className='text-uppercase text-center text-white mt-5'>Welcome to</Title>
                </Row>
                <Row>
                  <Col sm='10' md='10' lg='6' className='offset-sm-3'>
                <StaticImage className='my-5 mw-100' src='../../images/5across-banner.png'></StaticImage>
                </Col>
            </Row>
            <Row>
            <ul>
                                {allProgram.map((node) => (
                                
                                   <Subtitle className='text-center'>    {node.date} </Subtitle>
                                  
                                ))}                        
                            </ul>
            </Row>
            <Row>
            <Col xs={3} sm={{ offset: 2, span: 3 }} md={6} lg={6}>
            <GatsbyImage image={titleSponsorImage}></GatsbyImage>
            </Col>
            <Col xs={3} sm={{ offset: 6, span: 3 }} md={6} lg={6}>
            <GatsbyImage image={presentingSponsorImage}></GatsbyImage>
            </Col>
            </Row>
            </Col>
        </Container>
    )
};

export const query_program = graphql `
query query_program {
  allSanityProgram {
    nodes {
      date(formatString: "MMMM D, YYYY")
      teams {
        image {
          _key
          _type
          _rawAsset
          _rawHotspot
          _rawCrop
        }
        title
      }
      judges {
        image {
          _key
          _type
          _rawAsset
          _rawHotspot
          _rawCrop
        }
        title
      }
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