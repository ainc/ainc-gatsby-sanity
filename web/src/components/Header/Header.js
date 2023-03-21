import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components"
import { AiFillCaretDown } from "react-icons/ai";

import "./header.scss"
import { 
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col
} from 'react-bootstrap'

import { navbarBrand } from './Header.module.scss'


const Header = () => {
  const logo_height = 30;
  const logo_width = 200;

  return (
    <Navbar className="sticky-top navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className={navbarBrand}>
          <Link to="/">
            <StaticImage
              src="../../images/ainc-logo-horizontal-white-text.png"
              width={logo_width}
              // height={logo_height}
              className="img-responsive d-inline-block align-top"
              alt="Awesome Inc Logo"
              loading="eager"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Row className="d-flex flex-column flex-lg-row flex-nowrap align-items-center justify-content-around">
              <Col className="desktop">
                <Nav.Link href="/">Learn To Code  <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <Link to="/learn/youth">Youth Courses</Link>
                  <Link to="/learn/adults">Adult Courses</Link>
                  <Link to="/learn">Kids Camps</Link>
                  <Link to="/bootcamp">Bootcamp</Link>
                </div>
              </Col>
            
            {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Col xs="12" className='mobile'>
                <NavDropdown title="Learn to Code" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/learn/youth">Youth Courses</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/learn/adults">Adult Courses</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/learn">Kids Camps</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/bootcamp">Bootcamp</Link></NavDropdown.Item>
                </NavDropdown>
              </Col>
            {/* </Row>
            <Row> */}
              <Col className="desktop">
                <Nav.Link href="/">Startups <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <Link to="/idea">I Have an Idea</Link>
                  <Link to="/fellowship">Startup Accelerator</Link>
                  <Link to="/events/5across">5 Across</Link>
                  <a>Community Yearbook</a> {/*Need to add yearbooks and possibly other assets*/}
                </div>
              </Col>
              <Col xs="12" className="mobile">
                <NavDropdown title="Startups" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/idea">I Have an Idea</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/fellowship">Startup Accelerator</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/events/5across">5 Across</Link></NavDropdown.Item>
                  <NavDropdown.Item>Community Yearbook</NavDropdown.Item> {/*Need to add yearbooks and possibly other assets*/}
                </NavDropdown>
              </Col>
            {/* </Row>
            <Row> */}
              <Col className="desktop">
                <Nav.Link href="/">Workspace <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <a href="https://calendly.com/awesometour/30min?month=2023-03" target="_blank">Schedule a Tour</a>
                  <Link to="/workspace#become-a-member">Office Space</Link>
                  <Link to="/events">Events</Link>
                </div>
              </Col>
              <Col xs="12" className="mobile">
                <NavDropdown title="Workspace" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://calendly.com/awesometour/30min?month=2023-03" target="_blank">Schedule a Tour</NavDropdown.Item>
                  <NavDropdown.Item><Link to="/workspace#become-a-member">Office Space</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/events">Events</Link></NavDropdown.Item>
                </NavDropdown>
              </Col>
            {/* </Row>
            <Row> */}
              <Col className="desktop">
                <Nav.Link href="/">Web & App Development <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <a href="https://apaxsoftware.com/">Web & App Development</a>
                </div>
              </Col>
              <Col xs="12" className="mobile">
                <NavDropdown title="Web & App Development" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://apaxsoftware.com/">Web & App Development</NavDropdown.Item>
                </NavDropdown>
              </Col>
            {/* </Row>
            <Row> */}
              <Col className="desktop">
                <Nav.Link href="/">Be Awesome <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                <NavDropdown.Item><Link to="/about">About</Link></NavDropdown.Item>
                  <Link to="/about">Core Values</Link>
                  <Link to="/blog/">Blog</Link>
                  <Link to="/press">Press</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/internships">Internships</Link>
                  <Link to="/events">Events</Link>
                </div>
              </Col>
              <Col xs="12" className="mobile">
                <NavDropdown title="Be Awesome" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/about">About</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/about">Core Values</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/blog/">Blog</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/press">Press</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/careers">Careers</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/internships">Internships</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/events">Events</Link></NavDropdown.Item>
                </NavDropdown>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
