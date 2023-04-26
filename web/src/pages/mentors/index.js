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
                    <Row>
                        {allMentors.map((node) => (

                        <div className='col-4 my-2' key={node.id}>
                            <Profile
                                name={node.name}
                                position={node.occupation}
                                linkedin={node.linkedIn}
                                image={node.picture.asset.gatsbyImageData}
                             ></Profile>
                             </div>

                        ))}
                        </Row>
                </Container>
            </main>
        </Layout>
    )
}

export default MentorsPage;