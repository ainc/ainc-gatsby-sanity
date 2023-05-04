import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/UI/Title/Title'
import { graphql, Link } from 'gatsby'
import SEO from '../../components/seo'
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
      <SEO />
      <main>
        <Container>
          <Row>
            <Title className='text-center mt-3 mb-5 text-uppercase'>Team Alpha</Title>
            <Col>
              <Link className='d-flex justify-content-center' to='/internships#apply'>
                <BrandButton className='mb-5'>Apply Now</BrandButton>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className='justify-content-center'>
            {allTeamAlpha.map((node) => (
              <Col xs={12} sm={10} md={6} lg={4} xl={4} xxl={3} className='my-2'>
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
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default TeamAlphaPage;