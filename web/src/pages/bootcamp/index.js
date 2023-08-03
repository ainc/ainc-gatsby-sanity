import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
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
import Countdown from "../bootcamp/countdown";
// import '../../styles/mixins/responsive.scss';

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
    launchAt(formatString: "")
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

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return ( 
    <Layout pageTitle="Bootcamp">
      <SEO/>
      {/* Add SEO Component Here?? */}
      
      {/* Header section */}
      {/* https://www.awesomeinc.org/assets/img/bootcamp/hero-image-2-min.jpg */}
      <section id="header">
        <Container fluid className={`${styles.header} overflow-hidden`}>
        <Container className='overflow-hidden'>

          <Row className="mt-5 ms-5">
            <Col xs={12} sm={{span: 8, offset: 4}}>
              <div className={`${styles.titleBlock} align-items-end d-flex flex-column me-5`}>
                <Title id="title" className='white text-uppercase text--big'> Launch your <br/> tech career</Title>
                <h3 className="w-50 text-end lh-md white mt-4 fw-lighter"><b>A 16 week immersive Bootcamp where you'll learn Full Stack coding skills to land a tech job... or your money back.</b></h3>
                <BrandButton className="mt-3">Get Started</BrandButton>
                <h5 className="fst-italic fw-lighter">Start your application in less than 30 seconds</h5>

              </div>
            
            </Col>
            <Col  className= "mt-5 col-2 pt-5 d-none d-sm-block"> {/* Hidden on mobile */}
              {/* <SideNav/> */}
            </Col>
            
          </Row>
          
          </Container>

        </Container>
      </section>



      <section id ="bootcamp-upcoming-dates">
        <Container className={`pt-5 pb-4`}>
          <Row>
              <Col>
                <Title className="text-center text--medium my-2">UPCOMING PROGRAM DATES</Title>
                {/* <Subtitle className="text-center brand fst-italic fw-light fs-6">(your answer is safe with us, we promise.)</Subtitle> */}
              </Col>
          </Row>
              <Col>
                <Title className="text-center text--small my-3">Final Application Deadline</Title>
                <Title id="countdown" className="text-center text--small">7d 12h 59m 27s</Title>
                <Countdown data={data.sanityBootcamp.launchAt}/>
                <h5 className="text-center fw-bold fst-italic"> Guarantees open spots for next class</h5>
              </Col>
          <Row>
              <Col xs={12} sm ={12}  md={4} lg={3} xl={3}  className={` ${styles.bootcampUpcomingdates} text-center ms-auto my-4`}>
              <Title className="text-center text--small"><strong>MAY 22, 2023</strong></Title>
              <h4>TO</h4>
              <Title className="text-center text--small"><strong>AUGUST 25, 2023</strong></Title>
              <BrandButton className="secondary" disabled="">APPLICATIONS CLOSED</BrandButton>

              </Col>
              <Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center  me-auto my-4">
              <Title className="text-center text--small brand "><strong>AUG 21, 2023</strong></Title>
              <h4><font color = "#C12029">TO</font></h4>
              <Title className="text-center text--small brand"><strong>DECEMBER 08, 2023</strong></Title>
              <BrandButton className="" disabled="">APPLY NOW</BrandButton>
              </Col>
          </Row>


        </Container>
      </section>
       

      {/* Two Buttons Section */}
      {/* <section id="two-buttons">
        <Container fluid className="background--grey py-4">
          <Row className="text-center py-5 mx-auto">
            <Col  xs={11} sm={5} className={`${styles.leftButtonCol} justify-content-center text-center border-right--white`}>
              <div>
                <img style={{maxWidth: "80px"}} src={require('/src/images/bootcamp/QuestionCircle.svg').default} alt="Question Circle" />
              </div>
              <Title className="text-center text-white fs-4 my-4 py-3">Have a few questions?</Title>
              <BrandButton className="justify-content-center" style={{marginTop: "5px"}}>Download Program Guide</BrandButton>
            </Col>
            <Col xs={11} sm={4} className={`${styles.rightButtonCol} justify-content-center text-center`}>
              <div>
                <img style={{maxWidth: "80px"}} src={require('/src/images/bootcamp/MoneyCircle.svg').default} alt="Money Circle" />
              </div>
              <Title className="text-center text-white fs-4 my-4 py-1">Pay nothing until you<br /> land a job!</Title>
              <BrandButton className="justify-content-center">See How Here</BrandButton>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section id="two-buttons">
        <Container fluid className="background--grey">
          <Row className={`${styles.twoButtonsRow}`}>
            <Col xs={12} sm={12} md={3} lg={4} xl={4} className= {`${styles.leftButtonCol} justify-content-center text-center ms-auto`}>
              <img className='my-3'style={{}} src={require('/src/images/bootcamp/QuestionCircle.svg').default} alt="Question Circle" />
              <Title className="text-white my-3">Have a few questions?</Title>
              <BrandButton className="justify-content-center btn--small small--text my-3" style={{marginTop: "5px"}}>Download Program Guide</BrandButton>

            </Col>
            <Col xs={12} sm={12} md={3} lg={4} xl={4} className={`${styles.rightButtonCol} justify-content-center text-center me-auto`}>
            <img className='my-3' style={{}} src={require('/src/images/bootcamp/MoneyCircle.svg').default} alt="Money Circle" />
            <Title style={{maxWidth: ""}} className="text-white my-3">Pay nothing until you land your job!</Title>
            <BrandButton className="justify-content-center btn--small small--text my-3">See How Here</BrandButton>


            </Col>
          </Row>
        </Container>

      </section> */}
    
      <section id="two-buttons" className="">
        <Container fluid className={`${styles.twoButtons}`} >
          <Row>
            <Col className="">
              <Row className={styles.twoButtonsRow} >
                <Col  className={`${styles.leftButtonCol} text-center ms-auto`}>
                  <Row>
                    <div className="text-center">
                    <img className='my-3'style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/QuestionCircle.svg').default} alt="Question Circle" />                    </div>
                  </Row>
                  <Row>
                    <Title className="text-center py-4 fs-3 text--medium">Have a few questions?</Title>
                    <div>
                    <BrandButton>Download Program Guide</BrandButton>
                    </div>
                  </Row>
                </Col>
                <Col  className={`${styles.rightButtonCol} text-center me-auto`}>
                  <Row className="me-5">
                    <div className="text-center ms-3">
                    <img className='my-3' style={{maxWidth:"100px"}} src={require('/src/images/bootcamp/MoneyCircle.svg').default} alt="Money Circle" />
                    </div>
                  </Row>
                  <Row className="me-5">
                    <Title className="text-center py-4 fs-3 text--medium">Pay nothing until you land your job!</Title>
                    <div>
                    <BrandButton>See how here</BrandButton>
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
        <Container className="py-5">
          <Row>
            <Col>
              <Title className="text-center brand fs-3 text--medium">Answer honestly...</Title>
              <Subtitle className="text-center brand fst-italic fw-light fs-6 subtitle--small">(your answer is safe with us, we promise.)</Subtitle>
            </Col>
          </Row>
          <Col>
            <Row className="py-5 ps-3 text-center" style={{maxWidth: "90%"}}>
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
                <BrandButton className="text-center brand">More Alumni</BrandButton>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      {/* Motivational Quote */}
      <section id="motivational">
        <Container className={`py-4`}>
          <Row className="py-4 mx-5 px-5">
            <Col className="mx-auto py-2 col-">
              <Title className="text-center brand fs-5 text--small fw-bold">"You don't have to feel trapped. Earn your freedom, work when & where you want. Earn a living in just 40 hours a week."</Title>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Awesome Inc Header */}
      <section id="why-awesome-inc-header" className={styles.whyAwesomeIncHeader}>
        <div></div>
      </section>

      {/* Why Awesome Inc */}
      {/* <section id="why-awesome-inc">
        <Container className={`${styles.whyAwesomeinc} py-5 pe-5`}>
          <Row className="py-3 pe-3 mx-auto">
            <Col xs={12} sm={12} md={5} lg={6} className={`${styles.textCol} ps-5 me-auto`}>
              <Title className="text-uppercase py-3" style={{marginLeft: "70px"}}>Why Awesome Inc?</Title>
              <Row className={`${styles.textRow} border-right--brand`}>
                <p className="text-justify mb-3 w-75 mx-auto">At Awesome Inc, everything we do starts with our Core Values. 
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
            <Col xs={12} sm={12} md={5} lg={6}className="ms-auto">
              <ProfileCard
              image={profCard.picture.asset.gatsbyImageData} 
              name={profCard.name}
              text1={profCard.text1} 
              text2={profCard.text2} 
              />
            </Col>
          </Row>
        </Container>
      </section> */}



      <section id="why-awesome-inc">
        <Container className={`${styles.whyAwesomeinc} py-5 pe-5`}>
          <Row className="py-3 pe-3 mx-auto">
            <Col xs={12} sm={12} md={8} lg={7} xl={6} className={`ps-5`}>

                <div className={`${styles.leftCol}`}>
                <Title className="text-uppercase py-3" style={{marginLeft: "0px"}}>Why Awesome Inc?</Title>
                <p style={{borderRight:"2px solid #C12029"}} className={` text-justify mb-3 mt-4 pe-4`}>At Awesome Inc, everything we do starts with our Core Values. 
                  We care about people, and making a difference in our community. 
                  That's why we want to help 120 everyone we can learn the life changing skill of coding. 
                  And while doing that, we've seen that the best way to learn a new skill is to get 
                  the right help on your journey. It's so easy to waste time trying to learn something 
                  by yourself, constantly running into problems, and getting frustrated along the way, 
                  but we're here to help! With coaching from Senior Developers and a curriculum built 
                  for you, we're ready to meet you where you're at, even if you're at step 0.
                </p>
                <BrandButton className={` mt-3`} style={{marginLeft: "0px"}}>Schedule Call</BrandButton>

                </div>
            </Col>
            <Col xs={0} sm={0} md={4} lg={5} xl={4} className={`${styles.rightCol}` }>
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

      {/* <section id="why-awesome-inc">
        <Container className={``}>
          <Row className="">
            <Col className={``}>
                <Title className="text-uppercase py-3" style={{marginLeft: "30px"}}>Why Awesome Inc?</Title>
                <p className="text-justify">At Awesome Inc, everything we do starts with our Core Values. 
                  We care about people, and making a difference in our community. 
                  That's why we want to help everyone we can learn the life changing skill of coding. 
                  And while doing that, we've seen that the best way to learn a new skill is to get 
                  the right help on your journey. It's so easy to waste time trying to learn something 
                  by yourself, constantly running into problems, and getting frustrated along the way, 
                  but we're here to help! With coaching from Senior Developers and a curriculum built 
                  for you, we're ready to meet you where you're at, even if you're at step 0.
                </p>
            
              <BrandButton className="mt-3" style={{marginLeft: "0px"}}>Schedule Call</BrandButton>
            </Col>
            <Col className="ms-auto">
              <ProfileCard
              image={profCard.picture.asset.gatsbyImageData} 
              name={profCard.name}
              text1={profCard.text1} 
              text2={profCard.text2} 
              />
            
              
            </Col>
          </Row>
        </Container>
      </section> */}


      {/* Job Guarantee */}
      <section id="job-guarantee">
        <Container fluid className={styles.jobGuarantee}>
          <Row className={styles.imgRow}>
            <Col className="d-flex justify-content-center">
              <StaticImage src='../../images/bootcamp/job-guaranteed.png' alt='job guaranteed' style={{maxWidth: "275px"}}></StaticImage>
            </Col>
          </Row>
          <Row className="mx-5">
            <Col xs={11} className={`${styles.textCol} mx-auto`}>
              <Subtitle className={`${styles.jobGuaranteeText} text-white text-center fs-6`}>We only succeed when you succeed. We quarantee that all students who complete the 16-week Bootcamp program and uphold the job search requirements will receive a job offer within six months of their graduation date, or we'll refund your tuition. See our Student Agreement for details.</Subtitle>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      {/* <section id="stats" className="background--brand pe-3">
        <Container fluid className={`${styles.stats} py-4`}>
          <Row className="justify-content-center py-5 px-5 mx-5">
            <Row className="justify-content-center px-5 mx-5">
              <Row className="justify-content-center px-5 mx-5">
                <Row className="pe-5">
                  {gradStats.map((node,i) => (
                    <Col className={`${styles.statsCol} mt-2`}>
                      <Row className="text-center">
                        <GradStat
                        image={node.picture.asset.gatsbyImageData}
                        alt={node.title}
                        stat={node.stat}
                        subtitle={node.title}
                        subtext={node.subtitle}
                        ></GradStat>
                      </Row>
                    </Col>
                  ))}
                  <Row className="mt-4">
                    <Col className="d-flex justify-content-center">
                      <BrandButton className="button secondary mt-3">Download Program Guide</BrandButton>
                    </Col>
                  </Row>
                </Row>
              </Row>
            </Row>
          </Row>
        </Container>
      </section> */}

      <section id="stats" style={{backgroundColor: "#ED3742"}}className="background--brand pe-3">
        <Container fluid className={`${styles.stats} ms-3 py-5`}>
                <Row className="pz-0 mx-5 py-0 justify-content-center">
                  <Col className={`${styles.statsCol} justify-content-center`} >
                  {gradStats.map((node,i) => (
                    //  <Col className={`${styles.statsCol} mt-2`}>
                       <div  className={`${styles.statsRow}`}>
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
                      <BrandButton className="button secondary mt-3 ">Download Program Guide</BrandButton>
                    </Col>
                  </Row>
                </Row>
          
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
                <Row className="row-cols-lg-5 my-5 mx-5">
                  {employers.map((node,i) => (
                    <div class="text-center" xs={12} >
                      <GatsbyImage
                      style={{
                        maxWidth: "180px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginBottom: "10px",
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
      {/* <section id="languages">
        <Container fluid className={styles.languages}>
          <Row className="py-5 mx-5">
            <Col className="py-3">
              <Row>
                <Subtitle className="text-center fs-5 pb-3 mt-4"><b>With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using</b></Subtitle>
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
      </section> */}

<section id="languages">
        <Container fluid className={styles.languages}>
          <Row>
          <Subtitle style={{fontSize: "1.25rem"}}className="text-center fs-5 pb-3 mt-4"><b>With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using</b></Subtitle>
          </Row>
          <Row>
                <Col className={`${styles.languageIcons} d-flex justify-content-center py-4 flex-wrap`} xs={10} sm={12}>
                  <Col sm={3} md="auto" >
                    <StaticImage src="../../images/bootcamp/languages/html.png" alt="HTML" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col sm={3} md="auto">
                    <StaticImage src="../../images/bootcamp/languages/css.png" alt="CSS" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col sm={3} md="auto" >
                    <StaticImage src="../../images/bootcamp/languages/javascript.png" alt="JavaScript" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col sm={3} md="auto">
                  <StaticImage src="https://d33wubrfki0l68.cloudfront.net/27b5922e90fa2d54a0c37d426870c849e8a41c72/b2845/assets/img/bootcamp/languages/python.png" alt="Python Programming language" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col sm={3} md="auto">
                  <StaticImage src="../../images/bootcamp/languages/git.png" alt="Git" style={{maxWidth: "150px"}}/>
                  </Col>
                  <Col sm={3} md="auto">
                  <StaticImage src="https://d33wubrfki0l68.cloudfront.net/4aa1ba4778ed686e1877a7c5ef5875e364033ca8/f7b05/assets/img/bootcamp/languages/django.png" alt="Django Framework"/>
                  </Col>
                  <Col sm={3} md="auto">
                  <StaticImage src="https://d33wubrfki0l68.cloudfront.net/ee9d2a6ac7c95e3ee2695ce7a14627abeb797b0f/4631a/assets/img/bootcamp/languages/react.png" style={{maxWidth: "150px"}} alt="React Framework"/>
                  </Col>
                  <Col sm={3} md="auto">
                  <StaticImage src="../../images/bootcamp/languages/agile.png" alt="Agile" style={{maxWidth: "150px"}}/>
                  </Col>
                </Col>
          </Row>
          <Row>
            <p style={{}} className="pt-5">With over 500 hours of hands-on training, you'll gain experience while building 10+ projects using HTML, CSS, JavaScript, web frameworks, GitHub, Agile, and more.
          </p>
            <p className="pb-5">
            Students begin with a part-time Prework phase, with 4 weeks of remote lessons covering the basics of web development. After that, we kick it into high gear for 12 weeks of full-time, in-person training. We've designed Bootcamp to feel less like school, and more like you first 3 months on the job. By the conclusion of the combined 16-week program, our alumni are ready to interview with regional and national employers for the opportunity to earn a full-time position at a competitive junior developer's salary.
            </p>
          </Row>
          
            

        </Container>

      
      </section>

      {/* Apply */}
      {/* <section id="apply">
        <Container className="py-5">
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
      </section> */}


    <section id="apply">
        <Container className={`${styles.apply} justify-content-center text-justify py-5`}>
          <Row>
          <Title className="text-center text-bold text-uppercase">Applying For Bootcamp</Title>
          <h6 className="text-center fsw-lighter mt-4">There is a four-step, competitive application process for the Bootcamp program:</h6>
          </Row>
          <Col className={`${styles.applyCol} justify-content-center mb-5`}>
              <div>
                <StaticImage src="../../images/bootcamp/online-application.png" className="" style={{maxWidth:"250px"}}/>
              </div>
              <div className="d-flex align-items-center">
                <StaticImage src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg} mt-5`} style={{maxWidth:"250px"}}/>
              </div>
              <div>
                    <StaticImage src="../../images/bootcamp/basic-challenge.png" className="" style={{maxWidth:"250px"}}/>
              </div>
              <div className="d-flex align-items-center">
                <StaticImage src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg} mt-5`} style={{maxWidth:"250px"}}/>
              </div>
              <div>
                    <StaticImage src="../../images/bootcamp/in-person-interview.png" className="" style={{maxWidth:"250px"}}/>
              </div>
              <div className="d-flex align-items-center" >
                <StaticImage src="../../images/bootcamp/arrow-steps.png" className={`${styles.arrowImg} mt-5`} style={{maxWidth:"250px"}}/>
              </div>
              <div>
                    <StaticImage src="../../images/bootcamp/fio-challenge.png" className="" style={{maxWidth:"250px"}}/>
              </div>

          </Col>
          <Row>
          <p style={{fontSize:"15px"}} className="text-justify">This process helps us to find top-quality applicants for the Bootcamp. We continue to be surprised and inspired by the variety of different educational and professional backgrounds rfom which our students come to Bootcamp. Contrary to stereotypes about software developers, there's not just on archetype that's a good fit for this career. Our goal throughout the application process is to find people who, in their own unique way, are ready to dive into a software development career through the accelerated learning environment we provide. For more on this, check out our blog post What We Look For In A Bootcamp Student.</p>
          </Row>
          <Row className="justify-content-center">
            <div className="col-xl-2 offset-0">
              <BrandButton>Apply Now</BrandButton>
            </div>
          
            <div className="col-xl-2 offset-0">
              <BrandButton>Schedule A Visit</BrandButton>
            </div>
            <div className="col-xl-4 offset-0">
              <BrandButton>Download Program Guide</BrandButton>
            </div>
          </Row>

        </Container>
    </section>

      {/* Timeline */}
      {/* <section id="timeline" style={{backgroundColor: "lightgray"}} className="py-5 pe-5">
        <Container className="pt-5 pb-3 pe-3">
          <Row className="pe-5">
            <Col className="col-2">
              <VerticalTitle title="Timeline" />
            </Col>
            <Col className="col-xl-10 offset-xl-0 col-lg-9 col-offset-lg-1 pe-5 ">
              <Row className="mt-4 mb-5">
                <p className="text-justify fs-5 pb-3">This is a realistic timeline of what a Web Developer Bootcamp student can expect from applying to the program to becoming a proud alumni.</p>
              </Row>
              <Row className="mb-3">
                <img className="text-center pl-2" src={require('/src/images/bootcamp/timeline.png').default} alt=""/>
              </Row>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section id="timeline" style={{backgroundColor: "lightgray"}} className="py-5 pe-5">
        <Container className="pt-5 pb-3 pe-3">
          <Row className="pe-5">
            <Col className="col-2">
              <VerticalTitle title="Timeline" />
            </Col>
            <Col className="col-xl-10 offset-xl-0 col-lg-9 col-offset-lg-1 pe-5 ">
              <div className="mt-4 mb-5">
                <p className="text-justify fs-5 pb-3">This is a realistic timeline of what a Web Developer Bootcamp student can expect from applying to the program to becoming a proud alumni.</p>
              </div>
              <div className="mb-3">
                <img style={{maxWidth:"100%"}}className="text-center pl-2" src={require('/src/images/bootcamp/timeline.png').default} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section id="timeline" style={{backgroundColor: "#e6e7e8"}} className="pt-5 ">
        <Container className={`${styles.timeline} pt-5 justify-content-center`}>
            <div className={`${styles.titleDiv} justify-content-center`}>
              <Title className={`${styles.timelineTitle}`}>Timeline</Title>
            </div>
            <Col  sm={12} md={12} lg={12} xl={9}>
              <Row className="">
                <p style={{maxWidth:"",fontSize:"0.8rem"}}className="text-justify">This is a realistic timeline of what a Web Developer Bootcamp student can expect from applying to the program to becoming a proud alumni.</p>
              </Row>
              <Row className="">
                <img style={{maxWidth:"100%"}}className="text-center pl-2" src={require('/src/images/bootcamp/timeline.png').default} alt=""/>
              </Row>
            </Col>   
        </Container>
      </section>

      {/* Cost */}
      <section id="cost" className="py-5">
        <Container className={styles.cost}>
          <Row>
            <Col>
              <Row className="mt-2 mb-5">
                <Title className="text--huge brand text-center mt-4">The Cost</Title>
              </Row>
              <Row>
                <Col className={`${styles.costCol} text-center`}>
                  <Row>
                    <div className="text-center">
                      <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/cost.png').default} alt="Piggy Bank" />
                    </div>
                  </Row>
                  <Row>
                    <Title className="text-center py-4 fs-3">Income Share Agreement</Title>
                  </Row>
                  <Row className="mx-5">
                    <p  style={{fontSize:"0.75rem"}} className="text-justify">
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
                    <Title className="text-center py-5 ms-3">Up-Front Payment</Title>
                  </Row>
                  <Row className="mx-5">
                    <p style={{fontSize:"0.75rem"}} className="text-justify ">
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
      {/* <section id="still-unsure" className="pt-2">
        <Container fluid className={styles.stillUnsure}>
          <Row className="mt-5">
            <Col className="text-center">
              <Row className="col-10 text-center pt-5">
                  <Title className="text-center pt-5 pb-3">Still unsure? Here's everyone else who took this same leap and haven't looked back!</Title>
              </Row>
              <Row className="pt-3">
                <Col className="text-center">
                  <BrandButton className="my-3">Meet Alumni</BrandButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section id="still-unsure" className="pt-2">
        <Container fluid className={`${styles.stillUnsure} `}>
          <div className="mx-5 text-center">
            <Title className="text-center pt-5 pb-3">Still unsure? Here's everyone else who took this same leap and haven't looked back!</Title>
            <BrandButton className="my-3">Meet Alumni</BrandButton>
          </div>
        </Container>

      </section>

       {/* Questions */}
       {/* <section id="questions" className="w-100">
        <Container fluid className={styles.questions}>
          <Row className="text-center">
            <Col className="text-center mt-4">
              <Row className="text-center mt-5">
                <Title className="text-center text-white pt-5 mt-5">Still have questions?</Title>
              </Row>
              <Row className="pt-4">
                <Col className="text-center">
                  <BrandButton>See our Faqs</BrandButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section id="questions">
        <Container fluid className={`${styles.questions}`}>
          <div className="py-5 text-center">
            <Title className="text-white pt-5 pb-3">Still have questions?</Title>
            <BrandButton>See our Faqs</BrandButton>
          </div>
        </Container>
      </section>


    </Layout>
  );
};

export default BootcampPage;
