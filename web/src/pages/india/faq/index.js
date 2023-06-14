import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import SEO from '../../../components/seo'
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import IndiaLayout from '../../../components/IndiaLayout/IndiaLayout'
import AccordionCustom from '../../../components/Accordion/AccordionCustom';

const IndiaFAQ = () => {
   const faq ={
        questions: [
            {
                q: [<h1 className='fs-6'>Do you need a computer?</h1>],
                a: [<p> Yes, your child will need to bring a laptop computer to the courses. This will allow them to work on projects at home if they wish to as well.</p>]
            },
            {
                q: "Is Food Provided?",
                a: [<p> Snacks and drinks will be provided but no meals will be provided. Students are also welcome to bring food if they wish</p>]
            },
            {
                q: "What is Awesome Inc?",
                a: [<p> We exist to create and grow high tech startups. We do this by hosting community events, leading technology education courses, and offering a shared workspace environment. Were excited to launch our first international program in Bhopal as a starting point to foster innovation and creativity in India. <a className='link--brand' href='https://www.awesomeinc.org/'> Click here </a> "for more information on our operations  in the United States.</p>]
            },
            {
                q: "Who is leading the coding programs in Bhopal?",
                a: [<p> <a className='link--brand' href='https://www.awesomeinc.org/india/about'> Click here </a> to meet the team. </p>]
            },
            {
                q: "Are the coding programs in person?",
                a: [<p> Yes. We believe face to face, in person training and education provides accountability, focus and is more fun which leads to greater results for students.</p>]
            },
            {
                q:"What's the Cost?",
                a:[<p> Week of Code Program is 5000₹ <br/> Coding Club Program (price coming soon)</p>]
            }
        ]

    }
 
 
    return (
        <IndiaLayout>
            <SEO/>
            <Container>
                <AccordionCustom
                   faq = {faq}
                />
            </Container>
        </IndiaLayout>
    )
}

export default IndiaFAQ;