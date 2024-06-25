import React from "react";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact2 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Feel free to connect with me
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Contact Me
        </h2>
      </motion.div>
      
      <div className="flex justify-center mt-6"> {/* Adjust margin-top as needed */}
        {/* GitHub icon */}
        <IconButton
          aria-label="GitHub"
          size="large"
          color="primary"
          href="https://github.com/ibrahimw1"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <GitHub fontSize="large" />
        </IconButton>
        
        {/* LinkedIn icon */}
        <IconButton
          aria-label="LinkedIn"
          size="large"
          color="primary"
          href="https://www.linkedin.com/in/ibrahim-wani"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        
        {/* Email icon */}
        <IconButton
          aria-label="Email"
          size="large"
          color="primary"
          href="mailto:ibrahimwani@hotmail.com"
          className="icon-btn"
        >
          <Email fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};

export default SectionWrapper(Contact2, "work");
