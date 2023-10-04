import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Title from "../../components/UI/Title/Title";
import { Link } from "gatsby";
import { FaLongArrowAltRight, FaBook } from "react-icons/fa";
import { GatsbyImage } from 'gatsby-plugin-image'

export default function BlogPreview({blog}) {
  const edge = blog

  const defaultBgImageUrl = '../../images/logo.png'
  
  const bgImage = edge.node.thumbnail.asset !== null ? `url(${edge.node.thumbnail.asset.url}` : `url(${defaultBgImageUrl}`;
  const refImage = edge.node.reference.picture !== null ? `edge.node.reference.picture` : `url(${defaultBgImageUrl})`;
  

  return (
    <Col xs={12} md={6} lg={4} className="mt-4 px-0 px-sm-2" key={edge.id}>
      <Container className='blog-card border border-2 rounded-1' style={{ height: "540px" }}>
        <Row className='p-3 h-100'>
          <Col xs={12} className='p-0'>
            <Container className="blog-image d-flex align-items-end relative" style={{
              backgroundImage: bgImage,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "270px",
              width: "100%",
            }}>
              <Row className='bg h-100 w-100'>
                <Col className='book h-100 d-flex justify-content-center align-items-center'>
                  <Link to={`/blog/${edge.node.slug.current}`} aria-label="Read the article" className='bg-white p-3 rounded-circle'>
                    <FaBook size={40} className='text--brand' />
                  </Link>


                </Col>
              </Row>
              <Row className='blog-details'>
                <Col xs={{ span: 4 }} lg={{ span: 3 }} className="d-flex justify-content-start pb-2">
                <GatsbyImage objectFit='cover' image={edge.node.reference.picture?.asset?.gatsbyImageData || ''} alt={edge.node.reference.name !== null ? edge.node.reference.name : ''} className="rounded-circle border border-3 border-white my-2 ms-0" />                  
                </Col>
                <Col xs={{ span: 7 }} lg={{ span: 9 }} className="d-flex justify-content-start align-content-center flex-column mt-3 px-0">
                  <Title className="author" style={{fontWeight: '800', textShadow:'0.07em 0 white, 0 0.07em white, -0.07em 0 white ,0 -0.07em white'}}>{edge.node.reference.name}, {edge.node.reference.title}</Title>
                  <p className='date text-white fw-bold'>{edge.node.date}</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} className='' style={{ height: "230px" }}>
            <Container className='p-0 d-flex flex-column justify-content-between h-100'>
              <Row>
                <div className='pt-3'>
                  <Link to={`/blog/${edge.node.slug.current}`}>
                    <Title className="title fs-6 text-break link--red">{edge.node.title}</Title>
                  </Link>
                </div>
                <div className='pb-3'>
                  <p className="description text-break">{edge.node.previewText}</p>
                </div>
              </Row>
              <Row>
                <div className='pt-3 pb-0'>
                  <Link to={`/blog/${edge.node.slug.current}`}><p className='text--brand fs-6 link--brand'>Read More <FaLongArrowAltRight size="25" /></p></Link>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}
