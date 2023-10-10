import * as React from "react";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";

import { Modal } from "react-bootstrap";
import { useState } from "react";
import * as styles from './newsletter.module.scss';

const Newsletter = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section style={{ backgroundColor: `#555`}}>
      <Title className="text-center text-uppercase text-white py-5">Sign up for Our Newsletter</Title>
      <div className="py-5">

        <BrandButton className="d-block mx-auto mb-5" onClick={handleShow}>Sign Up</BrandButton>
        <Modal show={show} onHide={handleClose} centered size='lg' aria-labelledby='contained-modal-title-vcenter'>
        <form
          action="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeIncNewsletterSignup2023/formperma/ZflzBD0xW1Q8eO4jlDWQZZsk1Icbxxwtl6FTQMbZNl8/htmlRecords/submit"
          name="form"
          id="form"
          class="validate"
          method="POST"
          accept-charset="UTF-8"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="zf_referrer_name" value="" />{/*<!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->*/}
          <input
            type="hidden"
            name="zf_redirect_url"
            value="https://www.awesomeinc.org/confirmation/newsletter"
          />
          <input
            type="hidden"
            name="zc_gad"
            value=""
          />
          <input type="hidden" name="zf_redirect_url" value=""></input>
          {/*<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->*/}
          <Modal.Body>
          <label for="First Name" className={styles.formGroup}>First Name</label>
          <input
            className="form-control"
            placeholder="John"
            type="text"
            maxlength="255"
            name="Name_First"
            fieldType="7"
          /><br />
          <label for="Last Name" className={styles.formGroup}>Last Name</label>
          <input
            class="form-control"
            placeholder="Hancock"
            type="text"
            maxlength="255"
            name="Name_Last"
            fieldType="7"
          /><br />
          {/*<!--Email-->*/}
          <label for="Email Address" className={styles.formGroup}>Email Address</label>
          <input
            class="form-control"
            placeholder="john@123.com"
            type="text"
            maxlength="255"
            name="Email"
            fieldType="9"
          />
          <br />
          {/*<!-- Phone -->*/}
          <label for="Company" className={styles.formGroup}>Phone</label>
          <input
            class="form-control"
            placeholder="(123) 456-7890"
            type="text"
            compname="PhoneNumber"
            maxlength="20"
            name="PhoneNumber_countrycode"
            phoneFormat="1"
            isCountryCodeEnabled={false}
            fieldType="11"
            id="international_PhoneNumber_countrycode"
          />
          <br />
        {/*<!-- Checkbox --> */}
          <label className={styles.formGroup}>I'm interested in...</label>
          <div className ="form-check">
            <input
                type="checkbox"
                id="Checkbox_1"
                class="form-check-input"
                name="Checkbox"
                value="Startups and Entrepreneurship - Fellowship"
              />
              <label className={`${styles.formGroup} form-check-label`} for="Checkbox_1">
                Startups and Entrepreneurship - Fellowship
              </label>
            <br />
            <input
                type="checkbox"
                id="Checkbox_2"
                class="form-check-input"
                name="Checkbox"
                value="Coworking and Community - Workspace"
              />
              <label className={`${styles.formGroup} form-check-label`} for="Checkbox_2">
                Coworking and Community - Workspace
              </label>
            <br />
            <input
                type="checkbox"
                id="Checkbox_3"
                class="form-check-input"
                name="Checkbox"
                value="Coding and Education - Awesome Inc U"
              />
              <label className={`${styles.formGroup} form-check-label`} for="Checkbox_3">
                Coding and Education - Awesome Inc U
              </label>
            <br />
            <input 
            type="checkbox" 
            id="Checkbox_4"
            class="form-check-input"
            name="Checkbox" 
            value="Awesome Inc News and Events" />
              <label for="Checkbox_4" className={`${styles.formGroup} form-check-label`}>
                Awesome Inc News and Events
              </label>
            <br />
          </div>
          <BrandButton type="submit">
            Submit
          </BrandButton>
          </Modal.Body>
        </form>
        </Modal>
     </div>
    </section>
  )
}

export default Newsletter;