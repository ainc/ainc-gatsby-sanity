import React, {useEffect} from 'react';
import BrandButton from '../../../../components/UI/BrandButton/BrandButton';
import { Container, Row, Col, Button } from "react-bootstrap";
import * as styles from './MobileNavigation.module.scss';
import { AiFillCaretDown } from "react-icons/ai";

const MobileNavigation = () => {
    useEffect(() => {
      const handleScroll = () => {
          const bootcampSection = document.getElementById('two-buttons');
          const buttonNav = document.querySelector(`.${styles.navButton}`);
          
          // Get the position of the bootcamp section relative to the viewport
          const bootcampSectionPosition = bootcampSection.getBoundingClientRect().top;

          // If the bootcamp section is in the viewport
          if (bootcampSectionPosition < window.innerHeight) {
              // Show the button nav
              buttonNav.classList.add(styles.show);
          } else {
              // Hide the button nav
              buttonNav.classList.remove(styles.show);
          }
      };

      // Attach scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup function
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <>  
    <Container className={`${styles.navButton} d-lg-none`}>
      <Row className='d-flex justify-content-center align-items-center text-center'>
        <Col>
          <BrandButton>Jump To <AiFillCaretDown size={12} /></BrandButton>
        </Col>
        <Col>
          <BrandButton href="#apply">Apply Now</BrandButton>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default MobileNavigation;
