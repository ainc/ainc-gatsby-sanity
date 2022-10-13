import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Banner from "../../components/Banner/Banner";
import { ReactComponent as QuestionCircleIcon } from '/src/images/bootcamp/QuestionCircle.svg';
import MoneyCircleIcon from '/src/images/bootcamp/MoneyCircle.svg';
import "../../styles/main.scss"
import * as styles from './bootcamp.module.scss'
import * as footerStyles from '../../components/Footer/Footer.module.scss'

const BootcampPage = ({ data }) => {

  return (
    <Layout pageTitle="Bootcamp">
      {/* Add SEO Component Here?? */}
      
      {/* Header section */}
      <section id="header">
        <Container className={styles.header}>
          <Row className={styles.row}>
            <Col className="">
              <Title className="text-left fs-3 mt-3"><b>A 16 week, Full-time, Job-Guaranteed Program designed for individuals looking to make a career change.</b></Title>
              <Subtitle className="fst-italic fw-lighter fs-4">Start your application in less than 30 seconds</Subtitle>
              <BrandButton className="my-3">Get Started</BrandButton>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Two Buttons Section */}
      <section id="two-buttons">
        <Container fluid className="background--grey">
          <Row className={styles.twoButtonsRow}>
            <Col className="justify-content-center text-center" style={{marginLeft: "50px"}}>
              <div>
                <img style={{maxWidth: "80px"}} src={require('/src/images/bootcamp/QuestionCircle.svg').default} alt="Question Circle" />
              </div>
              <Title style={{paddingTop: "20px", paddingBottom: "20px"}} className="text-center text-white fs-4 mt-4">Have a few questions?</Title>
              <BrandButton className="justify-content-center">Download Program Guide</BrandButton>
            </Col>
            <Col className="justify-content-center text-center" style={{marginRight: "50px"}}>
              <div>
                <img style={{maxWidth: "80px"}} src={require('/src/images/bootcamp/MoneyCircle.svg').default} alt="Money Circle" />
              </div>
              <Title style={{paddingTop: "20px", paddingBottom: "20px"}} className="text-center text-white fs-4 mt-4">Pay nothing until you land a job!</Title>
              <BrandButton className="justify-content-center">See How Here</BrandButton>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Answer Honestly */}
      <section id="answer-honestly">
        <Container className={styles.answerHonestly}>
          <Row>
            <Col>
              <Title className="text-center brand fs-3">Answer honestly...</Title>
              <Subtitle className="text-center brand fst-italic fw-lighter fs-6">(your answer is safe with us, we promise.)</Subtitle>
            </Col>
          </Row>
          <Row className={styles.shieldRow}>
            <Col>
              <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
            </Col>
            <Col>
              <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
            </Col>
            <Col>
              <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
            </Col>
            <Col>
              <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>   
            </Col>
            <Col>
              <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
            </Col>
          </Row>
          <Row className={styles.yesRow}>
            <Subtitle className="text-center brand fs-3">yes!</Subtitle>
            <br />
            <br />
            <Subtitle className="text-center fs-6"><b>If you answered yes to any of these, our Web Developer Bootcamp could be your next move.</b></Subtitle>
            <br />
            <br />
            <Subtitle className="text-center fs-6">The Web Developer Bootcamp is a 16-week, intensive training program for aspiriing software developers.</Subtitle>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <BrandButton>Download Program Guide</BrandButton>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Alumni Testimonials */}
      <section id="alumni">
        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </section>

      {/* Motivational Quote */}
      <section id="motivational">
        <Container className={styles.motivationalQuote}>
          <Row>
            <Col>
              <Title className="text-center brand fs-5">"You don't have to feel trapped. Earn your freedom, work when & where you want. Earn a living in just 40 hours a week."</Title>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Awesome Inc Header */}
      <section id="why-awesome-inc-header">
        <Container fluid >
          <Row className={styles.whyAwesomeIncHeader}>
            <StaticImage src='../../images/bootcamp/awesome-inc-bg.jpg' alt='Why Awesome Inc Header Image' className="center-block img"/>
          </Row>
        </Container>
      </section>

      {/* Why Awesome Inc */}
      <section id="why-awesome-inc">
        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </section>

      {/* Job Guarantee */}
      <section id="job-guarantee">
        <Container fluid className={styles.jobGuarantee}>
          <Row className={styles.imgRow}>
            <Col className="d-flex justify-content-center">
              <StaticImage src='../../images/bootcamp/job-guaranteed.png' alt='job guaranteed' className=""></StaticImage>
            </Col>
          </Row>
          <Row>
            <Col>
            <Subtitle className="text-white text-center fs-6" style={{marginLeft: "70px", marginRight: "70px", marginTop: "30px"}}>We only succeed when you succeed. We quarantee that all students who complete the 16-week Bootcamp program and uphold the job search requirements will receive a job offer within six months of their graduation date, or we'll refund your tuition. See our Student Agreement for details.</Subtitle>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section id="stats" style={{backgroundColor: "#C41E3A", paddingTop: "50px", paddingBottom: "50px"}}>
        <Container fluid>
          <Row>
            <Col>
              <Row className="text-center">
                <div>
                  <StaticImage src="../../images/bootcamp/graduation.png" alt="Graduation" style={{maxWidth: "150px"}}/>
                </div>
                <Title className="text-white" style={{paddingTop: "30px"}}>90%</Title>
                <Subtitle className="text-white">Graduation Rate</Subtitle>
                <Subtitle className="fst-italic fw-lighter fs-5 text-white">2016-2020</Subtitle>
              </Row>
            </Col>
            <Col>
              <Row className="text-center">
                <div>
                  <StaticImage src="../../images/bootcamp/job-placement.png" alt="Job Placement" style={{maxWidth: "150px"}}/>
                </div>
                <Title className="text-white" style={{paddingTop: "30px"}}>86%</Title>
                <Subtitle className="text-white">Job Placement Rate</Subtitle>
                <Subtitle className="fst-italic fw-lighter fs-5 text-white">Within 180 Days</Subtitle>
              </Row>
            </Col>
            <Col>
              <Row className="text-center">
                <div>
                  <StaticImage src="../../images/bootcamp/salary.png" alt="Salary" style={{maxWidth: "65px"}}/>
                </div>
                <Title className="text-white" style={{paddingTop: "30px"}}>$45K</Title>
                <Subtitle className="text-white">Starting Salary</Subtitle>
                <Subtitle className="fst-italic fw-lighter fs-5 text-white">Average</Subtitle>
              </Row>
            </Col>
            <Row>
              <Col className="d-flex justify-content-center">
                <BrandButton style={{backgroundColor: "grey", marginTop: "30px"}} className={styles.button}>Download Program Guide</BrandButton>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      {/* Employers */}
      <section id="employers" style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <Container>
          <Row>
            <Col>
              <Row>
                <Title className="text-uppercase text-center">Companies who have hired our graduates</Title>
              </Row>
              <Row>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
              </Row>
              <Row>
              <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Languages */}
      <section id="languages">
        <Container style={{backgroundImage: "../../images/bootcamp/languages-bg.jpg"}}>
          <Row>
            <Col>
              <Row>
                <Subtitle className="text-center fs-5"><b>With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using</b></Subtitle>
              </Row>
              <Row style={{paddingTop: "40px", paddingBottom: "40px"}}>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/languages/html.png" alt="HTML" style={{maxWidth: "150px"}}/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/languages/css.png" alt="CSS" style={{maxWidth: "150px"}}/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/languages/javascript.png" alt="JavaScript" style={{maxWidth: "150px"}}/>
                  </div>
                </Col>
                <Col>
                  <div>
                  <StaticImage src="../../images/bootcamp/languages/git.png" alt="Git" style={{maxWidth: "150px"}}/>
                  </div>
                </Col>
                <Col>
                  <div>
                  <StaticImage src="../../images/bootcamp/languages/agile.png" alt="Agile" style={{maxWidth: "150px"}}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <p>With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using HTML, CSS, JavaScript, web frameworks, GitHub, Agile, and more.</p>
              </Row>
              <Row>
                <p>Students begin with a part-time Prework phase, with 4 weeks of remote lessons covering the basics of web development. After that, we kick it into high gear for 12 weeks of full-time, in-person training. We've designed Bootcamp to feel less like school, and more like you first 3 months on the job. By the conclusion of the combined 16-week program, our alumni are ready to interview with regional and national employers for the opportunity to earn a full-time position at a competitive junior developer's salary.</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Apply */}
      <section id="apply">
        <Container style={{paddingTop: "50px", paddingBottom: "50px"}}>
          <Row>
            <Col>
              <Row>
                <Title className="text-center text-bold text-uppercase">Applying For Bootcamp</Title>
              </Row>
              <Row>
                <Subtitle className="text-center fs-6">There is a four-step, competitive application process for the Bootcamp program:</Subtitle>
              </Row>
              <Row style={{paddingTop: "40px", paddingBottom: "40px"}}>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/online-application.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/arrow-steps.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/basic-challenge.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/arrow-steps.png" className="text-center" />
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/in-person-interview.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/arrow-steps.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/fio-challenge.png" className="text-center"/>
                  </div>
                </Col>
              </Row>
              <Row>
                <p>This process helps us to find top-quality applicants for the Bootcamp. We continue to be surprised and inspired by the variety of different educational and professional backgrounds rfom which our students come to Bootcamp. Contrary to stereotypes about software developers, there's not just on archetype that's a good fit for this career. Our goal throughout the application process is to find people who, in their own unique way, are ready to dive into a software development career through the accelerated learning environment we provide. For more on this, check out our blog post What We Look For In A Bootcamp Student.</p>
              </Row>
              <Row>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section id="timeline" style={{backgroundColor: "lightgray"}}>
        <Container>
          <Row>
            <Col>
            
            </Col>
            <Col>
              <Row>
                <Subtitle>This is a realistic timeline of what a Web Developer Bootcamp student can expect from applying to the program to becoming a proud alumni.</Subtitle>
              </Row>
              <Row>
                <StaticImage src="../../images/bootcamp/timeline.png"/>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cost */}
      <section id="cost" style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <Container>
          <Row>
            <Col>
              <Row>
                <Title className="brand text-center">The Cost</Title>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <div className="text-center">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/cost.png').default} alt="Piggy Bank" />
                    </div>
                  </Row>
                  <Row>
                    <Title style={{paddingTop: "20px", paddingBottom: "25px"}} className="text-center fs-3">Income Share Agreement</Title>
                  </Row>
                  <Row>
                    <p className="text-justify fs-7">
                      Fund your future with an Income Share Agreement. We're 
                      partnered with industry-leading ISA provider Meratas to 
                      allow students to enroll in our full-time program with no 
                      up front tuition costs. ISA recipients only pay when they've 
                      landed a job making $40,000/year or more. Want to know 
                      more? Schedule a call today!
                    </p>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <div className="text-center">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/Money_in_Hand.svg').default} alt="Moeny In Hand" />
                    </div>
                  </Row>
                  <Row>
                    <Title style={{paddingTop: "20px", paddingBottom: "25px"}} className="text-center fs-3">Up-Front Payment</Title>
                  </Row>
                  <Row>
                    <p className="text-justify fs-7">
                      Students who choose to pay tuition up front are offered a discounted tuition rate of $13,500.
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Still Unsure */}
      <section id="still-unsure">
        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </section>

      {/* Questions */}
      <section id="questions">
        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </section>

    </Layout>
  );
};

export default BootcampPage;
