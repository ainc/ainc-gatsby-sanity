import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../../components/Layout/Layout";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import * as styles from "../interview/interview.module.scss";
import { FaSquare } from "react-icons/fa";
import { Router, useLocation, useParams } from "@reach/router";
import "../../../styles/Variables";

const App = () => {
  return (
    <Router basepath="/confirmation">
      <InterviewPage path="/interview" />
    </Router>
  );
};

const InterviewPage = () => {
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const [name, setName] = useState(false);
  const [startTime, setStartTime] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [invitee, setInvitee] = useState(false);

  const location = useLocation();

  const queryParameters = new URLSearchParams(location.search);
  console.log(queryParameters);
  useEffect(() => {
    setName(queryParameters.get("invitee_full_name"));
    setStartTime(queryParameters.get("event_start_time"));
    setEndTime(queryParameters.get("event_end_time"));
    setInvitee(queryParameters.get("invitee_email"));
  });

  const StarttimeStamp = new Date(startTime);
  const EndtimeStamp = new Date(endTime);
  // const day = timestamp.getDate()
  const month = StarttimeStamp.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const fullStartTime = StarttimeStamp.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const fullEndTime = EndtimeStamp.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleTimerComplete = () => {
    setIsTimerComplete(true);
  };

  return (
    <Layout>
      <Container>
        <Col lg={{ span: 6, offset: 3 }} className="">
          <Row>
            <h1 className=" ms-3 my-1">Bootcamp Interview Schedule</h1>
          </Row>
          <Row className="mt-5 my-1">
            <Col lg={{ span: 12, offset: 0 }}>
              {console.log(invitee)}
              <h4 className="ms-3 mb-5 " style={{ fontSize: "1.5 rem" }}>
                {" "}
                Thank you, {name}!{" "}
              </h4>
              <p className="ms-3" style={{ fontSize: "1.5 rem" }}>
                Your call is scheduled on{" "}
                <strong>
                  {month} from {fullStartTime} to {fullEndTime}.{" "}
                </strong>
              </p>
              <p className="ms-3" style={{ fontSize: "1.5 rem" }}>
                {" "}
                Please check your inbox at{" "}
                <a style={{ color: "#C12029" }} href={`mailto:${invitee}`}>
                  {invitee}
                </a>{" "}
                and confirm that you can make the scheduled time.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            {!isTimerComplete ? (
              <CountdownCircleTimer
                isPlaying
                duration={290} // 4 minutes 50 seconds
                onComplete={handleTimerComplete}
                colors={[["#C12029"]]}
                strokeLinecap={"square"}
                strokeWidth={"5"}
                size={60}
              >
                {({ remainingTime }) => (
                  <div>
                    <h1
                      style={{
                        fontSize: 16,
                        marginLeft: "30px",
                        marginTop: "5px",
                        fontWeight: "bold",
                      }}
                    >{`${Math.floor(remainingTime / 60)
                      .toString()
                      .padStart(
                        2,
                        "0",
                      )}:${(remainingTime % 60).toString().padStart(2, "0")}`}</h1>
                  </div>
                )}
              </CountdownCircleTimer>
            ) : null}
          </Row>
          <Row>
            <ul className="ms-5">
              <li>
                <p>
                  <a
                    className={styles.link}
                    style={{ fontSize: "1.5 rem" }}
                    href="https://forms.zohopublic.com/virtualoffice9155/form/BootcampApplicationBasicChallengesF20/formperma/eyRW9Evft9ta2yt2rE4dpWtevNxIo_W804G-905H9d4"
                  >
                    Before your scheduled Call, please complete these basic
                    challenges.
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a
                    className={styles.link}
                    style={{ fontSize: "1.5 rem" }}
                    href="https://www.awesomeinc.org/blog/what-we-look-for-bootcamp-student"
                  >
                    Want to know what we'll talk about on our call? Check out
                    our blog here!
                  </a>
                </p>
              </li>
            </ul>
          </Row>
          <Row>
            <p className="ms-3">
              Didn't receive an email? You can call or text 859.960.4600
              directly to confirm your interview.
            </p>
          </Row>
        </Col>
      </Container>
    </Layout>
  );
};

export default App;
