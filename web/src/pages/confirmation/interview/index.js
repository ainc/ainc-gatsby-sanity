import React, { useState } from "react";
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

  // Calendly appends invitee/time params to this URL. Read them from the query
  // string on each render instead of useEffect + useState(false).
  // The old effect had no dependency array (re-ran every render) and defaulted
  // name/times to false, so new Date(false) showed a fake 1969/1970 interview
  // when someone visited /confirmation/interview/ with no query params.
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);

  const name = queryParameters.get("invitee_full_name");
  const startTime = queryParameters.get("event_start_time");
  const endTime = queryParameters.get("event_end_time");
  const invitee = queryParameters.get("invitee_email");

  const hasSchedule = Boolean(startTime && endTime);
  const startDate = hasSchedule ? new Date(startTime) : null;
  const endDate = hasSchedule ? new Date(endTime) : null;

  const month = hasSchedule
    ? startDate.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const fullStartTime = hasSchedule
    ? startDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : null;

  const fullEndTime = hasSchedule
    ? endDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : null;

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
                {name ? `Thank you, ${name}!` : "Thank you!"}
              </h4>
              {hasSchedule && (
                <>
                  <p className="ms-3" style={{ fontSize: "1.5 rem" }}>
                    Your call is scheduled on{" "}
                    <strong>
                      {month} from {fullStartTime} to {fullEndTime}.
                    </strong>
                  </p>
                  <p className="ms-3" style={{ fontSize: "1.5 rem" }}>
                    Please check your inbox at{" "}
                    <a style={{ color: "#C12029" }} href={`mailto:${invitee}`}>
                      {invitee}
                    </a>{" "}
                    and confirm that you can make the scheduled time.
                  </p>
                </>
              )}
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
                    href="https://awesomeinc.org/blog/what-we-look-for-in-a-bootcamp-student/"
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
