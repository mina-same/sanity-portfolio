import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss"

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let testimonialQuery = `*[_type == "testimonial"]`;
    let brandsQuery = `*[_type == "brands"]`;

    client.fetch(testimonialQuery)
    .then((data) => {
      setTestimonial(data);
    });

    client.fetch(brandsQuery)
    .then((data) => { 
      setBrands(data);
    });
  },[])

  return (
    <div>
      Testimonial
    </div>
  )
}

export default AppWrap(
    MotionWrap(Testimonial,"app__Testimonial"),
    "Testimonial",
    "app__primarybg"
  );
