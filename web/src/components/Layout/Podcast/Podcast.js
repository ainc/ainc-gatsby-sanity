import * as React from "react";
import { Row, Col } from "react-bootstrap"
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";

import podcastLogo from "../../../images/ainc_podcast_logo@2x.png"

const Podcast = () => {
  return (
    <section>
        <Row className="w-100">
          <Col xs={6} sm={4}>
            <img className="d-block mx-auto my-5" src={podcastLogo} alt="Awesome Inc Podcast" />
          </Col>
          <Col xs={6} sm={8}>
            <Title className="text-uppercase py-5">
              Check out Awesome Inc's Podcast
            </Title>
            <Subtitle>
              Have a podcast? Record yours from our space!
            </Subtitle>
            <div className="py-5">
              <BrandButton className="mb-5">Reserve a time on our calendar</BrandButton>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default Podcast;