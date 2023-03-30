import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components"
import { AiFillCaretDown } from "react-icons/ai";

import "./header.scss"
import "../../styles/main.scss"
import { 
  Navbar,
  Nav,
  NavDropdown,
  DropdownButton,
  Container,
  Row,
  Col
} from 'react-bootstrap'

import { navbarBrand } from './Header.module.scss'


const Header = () => {

  const [active, setActive] = React.useState("")
  const [open, setOpen] = React.useState(false)

  function handleClick(activeValue) {
    
    if(active === activeValue){
      setOpen(!open)
      return
    }
    if(open === false) {
      setOpen(!open)
    }
    // setOpen(!open)
    setActive(activeValue)
    // setOpen(!open)
  }


  React.useEffect(() => {
    const navbar_selected = window.localStorage.getItem('navbar_selected');
    const open_selected = window.localStorage.getItem('open');
    setActive(JSON.parse(navbar_selected !== null ? navbar_selected : ''));
    setOpen(JSON.parse(open_selected !== null ? open_selected : false)); 
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('navbar_selected', JSON.stringify(active));
    window.localStorage.setItem('open', JSON.stringify(open));
  }, [active, open]);
  console.log(active, open)

  return (
    <Navbar className="sticky-top navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className={navbarBrand}>
          <Link to="/">
            <StaticImage
              src="../../images/ainc-logo-horizontal-white-text.png"
              width={200}
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
                  <Link to="/learn/youth" className='pt-0'>Youth Courses</Link>
                  <Link to="/learn/adults">Adult Courses</Link>
                  <Link to="/learn">Kids Camps</Link>
                  <Link to="/bootcamp">Bootcamp</Link>
                </div>
              </Col>
            
              
              <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 px-2 px-2'>
                <Col xs="12" className="d-flex ">
                  <Col xs="9" className="mobile d-flex align-items-center text-white">
                    <Link href="/learn">Learn to Code</Link>
                  </Col>
                  <Col xs="3" className="d-sm-none d-flex text-white button p-2 justify-content-center">
                    <button className='w-75 h-100 my-auto bg-transparent border border-1 border-primary rounded-2' onClick={() => handleClick("Learn to Code")}>
                        +
                    </button>
                  </Col>
                </Col>

                <Col xs={{span: 10, offset: 1}} className={`${active === "Learn to Code" && open === true ? "d-flex flex-column" : "d-none"} pb-2`}>
                  <Link to="/learn/youth">Youth Courses</Link>
                  <Link to="/learn/adults">Adult Courses</Link>
                  <Link to="/learn">Kids Camps</Link>
                  <Link to="/bootcamp">Bootcamp</Link>
                </Col>
              </Row>


              <Col className="desktop">
                <Nav.Link href="/">Startups <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <Link to="/idea" className='pt-0'>I Have an Idea</Link>
                  <Link to="/fellowship">Startup Accelerator</Link>
                  <Link to="/events/5across">5 Across</Link>
                  <a>Community Yearbook</a> {/*Need to add yearbooks and possibly other assets*/}
                </div>
              </Col>

              <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 px-2'>
                <Col xs="12" className="d-flex">
                  <Col xs="9" className="mobile d-flex align-items-center text-white">
                    <Link href="/about">Startups</Link>
                  </Col>
                  <Col xs="3" className="d-sm-none d-flex text-white button p-2 justify-content-center">
                    <button className='w-75 h-100 my-auto bg-transparent border border-1 border-primary rounded-2' onClick={() => handleClick("Startups")}>
                        +
                    </button>
                  </Col>
                </Col>

                <Col xs={{span: 10, offset: 1}} className={`${active === "Startups" && open === true ? "d-flex flex-column" : "d-none"} pb-2`}>
                  <Link to="/idea">I Have an Idea</Link>
                  <Link to="/fellowship">Startup Accelerator</Link>
                  <Link to="/events/5across">5 Across</Link>
                  <Link to="#">Community Yearbook</Link> {/*Need to add yearbooks and possibly other assets*/}
                </Col>
              </Row>

              <Col className="desktop">
                <Nav.Link href="/">Workspace <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <a href="https://calendly.com/awesometour/30min?month=2023-03" target="_blank" className='pt-0'>Schedule a Tour</a>
                  <Link to="/workspace#become-a-member">Office Space</Link>
                  <Link to="/events">Events</Link>
                </div>
              </Col>

              <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 px-2'>
                <Col xs="12" className="d-flex">
                  <Col xs="9" className="mobile d-flex align-items-center text-white">
                    <Link href="/wrokspace">Workspace</Link>
                  </Col>
                  <Col xs="3" className="d-sm-none d-flex text-white button p-2 justify-content-center">
                    <button className='w-75 h-100 my-auto bg-transparent border border-1 border-primary rounded-2' onClick={() => handleClick("Workspace")}>
                        +
                    </button>
                  </Col>
                </Col>

                <Col xs={{span: 10, offset: 1}} className={`${active === "Workspace" && open === true ? "d-flex flex-column" : "d-none"} pb-2`}>
                  <a href="/https://calendly.com/awesometour/30min?month=2023-03" target="_blank">Schedule a Tour</a>
                  <Link to="/workspace#become-a-member">Office Space</Link>
                  <Link to="/events">Events</Link>
                  <Link to="#">Community Yearbook</Link> {/*Need to add yearbooks and possibly other assets*/}
                </Col>
              </Row>

              {/* <Col xs="12" className="mobile" show={active === "Workspace"} onClick={() => {active === "Workspace" ? setActive("") : setActive("Workspace")}}>
                <NavDropdown title="Workspace" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://calendly.com/awesometour/30min?month=2023-03" target="_blank">Schedule a Tour</NavDropdown.Item>
                  <NavDropdown.Item><Link to="/workspace#become-a-member">Office Space</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/events">Events</Link></NavDropdown.Item>
                </NavDropdown>
              </Col> */}

              <Col className="desktop">
                <Nav.Link href="/">Web & App Development <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <a href="https://apaxsoftware.com/" className='pt-0'>Apax Software</a>
                </div>
              </Col>

              <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 px-2'>
                <Col xs="12" className="d-flex">
                  <Col xs="9" className="mobile d-flex align-items-center text-white">
                    <a href="/https://apaxsoftware.com/" target="_blank">Web & App Development</a>
                  </Col>
                  <Col xs="3" className="d-sm-none d-flex text-white button p-2 justify-content-center">
                    <button className='w-75 h-100 my-auto bg-transparent border border-1 border-primary rounded-2' onClick={() => handleClick("Web & App Development")}>
                        +
                    </button>
                  </Col>
                </Col>

                <Col xs={{span: 10, offset: 1}} className={`${active === "Web & App Development" && open === true ? "d-flex flex-column" : "d-none"} pb-2`}>
                  <a href="/https://apaxsoftware.com/" target="_blank">Web & App Development</a>
                </Col>
              </Row>

              <Col className="desktop">
                <Nav.Link href="/">Be Awesome <AiFillCaretDown size={10}/></Nav.Link>
                <div className='hover-options'>
                  <Link to="/about" className='pt-0'>About</Link>
                  <Link to="/about">Core Values</Link>
                  <Link to="/blog/">Blog</Link>
                  <Link to="/press">Press</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/internships">Internships</Link>
                  <Link to="/events">Events</Link>
                </div>
              </Col>

              <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 px-2'>
                <Col xs="12" className="d-flex">
                  <Col xs="9" className="mobile d-flex align-items-center text-white">
                    <Link to="/about">Be Awesome</Link>
                  </Col>
                  <Col xs="3" className="d-sm-none d-flex text-white button p-2 justify-content-center">
                    <button className='w-75 h-100 my-auto bg-transparent border border-1 border-primary rounded-2' onClick={() => handleClick("Be Awesome")}>
                        +
                    </button>
                  </Col>
                </Col>
                
                <Col xs={{span: 10, offset: 1}} className={`${active === "Be Awesome" && open === true ? "d-flex flex-column" : "d-none"} pb-2`}>
                  <Link to="/about">About</Link>
                  <Link to="/about">Core Values</Link>
                  <Link to="/blog/">Blog</Link>
                  <Link to="/press">Press</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/internships">Internships</Link>
                  <Link to="/events">Events</Link>
                </Col>
              </Row>

            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
