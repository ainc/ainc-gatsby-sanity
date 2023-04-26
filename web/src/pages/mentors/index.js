import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/UI/Title/Title'
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
            <main>
                <Container>
                <Row>
                    <Title className='text-center mt-3 mb-5'>Mentors</Title>
                </Row>
                </Container>
                <Container className=''>
                <div className='row justify-content-center'>
                        {allMentors.map((node) => (
                            
                        <div className='col-4 mb-3' key={node.id}>
                            <Profile
                                name={node.name}
                                occupation={node.occupation}
                                linkedin={node.linkedIn}
                                image={node.picture.asset.gatsbyImageData}
                             ></Profile>
                             </div>
                             

                        ))}
                        </div>
                </Container>
            </main>
        </Layout>
    )
}

export default MentorsPage;