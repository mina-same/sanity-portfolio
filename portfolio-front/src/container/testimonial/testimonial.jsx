import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let testimonialQuery = `*[_type == "testimonials"]`;
    let brandsQuery = `*[_type == "brands"]`;

    client.fetch(testimonialQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  }


  return (
    < >
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(test.imageUrl).url()}
              alt="testimonials-img"
            />
            <div className="app__testimonial-content ">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">

            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length -1 :  currentIndex -1 )}>
              <HiChevronLeft/>
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0:  currentIndex +1 )}>
              <HiChevronRight/>
            </div>

          </div>

        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {
          brands.map((brand, index) => (
            <motion.div
              key={brand._id}
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5, type: "tween"}}
            >
              <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
            </motion.div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap( 
  MotionWrap(Testimonial, "app__testimonial"),
  "Testimonial",
  "app__primarybg"
);
