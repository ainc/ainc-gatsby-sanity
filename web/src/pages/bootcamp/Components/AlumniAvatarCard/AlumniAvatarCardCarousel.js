import React, { useEffect, useState, useRef } from "react";
import AlumniAvatarCard from "./AlumniAvatarCard";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BrandButton from "../../../../components/UI/BrandButton/BrandButton";

export const AlumniAvatarCardCarousel = ({ featuredAlumni }) => {

  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
    <div className='overflow-hidden' style={{ backgroundColor: '#e6e7e8' }}>
      <Slider {...settings} className=''>
        {console.log(featuredAlumni)}
          {featuredAlumni?.map((alumni, idx) => (
          <div key={idx} className='p-3'  style={{ display: 'inline-block'}}>
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
      <div className="text-center py-4">
        <a href='/alumni' target='_blank'>
          <BrandButton className='my-3'>See More Alumni</BrandButton>
        </a>
      </div>
    </div>
  );
};




export default AlumniAvatarCardCarousel;