import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import * as styles from "../../pages/about/about.module.css";
import SocialMediaPhone from "../../images/social-media-phone.gif";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subtitle from "/src/components/UI/Subtitle/Subtitle";

const SocialMedia = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <Row>
              <Col
                sm={6}
                className={`d-flex justify-content-center justify-content-md-end col-xs-12`}
              >
                <Image
                  src={SocialMediaPhone}
                  className={`${styles.imgResponsive}`}
                  alt="Social media phone gif"
                />
              </Col>
              <Col
                sm={6}
                className={` d-flex justify-content-center justify-content-md-start ${styles.socialRight} col-xs-12 `}
              >
                <div>
                  <Subtitle className={`text-wrap text-center fw-bold`}>Let's Be Friends!</Subtitle>
                  <h5 className={styles.headingSubtitle}> - Find us on social media - </h5>
                  <ul className={styles.socialLinks}>
                    <li>
                      <a href="https://twitter.com/awesomeinclex">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/awesomeinclex">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/school/awesome-inc/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/awesomeinclex/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/user/AincTelevision/featured">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SocialMedia;
