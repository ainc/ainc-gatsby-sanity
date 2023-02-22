import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../../components/UI/Title/Title'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Subtitle from '../../components/UI/Subtitle/Subtitle'

const ProgramPage = ({data}) => {
    const allProgram = (data.allSanityProgram.nodes || {});
    const allSanityFiveAcrossSponsors = (data.allSanityFiveAcrossSponsors.nodes || {}); 


    return (
        <Container>
            <Col>
            <Row>
                <Title className='text-uppercase text-center text-white'>Welcome to</Title>
                </Row>
                <Row>
                <StaticImage src='../../images/5across-banner.png'></StaticImage>
            </Row>
            <Row>
            <ul>
                                {allProgram.map((node) => (
                                
                                   <Subtitle className='text-center'>    {node.date} </Subtitle>
                                  
                                ))}                        
                            </ul>
            </Row>
            <Col>
            <GatsbyImage image={titleSponsorImage}></GatsbyImage>
            </Col>
            <Col>
            
            </Col>
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