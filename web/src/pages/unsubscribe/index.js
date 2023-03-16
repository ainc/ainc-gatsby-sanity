import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title';
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import BrandButton from "../../components/UI/BrandButton/BrandButton";

function emailValidate() {
    var email = document.forms['unsubForm']['email'].value;
    document.forms['unsubForm']['email'].value = email.trim();
    var atpos = email.indexOf('@');
    var dotpos = email.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      alert('Please enter a valid email address.');
      return false;
    }
  }

const UnsubscribePage = ({ data }) => {
    return (
      <Layout pageTitle="Unsubscribe | Awesome Inc">
        <Container>
          <Col className="my-5" md={{ span: 3, offset: 3 }}>
            <Subtitle className="fw-bold">We already miss you</Subtitle>
            <div>
            <form
                action="https://crm.zoho.com/crm/Unsubscribe?encoding=UTF-8"
                method="POST"
                name="unsubForm"
                onSubmit={() => emailValidate()}>
                <input type="hidden" name="xnQsjsdp" value="c871ae0722ead1244df94d1b3a4878386566663dc2d3de012c2a68b0fa43efda" />
                <input type="hidden" name="actionType" value="dW5zdWJzY3JpYmU=" />
                <input type="hidden" name="returnURL" value="https://www.awesomeinc.org/" />
                <input className="form-control" placeholder="Email Address" type="text" name="email" maxLength="120" style={{ marginBottom: '1rem' }} />
                <BrandButton type="submit">Unsubscribe</BrandButton>
            </form>
            </div>
          </Col>
        </Container>
      </Layout>
    );
  };
  
  export default UnsubscribePage;