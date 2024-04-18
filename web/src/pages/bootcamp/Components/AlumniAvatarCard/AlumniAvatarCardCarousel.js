import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import AlumniAvatarCard from "./AlumniAvatarCard";
import { Row } from "react-bootstrap";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({ featuredAlumni }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  /*
  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === featuredAlumni.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < featuredAlumni.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };
  */
  const ref = useRef(null);

  return (
    <div className="relative overflow-hidden py-8" style={{backgroundColor: '#e6e7e8'}} ref={ref}> 
      <motion.div
        drag="x"
        dragConstraints={ref}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 20}%`,
        }}
        transition={SPRING_OPTIONS}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images featuredAlumni={featuredAlumni} imgIndex={imgIndex}/>
      </motion.div>
    </div>
  );
};

const Images = ({ featuredAlumni, imgIndex }) => {
  return (
    <Row className="p-3" style={{flexWrap: 'nowrap'}}>
      {featuredAlumni.map((alumni, idx) => {
        return (
            <AlumniAvatarCard alumniImage={alumni.picture.asset.gatsbyImageData} 
                              name={alumni.name} 
                              jobTitle={alumni.jobTitle} 
                              companyLogo={alumni.companyLogo.asset.gatsbyImageData}
                              />
        );
      })}
    </Row>
  );
};



export default SwipeCarousel;