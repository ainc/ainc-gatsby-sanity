import React, { useEffect, useState, useRef } from "react";
import AlumniAvatarCard from "./AlumniAvatarCard";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SwipeCarousel = ({ featuredAlumni }) => {

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="relative overflow-hidden slider-container" style={{ backgroundColor: '#e6e7e8' }}>
      <Slider {...settings}>
          {featuredAlumni.map((alumni, idx) => (
          <div key={idx} className='p-3' style={{ display: 'inline-block' }}>
            <AlumniAvatarCard
                key={idx}
                alumniImage={alumni.picture.asset.gatsbyImageData}
                name={alumni.name}
                jobTitle={alumni.jobTitle}
                companyLogo={alumni.companyLogo.asset.gatsbyImageData}
              />
          </div>
          ))}
      </Slider>
    </div>
  );
};




export default SwipeCarousel;