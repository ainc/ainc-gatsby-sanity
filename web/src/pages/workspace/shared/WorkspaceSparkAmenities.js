import React from "react";
import { Row, Col } from "react-bootstrap";
import Amenities from "../../../components/Amenities/Amenities";
import { WORKSPACE_AMENITIES } from "../data/amenitiesData";
import WorkspaceSparkSection from "./WorkspaceSparkSection";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceSparkAmenities = () => (
  <WorkspaceSparkSection
    variant="muted"
    eyebrow="Everything Included"
    title="Membership Amenities"
    lead="The perks that come with being part of Awesome Inc Workspace."
  >
    <Row className={styles.amenitiesRow}>
      {WORKSPACE_AMENITIES.map((amenity) => (
        <Col md={6} lg={4} key={amenity.imgAlt}>
          <Amenities
            align="left"
            info={amenity.info}
            imgSrc={amenity.imgSrc}
            imgAlt={amenity.imgAlt}
          />
        </Col>
      ))}
    </Row>
  </WorkspaceSparkSection>
);

export default WorkspaceSparkAmenities;
