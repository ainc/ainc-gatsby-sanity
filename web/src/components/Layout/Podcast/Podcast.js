import * as React from "react";
import { Row, Col } from "react-bootstrap"
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import "../../../styles/main.scss"
import podcastLogo from "../../../images/ainc_podcast_logo@2x.png"


const Podcast = () => {
  return (
    <section>
      <Row className="mx-auto" >
        <Col className='my-3' xs={5} md={3} lg={3}>
          <img className="ms-3" src={podcastLogo} alt="Awesome Inc Podcast" />
        </Col>
        <Col xs={12} md={{ offset: 1, span: 7 }} lg={7} xl={7}>
          <Title className="fw-normal text-center pt-3 pb-3">
            Check out <a href='https://podcasters.spotify.com/pod/show/awesomeinc' className='link--brand'> Awesome Inc's Podcast</a>
          </Title>
          <Subtitle className='text-center fw-bold'>
            Have a podcast? Record yours from our space!
          </Subtitle>
          <a href="https://calendly.com/ainc-recording" target="_blank" rel="noopener noreferrer" className='d-flex justify-content-center' >
            <BrandButton className="my-5 mb-5">Reserve a time on our calendar</BrandButton>
          </a>
        </Col>
      </Row>
    </section>
  )
}

export default Podcast;