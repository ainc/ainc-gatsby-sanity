import * as React from "react";
import { Container, Col, Row, Badge } from "react-bootstrap";
import SEO from "../../../components/seo";
import Layout from "../../../components/Layout/Layout";
import AccordionCustom from "../../../components/Accordion/AccordionCustom";
import { Link } from "gatsby";

const CodingClubFAQ = () => {
  const faq = {
    questions: [
      {
        q: [
          <h1 className="fs-6">
            How old do you have to be in the Coding Club?
          </h1>,
        ],
        a: [
          <p>
            The Coding Club is designed for students ages 9-17. Please inquire
            if your student doesn't fit that age range but you still want
            him/her to participate -{" "}
            <a href={`mailto:learn@awesomeinc.org`} className="link--brand">
              learn@awesomeinc.org
            </a>{" "}
          </p>,
        ],
      },
      {
        q: "Does the student need to bring a computer?",
        a: [
          <p>
            Yes. Each student will need to provide his/her own laptop for the
            course. Microsoft Windows-based PC's, Apple macOS computers, or
            Google Chromebooks will work, but iPads will not work for this
            course. We recommend a laptop made within the past 3-4 years.
            Computers should be free from viruses/malware. We have a very
            limited number of rental laptops available for $25/day, which can be{" "}
            <a
              href="https://checkout.square.site/buy/6HJGQL5ZSKMETXTUWRFONC4J"
              className="link--brand"
            >
              reserved online
            </a>
            .
          </p>,
        ],
      },
      {
        q: "Does the student need to have programming experience?",
        a: [
          <p>
            No prior programming experience is required, but students should be
            comfortable typing and using a web browser!
          </p>,
        ],
      },
      {
        q: "When can my students come to Coding Club?",
        a: [
          <p>
            Starting Sept 15, the Coding Club is open on Tuesday and Thursday
            from 4pm-8pm.
          </p>,
        ],
      },
      {
        q: "How often can my student attend Coding Club?",
        a: [
          <p>
            Your student can attend twice a week. Our Coding Coaches will be
            available to students all throughout the week if your student has
            questions while working outside of class time.
          </p>,
        ],
      },
      {
        q: "Where can I park?",
        a: [
          <p>
            See{" "}
            <a href="https://awesomeinc.org/parking" className="link--brand">
              map for parking options
            </a>
            .
          </p>,
        ],
      },
      {
        q: "What is Awesome Inc U?",
        a: [
          <p>
            Awesome Inc U is devoted to teaching coding skills. It's never too
            early or too late to learn how to code. You don't have to be a
            genius to learn to code, you just need to be determined. Check out
            what some of our{" "}
            <a href="" className="link--brand">
              past students have to say!
            </a>
          </p>,
        ],
      },
      {
        q: "What if my student has taken past classes?",
        a: [
          <p>
            Then the Coding Club is a great for your student! Our past classes
            (Level 1, Level 2, Level 3, or Coding League) are now a part of the
            Coding Club. Students will be taught based on past experience in
            coding, age and assessment from our coaches.
          </p>,
        ],
      },
    ],
  };

  return (
    <Layout>
      <Container>
        <AccordionCustom faq={faq} />
      </Container>
    </Layout>
  );
};

export default CodingClubFAQ;
