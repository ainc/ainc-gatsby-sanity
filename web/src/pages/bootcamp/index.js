import React, {useState} from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image, Modal, Accordion} from "react-bootstrap";
import SEO from '../../components/seo'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import GradStat from "./Components/GradStat/GradStat";
import Testimonial from "./Components/Testimonial/Testimonial";
import "../../styles/main.scss"
import * as styles from './bootcamp.module.scss'
import * as footerStyles from '../../components/Footer/Footer.module.scss'
import ShieldsRow from "./Components/ShieldsRow/ShieldsRow";
import VerticalTitle from "../../components/UI/VerticalTitle/VerticalTitle";
import SideNav from "./Components/SideNav/SideNav"

import ApplyNowModal from "../fellowship/Components/ApplyNowModal";
import { useRef } from "react";
import {InlineWidget} from 'react-calendly'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";


export const query = graphql`
 query BootcampPageQuery {
  allSanityBootcampTestimonials(limit: 3) {
    nodes {
      _key
      name
      testimonial
      picture {
        asset {
          gatsbyImageData
        }
      }
    }
  }
  allSanityBootcampGraduationStats {
    nodes {
      _key
      title
      subtitle
      stat
      picture {
        asset {
          gatsbyImageData
        }
      }
    }
  }
  allSanityBootcampEmployers {
    nodes {
      _key
      company
      picture {
        asset {
          gatsbyImageData
        }
      }
    }
  }
  sanityBootcampProfileCard {
    _key
    name
    picture {
      asset {
        gatsbyImageData
      }
    }
    text1
    text2
  }
  sanityBootcamp {
    earlyApplication(formatString: "")
    earlyRegistration(formatString: "")
  }
}
`

const BootcampPage = props => {

  const { data, errors } = props;

  const testimonials = (data.allSanityBootcampTestimonials.nodes || {})

  const testimonial1 = testimonials[0]
  const testimonial2 = testimonials[1]
  const testimonial3 = testimonials[2]

  const profCard = (data.sanityBootcampProfileCard || {})

  const gradStats = (data.allSanityBootcampGraduationStats.nodes || {})

  const employers = (data.allSanityBootcampEmployers.nodes || {})

  const earlyApplicationDeadline = (data.sanityBootcamp.earlyApplication)
  const earlyRegistration = (data.sanityBootcamp.earlyRegistration)

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }


  //Scroll to section 'Cost'
  const sectionCost = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  )
  const[showWidget, setShowWidget] = useState(false);
  const[showFAQ, setShowFAQ] = useState(false);

  const handleFAQshow = () => setShowFAQ(true);
  const handleFAQhide = () => setShowFAQ(false);

  const handleShow = () => setShowWidget(true);
  const handleClose = () => setShowWidget(false);

  return ( 
    <Layout>

      {/* Add SEO Component Here?? */}
      
      {/* Header section */}
      {/* https://www.awesomeinc.org/assets/img/bootcamp/hero-image-2-min.jpg */}
      <section id="header">
        <Container fluid className={`${styles.header} overflow-hidden`}>
        <Container>

          <Row className={`${styles.titleBlock} mt-5 ms-5`}>
            <Col xs={{span: 12, offset: 0}} sm={{span: 8, offset: 4}} md={8} lg={6} xl={5}>
              <div className={`${styles.titleBlock} align-items-end d-flex flex-column`}>
                <Title className='white text-uppercase text--big'> Launch your <br/> tech career</Title>
                <h4 className= "w-75 text-end lh-md white mt-4 fw-lighter"><b>A 16 week immersive Bootcamp where you'll learn Full Stack coding skills to land a tech job... or your money back.</b></h4>
                <a href="/bootcamp/apply"><BrandButton className="mt-3">Get Started</BrandButton></a>
                <p className="fst-italic">Start your application in less than 30 seconds</p>
              </div>
            
            </Col>
            <Col  className= "mt-5 col-2 pt-5 d-none d-sm-block"> {/* Hidden on mobile */}
                <SideNav/>
            </Col>
            
          </Row>
          
          </Container>

        </Container>
      </section>



      <section id ="bootcamp-upcoming-dates">
        <Container className={`pt-4 pb-4`}>
          <Row>
              <Col>
                <Title className="text-center my-2">UPCOMING PROGRAM DATES</Title>
                {/* <Subtitle className="text-center brand fst-italic fw-light fs-6">(your answer is safe with us, we promise.)</Subtitle> */}
              </Col>
          </Row>
          <Row>
              <Col>
                <Title className="text-center text--medium mt-3">Early Application Deadline </Title>
                <CountdownTimer date={earlyApplicationDeadline}/>
                <Title className="text-center text--small fw-bold fst-italic"> Guarantees open spots for next class</Title>
              </Col>
          </Row>
          <Row>
              <Col xs={12} sm ={12}  md={4} lg={3} xl={3}  className={` ${styles.bootcampUpcomingdates} text-center ms-auto my-4 d-none d-sm-block`}> {/*Hidden on mobile*/}
                <Title className="text-center text--medium fw-bolder">AUG 21, 2023</Title>
                <h4>TO</h4>
                <Title className="text-center text--medium fw-bolder">DECEMBER 08, 2023</Title>
                <BrandButton className="secondary btn--small my-2" disabled="">APPLICATIONS CLOSED</BrandButton>

              </Col>
              <Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center  me-auto my-4">
                <Title className="text-center text--medium brand fw-bolder">MAR 4, 2024</Title>
                <h4 className="brand">TO</h4>
                <Title className="text-center text--medium brand fw-bolder">JUNE 21, 2024</Title>
                <a href="/bootcamp/apply"><BrandButton className="justify-content-center btn--small my-2" disabled="">APPLY NOW</BrandButton></a>
              </Col>
          </Row>


        </Container>
      </section>
       

      {/* Two Buttons Section */}
      <section id="two-buttons" className="">
        <Container  fluid className={`${styles.twoButtons}`} >
          <Row>
            <Col className="">
              <Row className={styles.twoButtonsRow} >
                <Col  xs={12} sm ={12}  md={5} lg={5} xl={4} className={`${styles.leftButtonCol} text-center ms-auto align-items-center`}>
                  <Row>
                    <div className="text-center">
                      <img className='my-3'style={{maxWidth: "70px"}} src={require('/src/images/bootcamp/QuestionCircle.svg').default} alt="Question Circle" />                    
                    </div>
                  </Row>
                  <Row>
                    <Title className="text-center py-2 fs-3 text--medium white">Have a few questions?</Title>
                    <div>
                    <ApplyNowModal link="https://forms.zohopublic.com/virtualoffice9155/form/EmailSubscription/formperma/DpCKAlyxEJ-dLzdhzYuvhtQ8sCUVAbu4fE3JEMuAPqI"
                     title="Download Program Guide"
                     className="justify-content-center" style={{marginTop: "5px"}}/>
                    </div>
                  </Row>
                </Col>
                <Col  xs={12} sm ={12}  md={5} lg={5} xl={4} className={`${styles.rightButtonCol} text-center me-auto align-items-center`}>
                  <Row className="me-5">
                    <div className="text-center">
                    <img className='my-3' style={{maxWidth:"70px"}} src={require('/src/images/bootcamp/MoneyCircle.svg').default} alt="Money Circle" />
                    </div>
                  </Row>
                  <Row className="me-5">
                    <Title className="text-center py-2 fs-3 text--medium white">Pay nothing until you land a job!</Title>
                    <div>
                    <BrandButton onClick={() => scrollToSection(sectionCost)} className="justify-content-center">See How Here</BrandButton>
                    </div>
                  </Row>
                 
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Answer Honestly */}
      <section id="answer-honestly">
        <Container fluid className="py-5">
          <Row>
            <Col>
              <Title className="text-center brand fs-3 text--large">Answer honestly...</Title>
              <Subtitle className="text-center brand fst-italic fw-light fs-6 subtitle--small mb-5">(your answer is safe with us, we promise.)</Subtitle>
            </Col>  
          </Row>
          <Col className="d-flex justify-content-center">
            <Row className="py-1 text-center" style={{maxWidth: "100%"}}>
              <ShieldsRow
                text1="Do you ever think of changing careers?"
                text2="Are you looking for a more meaningful career?"
                text3="Do you enjoy learning new ideas and solving problems?"
                text4="Do you want to gain a skill set that will set you up for success no matter your location?"
                text5="Are you looking to explore a different life path?"
              />
            </Row>
          </Col>
          <Row>
            <Subtitle className="text-center brand fs-3 fancy-font fst-italic">yes!</Subtitle>
            <br />
            <br />
            <Subtitle className="text-center pt-3 fs-6 subtitle--small pb-3"><b>If you answered yes to any of these, our Web Developer Bootcamp could be your next move.</b></Subtitle>
            <br />
            <br />
            <Subtitle className="text-center fs-6 subtitle--small">The Web Developer Bootcamp is a 16-week, intensive training program for aspiriing software developers.</Subtitle>
          </Row>
          <Row className="pt-5 pb-3">
            <Col className="d-flex justify-content-center">
              
              <ApplyNowModal link="https://forms.zohopublic.com/virtualoffice9155/form/EmailSubscription/formperma/DpCKAlyxEJ-dLzdhzYuvhtQ8sCUVAbu4fE3JEMuAPqI"
              title="Download Program Guide"/>

            </Col>
          </Row>
        </Container>
      </section>

      {/* Alumni Testimonials */}
      <section id="testimonials">
        <Container fluid className={`${styles.testimonials}`}>
          <Row className="py-3">
            <Row className="">
              <Title className="text-center text-white text-uppercase mt-5">Hear From Our Alumni</Title>
            </Row>
            <Row className="text-center">
              <Testimonial 
                name1={testimonial1.name}
                image1={testimonial1.picture.asset.gatsbyImageData}
                testimonial1={testimonial1.testimonial}

                name2={testimonial2.name}
                image2={testimonial2.picture.asset.gatsbyImageData}
                testimonial2={testimonial2.testimonial}

                name3={testimonial3.name}
                image3={testimonial3.picture.asset.gatsbyImageData}
                testimonial3={testimonial3.testimonial}
              />
            </Row>
            <Row className="pt-4 pb-5">
              <Col className="text-center">
                <a href="../alumni">
                  <BrandButton className="text-center brand">More Alumni</BrandButton>
                </a>
                
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      {/* Motivational Quote */}
      <section id="motivational">
        <Container className={`py-4 text-center `}>
          <Row className="py-lg-4 mx-lg-5 px-lg-5">
            <Col className="mx-auto py-2">
              <Title className={`text-center brand fs-5 text--medium `}>"You don't have to feel trapped. Earn your freedom, work when & where you want. Earn a living in just 40 hours a week."</Title>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="carousel">
        <Container ref={sliderRef} className={`${styles.carousel} keen-slider pb-5`} > 
            <div className="keen-slider__slide number-slide1">
              <div style={{width:"40%"}} className="justify-content-center mx-auto py-3">
                <StaticImage alt="Testimonial 1" className={`${styles.aincuTestimonial} px-5 pt-5`} src="../../images/bootcamp-testimonials/alyssa-holber-linkedin.png"/>
              </div>
            </div>
          
            <div  className="keen-slider__slide number-slide2">
              <div style={{width: "45%"}} className="justify-content-center mx-auto py-3">
                <StaticImage alt="Testimonial 2" className={`${styles.aincuTestimonial} px-5`} src="../../images/bootcamp-testimonials/josh-dale-linkedin.png"/>
              </div>
            </div>

            <div className="keen-slider__slide number-slide3">
              <div style={{maxWidth: "80%"}} className="justify-content-center mx-auto py-3">
                <StaticImage alt="Testimonial 3" className={`${styles.aincuTestimonial} pt-5`} src="../../images/bootcamp-testimonials/mason-williams.png"/>
              </div>
            </div>
            {/*
            <div className="keen-slider__slide number-slide4">
              <div style={{maxWidth: "40%"}}className=" justify-content-center mx-auto py-3">
                <StaticImage alt="Tetimonial 4" className={`${styles.aincuTestimonial} px-5 pt-5`} src="../../images/bootcamp-testimonials/reic-sparks.png"/>
              </div>
            </div> 
            */}

            <div className="keen-slider__slide number-slide5">
              <div style={{maxWidth: "50%"}} className="justify-content-center mx-auto px-5 py-3">
                <StaticImage alt="Tetimonial 5" className={`${styles.aincuTestimonial} px-5 mx-5`} src="../../images/bootcamp-testimonials/roger-mullins-linkedin.png"/>
              </div>
            </div>

        </Container>
        </section>


        

      {/* Why Awesome Inc Header */}
      <section id="why-awesome-inc-header" className={styles.whyAwesomeIncHeader}>
      </section>

      {/* Why Awesome Inc */}
      <section id="why-awesome-inc">
        <Container className={`${styles.whyAwesomeinc} py-5 pe-5`}>
          <Row className="py-3 pe-3 mx-auto">
            <Col xs={12} sm={12} md={7} lg={7} xl={{span: 5, offset: 2}} className={`ps-0`}>

                <div className={`${styles.leftCol}`}>
                <Title className="text-uppercase py-3 " style={{marginLeft: "0px"}}>Why Awesome Inc?</Title>
                <p style={{borderRight:"1.5px solid #C12029", lineHeight:"25px",}} className={`mb-3 mt-4 pe-4`}>At Awesome Inc, everything we do starts with our Core Values. 
                  We care about people, and making a difference in our community. 
                  That's why we want to help 120 everyone we can learn the life changing skill of coding. 
                  And while doing that, we've seen that the best way to learn a new skill is to get 
                  the right help on your journey. It's so easy to waste time trying to learn something 
                  by yourself, constantly running into problems, and getting frustrated along the way, 
                  but we're here to help! With coaching from Senior Developers and a curriculum built 
                  for you, we're ready to meet you where you're at, even if you're at step 0.
                </p>
                <BrandButton className={` mt-3`} style={{marginLeft: "0rem"}} onClick={handleShow}>Schedule Call</BrandButton>
                <Modal show={showWidget} onHide={handleClose} centered>
                    <InlineWidget url="https://calendly.com/ainc/awesome-inc-call" />
                </Modal>

                </div>
            </Col>
            <Col xs={0} sm={0} md={4} lg={5} xl={{span: 1, offset: 0}} className={`${styles.rightCol}` }>
              <ProfileCard className={`${styles.rightCol}`}
              image={profCard.picture.asset.gatsbyImageData} 
              name={profCard.name}
              text1={profCard.text1} 
              text2={profCard.text2} 
              />
            </Col>
          </Row>
        </Container>
      </section>


      {/* Job Guarantee */}
      <section id="job-guarantee">
        <Container fluid className={`${styles.jobGuarantee}`}>
          <Row className={styles.imgRow}>
            <Col className="d-flex justify-content-center">
              <StaticImage alt="Job Guarantee" src='../../images/bootcamp/job-guaranteed.png' style={{maxWidth: "275px"}} />
            </Col>
          </Row>
          <Row className="mx-5">
            <Col className="d-flex justify-content-center">
              <Subtitle style={{fontSize:"1rem", width:"750px", lineHeight:"25px"}} className={`text-white text-center fs-6`}>We only succeed when you succeed. We guarantee that all students who complete the 16-week Bootcamp program and uphold the job search requirements will receive a job offer within six months of their graduation date, or we'll refund your tuition. See our Student Agreement for details.</Subtitle>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
 
      <section id="stats" style={{backgroundColor: "#ED3742"}} className="background--brand pe-0">
        <Container fluid className={`${styles.stats}`}>
          <div className="mx-3 py-5">
            <Row className="pz-0 mx-5 py-0 justify-content-center">
              <Col className={`${styles.statsCol} justify-content-center`} >
              {gradStats.map((node,i) => (
                //  <Col className={`${styles.statsCol} mt-2`}>
                    <div key={i} className={`${styles.statsRow}`}>
                    <GradStat
                    image={node.picture.asset.gatsbyImageData}
                    alt={node.title}
                    stat={node.stat}
                    subtitle={node.title}
                    subtext={node.subtitle}
                    ></GradStat>
                    </div>
                //  </Col>
              ))}
              </Col>
              <Row className="mt-0">
                <Col className="d-flex justify-content-center pb-4">
                        <ApplyNowModal link="https://forms.zohopublic.com/virtualoffice9155/form/EmailSubscription/formperma/DpCKAlyxEJ-dLzdhzYuvhtQ8sCUVAbu4fE3JEMuAPqI"
                        title="Download Program Guide"
                        className="button secondary mt-3"
                        secondary={true}/>
                </Col>
              </Row>
            </Row>
          </div>
        </Container>
      </section>



      {/* Employers */}
      <section id="employers" className="py-4">
        <Container className="py-4">
          <Row className="mx-5">
            <Col>
              <Row className="mt-4">
                <Title className="text-uppercase text-center mt-4">Companies who have hired our graduates</Title>
              </Row>
              <Col>
                <Row className="row-cols-lg-5 my-lg-5 mx-lg-5">
                  {employers.map((node,i) => (
                    <div key={i} className="text-center" xs={12} >
                      <GatsbyImage 
                      style={{
                        maxWidth: "40rem",
                        marginTop: "1.5rem",
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                        marginBottom: "1.5rem",
                      }}
                      image={node.picture.asset.gatsbyImageData}
                      alt={node.company}
                      />
                    </div>
                  ))}
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Languages */}
<section id="languages">
        <Container fluid className={`${styles.languages}`}>
          <Row>
          <Subtitle style={{fontSize: "1.25rem"}} className="text-center fs-5 pb-3 mt-4"><b>With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using</b></Subtitle>
          </Row>
          <Row>
                <Col className={`${styles.languageIcons} d-flex justify-content-center py-4`}>
                  <Col>
                    <StaticImage src="../../images/bootcamp/languages/html.png" alt="HTML" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/languages/css.png" alt="CSS" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col>
                    <StaticImage src="../../images/bootcamp/languages/javascript.png" alt="JavaScript" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col>
                  <StaticImage src="https://d33wubrfki0l68.cloudfront.net/27b5922e90fa2d54a0c37d426870c849e8a41c72/b2845/assets/img/bootcamp/languages/python.png" alt="Python Programming language" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col>
                  <StaticImage src="../../images/bootcamp/languages/git.png" alt="Git" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col>
                  <StaticImage src="https://d33wubrfki0l68.cloudfront.net/4aa1ba4778ed686e1877a7c5ef5875e364033ca8/f7b05/assets/img/bootcamp/languages/django.png" alt="Django Framework" style={{maxWidth: "150px"}} className='mt-3'/>
                  </Col>
                  <Col>
                  <StaticImage src="https://d33wubrfki0l68.cloudfront.net/ee9d2a6ac7c95e3ee2695ce7a14627abeb797b0f/4631a/assets/img/bootcamp/languages/react.png" style={{maxWidth: "150px"}} alt="React Framework"/>
                  </Col>
                  <Col>
                  <StaticImage src="../../images/bootcamp/languages/agile.png" alt="Agile" style={{maxWidth: "150px"}}/>
                  </Col>
                </Col>
          </Row>
          <Row>
            <p style={{fontSize:"1rem"}} className="pt-5 text-center">With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using HTML, CSS, JavaScript, web frameworks, GitHub, Agile, and more.
          </p>
            <p style={{fontSize:"1rem"}} className="pb-5 text-justify text-center">
            Students begin with a part-time Prework phase, with 4 weeks of remote lessons covering the basics of web development. After that, we kick it into high gear for 12 weeks of full-time, in-person training. We've designed Bootcamp to feel less like school, and more like you first 3 months on the job. By the conclusion of the combined 16-week program, our alumni are ready to interview with regional and national employers for the opportunity to earn a full-time position at a competitive junior developer's salary.
            </p>
          </Row>
          
            

        </Container>

      
      </section>

      {/* Apply */}
    <section id="apply">
        <Container className={`${styles.apply} justify-content-center text-justify py-5`}>
          <Row>
          <Title className="text-center text-bold text-uppercase">Applying For Bootcamp</Title>
          <h6 className="text-center fsw-lighter mt-4">There is a four-step, competitive application process for the Bootcamp program:</h6>
          </Row>
          <Col className={`${styles.applyCol} justify-content-center mb-5`}>
              <div>
                <StaticImage alt="Bootcamp online application" src="../../images/bootcamp/online-application.png" className="" style={{maxWidth:"180px"}}/>
              </div>
              <div className="d-flex align-items-center">
                <StaticImage alt="Arrow steps" src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg} `} style={{maxWidth:"180px"}}/>
              </div>
              <div>
                    <StaticImage alt="Basic challenges" src="../../images/bootcamp/basic-challenge.png" className="" style={{maxWidth:"180px"}}/>
              </div>
              <div className="d-flex align-items-center">
                <StaticImage alt="Arrow steps" src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg}`} style={{maxWidth:"180px"}}/>
              </div>
              <div>
                    <StaticImage alt="in person interview" src="../../images/bootcamp/in-person-interview.png" className="" style={{maxWidth:"180px"}}/>
              </div>
              <div className="d-flex align-items-center" >
                <StaticImage alt="Arrow steps" src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg}`} style={{maxWidth:"180px"}}/>
              </div>
              <div>
                    <StaticImage alt="Figure it out challenge" src="../../images/bootcamp/fio-challenge.png" className="" style={{maxWidth:"180px"}}/>
              </div>

          </Col>
          <Row className="justify-content-center">
          <p style={{fontSize:"1rem", width:"900px"}} className="text-justify">This process helps us to find top-quality applicants for the Bootcamp. We continue to be surprised and inspired by the variety of different educational and professional backgrounds rfom which our students come to Bootcamp. Contrary to stereotypes about software developers, there's not just on archetype that's a good fit for this career. Our goal throughout the application process is to find people who, in their own unique way, are ready to dive into a software development career through the accelerated learning environment we provide. For more on this, check out our blog post 
          <a href='https://www.awesomeinc.org/blog/what-we-look-for-bootcamp-student' className='link--brand' target='_blank'> What We Look For In A Bootcamp Student.</a></p>
          </Row>
          <Row className={`${styles.applyButtons} justify-content-center`}>
            <div xs={12} sm={12} md={4} lg={4} xl={3} className="col-xs-12 col-sm-12 col-md-3 col-lg-3 offset-lg-1 col-xl-2 offset-xl-1 mb-3 justify-content-center">
              <a href="/bootcamp/apply"><BrandButton>Apply Now</BrandButton></a>
            </div>
          
            <div  xs={12} sm={12} md={4} lg={4} xl={3}  className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-3 d-flex justify-content-center ">
                    <ApplyNowModal 
                    title="Schedule Call or Visit"
                    link="https://calendly.com/ainc/awesome-inc-call?"/>
            </div>
            <div xs={12} sm={12} md={4} lg={4} xl={3} className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 mb-3 d-flex justify-content-center ">
                    <ApplyNowModal link="https://forms.zohopublic.com/virtualoffice9155/form/EmailSubscription/formperma/DpCKAlyxEJ-dLzdhzYuvhtQ8sCUVAbu4fE3JEMuAPqI"
                     title="Download Program Guide"/>
            </div>
          </Row>

        </Container>
    </section>

      {/* Timeline */}
      <section id="timeline" style={{backgroundColor: "#e6e7e8"}} className="pt-5 mb-3">
        <Container className={`${styles.timeline} pt-5 justify-content-center`}>
            <div className={`${styles.titleDiv} justify-content-center`}>
              <Title className={`${styles.timelineTitle}`}>Timeline</Title>
            </div>
            <Col  sm={12} md={12} lg={12} xl={9}>
              <Row className="">
                <p style={{fontSize:"1rem"}}className="text-justify">This is a realistic timeline of what a Web Developer Bootcamp student can expect from applying to the program to becoming a proud alumni.</p>
              </Row>
              <Row className="">
                <img style={{maxWidth:"90%"}}className="text-center pl-2 mb-3" src={require('/src/images/bootcamp/timeline.png').default} alt=""/>
              </Row>
            </Col>   
        </Container>
      </section>

      {/* Cost */}

      <section ref = {sectionCost} id="cost" className="py-5">
        <Container className={`${styles.cost}`}>
          <Row>
            <Col>
              <Row className="mt-2 mb-5">
                <Title style={{color:"#ED3742"}}className="text--huge text-center mt-4 ">The Cost</Title>
              </Row>
              <Row>
                <Col className={`${styles.costCol} text-center`}>
                  <Row>
                    <div className="text-center">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/cost.png').default} alt="Piggy Bank" />
                    </div>
                  </Row>
                  <Row>
                    <Title className="text-center py-4 fs-3 text--medium">Income Share Agreement</Title>
                  </Row>
                  <Row className="mx-5">
                    <p  style={{fontSize:"1rem"}} className="text-justify text-center">
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
                    <div className="text-center ms-3">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/Money_in_Hand.svg').default} alt="Moeny In Hand" />
                    </div>
                  </Row>
                  <Row className="me-5">
                    <Title className="text-center py-4 ms-3 text--medium">Up-Front Payment</Title>
                  </Row>
                  <Row className="mx-5">
                    <p style={{fontSize:"1rem"}} className="text-justify text-center">
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

     <section id="still-unsure" className="pt-2">
        <Container fluid className={`${styles.stillUnsure} py-4`}>
          <div className="mx-5 text-center justify-content-center mx-auto">
            <Title className="text-center pt-5 pb-3">Still unsure? Here's everyone else who took this same leap and hasn't looked back!</Title>
            <a href="../alumni">
              <BrandButton className="my-3 ">Meet Alumni</BrandButton>
             </a>
          </div>
        </Container>

      </section>

       {/* Questions */}
      <section id="questions" className={`${styles.questions}`}>
        <Container className=''>
          <div className="text-center">
            <Title className="text-white pb-3">Still have questions?</Title>
            <BrandButton onClick={handleFAQshow} className="">See our Faqs</BrandButton>
            <Modal show={showFAQ} onHide={handleFAQhide} centered size='lg' scrollable>
              <Modal.Body>
              <Accordion>
                <Accordion.Item eventKey='0' className='px-3 py-4'>
                <Accordion.Header>What is Developer Bootcamp?</Accordion.Header>
                <Accordion.Body>
                Employers around the country are experiencing a shortage of well-qualified software developers, and Kentucky is no different. 
                While there are several possible responses to this need, many regions have benefited from intensive training programs called Developer Bootcamps. 
                The general model is a 3-month program, in batches of 10-20 students, with a curriculum for full-stack web development jobs. 
                Bootcamps are taught by experienced software developers (10+ years industry experience), with a focus on quickly moving from basic skills to project experience.
                High job placement rates (&gt;80% within 180 days of graduation) are the target for these programs. 
                Successful programs are highly selective of their applicants, typically targeting college graduates and experienced professionals in their 20s, 30s, and 40s looking to make a career change.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1' className='px-3 py-3'>
                <Accordion.Header>Who should apply?</Accordion.Header>
                <Accordion.Body>
                Our ideal applicants are professional men and women who are looking to transition into a career in software development. 
                This program is not for everyone. Like all Awesome Inc initiatives, we've built this program on the foundation of our Core Values. 
                CV #2 (Be Excellent) is a big part of this program. We expect that many of our candidates will have deep experience in a related field, such as graphic design, math/finance, or project management. 
                Some applicants will have prior programming experience, maybe a class back in high school or college, but many will not.
                Most of our applicants reside in Kentucky, and desire to live and work in the region after Bootcamp. 
                Since the 12-week in-person phase of our program is full-time (8am - 5pm, five days per week), our candidates must be willing to sacrifice other commitments (such as outside employment) to focus on learning for that duration.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2' className='px-3 py-3'>
                <Accordion.Header>What is the cost of the Bootcamp?</Accordion.Header>
                <Accordion.Body>
                Tuition for the Bootcamp is $15,500. Financing and flexible payment plans are available. Once accepted, a $500 deposit is due to confirm your spot in the program. 
                If the only thing keeping you from participating in the program is finances, please contact us and we'll do our best to work with you to find a solution.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3' className='px-3 py-3'>
                <Accordion.Header>Are scholarships available?</Accordion.Header>
                <Accordion.Body>
                Yes. Through employer partners such as APAX Software, partial scholarships are available. 
                Once you've applied for the Bootcamp, please fill out the <a href='https://docs.google.com/forms/d/e/1FAIpQLSd9t_ECAVqVVHWNalx-hiUiOeRk7hk94uZQEGBu7Vt48Uu5PQ/viewform' className= 'link--brand'>scholarship application</a> for more information.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4' className='px-3 py-3'>
                <Accordion.Header>When is the next class?</Accordion.Header>
                <Accordion.Body>
                Our next Bootcamp cohort (Spring 2024, i.e. S24) begins Onboarding on Monday, March 4, 
                then moves to intensive classes from Monday, March 4 - Friday, June 21. The application deadline for the S24 cohort is Friday, January 19.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5' className='px-3 py-3'>
                <Accordion.Header>What will I learn?</Accordion.Header>
                <Accordion.Body>
                Our curriculum provides what we and our employer partners see as necessary skills for a junior-level software developer. 
                First, we'll help you learn how to learn (seriously, there are some lifehacks you'll wish you had during college chemistry class). 
                Then we will start with programming and computer science basics, dive into the building blocks of web pages (HTML, CSS, JS), then get into the server side of 
                web applications (databases, SQL, Python/Node.js/Ruby/PHP, web frameworks, AWS), all with plenty of exposure to modern development systems and tools (Git, GitHub, Agile, TDD, UI/UX design). 
                Through all of this, our focus is on making real, working software projects. We can print off a certificate for you at the end if you're the sentimental type, 
                but this experience is really about making things, working with a team, building your project portfolio, and networking with the local developers and companies who we hope will be your future co-workers and employers.
                As software development is a rapidly-changing field, we update some our specific technology offerings for each cohort. A few past offerings:
                <ul>
                  <li>Spring 2022 - Fall 2023: JavaScript, Python, React, MySQL, Django, GitPod, Google Cloud</li>
                  <li>Spring 2021 - Fall 2021: JavaScript, PHP, React, MySQL, Laravel, Codeanywhere</li>
                  <li>Fall 2019 - Fall 2020: JavaScript, PHP, React, MySQL, Laravel, Google Cloud</li>
                  <li>Fall 2017 - Spring 2019: JavaScript, PHP, VueJS, PostgreSQL or MySQL, Laravel, Heroku</li>
                  <li>Summer 2017: JavaScript, PHP, AngularJS, PostgreSQL, Laravel, Heroku</li>
                  <li>Fall 2016: JavaScript, Python, AngularJS, PostgreSQL, Django, AWS</li>
                </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6' className='px-3 py-3'>
                <Accordion.Header>What is Prework?</Accordion.Header>
                <Accordion.Body>
                Prework is like a summer reading assignment for Bootcamp. It's what our accepted students work on independently prior to working with our instructional team.
                Prework helps to prepare students for Onboarding, the first four weeks of lessons which are delivered remotely. 
                This helps us to hit the ground running on week one of the intensive Bootcamp phase, while minimizing the time our students spend out of full-time work. 
                Our students start with different prior experiences, so we want to make sure everyone is starting at (nearly) the same spot.
                And we want that spot to be somewhere beyond absolute zero. Our program is an intense 16 weeks, but without the prework, we couldn't fit in all that you'll need.
                The Intro to Web Development is a part-time, evening course intended to cover most of the Prework and Onboarding content, 
                with the added benefits of an in-person instructor and a slower pace (nine weeks instead of four). For someone who wants to explore coding before committing to Bootcamp,
                 or who wants to get a head start on Bootcamp content, the <a href='intro-to-web-development' className='link--brand'>Intro to Web Development</a> is a great opportunity.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7' className='px-3 py-3'>
                <Accordion.Header>Do I need a laptop?</Accordion.Header>
                <Accordion.Body>
                Yes, students are required to furnish their own laptop computer for the Bootcamp program. The minimum requirements are:
                <ul>
                  <li>Operating System: the latest version of macOS (recommended), Windows, or Ubuntu</li>
                  <li>Processor: Intel Core i5 or faster (recommended: <a href='https://browser.geekbench.com/mac-benchmarks' className='link--brand'>Geekbench score</a> &gt;600)</li>
                  <li>RAM: 8 GB</li>
                </ul>
                </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Modal.Body>
            </Modal>
          </div>
        </Container>
      </section>

    </Layout>
  );
};

export default BootcampPage;
