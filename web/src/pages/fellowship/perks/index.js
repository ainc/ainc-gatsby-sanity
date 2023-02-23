import * as React from 'react'
import Layout from '../../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../../components/UI/Title/Title'
import Subtitle from "../../../components/UI/Subtitle/Subtitle"
import BrandButton from "../../../components/UI/BrandButton/BrandButton"
import "../../../styles/main.scss"
import "./perks.scss";

const PerksPage = ({ data }) => {

    return(
        <Layout pageTitle="Fellowship Perks | Awesome Inc">
            <Container>
                <Title className="mt-5 text-center">FELLOWSHIP PERKS</Title>
                <section id="images">
                    <Row className="first-row-images">
                        <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
                            <img className="mentors-img mb-4" src="https://d33wubrfki0l68.cloudfront.net/f8e52b6a306006ecf110e19030bbe7e1007239b9/69fad/images/icons/mentors-black.png"/>
                            <h2 className="mb-5">Access to mentors</h2>
                        </Col>
                        <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
                            <img className="investors-img mb-4" src="https://d33wubrfki0l68.cloudfront.net/a01f35476ca25e846ad6b36cc3f77dc5b42292ee/2978f/images/icons/investors.png"/>
                            <h2 className="mb-5">Visibility to investors</h2>
                        </Col>
                        <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
                            <img className="workspace-img mb-4" src="https://d33wubrfki0l68.cloudfront.net/313bbc5bdcb555b038f8cda561a4e847a68ea632/6b9de/images/icons/workspace.png"/>
                            <h2 className="text-center mb-5">Access to Awesome Inc <br/> workspace</h2>
                        </Col>
                    </Row>
                    <Row className="second-row-images">
                        <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
                            <img className="access-img mb-4" src="https://d33wubrfki0l68.cloudfront.net/a1c310ad5eba959cc908d88a4487e1c3e1552a20/93db9/images/icons/tech-talent.png"/>
                            <h2 className="text-center mb-5">Access to Design, Development, <br/> and Video</h2>
                        </Col>
                        <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
                            <img className="pro-bono-img mb-4" src="https://d33wubrfki0l68.cloudfront.net/d9d676b193244f8a597b093058aaed074079f50a/25a19/images/icons/legal-accounting.png"/>
                            <h2 className="text-center mb-5">Pro Bono Legal & Accounting <br/> help</h2>
                        </Col>
                        <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
                            <img className="services-img mb-4" src="https://d33wubrfki0l68.cloudfront.net/26aafdf7e6eea4aea619e6bad38c6d0353b2218b/bd1bc/images/icons/retreat.png"/>
                            <h2 className="text-center mb-5">Pro Bono Financial modeling <br/> and CFO services</h2>
                        </Col>
                    </Row>
                </section>

                <div className="d-flex justify-content-center mb-5">
                    <BrandButton className="mb-5">Apply Now</BrandButton>
                </div>
            </Container>
        </Layout>
    )
  
}


export default PerksPage;