import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle"
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import * as styles from './parking.module.css'

const ParkingPage = ({ data }) => {

    return (
        <Layout>
            <main>
             <Container>
                <Col xs={12} lg={{offset: 3, span: 6}}>
                <Row>
                <Title className='text-uppercase text-center text-black mt-3 mb-5'>Parking</Title>
                <p className='text-center text-black'>After 5pm, free parking spaces are widely available downtown. However, during the day, it helps to be strategic. Here's a map and some general guidelines for parking near Awesome Inc.</p>
                </Row>
                <Row>
                    <Col xs={{offset:3, span: 11}} lg={12}>
                <BrandButton className='w-50 mb-2'>Parking map</BrandButton>
                </Col>
                <Col>
                <StaticImage className='mb-4' src='../../images/parking-lot.png' alt='awesome inc parking lot'></StaticImage>
                </Col>
                </Row>
                </Col>
             </Container>
             <Container>
        
                <Col xs={12} lg={{offset: 3, span: 6}}>
                <Subtitle className={`  ${styles.park}`}>Do Park</Subtitle>
                <li className={` ps-3 ${styles.list}`}>Spaces marked for Awesome Inc in the lot East of our building</li>
                <li className={` ps-3 ${styles.list}`}>Free 2-hour parking spaces along East Vine Street</li>
                <li className={` ps-3 ${styles.list}`}>Free full-day spaces on Short Street near Thoroughbred Park and Ransom Ave near Second Presbyterian church</li>
                <li className={` ps-3 ${styles.list}`}>Deweese Street (PNC Bank) Parking Garage, ~$4/day</li>
                <li className={` ps-3 ${styles.list}`}>Metered spaces on Water Street, Main Street, or Eastern Avenue</li>
                </Col>
            
            
                    <Col xs={12} lg={{offset: 3, span: 6}} className='pb-3'>
                    <Subtitle className={` pt-2 ${styles.park}`}>Do Not Park</Subtitle>
                    <li className={` ps-3 ${styles.list}`}>Spaces marked for Carson's Restaurant or PPG Paints (East side of building)</li>
                    <li className={` ps-3 ${styles.list}`}>Spaces marked for Commerce Lexington, Northwestern Mutual, Tate/Hill/Jacobs Architects, or Awesome Inc Directors (West side of building)</li>
                    <li className={` ps-3 ${styles.list}`}>Spaces in the Main and Vine retail / residential complex</li>
                    <li className={` ps-3 ${styles.list}`}>In the "Loading Zone" on Main Street, directly in front of Awesome Inc</li>
                    </Col>
                
             </Container>

            </main>
        </Layout>
    )
}
export default ParkingPage;