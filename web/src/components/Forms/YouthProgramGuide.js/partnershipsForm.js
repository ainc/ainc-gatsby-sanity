import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import BrandButton from "../../../components/UI/BrandButton/BrandButton";

import * as styles from "./form.module.scss";

const PartnershipForm = (props) => {
  return (
    <Card className={`${styles.partnershipFormCard} me-5  p-0`}>
      <Form>
        <Container className={styles.partershipFormContainer}>
          <Row>
            <Col>
              <Form.Group className="pt-2 mb-2" constrolId="formFirstName">
                <Form.Control
                  size="lg"
                  className={styles.formText}
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="pt-2 mb-2" constrolId="formLastName">
                <Form.Control
                  size="lg"
                  className={styles.formText}
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-2" constrolId="formCompanyName">
                <Form.Control
                  size="lg"
                  className={styles.formText}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-4" constrolId="formInputEmail">
                <Form.Control
                  size="lg"
                  className={styles.formText}
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-4" constrolId="formInputAbout">
                  <Form.Control
                    as="textarea"
                    size="lg"
                    rows={6}
                    className={`${styles.formText} l-100`}
                    type="email"
                    placeholder="Tell us a bit more..."
                    required
                  />
            </Form.Group>
          </Row>
          <BrandButton className="mb-3 text-uppercase">Submit</BrandButton>
        </Container>
      </Form>
    </Card>
  );
};

export default PartnershipForm;
