import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Amenities from "../../../components/Amenities/Amenities";
import { WORKSPACE_AMENITIES } from "../data/amenitiesData";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceAmenitiesSection = () => (
  <section className={styles.amenitiesSection}>
    <Container fluid>
      <h2 className={styles.amenitiesTitle}>Membership Amenities</h2>
      <Row>
        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 9, offset: 2 }}>
          <Row>
            {WORKSPACE_AMENITIES.map((amenity) => (
              <Col md={6} sm={12} key={amenity.imgAlt}>
                <Amenities
                  info={amenity.info}
                  imgSrc={amenity.imgSrc}
                  imgAlt={amenity.imgAlt}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default WorkspaceAmenitiesSection;
