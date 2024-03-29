import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    let experiencesQuery = `*[_type == "experiences"]`;
    let skillsQuery = `*[_type == "skills"]`;

    client.fetch(experiencesQuery)
    .then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery)
    .then((data) => { 
      setSkills(data);
    });
  },[])

  return (
    <>
      <h2 className="head-text"> Skills <span>&</span> Experience </h2>

      <div className="app__skills-container">

        <motion.div 
          className="app__skills-list"
        >
          {skills?.map((skill, index) => (
            <motion.div 
            whileInView = {{opacity: [0, 1] }}
            transition= {{duration: 0.5}}
            className="app__skills-item app__flex"
            key={skill.name}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon).url()} alt={skill.name}/>
              </div>
              <p className="p-text">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="app__skills-exp"
        >
          {experiences?.map((experience, index) => (
              <motion.div
                className="app__skills-exp-item app__flex"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="p-text">{experience.year}</p>
                </div>

                <motion.div className="app__skills-exp-works">
                  {experience?.work?.map((work, index) =>(
                    <>
                      <motion.div
                        whileInView = {{opacity: [0, 1] }}
                        transition= {{duration: 0.5}}
                        className="app__skills-exp-work app__flex"
                        data-tooltip-id={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>

                      <Tooltip 
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </Tooltip>
                    </>
                  ))}
                </motion.div>

              </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Skills,"app__skills"),
    "Skills",
    "app__whitebg"
  );