import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Title from "../../components/UI/Title/Title";
import { Link } from "gatsby";
import { FaLongArrowAltRight, FaBook } from "react-icons/fa";
import { GatsbyImage } from 'gatsby-plugin-image'
import "./BlogPreview.scss"

export default function BlogPreview({blog}) {
  const edge = blog

  const defaultBgImageUrl = '../../images/logo.png'
  
  const bgImage = edge.node.thumbnail.asset !== null ? `url(${edge.node.thumbnail.asset.url}` : `url(${defaultBgImageUrl}`;
  const refImage = edge.node.reference.picture !== null ? `edge.node.reference.picture` : `url(${defaultBgImageUrl})`;
  

  return (
    <Col xs={12} md={6}  className="mt-4 px-0 px-sm-2" key={edge.id}>
      <Container className='blog-card border border-2 rounded-1' style={{height: '60vh'}}>
        <Row className='p-3 h-100'>
          <Col xs={12} className='p-0'>
            {/* <Container className="blog-image d-flex align-items-end relative" style={{  */}
            <Container className="blog-image d-flex flex-column"style={{
              backgroundImage: bgImage,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "270px",
              width: "100%",
              position: "relative"
            }}>
              <Row className='bg h-100 w-100'>
                <Col className='book h-100 d-flex justify-content-center align-items-center'>
                  <a href={`/blog/${edge.node.slug.current}`} aria-label="Read the article" className='bg-white p-3 rounded-circle'>
                    <FaBook size={40} className='text--brand' />
                  </a>
                </Col>
              </Row>

              <Row style={{height:'90px'}} className='blog-details mt-auto'>
                  <Col xs={4}  style={{height:'', width:'fit-content'}} className='justify-content-center align-items-center'>
                    <GatsbyImage objectFit='contain' style={{height:'70px', width:'70px', zIndex:"2"}}  image={edge.node.reference.picture?.asset?.gatsbyImageData || ''} alt={edge.node.reference.name !== null ? edge.node.reference.name : ''} className="rounded-circle border border-3 border-white my-0 ms-0" /> 
                </Col>
                <Col  xs={7}  className=" d-flex justify-content-start align-content-center flex-column mt-3 px-0">
                  <Title className="author" style={{fontWeight: '800', zIndex: "2"}}>{edge.node.reference.name}, {edge.node.reference.title}</Title>
                  <p style={{zIndex:"2"}} className='date text-white'> {edge.node.date}</p>
                </Col>
              </Row>
              <div className='overlay'></div>


            </Container>
          </Col>
          <Col xs={12} className='' >
            <Container className='p-0 d-flex flex-column justify-content-between h-100'>
              <Row>
                <div className='pt-3'>
                  <a href={`/blog/${edge.node.slug.current}`}>
                    <Title className="title fs-6 text-break link--red">{edge.node.title}</Title>
                  </a>
                </div>
                <div className=''>
                  <p className="description text-break">{edge.node.previewText}</p>
                </div>
              </Row>
              <Row>
                  <a href={`/blog/${edge.node.slug.current}`}><p className='text--brand fs-6 link--brand'> Read More <FaLongArrowAltRight size="25" /></p></a>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}
