import React, { useState } from 'react';
import { Container, Wrapper, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import WorkCards from './WorkCards';
import { projects } from '../constants';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const Works = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]' 
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and some with live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <Container id="projects">
        <Wrapper>
          <ToggleButtonGroup>
            <ToggleButton active={toggle === 'all'} value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            <Divider />
            <ToggleButton active={toggle === 'web app'} value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
            <Divider />
            <ToggleButton active={toggle === 'java'} value="java" onClick={() => setToggle('java')}>JAVA</ToggleButton>
            <Divider />
            <ToggleButton active={toggle === 'machine learning'} value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === 'all' && projects.map((project) => (
              <WorkCards key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <WorkCards key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    </>
  );
};

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper(Works);
