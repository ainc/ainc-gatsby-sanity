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
import Shield from "./Components/Shield"
import ProfileCard from "./Components/ProfileCard";
import GradStat from "./Components/GradStat";
import Testimonial from "./Components/Testimonial";
import "../../styles/main.scss"
import * as styles from './bootcamp.module.scss'
import * as footerStyles from '../../components/Footer/Footer.module.scss'
import ShieldsRow from "./Components/ShieldsRow";
import CompanyGrid from "./Components/CompanyGrid";
import VerticalTitle from "../../components/VerticalTitle/VerticalTitle";

const BootcampPage = ({ data }) => {

  return (
    <Layout pageTitle="Bootcamp">
      {/* Add SEO Component Here?? */}
      
      {/* Header section */}
      <section id="header">
        <Container fluid className={styles.header}>
          <Row className="py-5 mt-5 mx-5">
            <Col className="py-5 mt-5 mx-5">
              <Title className="text-left fs-4 mt-3 w-50"><b>A 16 week, Full-time, Job-Guaranteed Program designed for individuals looking to make a career change.</b></Title>
              <Subtitle className="fst-italic fw-lighter fs-5 my-3 w-75">Start your application in less than 30 seconds</Subtitle>
              <BrandButton className="my-3">Get Started</BrandButton>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Two Buttons Section */}
      <section id="two-buttons">
        <Container fluid className="background--grey py-4">
          <Row className="text-center py-5 mx-5">
            <Col className="justify-content-center text-center border-right--white" style={{marginLeft: "150px"}}>
              <div>
                <img style={{maxWidth: "80px"}} src={require('/src/images/bootcamp/QuestionCircle.svg').default} alt="Question Circle" />
              </div>
              <Title className="text-center text-white fs-4 my-4 py-3">Have a few questions?</Title>
              <BrandButton className="justify-content-center" style={{marginTop: "5px"}}>Download Program Guide</BrandButton>
            </Col>
            <Col className="justify-content-center text-center" style={{marginRight: "162px", marginLeft: "-25px", marginTop: "-2px", maxWidth: "70%"}}>
              <div>
                <img style={{maxWidth: "80px"}} src={require('/src/images/bootcamp/MoneyCircle.svg').default} alt="Money Circle" />
              </div>
              <Title className="text-center text-white fs-4 my-4 py-1">Pay nothing until you<br /> land a job!</Title>
              <BrandButton className="justify-content-center">See How Here</BrandButton>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Answer Honestly */}
      <section id="answer-honestly">
        <Container className="py-5 mx-5">
          <Row>
            <Col>
              <Title className="text-center brand fs-3">Answer honestly...</Title>
              <Subtitle className="text-center brand fst-italic fw-light fs-6">(your answer is safe with us, we promise.)</Subtitle>
            </Col>
          </Row>
          <Row className="py-5 ps-3 mx-5 text-center" style={{maxWidth: "90%"}}>
            <ShieldsRow
              text1="Do you ever think of changing careers?"
              text2="Are you looking for a more meaningful career?"
              text3="Do you enjoy learning new ideas and solving problems?"
              text4="Do you want to gain a skill set that will set you up for success no matter your location?"
              text5="Are you looking to explore a different life path?"
            />
          </Row>
          <Row>
            <Subtitle className="text-center brand fs-3">yes!</Subtitle>
            <br />
            <br />
            <Subtitle className="text-center pt-3 fs-6"><b>If you answered yes to any of these, our Web Developer Bootcamp could be your next move.</b></Subtitle>
            <br />
            <br />
            <Subtitle className="text-center fs-6">The Web Developer Bootcamp is a 16-week, intensive training program for aspiriing software developers.</Subtitle>
          </Row>
          <Row className="pt-5 pb-3">
            <Col className="d-flex justify-content-center">
              <BrandButton>Download Program Guide</BrandButton>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Alumni Testimonials */}
      <section id="testimonials">
        <Container fluid className={styles.testimonials}>
          <Row className="py-3">
            <Row className="py-5">
              <Title className="text-center text-white text-uppercase">Hear From Our Alumni</Title>
            </Row>
            <Row className="text-center mx-5">
              <Testimonial
              src1={require('/src/images/bootcamp/david.jpg').default} 
              src2={require('/src/images/bootcamp/melo.jpg').default} 
              src3={require('/src/images/bootcamp/brett.jpg').default} 
              name1="David Vanderhaar"
              testimonial1="David worked part-time at Starbucks, and applied for the Bootcamp on a whim (and with a little encouragement from his wife). In addition to working full-time as a software developer, he also teaches classes helping kids learn to code."
              name2="Melanie Stoeckle"
              testimonial2="Melanie came to Bootcamp with previous experience in graphic design. She landed a job as a developer within a week of graduating from the program. Eventually, she earned the freedom through her employer to work remotely, and now travels the world - her office is wherever there's a wifi connection."
              name3="Brett Fraley"
              testimonial3='Brett made the switch from factory worker to software developer. "I worked in lots of different types of factories for years and my body was just getting run down at such a young age. I knew I needed something else. There is no way I could have afforded time or money for a four-year degree."'
              />
            </Row>
            <Row className="pt-4 pb-5">
              <Col className="text-center">
                <BrandButton className="text-center brand">More Alumni</BrandButton>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      {/* Motivational Quote */}
      <section id="motivational">
        <Container className="py-4">
          <Row className="py-4">
            <Col className="mx-5 py-2">
              <Title className="text-center brand fs-5">"You don't have to feel trapped. Earn your freedom, work when & where you want. Earn a living in just 40 hours a week."</Title>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Awesome Inc Header */}
      <section id="why-awesome-inc-header">
        <Container fluid className="h-50">
          <Row className="h-75">
            <StaticImage src='../../images/bootcamp/awesome-inc-bg.jpg' alt='Why Awesome Inc Header Image' className="center-block h-50" style={{maxHeight: "30vh", paddingBottom: "-5vh"}}/>
          </Row>
        </Container>
      </section>

      {/* Why Awesome Inc */}
      <section id="why-awesome-inc">
        <Container className="py-5 pe-5">
          <Row className="py-3 pe-3 mx-5">
            <Col className="ps-5 me-1">
              <Title className="text-uppercase py-3" style={{marginLeft: "70px"}}>Why Awesome Inc?</Title>
              <Row className="border-right--brand">
                <p className="text-justify mb-3 w-75 mx-auto">At Awesome Inc, everything we do starts with out Core Values. 
                  We care about people, and making a difference in our community. 
                  That's why we want to help everyone we can learn the life changing skill of coding. 
                  And while doing that, we've seen that the best way to learn a new skill is to get 
                  the right help on your journey. It's so easy to waste time trying to learn something 
                  by yourself, constantly running into problems, and getting frustrated along the way, 
                  but we're here to help! With coaching from Senior Developers and a curriculum built 
                  for you, we're ready to meet you where you're at, even if you're at step 0.
                </p>
              </Row>
              <BrandButton className="mt-3" style={{marginLeft: "70px"}}>Schedule Call</BrandButton>
            </Col>
            <Col>
              <ProfileCard 
              src={require('/src/images/bootcamp/stephenruh-wall.jpg').default} 
              name="Stephen" 
              text1="Sometimes it's just easier to talk to a person, right? That's where Stephen comes in!" 
              text2="He's happy to answer any and all questions you've got about Awesome Inc, our programs, coding in general, or even just the best place to grab coffee and donuts nearby." />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Job Guarantee */}
      <section id="job-guarantee">
        <Container fluid className={styles.jobGuarantee}>
          <Row className={styles.imgRow}>
            <Col className="d-flex justify-content-center">
              <StaticImage src='../../images/bootcamp/job-guaranteed.png' alt='job guaranteed'></StaticImage>
            </Col>
          </Row>
          <Row className="mx-5">
            <Col className="mx-5">
              <Subtitle className="text-white text-center fs-6" style={{marginLeft: "70px", marginRight: "70px", marginTop: "30px"}}>We only succeed when you succeed. We quarantee that all students who complete the 16-week Bootcamp program and uphold the job search requirements will receive a job offer within six months of their graduation date, or we'll refund your tuition. See our Student Agreement for details.</Subtitle>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section id="stats" className="background--brand p1.y-5">
        <Container fluid className="py-4 mx-5">
          <Row className="justify-content-center py-5 pe-5 me-5">
            <Col className="mt-2">
              <Row className="text-center">
                <GradStat
                src={require("../../images/bootcamp/graduation.png").default}
                alt="Graduation Rate"
                stat="90%"
                subtitle="Graduation Rate"
                subtext="2016-2020"
                ></GradStat>
              </Row>
            </Col>
            <Col className="mt-2">
              <Row className="text-center">
                <GradStat
                src={require("../../images/bootcamp/job-placement.png").default}
                alt="Job Placement Rate"
                stat="86%"
                subtitle="Job Placement Rate"
                subtext="Within 180 Days"
                ></GradStat>
              </Row>
            </Col>
            <Col>
              <Row className="text-center">
                <GradStat
                src={require("../../images/bootcamp/salary.png").default}
                alt="Salary"
                stat="$45k"
                subtitle="Starting Salary"
                subtext="Average"
                ></GradStat>
              </Row>
            </Col>
            <Row className="mt-5">
              <Col className="d-flex justify-content-center">
                <BrandButton className="button background--gray mt-3">Download Program Guide</BrandButton>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      {/* Employers */}
      <section id="employers" className="py-4">
        <Container className="py-4 mx-5">
          <Row className="mx-5">
            <Col>
              <Row className="mt-4">
                <Title className="text-uppercase text-center">Companies who have hired our graduates</Title>
              </Row>
              <Row className="my-5 mx-5">
                <Row className="pt-4 pb-3">
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/apaxsoftware-logo.png" alt="Apax Software"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/ableengine-logo.png" alt="Able Engine"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/cabemtechnologies-logo.png" alt="Cabem Technologies"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/infosys-logo.png" alt="Infosys"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/ireportsource-logo.png" alt="iReportSource"></StaticImage>
                  </Col>
                </Row>
                <Row className="pb-3 pt-3">
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/medmyne-logo.png" alt="MedMyne"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/nymblsystems-logo.png" alt="nymbl.systems"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/prospecttrax-logo.png" alt="ProspectTrax"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/scheduleit-logo.png" alt="Schedule It"></StaticImage>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/company-logos/vetdata-logo.png" alt="vetdata"></StaticImage>
                  </Col>
                </Row>
                {/* <CompanyGrid
                  src1="../../images/bootcamp/company-logos/apaxsoftware-logo.png"
                  alt1="Apax Software"
                  src2="../../images/bootcamp/company-logos/ableengine-logo.png"
                  alt2="Able Engine"
                  src3="../../images/bootcamp/company-logos/cabemtechnologies-logo.png"
                  alt3="Cabem Technologies"
                  src4="../../images/bootcamp/company-logos/infosys-logo.png"
                  alt4="Infosys"
                  src5="../../images/bootcamp/company-logos/ireportsource-logo.png"
                  alt5="iReportSource"
                  src6="../../images/bootcamp/company-logos/medmyne-logo.png"
                  alt6="MedMyne"
                  src7="../../images/bootcamp/company-logos/nymblsystems-logo.png"
                  alt7="nymbl.systems"
                  src8="../../images/bootcamp/company-logos/prospecttrax-logo.png"
                  alt8="ProspectTrax"
                  src9="../../images/bootcamp/company-logos/scheduleit-logo.png"
                  alt9="Schedule It"
                  src10="../../images/bootcamp/company-logos/vetdata-logo.png"
                  alt10="vetdata"
                ></CompanyGrid> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Languages */}
      <section id="languages">
        <Container fluid className={styles.languages}>
          <Row className="py-5 mx-5">
            <Col className="py-3 mx-5">
              <Row>
                <Subtitle className="text-center fs-5 pb-3"><b>With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using</b></Subtitle>
              </Row>
              <Row className="py-4 text-center">
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
              <Row className="text-center mx-3 mt-3">
                <Row>
                  <p>With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using HTML, CSS, JavaScript, web frameworks, GitHub, Agile, and more.</p>
                </Row>
                <Row>
                  <p>Students begin with a part-time Prework phase, with 4 weeks of remote lessons covering the basics of web development. After that, we kick it into high gear for 12 weeks of full-time, in-person training. We've designed Bootcamp to feel less like school, and more like you first 3 months on the job. By the conclusion of the combined 16-week program, our alumni are ready to interview with regional and national employers for the opportunity to earn a full-time position at a competitive junior developer's salary.</p>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Apply */}
      <section id="apply">
        <Container className="py-5 mx-5">
          <Row className="py-5 mx-5">
            <Col>
              <Row>
                <Title className="text-center text-bold text-uppercase">Applying For Bootcamp</Title>
              </Row>
              <Row className="pt-3">
                <Subtitle className="text-center fs-6">There is a four-step, competitive application process for the Bootcamp program:</Subtitle>
              </Row>
              <Row className="py-5 mx-5">
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/online-application.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/arrow-steps.png" className="text-center mt-5 mx-5"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/basic-challenge.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/arrow-steps.png" className="text-center mt-5 mx-5" />
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/in-person-interview.png" className="text-center"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/arrow-steps.png" className="text-center mt-5 mx-5"/>
                  </div>
                </Col>
                <Col>
                  <div>
                    <StaticImage src="../../images/bootcamp/fio-challenge.png" className="text-center"/>
                  </div>
                </Col>
              </Row>
              <Row className="mx-5">
                <p>This process helps us to find top-quality applicants for the Bootcamp. We continue to be surprised and inspired by the variety of different educational and professional backgrounds rfom which our students come to Bootcamp. Contrary to stereotypes about software developers, there's not just on archetype that's a good fit for this career. Our goal throughout the application process is to find people who, in their own unique way, are ready to dive into a software development career through the accelerated learning environment we provide. For more on this, check out our blog post What We Look For In A Bootcamp Student.</p>
              </Row>
              <Row className="pt-5 pb-3 pe-4 mx-5">
                <Col className="text-center col-3">
                  <BrandButton>Apply Now</BrandButton>
                </Col>
                <Col className="text-center col-4">
                  <BrandButton>Schedule Call or Visit</BrandButton>
                </Col>
                <Col className="text-center col-5">
                  <BrandButton>Download Program Guide</BrandButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section id="timeline" style={{backgroundColor: "lightgray"}} className="py-5 pe-5">
        <Container className="pt-5 pb-3 pe-3 mx-5">
          <Row className="mx-5 pe-3">
            <Col className="col-2">
              <div>
                <VerticalTitle title="The Timeline" className="text--extra-huge" />
              </div>
            </Col>
            <Col className="col-10 pe-5">
              <Row className="mt-4 mb-5">
                <p className="text-justify fs-5 pb-3">This is a realistic timeline of what a Web Developer Bootcamp student can expect from applying to the program to becoming a proud alumni.</p>
              </Row>
              <Row className="mb-3">
                <img className="text-center pl-2" src={require('/src/images/bootcamp/timeline.png').default}/>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cost */}
      <section id="cost" className="py-5">
        <Container className="mx-5">
          <Row>
            <Col>
              <Row className="mt-2 mb-5">
                <Title className="brand text-center text--huge">The Cost</Title>
              </Row>
              <Row>
                <Col className="text-center border-right--brand">
                  <Row>
                    <div className="text-center">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/cost.png').default} alt="Piggy Bank" />
                    </div>
                  </Row>
                  <Row>
                    <Title className="text-center py-4 fs-3">Income Share Agreement</Title>
                  </Row>
                  <Row className="mx-5">
                    <p className="text-justify">
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
                  <Row className="me-5">
                    <div className="text-center">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/Money_in_Hand.svg').default} alt="Moeny In Hand" />
                    </div>
                  </Row>
                  <Row className="me-5">
                    <Title className="text-center py-4 fs-3 me-5">Up-Front Payment</Title>
                  </Row>
                  <Row className="mx-5">
                    <p className="text-justify">
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
      <section id="still-unsure" className="py-5">
        <Container fluid className={styles.stillUnsure}>
          <Row className="py-5 mt-5">
            <Col className="text-center">
              <Row className="col-10 text-center mx-5 pt-5">
                  <Title className="pt-5 pb-3 mx-5">Still unsure? Here's everyone else who took this same leap and haven't looked back!</Title>
              </Row>
              <Row className="pt-3">
                <Col className="text-center">
                  <BrandButton className="my-3">Meet Alumni</BrandButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

       {/* Questions */}
       <section id="questions">
        <Container fluid className={styles.questions}>
          <Row className="pt-5 text-center">
            <Col className="pt-4">
              <Row>
                <Title className="text-center text-white pt-3 mt-5">Still have questions?</Title>
              </Row>
              <Row className="pt-4">
                <Col className="text-center">
                  <BrandButton>See our Faqs</BrandButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </Layout>
  );
};

export default BootcampPage;
