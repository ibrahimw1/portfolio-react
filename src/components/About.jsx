import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const highlightStyle = { color: '#915EFF' };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>A BIT ABOUT ME</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Hello! I am Ibrahim Wani, a third-year Software Engineering Student at the University of Calgary with a profound passion for programming and technology.
      Fueled by my passion for innovation, I have a strong background in various technologies including <span style={highlightStyle}>Python</span>, <span style={highlightStyle}>AWS Cloud</span>, <span style={highlightStyle}>JavaScript</span>, <span style={highlightStyle}>C++</span>, <span style={highlightStyle}>Java</span>, <span style={highlightStyle}>React</span>, <span style={highlightStyle}>AWS Cloud</span>, <span style={highlightStyle}>ML/AI</span>, <span style={highlightStyle}>Generative AI</span>, <span style={highlightStyle}>LLMs</span> and <span style={highlightStyle}>SQL</span>.
      
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 2)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am also deeply interested in and currently advancing my knowledge in the areas of <span style={highlightStyle}>MLOps</span>, <span style={highlightStyle}>DevOps</span>, and <span style={highlightStyle}>Cloud Computing</span>.
        I love to continuously learn and stay up-to-date with the latest advancements in the field of <span style={highlightStyle}>software engineering</span>.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 3)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Thank you for visiting my portfolio, and I invite you to explore my work further. Feel free to reach out if you'd like to collaborate or share your own adventures.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");