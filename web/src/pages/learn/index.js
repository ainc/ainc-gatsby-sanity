import * as React from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Title from "../../components/UI/Title/Title";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import "../../styles/main.scss";
import * as styles from "./learn.module.scss";
import styled from "styled-components";
import ZohoSales from "../../components/Scripts/ZohoSales";
import CourseCardLong from "../../components/CourseCardLong/CourseCardLong";
import { graphql } from "gatsby";

const ProvenBackground = styled.div`
  &::before {
    content: "a";
    color: rgba(0, 0, 0, 0);
    background-image: ${(props) =>
      props.bgImage !== undefined
        ? `url( ${Object.values(props.bgImage)[0]} )`
        : undefined};
    filter: opacity(50%) blur(1pt);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 450px;
    text-align: left;
    display: block;
    z-index: -1;
    position: absolute;
  }
`;

const LearnPage = ({ data }) => {
  const introToWebCourse = data.allSanityCourses.edges.filter(
    (course) => course.node.courseTitle === "Intro To Web Development"
  );
  const weekOfCode = data.allSanityCourses.edges.filter(
    (course) => course.node.courseTitle === "Week of Code"
  );

  return (
    <Layout jsImport={ZohoSales}>
      {/* Header section */}
      <Container fluid className="text-center">
        <Row className="mt-4 ßjustify-content-center align-items-center">
          <Col xs={12} md={6}>
            <StaticImage
              placeholder="blurred"
              src="../../images/macbook-code-learn.png"
              alt="Coding laptop"
              className="mx-auto"
            />
          </Col>
          <Col xs={12} md={6}>
            <Title className="brand text-uppercase">Learn to Code</Title>
            <p className="fst-italic">with Awesome Inc</p>
            {/* <a href="../learn/youth">
              <BrandButton className="secondary mr-3 my-3">Youth</BrandButton>
            </a>
            <a href="../learn/adults">
              <BrandButton className="secondary mx-3">Adult</BrandButton>
            </a> */}
          </Col>
        </Row>
      </Container>

      {/* Courses section */}
      <Container className="mt-5">
        <CourseCardLong
          courseInfo={introToWebCourse}
          stripeColor="#939597"
          title={"Intro to Web Development"}
          description={"Learn To Code Without Quitting Your Job"}
          fontColor={"white"}
        />

        <CourseCardLong
          courseInfo={weekOfCode}
          stripeColor="#EE3244"
          title={"Week of Code"}
          description={
            "Learn coding fundamentals in a week-long intensive course"
          }
          fontColor={"black"}
        />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityCourses {
      edges {
        node {
          courseTitle
          courseType
          courseSeason
          timeRequirement
          description
          designedFor
          startDate(formatString: "MMMM D, YYYY")
          endDate(formatString: "MMMM D, YYYY")
          picture {
            asset {
              gatsbyImageData(height: 200)
            }
          }
          background {
            asset {
              url
            }
          }
          topics
          technologies
          schedule
          courseLink
          ageGroup
          format
        }
      }
    }
  }
`;

export default LearnPage;






// import * as React from "react";
// import Layout from "../../components/Layout/Layout";
// import { Container, Row, Col, CarouselItem } from "react-bootstrap";
// import SEO from "../../components/seo";
// import Carousel from "react-bootstrap/Carousel";
// import { StaticImage } from "gatsby-plugin-image";
// import Title from "../../components/UI/Title/Title";
// import BrandButton from "../../components/UI/BrandButton/BrandButton";
// import "../../styles/main.scss";
// import * as styles from "./learn.module.scss";
// import styled from "styled-components";
// import BlockQuote from "../../components/BlockQuote/BlockQuote";
// import BackgroundPicture from "/src/images/phone-booth-abstract.jpg";
// import ImageOutline from "../../components/ImageOutline/ImageOutline";
// import ZohoSales from "../../components/Scripts/ZohoSales";
// import CourseCardLong from "../../components/CourseCardLong/CourseCardLong";
// import { graphql } from "gatsby";

// const ProvenBackground = styled.div`
//   &::before {
//     content: "a";
//     color: rgba(0, 0, 0, 0);
//     background-image: ${(props) =>
//       props.bgImage !== undefined
//         ? `url( ${Object.values(props.bgImage)[0]} )`
//         : undefined};
//     filter: opacity(50%) blur(1pt);
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 100%;
//     height: 450px;
//     text-align: left;
//     display: block;
//     z-index: -1;
//     position: absolute;
//   }
// `;

// const LearnPage = ({ data }) => {
//   const adultCourses = data.allSanityCourses.edges.filter(
//     (course) => course.node.ageGroup === "adult",
//   );
//   const bootcampCourse = data.allSanityCourses.edges.filter(
//     (course) => course.node.courseTitle === "Web Developer Bootcamp",
//   );
//   const introToWebCourse = data.allSanityCourses.edges.filter(
//     (course) => course.node.courseTitle === "Intro To Web Development",
//   );
//   const salesforceCourse = data.allSanityCourses.edges.filter(
//     (course) => course.node.courseTitle === "SalesForce Career Accelerator",
//   );
//   const codingClub = data.allSanityCourses.edges.filter(
//     (course) => course.node.courseTitle === "Coding Club",
//   );

//   return (
//     <Layout jsImport={ZohoSales}>
//       {/* Header section */}

//       <Container fluid>
//         <Row>
//           <Col>
//             <StaticImage
//               placeholder="blurred"
//               src="../../images/macbook-code-learn.png"
//               alt="Coding laptop"
//             />
//           </Col>
//           <Col className="m-auto">
//             <Title className="brand text-uppercase">Learn to Code</Title>
//             <p className="fst-italic">with Awesome Inc</p>
//             <a href="../learn/youth/code">
//               <BrandButton className="secondary mr-3 my-3">Youth</BrandButton>
//             </a>
//             <a href="../learn/adults">
//               <BrandButton className="secondary mx-3 ">Adult</BrandButton>
//             </a>
//           </Col>
//         </Row>
//       </Container>

//       {/* Calls to action section */}

//       <Container className={styles.callAction}>
//         <Row>
//           <Col xs={{ span: 10, offset: 1 }}>
//             <Row>
//               <Col xs={12} sm={6} md={{ span: 6 }}>
//                 {/* Future styling */}
//                 <Title className={` brand text-center`}>
//                   A Course For Everyone
//                 </Title>
//                 <p className="text-black subtitle fw-bold text-uppercase text-center">
//                   Join one now
//                 </p>
//                 <p className="text-center">
//                   Whether you are an adult looking to make a career change or
//                   have a child that wants to learn how to build apps and video
//                   games, we have a class for you. You don't need to be a genius
//                   to learn how to code. All you need is determination. Our
//                   courses have helped launch people into new careers in tech and
//                   prepared students to study Computer Science through college
//                   and beyond.
//                 </p>
//               </Col>
//               <Col xs={12} sm={{ span: 5 }} md={{ span: 6 }}>
//                 <ImageOutline>
//                   <StaticImage
//                     placeholder="blurred"
//                     src="../../images/student-learn-to-code-shirt.jpg"
//                     alt="learn to code"
//                   />
//                 </ImageOutline>
//               </Col>
//             </Row>
//             <Row className="mt-5">
//               <Col xs={12} sm={{ span: 5 }}>
//                 <ImageOutline>
//                   <StaticImage
//                     placeholder="blurred"
//                     src="../../images/student-learn-to-code-week-of-code.jpg"
//                     alt="learn to code youth classes"
//                   />
//                 </ImageOutline>
//               </Col>
//               <Col xs={12} sm={{ span: 5 }}>
//                 <Title className="brand text-normal text-left">Youth</Title>
//                 <p className="text-black subtitle--small fw-bold text-left">
//                   Build apps, games, and websites with friends.
//                 </p>
//                 <p className="text-left mb-2">
//                   Students age 9-16 love making games and apps with us. Turn
//                   screen time into career-skill time.
//                 </p>
//                 <a href="../learn/youth">
//                   <BrandButton className="secondary btn--small text-end float-left">
//                     Learn More
//                   </BrandButton>
//                 </a>
//               </Col>
//             </Row>
//             <Row className="mt-5">
//               <Col xs={12} sm={{ span: 6 }}>
//                 <Title className="brand text-normal text-end">Adult</Title>
//                 <p className="text-black fw-bold text-end">
//                   Launch your new career or learn a new skill.
//                 </p>
//                 <p className="text-end mb-2">
//                   If you can write an email, we can help you learn to code.
//                   Great for aspiring entrepreneurs and career switchers.
//                 </p>
//                 <a href="../learn/adults">
//                   <BrandButton className="secondary btn--small text-end float-end my-3">
//                     Learn More
//                   </BrandButton>
//                 </a>
//               </Col>
//               <Col xs={12} sm={{ span: 5 }}>
//                 <ImageOutline>
//                   <StaticImage
//                     placeholder="blurred"
//                     src="../../images/learn/adult-coding-laptop.jpeg"
//                     alt="learn to code"
//                   />
//                 </ImageOutline>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>

//       {/* Proven Success Section */}

//       <section>
//         <div className={styles.provenBackground}>
//           <Container className="py-3" fluid>
//             <Row>
//               <Col xs={12}>
//                 {/* Future Styling */}
//                 {/*<StaticImage placeholder="blurred" src='../../images/learn/Bootcamp-Helped100People.jpg' style={{maxWidth: '12%', position: 'absolute',  left: '31rem', top: '160%'}} alt='Who we have helped'/>*/}
//                 <Title className="brand test text-center normal text-end">
//                   Proven Success
//                 </Title>
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={12} md={{ offset: 4, span: 4 }}>
//                 <p className="text-center">
//                   Since 2013, over 1500 people have learned to code with us.
//                   Here's what they have to say:
//                 </p>
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={12} md={{ offset: 2, span: 8 }}>
//                 <Carousel
//                   className={styles.carousel}
//                   indicators={false}
//                   controls={false}
//                 >
//                   <Carousel.Item interval={5000}>
//                     <BlockQuote>
//                       <p>
//                         I went from having no software skills at all to being
//                         able to create something from scratch.
//                       </p>
//                       <small>— Kelly, Bootcamp Graduate</small>
//                     </BlockQuote>
//                   </Carousel.Item>

//                   <Carousel.Item interval={5000}>
//                     <BlockQuote>
//                       <p>
//                         The way the classes are structured and the one on one
//                         attention the kids get from the teachers is amazing. My
//                         kids absolutely love these classes.
//                       </p>
//                       <small>—Coding Club Parent</small>
//                     </BlockQuote>
//                   </Carousel.Item>

//                   <Carousel.Item interval={5000}>
//                     <BlockQuote>
//                       <p>
//                         The future was very uncertain, but Awesome Inc was very
//                         dedicated to helping me out, not just during the
//                         Bootcamp but also after I graduated and giving me job
//                         leads and giving me job search advice.
//                       </p>
//                       <small>—Clark, Bootcamp Graduate</small>
//                     </BlockQuote>
//                   </Carousel.Item>

//                   <Carousel.Item interval={5000}>
//                     <BlockQuote>
//                       <p>
//                         I work 40 hours a week now, I get to coach lacrosse
//                         still, I put my kids to bed pretty much every night. I
//                         can’t put a price on that because it’s what I was
//                         looking for in a career change.
//                       </p>
//                       <small>—Josh, Bootcamp Graduate</small>
//                     </BlockQuote>
//                   </Carousel.Item>

//                   <Carousel.Item>
//                     <BlockQuote>
//                       <p>
//                         Our son enjoys his time at Awesome Inc very much. I am
//                         certain his future career lies in the tech field, and we
//                         are grateful for the opportunities that Awesome Inc is
//                         providing to him to learn and grow.
//                       </p>
//                       <small>—Coding Club Parent</small>
//                     </BlockQuote>
//                   </Carousel.Item>
//                 </Carousel>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </section>

//       <section className={styles.learnPress}>
//         <Container fluid="md">
//           <Row>
//             <Col>
//               <Title className="brand text-center text-uppercase">
//                 As Seen On
//               </Title>
//             </Col>
//           </Row>
//           <Row className={styles.logos}>
//             <Col xs={12} sm={{ span: 2, offset: 1 }}>
//               <StaticImage
//                 placeholder="blurred"
//                 src="../../images/press/nbc-logo.png"
//                 alt="NBC logo"
//                 width={80}
//               />
//             </Col>
//             <Col xs={12} sm={2}>
//               <StaticImage
//                 placeholder="blurred"
//                 src="../../images/press/course_report.png"
//                 alt="Course Report logo"
//                 width={190}
//               />
//             </Col>
//             <Col xs={12} sm={2}>
//               <StaticImage
//                 placeholder="blurred"
//                 src="../../images/press/abc-logo.png"
//                 alt="ABC logo"
//                 width={80}
//               />
//             </Col>
//             <Col xs={12} sm={2}>
//               <StaticImage
//                 placeholder="blurred"
//                 src="../../images/press/good_day_ky.png"
//                 alt="Good Day Kentucky logo"
//                 width={90}
//               />
//             </Col>
//             <Col xs={12} sm={2}>
//               <StaticImage
//                 placeholder="blurred"
//                 src="../../images/press/fox-logo.png"
//                 alt="Fox logo"
//                 width={150}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*Courses section*/}
//       <Container>
//         <CourseCardLong
//           courseInfo={bootcampCourse}
//           stripeColor="#323232"
//           title={"Become a Professional Developer In 16 Weeks"}
//           fontColor={"black"}
//         />

//         <CourseCardLong
//           courseInfo={introToWebCourse}
//           stripeColor="#939597"
//           title={"Flexible Courses"}
//           description={"Learn To Code Without Quitting Your Job"}
//           fontColor={"white"}
//         />

//         <CourseCardLong
//           courseInfo={codingClub}
//           stripeColor="#EE3244"
//           title={"Coding Club Camps"}
//           description={
//             "Learn how to code from professional software developers"
//           }
//           fontColor={"black"}
//         />

//         <CourseCardLong
//           courseInfo={salesforceCourse}
//           stripeColor="#C12029"
//           title={"Non-Coding Courses"}
//           description={"To Help You Grow Your Career"}
//           fontColor={"white"}
//         />
//       </Container>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query {
//     allSanityCourses {
//       edges {
//         node {
//           courseTitle
//           courseType
//           courseSeason
//           timeRequirement
//           description
//           designedFor
//           startDate(formatString: "MMMM D, YYYY")
//           endDate(formatString: "MMMM D, YYYY")
//           picture {
//             asset {
//               gatsbyImageData(height: 200)
//             }
//           }
//           background {
//             asset {
//               url
//             }
//           }
//           topics
//           technologies
//           schedule
//           courseLink
//           ageGroup
//           format
//         }
//       }
//     }
//   }
// `;

// export default LearnPage;
