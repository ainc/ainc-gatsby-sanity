import * as React from "react";
import { useState } from "react";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import ModalCustom from "../../Modal/ModalCustom";
import { Container, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import * as styles from ''

const Newsletter = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  return (
    <section style={{ backgroundColor: `#555`}}>
      <Title className="text-center text-uppercase text-white py-5">Sign up for Our Newsletter</Title>
      <div className="py-5">
        <BrandButton onClick={handleShow} className="d-block mx-auto mb-5">Sign Up</BrandButton>
      </div>
      <ModalCustom
                        lgShow={lgShow}
                        hide={handleClose}
                        bgDark={true}
                        title="Newsletter Signup"
                        content={
                            //Pass HTML here
                            <Container className='pt-0'>
                                <Form>
                                  
                                  <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="John" />
                                  </Form.Group>
                                  <Form.Group className=''>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Hancock" />
                                  </Form.Group>
                                  <Form.Group className=''>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="john@123.com" />
                                  </Form.Group>
                                  <Form.Group className='mb-1'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="(123)456-7890" />
                                  </Form.Group>
                                  <p>I'm interested in...</p>
                                  {[ 'checkbox' ].map((type) => (
                                    <div key={`${type}`}>
                                      <Form.Check 
                                      className=''
                                      type={type}
                                      id={`${type}`}
                                      label={`Startups & Entrepreneurship`} />
                                      <Form.Check 
                                      className=''
                                      type={type}
                                      id={`${type}`}
                                      label={"I'm in the corporate world and want to be more innovative!"}
                                      />
                                      <Form.Check 
                                      className=''
                                      type={type}
                                      id={`${type}`}
                                      label={"Coworking"}
                                      />
                                      <Form.Check 
                                      className=''
                                      type={type}
                                      id={`${type}`}
                                      label={"Adult Coding"}
                                      />
                                      <Form.Check 
                                      className=''
                                      type={type}
                                      id={`${type}`}
                                      label={"Youth Coding"}
                                      />
                                      <Form.Check 
                                      className=''
                                      type={type}
                                      id={`${type}`}
                                      label={"Other Adult Classes"}
                                      />
                                      <Form.Check 
                                      className=''
                                      type={type}
                                      id={`${type}`}
                                      label={"Custom software needs"}
                                      />
                                    </div>
                                  ))}
                                <Row>
                                    
                                </Row>
                                <Row>
                                    <BrandButton>Submit</BrandButton>
                                </Row>
                                </Form>
                            </Container>
                        }
                    />
    </section>
  )
}

export default Newsletter;