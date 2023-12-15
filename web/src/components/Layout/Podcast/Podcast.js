import * as React from "react";
import { Row, Col } from "react-bootstrap"

import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import Title from "../../../components/UI/Title/Title";

import podcastLogo from "../../../images/ainc_podcast_logo@2x.png"

import "../../../styles/main.scss"

const Podcast = () => {
  return (
    <section>
      <Row className="mx-auto mt-4 mb-4">
        <Col className='my-3' xs={11} md={5} lg={4} >
          <img className="" src={podcastLogo} alt="Awesome Inc Podcast" style={{float: 'right'}} />
        </Col>
        <Col xs={12} md={7} lg={7} xl={5}>
          <Title className="fw-bold text-center pt-5 pb-5 text--big">
            Check out <a href='https://podcasters.spotify.com/pod/show/awesomeinc' className='link--brand'> Awesome Inc's Podcast!</a>
          </Title>
          <Subtitle className='text-center fw-bold'>
            Have a podcast? Record yours from our space!
          </Subtitle>
          <a className='d-flex justify-content-center' href="https://calendly.com/ainc-recording" target="_blank" rel="noopener">
            <BrandButton className="mt-3 mb-5">Reserve a time on our calendar</BrandButton>
          </a>
        </Col>
      </Row>
    </section>
  )
}

export default Podcast;