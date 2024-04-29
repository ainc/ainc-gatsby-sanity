import React, {useState} from "react";
import { useRef } from "react";
import { graphql } from "gatsby";
import { Container, Col, Row, Image, Modal, Accordion} from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import {InlineWidget} from 'react-calendly'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { motion, useMotionValue } from "framer-motion";

import ApplyNowModal from "../fellowship/Components/ApplyNowModal";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import GradStat from "./Components/GradStat/GradStat";
import Layout from "../../components/Layout/Layout";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ShieldsRow from "./Components/ShieldsRow/ShieldsRow";
import SideNav from "./Components/SideNav/SideNav"
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from "../../components/UI/Title/Title";
import ZohoSales from "../../components/Scripts/ZohoSales";
import Arrow from "../../images/arrow.png";
import { FaPlay } from "react-icons/fa";
import Thumbnail from '../../images/bootcamp-video-thumbnail.jpg'
import ModalCustom from "../../components/Modal/ModalCustom";
import AlumniTestimonials from "./Components/AlumniTestimonials/AlumniTestimonials";
import AlumniAvatarCardCarousel from "./Components/AlumniAvatarCard/AlumniAvatarCardCarousel";

import { FaStar } from 'react-icons/fa';

import "../../styles/main.scss"
import * as styles from './bootcamp.module.scss'

import ApplyForm from "./Components/ApplyForm/ApplyForm";

import bootcamp1 from "../../images/bootcamp/bootcamp1.jpg"
import bootcamp2 from "../../images/bootcamp/bootcamp2.jpg"
import bootcamp3 from "../../images/bootcamp/bootcamp3.png"
import bootcamp4 from "../../images/bootcamp/bootcamp4.png"
import bootcamp5 from "../../images/bootcamp/bootcamp5.png"

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
    previousEndDate(formatString: "MMMM DD, YYYY")
    previousStartDate(formatString: "MMMM DD, YYYY")
    upcomingEndDate(formatString: "MMMM DD, YYYY")
    upcomingStartDate(formatString: "MMMM DD, YYYY")
  }
  allSanityBootcampImageTestimonials {
    nodes {
      testimonials {
        title
        testimonials {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
  allSanityBootcampAlumni {
    nodes {
      featuredAlumni
      companyLogo {
        asset {
          gatsbyImageData
        }
      }
      jobTitle
      name
      picture {
        asset {
          gatsbyImageData
        }
      }
    }
  }
}
`

const BootcampPage = props => {

  const { data, errors } = props;


  const testimonials = (data.allSanityBootcampTestimonials.nodes || {})
  
  const featuredAlumni = (data.allSanityBootcampAlumni.nodes.filter(node => node.featuredAlumni === true) || {});

  const testimonial1 = testimonials[0]
  const testimonial2 = testimonials[1]
  const testimonial3 = testimonials[2]

  const imageTestimonials = (data.allSanityBootcampImageTestimonials.nodes.at(-1) || {})
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

  const [videoShow, setVideoShow] = useState(false)
  const handleVideoShow = () => setVideoShow(true)
  const handleVideoClose = () => setVideoShow(false)
  const stars = Array(5).fill(null).map((_, index) => (
    <FaStar key={index} />
  ));

  return ( 
    <Layout jsImport={ZohoSales}>

      {/* Add SEO Component Here?? */}
      
      {/* Header section */}
      <section id="header">
        <Container fluid className={`${styles.header} overflow-hidden`}>
          <Container>
          <Row className={`${styles.titleBlock} mt-5 d-flex`}>
            <Col md={5} className={`${styles.titleBlock} align-items-start text-left d-flex flex-column`}>
              <Row className={`${styles.ratingContainer} d-none d-md-flex align-items-center mb-3`}>
                <div className="d-flex flex-row align-items-center">
                    <div className='d-flex' style={{color: '#C12029'}}>{stars}</div>
                    <p className={`${styles.reviewText} d-flex text-black mb-0 ms-3`}>4.8/5 - 100+ reviews</p>
                </div>
              </Row>
              <Title className='white text-uppercase'>Land your dream tech job, guaranteed</Title>
              <h4 className= "text-start white mt-4 fw-lighter d-none d-md-block"><b>Hate your job? Our in-person 16-week bootcamp helps you master full stack development, get access to 1:1 mentorship, and land a job in 6 months or we'll refund your tuition.</b></h4>
            </Col>
            <Col md={7} className='d-flex justify-content-center justify-content-md-end'>
              <ApplyForm />
            </Col>
          </Row>
          </Container>
        </Container>
      </section>

      {/* Header stats */}
      <section id="stats" style={{backgroundColor: "#323232"}} className="background--brand">
        <Container className={`${styles.stats}`}> 
            <Row className="py-5 justify-content-center mx-5">
              {gradStats.map((node,i) => (
                <Col key={i} className={`${styles.statsRow} justify-content-center text-center`}>
                  <GradStat
                    image={node.picture.asset.gatsbyImageData}
                    alt={node.title}
                    stat={node.stat}
                    subtitle={node.title}
                    subtext={node.subtitle}
                  ></GradStat>
                </Col>
              ))}
            </Row>
            <Row className="mt-4">
                <Col className="d-flex justify-content-center pb-4">
                        <ApplyNowModal link="https://forms.zohopublic.com/virtualoffice9155/form/EmailSubscription/formperma/DpCKAlyxEJ-dLzdhzYuvhtQ8sCUVAbu4fE3JEMuAPqI"
                        title="Download Program Guide"
                        className="button mt-3"
                        />
                </Col>
              </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col className= "col-1 d-none d-sm-block"> {/* Hidden on mobile */}
              <SideNav/>
          </Col>
          </Row>
      </Container>
      {/* Job Guarantee */}
      <section id="job-guarantee">
        <Container fluid className={`${styles.jobGuarantee}`}>
          <Row className={styles.imgRow}>
            <Col className="d-flex justify-content-center">
              <motion.div initial={{ opacity: 0, y: -50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.8 }}>
              <StaticImage placeholder="blurred" alt="Job Guarantee" src='../../images/bootcamp/job-guaranteed.png' style={{maxWidth: "275px"}} />
              </motion.div>
            </Col>
          </Row>
          <Row className="mx-3">
            <Col className="d-flex justify-content-center">
              <Subtitle style={{fontSize:"1rem", width:"750px", lineHeight:"25px"}} className={`text-white text-center fs-6`}>We only succeed when you succeed. We guarantee that all students who complete the 16-week Bootcamp program and uphold the job search requirements will receive a job offer within six months of their graduation date, or we'll refund your tuition. See our Student Agreement for details.</Subtitle>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Alumni Testimonials */}
      <section id="testimonials">
      <AlumniTestimonials />
      
      {/* Alumni Avatar Bar */}
      <AlumniAvatarCardCarousel featuredAlumni={featuredAlumni}/>
      </section>
       

      {/* Two Buttons Section */}
      <section id="two-buttons" className="">
        <Container fluid className={`${styles.twoButtons}`} >
              <Row className={`${styles.twoButtonsRow} align-items-center justify-content-center`}>
                <Col  xs={12} sm ={12}  md={5} lg={5} xl={4} className={`${styles.leftButtonCol} text-center align-items-center`}>
                  <motion.div initial={{ opacity: 0, y: -50}}
                      whileInView={{ opacity: 1, y: 0}}
                      transition={{ delay: 0.3, duration: 1 }}>
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
                  </motion.div>
                </Col>
                <Col  xs={12} sm ={12}  md={5} lg={5} xl={4} className={`${styles.rightButtonCol} text-center align-items-center`}>
                  <motion.div initial={{ opacity: 0, y: 50}}
                      whileInView={{ opacity: 1, y: 0}}
                      transition={{ delay: 0.3, duration: 1 }}>
                  <Row className="">
                    <div className="text-center">
                    <img className='my-3' style={{maxWidth:"70px"}} src={require('/src/images/bootcamp/MoneyCircle.svg').default} alt="Money Circle" />
                    </div>
                  </Row>
                  <Row className="">
                    <Title className="text-center py-2 fs-3 text--medium white">Pay nothing until you land a job!</Title>
                    <div>
                    <BrandButton onClick={() => scrollToSection(sectionCost)} className="justify-content-center">See How Here</BrandButton>
                    </div>
                  </Row>
                 </motion.div>
                </Col>
              </Row>
        </Container>
      </section>

      {/*What to expect video */}
      <Container fluid className={`my-5`}>
        <Row className='text-center'>
          <h3 className={styles.videoTitle}>Curious about the process?</h3>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          
          {/* Video */}
          {/* For small screens, display external link */}
          <Col xs={12} className="text-center d-md-none">
          <div className={styles.videoThumbnail}>
            <a href="https://www.youtube.com/watch?v=xmZ6jVn0QWM" target="_blank" rel="noopener noreferrer">
              <Image className={styles.videoFilter} src={Thumbnail} alt="Awesome Inc video link img" />
              <i className={styles.playIcon}>
                <FaPlay />
              </i>
            </a>
            </div>
          </Col>
          {/* For large screens, display modal */}
          <Col md={6} lg={7} className="text-center justify-content-center d-none d-md-flex">
              <div className={styles.videoThumbnail}>
                  {/* Youtube Link */}
                  <a onClick={handleVideoShow} target="_blank" rel="noopener noreferrer">
                    <Image className={styles.videoFilter} src={Thumbnail} alt="Awesome Inc video link img" />
                    <i className={styles.playIcon}>
                      <FaPlay />
                    </i>
                  </a>
            </div>
          </Col>
          <ModalCustom 
          lgShow = {videoShow} 
          hide = {handleVideoClose}
          bgDark = {false} 
          centered
          content = {
            <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/xmZ6jVn0QWM?si=fadOfcz6mpNiL-jd" 
            title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
          }/>
          <Col md={3} className="d-none d-md-block"></Col>
        </Row>
      </Container>

      {/* Learn skills */}
      <section id="learn-skills">
        <Container className="mt-3 px-5">
          <Row className={styles.learnHeader}>
            <Title className={`text-center`}>Learn all the skills you need to launch a lasting tech&nbsp;career</Title>
            <Subtitle className={`text-center`} style={{fontSize: '1rem'}}>Our 16-week bootcamp is designed to give you the foundational skills in all areas of software development and career&nbsp;growth.</Subtitle>
          </Row>
          <Row className="py-3 align-items-top">
            <Col lg={6} className={`d-flex justify-content-center`}>
                <div className={`justify-content-center`}>
                  <Title className="py-3 text-center" style={{marginLeft: ""}}>Access to full-time career coach for support&nbsp;24/7</Title>
                  <p className={`mb-3 ${styles.whyAwesomeIncBorder} d-flex align-items-center text-center`} style={{minHeight: '16vh'}}>
                    Having in-demand tech skills is just one piece of the puzzle. At Awesome Inc, you’ll get one-on-one guidance through a dedicated career coach to learn hands on skills to ace your job search and land a role you love. We pride ourselves on instructors who really&nbsp;care. 
                  </p>
                  <div className="d-flex justify-content-center">
                    <a href='#header'>
                      <BrandButton className={`my-3`} style={{marginLeft: "0rem"}} >Apply Now</BrandButton>
                    </a>
                  </div>
                </div>
            </Col>
            <Col lg={6} className={`d-flex justify-content-center`}>
                <div className={``}>
                  <Title className="py-3 text-center" style={{marginLeft: "0px"}}>In-person learning for direct mentorship & collaboration</Title>
                  <p className={`mb-3 d-flex align-items-center text-center`} style={{minHeight: '16vh'}}>
                  Have a question? Stuck on a problem? Support is just one room away with our in-person program. We bring students and instructors together in a dynamic setting all while building a network of peers that will support you whenever you need&nbsp;it. 
                  </p>
                  <div className="d-flex justify-content-center">
                  <a href='#header'>
                    <BrandButton className={`my-3`} style={{marginLeft: "0rem"}}>Apply Now</BrandButton>
                  </a>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>



      {/* More than a bootcamp */}
      <section id="more-than-bootcamp" className="pb-5" style={{backgroundColor:"#C02129"}} >
        <Container className="pt-5">
          <Title className={`text-center text-white`}>More than a bootcamp.</Title>
          <Title className={`text-center text-white`}>Join a tech network for life.</Title>
          <Subtitle className={`text-center m-auto mb-5 text-white`} style={{fontSize: '1rem', maxWidth: '60%'}}>At Awesome Inc, you’re part of a supportive community of tech enthusiasts who are just as passionate as you are. Enjoy frequent events & build lifelong friendships worth more than anything. </Subtitle>
          <Row className="d-flex justify-content-center text-center" style={{color: '#C12029'}}>
            <Col md={4}>
              <Title className="text-white">175+</Title>
              <p className="fw-bold text-white">past alumni</p>
            </Col>
            <Col md={4}>
              <Title className="text-white">50+</Title>
              <p className="fw-bold text-white">alumni meetups</p>
            </Col>
            <Col md={4}>
              <Title className="brand text-white">86%</Title>
              <p className="fw-bold text-white">satisfaction rate</p>
            </Col>
          </Row>
          
          <Col className={`${styles.gallery} mt-3`}>
            <Row style={{width: '100%', height: '40%', paddingBottom: '5px'}} className="mx-auto">
              <Image src={bootcamp5} alt={"Bootcamp 5"} style={{width: '20%', paddingRight: '5px'}} className={styles.galleryPhoto}/>
              <Image src={bootcamp4} alt={"Bootcamp 4"} style={{width: '15%', padding: '0px 5px'}} className={styles.galleryPhoto}/>
              <Image src={bootcamp3} alt={"Bootcamp 3"} style={{width: '65%', paddingLeft: '5px'}} className={styles.galleryPhoto}/>
            </Row>
            <Row style={{width: '100%', height: '60%', paddingTop: '5px'}} className="mx-auto">
              <Image src={bootcamp1} alt={"Bootcamp 1"} style={{width: '70%', paddingRight: '5px'}} className={styles.galleryPhoto}/>
              <Image src={bootcamp2} alt={"Bootcamp 2"} style={{width: '30%', paddingLeft: '5px'}} className={styles.galleryPhoto}/>
            </Row>
        </Col>
          
        </Container>
        
      </section>


      {/* Employers */}
      <section id="employers" className="py-4">
        <Container className="py-4">
          <Row className="">
            <Col>
              <Row className="mt-4">
                <Title className="text-uppercase text-center mt-4">Companies who have hired our graduates</Title>
              </Row>
              <Col>
                <motion.div initial={{ opacity: 0, y: -50}}
                      whileInView={{ opacity: 1, y: 0}}
                      transition={{ delay: 0.3, duration: 1 }}>
                  <Row className="row-cols-lg-5 mt-lg-5 mb-lg-1 mx-lg-5">
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
                </motion.div>
                <div className="text-center">
                  <p style={{ marginTop: `0`, fontSize: `10px`}}>
                    <b>and over 50 more companies</b>
                  </p>
                </div>
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
          <motion.div initial={{ opacity: 0, y: -50}}
                      whileInView={{ opacity: 1, y: 0}}
                      transition={{ delay: 0.3, duration: 1 }}>
          <Container>
                <Row className={`${styles.languageIcons} d-flex justify-content-center py-4`}>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <StaticImage placeholder="blurred" src="../../images/bootcamp/languages/html.png" alt="HTML" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <StaticImage placeholder="blurred" src="../../images/bootcamp/languages/css.png" alt="CSS" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <StaticImage placeholder="blurred" src="../../images/bootcamp/languages/javascript.png" alt="JavaScript" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center"> 
                    <StaticImage placeholder="blurred" src="https://d33wubrfki0l68.cloudfront.net/27b5922e90fa2d54a0c37d426870c849e8a41c72/b2845/assets/img/bootcamp/languages/python.png" alt="Python Programming language" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                   <StaticImage placeholder="blurred" src="../../images/bootcamp/languages/git.png" alt="Git" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center align-items-center">
                    <StaticImage placeholder="blurred" src="https://d33wubrfki0l68.cloudfront.net/4aa1ba4778ed686e1877a7c5ef5875e364033ca8/f7b05/assets/img/bootcamp/languages/django.png" alt="Django Framework" style={{maxWidth: "150px"}} className='mt-3'/>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <StaticImage placeholder="blurred" src="https://d33wubrfki0l68.cloudfront.net/ee9d2a6ac7c95e3ee2695ce7a14627abeb797b0f/4631a/assets/img/bootcamp/languages/react.png" style={{maxWidth: "150px"}} alt="React Framework"/>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <StaticImage placeholder="blurred" src="../../images/bootcamp/languages/agile.png" alt="Agile" style={{maxWidth: "150px"}}/>
                  </Col>
              </Row>
          </Container>
          </motion.div>
          <Container>
            <Row>
              <p style={{fontSize:"1rem"}} className="pt-5 text-center">
                With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using HTML, CSS, JavaScript, web frameworks, GitHub, Agile, and more.
              </p>
              <p style={{fontSize:"1rem"}} className="pb-5 text-justify text-center">
                Students begin with a part-time Prework phase, with 4 weeks of remote lessons covering the basics of web development. After that, we kick it into high gear for 12 weeks of full-time, in-person training. We've designed Bootcamp to feel less like school, and more like you first 3 months on the job. By the conclusion of the combined 16-week program, our alumni are ready to interview with regional and national employers for the opportunity to earn a full-time position at a competitive junior developer's salary.
              </p>
            </Row>
          </Container>
          
            

        </Container>

      
      </section>

      {/* Apply */}
    <section id="apply">
        <Container className={`${styles.apply} justify-content-center text-justify py-5`}>
          <Row>
          <Title className="text-center text-bold text-uppercase">Applying For Bootcamp</Title>
          <h6 className="text-center fsw-lighter mt-4">There is a four-step, competitive application process for the Bootcamp program:</h6>
          </Row>
          <Col className={`${styles.applyCol} mb-5 justify-content-center`}>
              <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }} className={`d-flex justify-content-center`}>
              <div>
                <StaticImage placeholder="blurred" alt="Bootcamp online application" src="../../images/bootcamp/online-application.png" className="" style={{maxWidth:"180px"}}/>
              </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }} className={`${styles.applyCol} justify-content-center mb-5 mt-5`}>
              <div className="d-flex align-items-center">
                <StaticImage placeholder="blurred" alt="Arrow steps" src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg} `} style={{maxWidth:"180px"}}/>
              </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }} className={`d-flex justify-content-center`}>
              <div>
                    <StaticImage placeholder="blurred" alt="Basic challenges" src="../../images/bootcamp/basic-challenge.png" className="" style={{maxWidth:"180px"}}/>
              </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }} className={`${styles.applyCol} justify-content-center mb-5 mt-5`}>
              <div className="d-flex align-items-center">
                <StaticImage placeholder="blurred" alt="Arrow steps" src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg}`} style={{maxWidth:"180px"}}/>
              </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }} className={`d-flex justify-content-center`}>
              <div>
                    <StaticImage placeholder="blurred" alt="in person interview" src="../../images/bootcamp/in-person-interview.png" className="" style={{maxWidth:"180px"}}/>
              </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: .9, duration: 0.8 }} className={`${styles.applyCol} justify-content-center mb-5 mt-5`}>
              <div className="d-flex align-items-center" >
                <StaticImage placeholder="blurred" alt="Arrow steps" src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg}`} style={{maxWidth:"180px"}}/>
              </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }} className={`d-flex justify-content-center`}>
              <div>
                    <StaticImage placeholder="blurred" alt="Figure it out challenge" src="../../images/bootcamp/fio-challenge.png" className="" style={{maxWidth:"180px"}}/>
              </div>
              </motion.div>
          </Col>
          <Row className="justify-content-center">
          <p style={{fontSize:"1rem", width:"900px"}} className="text-justify">This process helps us to find top-quality applicants for the Bootcamp. We continue to be surprised and inspired by the variety of different educational and professional backgrounds rfom which our students come to Bootcamp. Contrary to stereotypes about software developers, there's not just on archetype that's a good fit for this career. Our goal throughout the application process is to find people who, in their own unique way, are ready to dive into a software development career through the accelerated learning environment we provide. For more on this, check out our blog post 
          <a href='https://www.awesomeinc.org/blog/what-we-look-for-in-a-bootcamp-student' className='link--brand' target='_blank'> What We Look For In A Bootcamp Student.</a></p>
          </Row>
          <Row className={`${styles.applyButtons} justify-content-center`}>
            <div xs={12} sm={12} md={4} lg={4} xl={3} className="col-xs-12 col-sm-12 col-md-3 col-lg-3 offset-lg-1 col-xl-2 offset-xl-1 mb-3 d-flex justify-content-center">
              <a href="#header"><BrandButton>Apply Now</BrandButton></a>
            </div>
          
            <div  xs={12} sm={12} md={4} lg={4} xl={3}  className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-3 d-flex justify-content-center ">
            <BrandButton onClick={handleShow}>Schedule Call or Visit</BrandButton>
                <Modal show={showWidget} onHide={handleClose} centered>
                    <InlineWidget url="https://calendly.com/ainc/awesome-inc-call" />
                </Modal>
            </div>
            <div xs={12} sm={12} md={4} lg={4} xl={3} className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 mb-3 d-flex justify-content-center ">
                    <ApplyNowModal link="https://forms.zohopublic.com/virtualoffice9155/form/EmailSubscription/formperma/DpCKAlyxEJ-dLzdhzYuvhtQ8sCUVAbu4fE3JEMuAPqI"
                     title="Download Program Guide"/>
            </div>
          </Row>
        </Container>
    </section>

      {/*Upcoming dates */}
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
                <Title className="text-center text--medium fw-bolder">{data.sanityBootcamp.previousStartDate}</Title>
                <h4>TO</h4>
                <Title className="text-center text--medium fw-bolder">{data.sanityBootcamp.previousEndDate}</Title>
                <BrandButton className="secondary btn--small my-2" disabled="">APPLICATIONS CLOSED</BrandButton>

              </Col>
              <Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center  me-auto my-4">
                <Title className="text-center text--medium brand fw-bolder">{data.sanityBootcamp.upcomingStartDate}</Title>
                <h4 className="brand">TO</h4>
                <Title className="text-center text--medium brand fw-bolder">{data.sanityBootcamp.upcomingEndDate}</Title>
                <a href="#header"><BrandButton className="justify-content-center btn--small my-2" disabled="">APPLY NOW</BrandButton></a>
              </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section id="timeline" style={{backgroundColor: "#e6e7e8"}} className="pt-5 mb-3">
        <Container className={`${styles.timeline} pt-5 justify-content-center`}>
            <div className={`${styles.titleDiv} justify-content-center`}>
              <Title className={`${styles.timelineTitle} d-flex`}>Timeline</Title>
            </div>
            <Col  sm={12} md={12} lg={12} xl={9}>
              <Row className="">
                <p style={{fontSize:"1rem"}}className="text-justify">This is a realistic timeline of what a Web Developer Bootcamp student can expect from applying to the program to becoming a proud alumni.</p>
              </Row>
              <Row className="">
                <img style={{maxWidth:""}}className="text-center pl-2 mb-3" src={require('/src/images/bootcamp/timeline.png').default} alt=""/>
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
                      landed a job making $45,000/year or more. Want to know 
                      more? Schedule a call today!
                    </p>
                  </Row>
                </Col>
                
                
                <Col>
                  <Row className="">
                    <div className="text-center ms-auto">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/Money_in_Hand.svg').default} alt="Moeny In Hand" />
                    </div>
                  </Row>
                  <Row className="">
                    <Title className="text-center py-4 ms-auto text--medium">Up-Front Payment</Title>
                  </Row>
                  <Row className="mx-5">
                    <p style={{fontSize:"1rem"}} className="text-justify text-center">
                      Students who choose to pay tuition up front are offered a discounted tuition rate of $15,500.
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
