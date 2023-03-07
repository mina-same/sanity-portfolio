import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import images from "../../assets/images";
import "./About.scss";

import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "building a beautiful and scalable web pages.",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I can design wonderfully web.",
//     imgUrl: images.about02,
//   },
//   {
//     title: "front-end",
//     description: "I can build web using HTML, CSS, React.js, and Tailwind CSS.",
//     imgUrl: images.about03,
//   },
//   {
//     title: "back-end",
//     description:
//       "work on server-side and databases using NODEJS, EXPRESS, MOGODB and SQLSERVER.",
//     imgUrl: images.about04,
//   },
//   // {title: "Web ui/ux", description: "I can design a clean and modern UI using Figma and Adobe XD.", imgUrl: images.about05},
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;

    client.fetch(query).then((data) => {
      setAbouts(data);
    });

  }, []);
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Development</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={index}
            className="app__profile-items"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
