import React from 'react';
import BrandButton from '../../../../components/UI/BrandButton/BrandButton';
import { Container, Row, Col, Button } from "react-bootstrap";
import * as styles from './MobileNavigation.module.css';

const MobileNavigation = () => {
  return (
    <>  
    <Container className="d-lg-none d-flex justify-content-center align-items-center">
        <Row>
            <Col>
                <Button className={styles.navButton}>Jump To</Button>
            </Col>
            <Col>
                <Button href="/bootcamp/apply" className={styles.navButton}>Apply Now</Button>
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default MobileNavigation;
