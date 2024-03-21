import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";

import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";

import * as styles from "./qr-code.module.scss";

import wifi from "../../images/qr-code/wifi.png";
import cv3 from "../../images/qr-code/conference3.png";
import people from "../../images/qr-code/conference1.png";
import table from "../../images/qr-code/conference4.png";
import thinkingRoom from "../../images/qr-code/conference2.png";
import nick from "../../images/qr-code/nick-garnett.jpg";
import conner from "../../images/qr-code/conner-jones.jpg";
import calendar from "../../images/qr-code/Calendar.png";

export function FAQCard ({question, answer}) {
    let answerParagraphs;
    let linkParagraph;
    const renderAnswer = () => {
        if(typeof answer === "string"){
            return <p>{answer}</p>;
        }
        return answer.map((element, index) => {
            // If the element is a string, render it as a paragraph.
            if (typeof element === 'string') {
                linkParagraph += {element}
            }
            // If the element is JSX, render it directly.
            return <span key={index}>{element}</span>;
        });
    };
    answerParagraphs = <div>{renderAnswer()}</div>;

    return (
    <div className={`${styles.outerBox} align-items-center mb-4`}>
        <div className={`${styles.innerBox}`}>
            <h3 className="mb-0">{question}</h3>
        </div>
        <p className={styles.innerText}>
            {answerParagraphs}
        </p>
    </div>
    )
}


const QRCodePage = () => {
    return (
        <Layout>
            {/* Header */}
            <section className={styles.imageHeader}>
            <Container>
                <Row className="d-flex flex-row align-items-center"> 
                <Col className="d-flex justify-content-center text-center">
                    <div className={styles.heading}>
                    <Title className={`${styles.headingTitle} text-uppercase text-grey mt-5`} >
                        Welcome to Awesome Space
                    </Title>
                    <Subtitle className={` ${styles.headingSubtitle} mt-3 mb-4`}>
                        Here are some need to knows.
                    </Subtitle>
                    </div>
                </Col>
                </Row>
            </Container>
            </section>

            {/* Wifi */}
            <Container className={`${styles.wifiContainer} d-flex justify-content-center text-center`}>
                <Col>
                    <div className={styles.wifi}>
                        <Image src={wifi} alt="Wifi Logo" />
                        <Title className="text">WIFI</Title>
                    </div>
                    <Subtitle className={styles.italics}>Network</Subtitle>
                    <Title className="pb-4">AWESOMENET</Title>
                    <Subtitle className={styles.italics}>Password</Subtitle>
                    <Title>Awesomestuff</Title>
                </Col>
            </Container>

            {/* Conference room */}
            <section className={`${styles.conferenceImage} pt-5 pb-5`}>
                <Container className={styles.conferenceContainer}>
                    <Row className="d-flex align-items-center justify-content-center text-center">
                        <Col>
                            <Title className="text-white">NEED TO HOP IN A CONFERENCE ROOM?</Title>
                            <p className="text-white mt-3" style={{fontWeight: 'bold', fontStyle: 'italic'}}>Click on a conference room for availability.</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center justify-content-center text-center text-white ms-auto mt-3">
                        <Col lg={3} md={6}>
                            <a href="https://calendar.google.com/calendar/u/0?cid=YXYxcnNwdTljbnNvdHUwdGNkbmNvY3FzZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                                <Image src={people} alt="Lee Todd" className={styles.conferenceLogo}/>
                                <h3>Lee Todd</h3>
                                <p>(Smaller)</p>
                                <p>1 screen</p>
                                <p>10 seats</p>
                            </a>
                        </Col>
                        <Col lg={3} md={6}>
                            <a href="https://calendar.google.com/calendar/u/0?cid=bzd2aG11czlyYzRxOHJlM240am1oZ3Y5bWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                                <Image src={thinkingRoom} alt="Upstairs Thinking Room" className={styles.conferenceLogo}/>
                                <h3>Upstairs</h3>
                                <br/>
                                <p>No screens</p>
                                <p>6 seats</p>
                            </a>
                        </Col>
                        <Col lg={3} md={6}>
                            <a href="https://calendar.google.com/calendar/u/0?cid=bzVhcWE2OHE1MjdoZHQyb2dybm82bTc3cWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                                <Image src={cv3} alt="350 Large" className={styles.conferenceLogo}/>
                                <h3>350 Large</h3>
                                <br/>
                                <p>2 screens</p>
                                <p>12 seats</p>
                            </a>
                        </Col>
                        <Col lg={3} md={6}>
                            <a href="https://calendar.google.com/calendar/u/0?cid=cGdiZWczZTVsdXE5ZDBtYTNmMzI2czRnMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                                <Image src={table} alt="350 Small" className={styles.conferenceLogo}/>
                                <h3>350 Small</h3>
                                <br/>
                                <p>1 screen</p>
                                <p>4 seats</p>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*Need help*/}
            <Container className="justify-content-center text-center pt-5 pb-5">
                <Row>
                    <Col>
                    <Title className="pb-3" style={{color: '#C02129'}}>Still need help?</Title>
                    <Subtitle className="pb-5">Click on a name or photo to email someone on our Space team.</Subtitle>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto" className="text-center">
                        <a href="mailto:conner.jones@awesomeinc.org">
                            <Image src={conner} alt="Conner" className={styles.portrait}/>
                            <Subtitle className="pt-3 pb-4" style={{fontWeight: 'bold', color: '#C02129'}}>Conner Jones</Subtitle>
                        </a>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <a href="mailto:nick.garnett@awesomeinc.org">
                            <Image src={nick} alt="Nick" className={styles.portrait}/>
                            <Subtitle className="pt-3" style={{fontWeight: 'bold', color: '#C02129'}}>Nick Garnett</Subtitle>
                        </a>
                    </Col>
                </Row>
            </Container>

            {/*Calendar*/}
            <section className={`${styles.calendar} d-flex justify-content-center text-center`}>
                <Container>
                    <Image src={calendar} alt="Calendar"/>
                    <p className="text-white mt-4 mb-4" style={{fontWeight: 'bold'}}>Take a look to see what's coming up</p>
                    <a href="https://awesomeinc.org/events/">
                        <BrandButton >Get plugged in!</BrandButton>
                    </a>
                </Container>
            </section>

            {/*FAQ*/}
            <section className={`d-flex justify-content-center pt-5 pb-5`}>
                <Col>
                    <Title className="text-center pb-5">FAQs</Title>
                    <FAQCard 
                        question={"If I need to borrow any sort of tech supplies, where can I find that?"}
                        answer={["We have a range of tech supplies including but not limited to:",<br/>,"HDMI cables, USB-C adapters, iOS chargers\nThese can be found on the supply shelves in the coworking space closest to the Breakroom."]}
                        />
                    <FAQCard 
                        question={"I see electric scooters out in the garage, are they available to ride?"}
                        answer={["Yes, our electric scooters are available for our members to use. Before you take your first ride, ", <a href="https://forms.zohopublic.com/virtualoffice9155/form/ScooterWaivers/formperma/V2_zgVNBVALYUJW-2NB4pxP5Ni1-u_g5xzHjvZ3zfwk">please fill out a waiver form</a>, ". Upon your return, please plug scooters back into their chargers at their parking station."]}
                        />
                    <FAQCard 
                        question={"How do I make a fresh pot of coffee?"}
                        answer={["We are supplied with fresh coffee beans from Manchester Coffee Co. For brewing a fresh pot, you’ll want to:",<br/>,"- Take the coffee filter basket out of the machine’s track",<br/>,"- Discard the used coffee grounds",<br/>,"- Place a new coffee filter in (look above the coffee machine)",<br/>,"- Slide the basket in the grinder’s tracks",<br/>,"- Turn the grinder on (please don’t change any settings)",<br/>,"- Place the basket back in the coffee machine’s track, turn the burner on, and press start! (The coffee machine already has a water line connected. No need to add water.)"]}
                        />
                    <FAQCard 
                        question={"Where should I sit?"}
                        answer={"Any desk with an open seat! There are no dedicated seats at Awesome Inc."}
                        />
                    <FAQCard 
                        question={"I want to start a membership"}
                        answer={"Great! Please email Conner or Nick (see above) to get started."}
                        />
                </Col>
            </section>
        </Layout>
    )
}

export default QRCodePage;