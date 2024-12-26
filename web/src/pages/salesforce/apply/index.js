import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import * as styles from "../../bootcamp/bootcamp.module.scss";

const SalesforceApplyPage = ({}) => {
  return (
    <Layout>
      <Title className="text-center mt-3 mb-3">
        SALESFORCE CAREER ACCELERATOR APPLICATION
      </Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Subtitle
          className="px-lg-5 py-5"
          style={{ textAlign: "left", width: "55%", fontSize: "1.25rem" }}
        >
          {" "}
          HOME / LEARN / ADULTS / SALESFORCE /{" "}
          <span style={{ color: "#a21b22" }}>APPLY</span>
        </Subtitle>
      </div>
      <form src="https://forms.zohopublic.com/virtualoffice9155/form/SalesforceApplication/formperma/P9BiDt_yu5D9bxcJizFOi5cpc1zOA-QtFb9fH03EZuk">
        {/*<!-- Do not remove this code. -->*/}
        <input type="hidden" name="zf_referrer_name" defaultValue="" />
        {/*<!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->*/}
        <input type="hidden" name="zf_redirect_url" defaultValue="" />
        {/*<!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->*/}
        <input type="hidden" name="zc_gad" defaultValue="undefined" />
        {/*<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->*/}

        {/*<!-- Do not remove this code. -->*/}
        <legend
          className=""
          style={{
            borderBottom: "1px solid #e5e5e5",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "left", width: "50%", fontSize: "1.25rem" }}>
            Fill out this form to start your application process
          </div>
        </legend>

        <div
          className="form-group mt-3 mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            style={{ textAlign: "left", width: "49%" }}
            htmlFor="First Name"
          >
            First Name
          </label>
          <input
            type="text"
            fieldtype="7"
            maxLength="255"
            name="Name_First"
            placeholder="First Name"
            class="form-control input-lg w-50"
            required=""
          />
        </div>
        <div
          class="form-group mt-3 mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="Last Name"
            style={{ textAlign: "left", width: "49%" }}
          >
            Last Name
          </label>
          <input
            type="text"
            fieldtype="7"
            maxLength="255"
            name="Name_Last"
            placeholder="Last Name"
            class="form-control input-lg w-50"
            required=""
          />
        </div>

        <div
          class="form-group mt-3 mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="Email" style={{ textAlign: "left", width: "49%" }}>
            Email
          </label>
          <input
            type="email"
            fieldtype="9"
            maxLength="100"
            name="Email"
            placeholder="Email Address"
            class="form-control input-lg w-50"
            required=""
          />
        </div>

        <div
          class="form-group mb-3 mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="Phone" style={{ textAlign: "left", width: "49%" }}>
            Phone
          </label>
          <input
            type="text"
            compname="PhoneNumber"
            name="PhoneNumber_countrycode"
            phoneformat="1"
            iscountrycodeenabled="false"
            maxLength="20"
            defaultValue=""
            fieldtype="11"
            id="international_PhoneNumber_countrycode"
            class="form-control input-lg w-50"
          />
        </div>

        <div
          class="form-group mt-3 mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="Lead Source"
            style={{ textAlign: "left", width: "49%" }}
          >
            How did you find out about this program?
          </label>
          <select class="form-control input-lg w-50" name="Radio" required="">
            <option defaultValue="-Select-">-Select-</option>
            <option defaultValue="Advertisement">Advertisement</option>
            <option defaultValue="News Article">News Article</option>
            <option defaultValue="Signage / Building">
              Signage / Building
            </option>
            <option defaultValue="Google Search">Google Search</option>
            <option defaultValue="Referral / Word of Mouth">
              Referral / Word of Mouth
            </option>
            <option defaultValue="Event">Event</option>
            <option defaultValue="Facebook">Facebook</option>
            <option defaultValue="Other">Other</option>
          </select>
        </div>

        <div
          class="form-group mb-3 mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="LEADCF26" style={{ textAlign: "left", width: "49%" }}>
            If referred, who told you about the program?
          </label>
          <input
            type="text"
            maxLength="255"
            name="SingleLine1"
            defaultValue=""
            fieldtype="1"
            placeholder="Referred by..."
            class="form-control input-lg w-50"
          />
        </div>
        <div
          className="mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BrandButton type="submit">Submit</BrandButton>
        </div>
      </form>
      <section className={`${styles.cost} py-5`} id="cost">
        <Container>
          <Row>
            <Col>
              <Row className="mt-2 mb-5">
                <Title
                  style={{ color: "#ED3742" }}
                  className="text--huge text-center mt-4 "
                >
                  The Cost
                </Title>
              </Row>
              <Row>
                <Col className={`${styles.costCol} text-center`}>
                  <Row>
                    <Title className="text-center py-4 fs-3 text--large">
                      Tuition
                    </Title>
                  </Row>
                  <Row className="mx-5">
                    <p style={{ fontSize: "1rem" }} className="text-justify">
                      The Salesforce Career Accelerator is available to Kentucky
                      residents for $3499.
                    </p>
                  </Row>
                </Col>
                <Col>
                  <Row className="me-5">
                    <Title className="text-center py-4 ms-3 text--large">
                      Scholarship
                    </Title>
                  </Row>
                  <Row className="mx-5">
                    <p style={{ fontSize: "1rem" }} className="text-justify">
                      Residents of Lexington-Fayette County are eligible to
                      apply for one of 20 annual scholarships provided through
                      LFUCG / ARPA. This scholarship covers $2500 per trainee,
                      reducing the out-of-pocket cost of the program to $999.
                      This program is being supported, in whole or in part, by
                      federal award numbers SLFRP0292/SLFRP3418 awarded to
                      Lexington-Fayette Urban County Government by the U.S.
                      Department of Treasury.
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default SalesforceApplyPage;
