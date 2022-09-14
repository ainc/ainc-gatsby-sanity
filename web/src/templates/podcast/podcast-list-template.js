import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout/Layout'
// import Diagonal from '../../components/Layout/Diagonal/Diagonal'
// import ButtonAndImage from '../../components/ButtonAndImage/ButtonAndImage'
// import ImageOutline from '../../components/ImageOutline/ImageOutline'
import { Container, Row, Col } from 'react-bootstrap'
// import { StaticImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
// import Subtitle from "/src/components/UI/Subtitle/Subtitle";
import * as styles from "./podcast.module.scss";
import '../../styles/main.scss'
import Podcast from "../../components/Podcast/Podcast";

const PodcastPage = ({pageContext, data }) => {
    const {currentPage, numPages} = pageContext

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    const totalPodcastCount = (data.allFeedAnchorPodcast.totalCount || {})
    const podcasts = (data.allFeedAnchorPodcast.nodes || {})

    return (
        <Layout>
            <Container className={styles.container}>
                <Col>
                    <Title className={styles.headingText}>Podcasts</Title>
                    {/* <h6 className="text-center mt-1 mb-5">{totalPodcastCount} Total Podcasts</h6> */}
                </Col>
            </Container>
            <Title className="h4"></Title>
            <Container className={`${styles.flexContainer}`}>
                {podcasts.map((node) => (
                    <div className={styles.flexItem}>
                        <Podcast
                            date={node.pubDate}
                            title={node.title}
                            creator={node.dc.creator}
                            img={node.itunes.image}
                            link={node.link}
                            summary={node.itunes.summary}
                        />
                    </div>
                ))}
                </Container>
            
            <h5 className='text-center mb-5 mt-5'>
            
                {!isFirst && (
                    <Link className={styles.pageNumber} to={`${prevPage == 1 ? "" : `/podcast/${prevPage}`}`} rel="prev">
                    ← Previous Page 
                    </Link>
                )}

                {Array.from({ length: numPages }, (_, i) => (
                    <Link className={styles.pageNumber} key={`pagination-number${i + 1}`} to={`/podcast/${i === 0 ? "" : i + 1}`} style={{
                        textDecoration: 'none',
                        color: i + 1 === currentPage ? '#323333' : '',
                      }}>
                    {i + 1}
                    </Link>
                    ))}

                {!isLast && (
                    <Link className={styles.pageNumber} to={`/podcast/${nextPage}`} rel="next">
                    Next Page →
                    </Link>
                )}
            </h5>
        </Layout>
    )
    
}

export const podcastInfo = graphql`
    query($skip: Int!, $limit: Int!){
      allFeedAnchorPodcast (
          sort: { fields: [isoDate], order: DESC }
          skip: $skip,
          limit: $limit
        ) {
        totalCount
        nodes {
          title
          pubDate
          link
          itunes {
            image
            episode
            summary
          }
          dc {
            creator
          }
        }
      }
  }`
  
export default PodcastPage;