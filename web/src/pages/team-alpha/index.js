import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/UI/Title/Title'
import {graphql} from 'gatsby'
import Profile from '../../components/Profile/Profile'
import BrandButton from '../../components/UI/BrandButton/BrandButton';

export const query = graphql`
query TeamAlphaPageQuery {
    allSanityTeamAlpha {
      nodes {
        name
        favoritePerson
        favoriteRule
        favoriteSong
        randomFact
        role
        picture {
          asset {
            gatsbyImageData(width: 300, layout: CONSTRAINED, aspectRatio: 1)
          }
        }
      }
    }
  }`;

  const TeamAlphaPage = ({ data }) => {
    const allTeamAlpha = (data.allSanityTeamAlpha.nodes || {})

    return (
        <Layout>
            <main>
                <Container>
                <Row>
                    <Title className='text-center mt-3 mb-5 text-uppercase'>Team Alpha</Title>
                    <Col>
                    <a className='d-flex justify-content-center' href='https://www.awesomeinc.org/internships#apply'>
                    <BrandButton className='col-3 mb-5'>Apply Now</BrandButton></a>
                    </Col>
                </Row>
                </Container>
                <Container className=''>
                <div className='row justify-content-center'>
                        {allTeamAlpha.map((node) => (
                            
                        <div className='col-sm-10 col-md-5 col-lg-4 col-xl-3 mb-3' key={node.id}>
                          {/* <Col xs={12} sm={10} md={5} lg={5} xl={5} className='row justify-content-center'> */}
                      
                            <Profile
                                variant="two"
                                name={node.name}
                                occupation={node.role}
                                fact={node.randomFact}
                                rule={node.favoriteRule}
                                song={node.favoriteSong}
                                favoritePerson={node.favoritePerson}
                                image={node.picture.asset.gatsbyImageData}
                             ></Profile>
                            
                             {/* </Col> */}
                             </div>
                             

                        ))}
                        </div>
                </Container>
            </main>
        </Layout>
    )
  }

export default TeamAlphaPage;