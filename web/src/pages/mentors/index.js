import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/UI/Title/Title'
import SEO from '../../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby';
import Profile from '../../components/Profile/Profile'

export const query = graphql`
query MentorsPageQuery {
    allSanityMentor {
      nodes {
        linkedIn
        name
        occupation
        picture {
          asset {
            gatsbyImageData(width: 300, layout: CONSTRAINED, aspectRatio: 1)
          }
        }
      }
    }
  }  
  `;


const MentorsPage = ({ data }) => {
    // console.log(data.allSanityMentor.nodes)

  const allMentors = (data.allSanityMentor.nodes || {})
    
  return (
    <Layout>
      <SEO />
        <main>
          <Container>
            <Row>
              <Col>
                <Title className='text-center mt-3 mb-5'>Mentors</Title>
              </Col>
            </Row>
          </Container>
          <Container className=''>
            <div className='row justify-content-center'>
              {allMentors.map((node) => (
                
                <Col sm={10} md={5} lg={4} xl={3} className='mb-3' key={node.id}>

                  <Profile
                    name={node.name}
                    occupation={node.occupation}
                    linkedin={node.linkedIn}
                    image={node.picture.asset.gatsbyImageData}
                  />
                </Col>
              ))}
            </div>
          </Container>
      </main>
    </Layout>
  )
}

export default MentorsPage;