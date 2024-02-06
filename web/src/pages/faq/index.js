import * as React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap'

import Accordion from 'react-bootstrap/Accordion'
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from  'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

import Layout from '../../components/Layout/Layout'
import Title from '../../components/UI/Title/Title'

const FAQPage = () => {
    return (
        <Layout>
                <Container>
                    <Row>
                        <Title className='text-center text-uppercase my-3'>Frequently asked questions</Title>
                    </Row>
                    <Col className='mt-5' lg={{span: 8, offset: 2}} xl={{span: 8, offset: 2}}>
                        <Accordion className='mb-5 pb-4' >
                            <AccordionItem eventKey="0">
                                <Accordion.Header><Badge className=' my-3 me-2 rounded-circle' bg="danger" >1</Badge><h2 className='fs-6'>What is Lorem Ipsum?</h2></Accordion.Header>
                                <AccordionBody>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="1">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >2</Badge><h2 className='fs-6'>Where does it come from?</h2></AccordionHeader>
                                <AccordionBody>
                                    Snacks and drinks will be provided but no meals will be provided. Students are also welcome to bring food if they wish
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="2">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >3</Badge><h2 className='fs-6'>Why do we use it?</h2></AccordionHeader>
                                <AccordionBody>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="3">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >4</Badge><h2 className='fs-6'>Where can I get some?</h2></AccordionHeader>
                                <AccordionBody>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="4">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >5</Badge><h2 className='fs-6'>What is Lorem Ipsum?</h2></AccordionHeader>
                                <AccordionBody>
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="5">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >6</Badge><h2 className='fs-6'>Where does it come from?</h2></AccordionHeader>
                                <AccordionBody>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="6">
                                <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >7</Badge><h2 className='fs-6'>Why do we use it?</h2></AccordionHeader>
                                <AccordionBody>
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </Col>
                </Container>
        </Layout>
    )
}

export default FAQPage;
