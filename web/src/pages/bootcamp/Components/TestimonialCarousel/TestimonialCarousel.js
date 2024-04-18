
import React from "react";

export function TestimonialCarousel({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleClickRight = () => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    };
  
    const handleClickLeft = () => {
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <div>
        {testimonials.map((node, index) => (
          <div key={index} className={`testimonial-div ${index === currentIndex ? 'd-flex' : 'd-none'}`}>
            <Row>
              <Col lg={4}>
  
              </Col>
              <Col lg={6} className="offset-lg-2 test-info pt-3">
                <GatsbyImage image={node.picture.asset.gatsbyImageData} alt={node.company} className="test-images"/> 
                <Title className="text-white">HEAR FROM EMPLOYERS</Title>
                <h2>{node.company}</h2>
                <p style={{fontWeight: 'bold'}}>{node.author}</p>
                <p style={{fontStyle: 'italic'}}>{node.position}</p>
                <p className="description mb-0">{node.description}</p>
  
                <div className="navBar float-end">
                  <Button style={{background: 'none', border: 'white', color: 'white', paddingRight: '0.5rem'}} onClick={handleClickLeft}>
                    <FaArrowLeft className="ms-1" />
                  </Button>
                  {testimonials.map((_, index) => (
                    index === currentIndex ? <FaCircle key={index} className="ms-1" /> : <FaRegCircle key={index} className="ms-1" />
                  ))}
                  <Button style={{background: 'none', border: 'white', color: 'white', paddingLeft: '0.5rem', paddingRight: '0.5rem'}} onClick={handleClickRight}>
                    <FaArrowRight className="ms-1" />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
  }