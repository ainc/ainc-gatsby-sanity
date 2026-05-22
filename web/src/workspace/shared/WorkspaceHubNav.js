import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { WORKSPACE_PAGES } from "../constants/ctaPlaceholders";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceHubNav = () => (
  <section className={styles.section}>
    <Container>
      <h2 className={styles.sectionTitle}>Explore Our Workspace</h2>
      <p className={styles.sectionLead}>
        Coworking, private offices, meeting rooms, and event space — all in
        downtown Lexington at Awesome Inc.
      </p>
      <Row className={`g-4 ${styles.hubGrid}`}>
        {WORKSPACE_PAGES.map((page) => (
          <Col key={page.path} xs={12} sm={6} lg={3}>
            <Link to={page.path} className={styles.hubCard}>
              <h3 className={styles.hubCardTitle}>{page.title}</h3>
              <p className={styles.hubCardText}>{page.description}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default WorkspaceHubNav;
