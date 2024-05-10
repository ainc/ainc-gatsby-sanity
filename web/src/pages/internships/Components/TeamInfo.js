import React, {useEffect, useState, useRef} from 'react'
import { Container, Row, Col, Modal} from 'react-bootstrap'
import Title from '../../../components/UI/Title/Title'
import BrandButton from '../../../components/UI/BrandButton/BrandButton'
import './teaminfo.scss'
const TeamInfoModal = (props) => {

    return(
        <Modal show={props.show} onHide={props.onHide} restoreFocus={true} centered dialogClassName="modal-dialog">
        <svg viewBox="0 0 500 125" preserveAspectRatio="xMinYMin meet" style={{backgroundColor: '#f2f2f2'}}>
          <g transform="scale(-1,1) translate(-500,0)">
            <path d="M0,100 C150,150 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none', fill: props.color}}></path>
          </g>
          <text x="250" y="50" font-size="23" fill="white" text-anchor="middle" alignment-baseline="middle" font-weight="bold" font-family="Arial, sans-serif">
            {props.title}
          </text>
        </svg>
        <Modal.Body className='text-center' style={{backgroundColor: '#f2f2f2'}}>
            <Row className='d-flex justify-content-center'>
                <Col md={10}>
                    <p className='my-3'>{props.content}</p>
                </Col>
            </Row>
            <Row>
            <a className='link--brand link' href={props.link} target="_blank">Click here to learn more and see if the {props.team} team is for you!</a>
            </Row>
            <Row>
            <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
            target="_blank" rel="noopener noreferrer">
            <BrandButton className='white--red-text fw-bold my-3'>Apply Now</BrandButton>
            </a>
            </Row>
        </Modal.Body>
        </Modal>
    )
}

export default TeamInfoModal;
