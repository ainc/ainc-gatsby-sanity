import * as React from 'react'
import Layout from '../../../components/Layout/Layout'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../../components/UI/Title/Title'
import BrandButton from "../../../components/UI/BrandButton/BrandButton"
import "../../../styles/main.scss"
import FellowshipCompanyCard from '../../../components/FellowshipCompanyCard/FellowshipCompanyCard'

const PortfolioPage = ({ data }) => {

    const allFellowshipPortfolio = (data.allSanityFellowshipPortfolio.nodes)

    return(
        <Layout>
            <Row className="col-sm-10 mx-auto">
            <Container>
                <Row className='text-center text-uppercase my-5'>
                    <Title>Fellowship Portfolio</Title>
                </Row>
            </Container>
            <Container>
                <Row className='d-inline h6 mx-1'>
                    <Link to='#' className='link--red text--grey px-0'>HOME</Link>
                    <h6 className='d-inline px-2'>/</h6>
                    <Link to='/fellowship' className='link--red text--grey px-0'>FELLOWSHIP</Link>
                    <h6 className='d-inline px-2'>/</h6>
                    <h6 className='d-inline px-0 text--red'>PORTFOLIO</h6>
                    
                </Row>
                <Row>
                    <BrandButton className='col-md-auto px-4 mb-2'>
                        Apply Now
                    </BrandButton>
                </Row>
                <Row>
                    <BrandButton className='col-md-auto px-4 mb-5'>
                        Perks
                    </BrandButton>
                </Row>
            </Container>
            
            <Container>
                <Row className={`px-2 pb-5`}>
                        {allFellowshipPortfolio.map((node) => (
                            <Col sm="4" className='mb-4'> {/*TODO: Fix responsiveness*/}
                                <FellowshipCompanyCard
                                    name={node.companyName}
                                    date={node.year}
                                    url={node.companyURL}
                                    image={node._rawFellowshipImage.asset.url}
                                    description={node.description}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>

            <Container>
                <Row>
                    <BrandButton className='col-md-auto px-4 mb-2'>
                        Apply Now
                    </BrandButton>
                </Row>
                <Row>
                    <BrandButton className='col-md-auto px-4 mb-5'>
                        Perks
                    </BrandButton>
                </Row>
            </Container>
            </Row>
        </Layout>
    )

    
}
// fit: MAX
export const query = graphql`
    query {
        allSanityFellowshipPortfolio {
        nodes {
            year
            companyName
            companyURL
            description
            _rawFellowshipImage(resolveReferences: {maxDepth: 10})
            }
        
        }
    }
  
`



export default PortfolioPage;