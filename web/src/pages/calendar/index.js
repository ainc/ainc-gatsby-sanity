import React from "react";
import { gapi } from "gapi-script";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const calendarID = "admin@awesomeinc.org";

  const CLIENT_ID =
    "216939830767-a2jbiikupd7q9sd51tk4hpfsfjfq4adl.apps.googleusercontent.com";
  const API_KEY = "AIzaSyCOAfQaO22GQcHx3LmKCgtQgdqMzEbswmc";

  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

  const SCOPES = "https://www.googleapis.com/auth/calendar";

  const getEvents = (calendarID, API_KEY) => {
    function initiate() {
      gapi.client
        .init({
          API_KEY: API_KEY,
        })

        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })

        .then(
          (response) => {
            let eventResults = response.result.items;
            return eventResults;
          },
          function (err) {
            return [false, err];
          },
        );
    }

    gapi.load("client", initiate);
  };

  useEffect(() => {
    console.log("events:", getEvents(CLIENT_ID, API_KEY));
    setEvents(getEvents(CLIENT_ID, API_KEY));
  }, []);

  return (
    <Layout>
      <Row>
        <Col className="text-center my-5">
          <Title>Calendar</Title>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 8, offset: 2 }}
            className="my-5"
          >
            {events && events.map((event) => <p>{event.title}</p>)}
          </Col>
          {/* <p>Calendar page</p> */}
        </Col>
      </Row>
    </Layout>
  );
};

export default Calendar;
