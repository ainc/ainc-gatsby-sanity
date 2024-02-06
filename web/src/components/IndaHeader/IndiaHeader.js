import * as React from 'react'
import  { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Navbar } from 'react-bootstrap'
import './IndiaHeader.module.scss'
import { Container } from 'react-bootstrap'

const IndiaHeader = () => {
    const logo_height = 30;
    const logo_width = 30;
    
    return (
        <Navbar className='sticky-top' bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href='/india' className='w-100 text-uppercase'>
                    <StaticImage
                    src='../../images/logo.png'
                    width={logo_width}
                    height={logo_height}
                    className='d-inline-block align-top'
                    alt='Awesome Inc Logo'
                    loading='eager'
                    />
                    Awesome Inc
                </Navbar.Brand>
                <a href='/india/about'>
                    About
                </a>
            </Container>
        </Navbar>
    );
};

export default IndiaHeader;