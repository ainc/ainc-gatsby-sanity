import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/seo";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import * as styles from "./unsubscribe.module.scss";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const UnsubscribePage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const updateEmail = (event) => {
    setEmail(event.target.value);
    setMessage("");
  };

  function emailValidate() {
    document.forms["unsubForm"]["email"].value = email.trim();
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      return false;
    } else {
      setMessage("Valid Email!");
      console.log(email);
      return true;
    }
  }

  const handleSubmit = (event) => {
    let emailValidated = emailValidate();
    event.preventDefault();
    if (!emailValidated) {
      setMessage("Please enter a valid email address.");
    } else {
      const data = {
        actionType: "dW5zdWJzY3JpYmU=",
        returnURL: "https://www.awesomeinc.org/",
        xnQsjsdp:
          "c871ae0722ead1244df94d1b3a4878386566663dc2d3de012c2a68b0fa43efda",
        email: email,
      };
      fetch("https://crm.zoho.com/crm/Unsubscribe?encoding=UTF-8", {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
      })
        .then((response) => {
          if (response.status != 500) {
            setMessage("Unsubscribed successfully!");
            window.location.href = "/";
          } else {
            setMessage("Error unsubscribing. Please try again.");
          }
        })
        .catch((error) => {
          setMessage("Error unsubscribing. Please try again.");
        });
    }
  };

  return (
    <Layout>
      <Container>
        <Col className="my-5" md={{ span: 6, offset: 3 }}>
          <h1 className="fs-3 fw-bold">We already miss you</h1>
          <div>
            <form name="unsubForm" onSubmit={handleSubmit}>
              <input
                className="form-control my-3"
                placeholder="Email Address"
                type="email"
                id="email"
                value={email}
                onChange={(event) => updateEmail(event)}
                required
              />
              <BrandButton type="submit">Unsubscribe</BrandButton>
              <p className={styles.message}>{message}</p>
            </form>
          </div>
        </Col>
      </Container>
    </Layout>
  );
};

export default UnsubscribePage;
