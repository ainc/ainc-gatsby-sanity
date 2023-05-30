import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Row, Col, CarouselItem } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title';
import SEO from '../../components/seo';
import * as styles from "./coding-club-preview.scss";
import Table from 'react-bootstrap/Table';

const CodingClubPage = ({ data }) => {

  return (
    <Layout>
      <main>
      <SEO/>
      <Container>
        <Row>
            <Col sm={7} className="Header my-5 mx-auto text-center">
                <Title className="text-uppercase">Coding Club</Title>
                <p>Welcome to the Coding Club! Here is some of our best content for you to try out. If you love coding and these lessons, please consider joining our coding club. The lessons, challenges, and projects are intended to be completed in the order presented.</p>
            </Col>
        </Row>
        <Row>
          <Col className="first-table">
          <h1>Construct 3 Introduction</h1>
          <p className="fw-bold">Intended for beginners</p>
          <Table className="table border mb-5">
            <thead>
              <tr>
                <th className="text-white text-uppercase text-center table-title">Module</th>
                <th className="text-white text-uppercase text-center border table-title">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2" className="border fw-bold text-center py-5 table-title">Introduction</td>
                <td className="d-flex justify-content-center py-3"><a className="lesson" href='https://docs.google.com/document/d/1d2B2pZZ5rMnddIPcoDA5sqbXNe4QeTnTFZePnMUYcAM/edit'>Lesson</a></td>
              </tr>
              <tr>
                <td className="d-flex justify-content-center py-3"><a className="challenge" href='https://docs.google.com/document/d/1T8LUn3HLtyRlNNGp7S1APDL8qkNQ1pUbSvw-B9HMG_E/edit#heading=h.30m315a3bqxv'>Challenge</a></td>
              </tr>
              <tr>
                <td rowspan="2" className="border fw-bold text-center py-5 table-title">If Statements</td>
                <td className="d-flex justify-content-center py-3"><a className="lesson" href='https://docs.google.com/document/d/14OXh4eJC5Jq6Xx-3-gtOO8JuimRchMog9Pnbr3oYOcE/edit'>Lesson</a></td>
              </tr>
              <tr>
                <td className="d-flex justify-content-center py-3"><a className="challenge" href='https://docs.google.com/document/d/1mdi8nOvqpgRsHlxqfu1XRZXN6erDGnioEyIO-ekGDbk/edit'>Challenge</a></td>
              </tr>
              <tr>
                <td rowspan="2" className="border fw-bold text-center py-5 table-title">Variables</td>
                <td className="d-flex justify-content-center py-3"><a className="lesson" href='https://docs.google.com/document/d/1ySeEicmvvygehv28n54bLyFT3pRb3moTQOnH6LPGNWc/edit'>Lesson</a></td>
              </tr>
              <tr>
                <td className="d-flex justify-content-center py-3"><a className="challenge" href='https://docs.google.com/document/d/1dqJQdhdsYumyZUUTDRTjakZv63OUR1P7AeLCpvooG4s/edit'>Challenge</a></td>
              </tr>
              <tr>
                <td className="border fw-bold text-center py-3 table-title">Block Stacker Project</td>
                <td className="d-flex justify-content-center py-3"><a href='../learn/youth#join' className="register-button">Register to continue</a></td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>

        <Row>
          <Col className="second-table mb-5">
          <h1>Python Basics</h1>
          <p className="fw-bold">Intended for intermediate coders</p>
          <Table className="table border">
            <thead>
              <tr>
                <th className="text-white text-uppercase text-center table-title">Module</th>
                <th className="text-white text-uppercase text-center border table-title">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2" className="border fw-bold text-center py-5 table-title">Introduction</td>
                <td className="d-flex justify-content-center py-3"><a href='https://docs.google.com/document/d/1U8_I7Y8wZjNpNrWTnQ4cxwuZvX-Dep_TVqt13q24jkI/edit' className="lesson">Lesson</a></td>
              </tr>
              <tr>
                <td className="d-flex justify-content-center py-3"><a href='https://docs.google.com/document/d/1jqUMJOVLQgDsSsURhBAA1kbRBXXm-3D1FRrfIJxUsPk/edit' className="challenge">Challenge</a></td>
              </tr>
              <tr>
                <td rowspan="2" className="border fw-bold text-center py-5 table-title">Variables</td>
                <td className="d-flex justify-content-center py-3"><a href='https://docs.google.com/document/d/18PSq_RQuBNw-tq0qskXB1emhEvRBlRFE9ju9MXPCIfY/edit' className="lesson">Lesson</a></td>
              </tr>
              <tr>
                <td className="d-flex justify-content-center py-3"><a href='https://docs.google.com/document/d/11k6r0BUJGiPIt8aKmEZZRm_dHlurqVC7OM0DdbIy2VM/edit' className="challenge">Challenge</a></td>
              </tr>
              <tr>
                <td rowspan="2" className="border fw-bold text-center py-5 table-title">User Input</td>
                <td className="d-flex justify-content-center py-3"><a href='https://docs.google.com/document/d/1_DimHDhbzIp-ToCw-uRMrBknZQLPMNrKnvvCLAxfxIY/edit#' className="lesson">Lesson</a></td>
              </tr>
              <tr>
                <td className="d-flex justify-content-center py-3"><a href='https://docs.google.com/document/d/1EG-N3QEWFAOl47phKUBo-xL3ZayWav-o8zvAM7OBfAo/edit' className="challenge">Challenge</a></td>
              </tr>
              <tr>
                <td className="border fw-bold text-center py-3 table-title">Mad Libs Game</td>
                <td className="d-flex justify-content-center py-3"><a href='../learn/youth#join' className="register-button">Register to continue</a></td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>
      </Container>
      </main>
    </Layout>
  )
}
export default CodingClubPage;

