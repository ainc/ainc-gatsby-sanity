import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import IndiaLayout from '../../../components/IndiaLayout/IndiaLayout'
import * as styles from './faq.module.scss'

const IndiaFAQ = () => {
    return (
        <IndiaLayout>
            <Container>
                <Col className='mt-5' xl={{span: 10, offset: 1}}>
                    <Accordion className='mb-5 pb-4' >
                        <AccordionItem eventKey="0">
                            <Accordion.Header><Badge className=' my-3 me-2 rounded-circle' bg="danger" >1</Badge>Do you need a computer?</Accordion.Header>
                            <AccordionBody>
                                Yes, your child will need to bring a laptop computer to the courses. This will allow them to work on projects at home if they wish to as well.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="1">
                            <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >2</Badge>Is Food Provided?</AccordionHeader>
                            <AccordionBody>
                                Snacks and drinks will be provided but no meals will be provided. Students are also welcome to bring food if they wish
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="2">
                            <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >3</Badge>What is Awesome Inc?</AccordionHeader>
                            <AccordionBody>
                                We exist to create and grow high tech startups. We do this by hosting community events, leading technology education courses, and offering a shared workspace environment. 
                                We’re excited to launch our first international program in Bhopal as a starting point to foster innovation and creativity in India. <a className={styles.links} href='https://www.awesomeinc.org/'>Click here</a> for more information on our operations 
                                in the United States.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="3">
                            <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >4</Badge>Who is leading the coding programs in Bhopal?</AccordionHeader>
                            <AccordionBody>
                                <Link className={styles.links} href='https://www.awesomeinc.org/india/about'>Click here</Link> to meet the team.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="4">
                            <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >5</Badge>Are the coding programs in person?</AccordionHeader>
                            <AccordionBody>
                                Yes. We believe face to face, in person training and education provides accountability, focus and is more fun which leads to greater results for students.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="5">
                            <AccordionHeader><Badge className='my-3 me-2 rounded-circle' bg="danger" >6</Badge>What's the Cost?</AccordionHeader>
                            <AccordionBody>
                                Week of Code Program is 5000₹
                                <br/>
                                Coding Club Program (price coming soon)
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Col>
            </Container>
        </IndiaLayout>
    )
}

export default IndiaFAQ;