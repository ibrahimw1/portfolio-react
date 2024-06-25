import React from "react";
import { Navbar, Tech, Experience } from "./components";
import StarsCanvas from "./StarsCanvas";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
    <div className='relative z-0 bg-primary'>
      
      <Navbar />
      <StarsCanvas />
      <Experience />
      <Tech />
      <Footer/>
      </div>
    </>
  );
};

export default AboutPage;
