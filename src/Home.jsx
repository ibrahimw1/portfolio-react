import React from "react";
import { Navbar, Hero, About, Contact, Contact2 } from "./components";
import StarsCanvas from "./StarsCanvas";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <div className='relative z-0 bg-primary'>

    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      
      <Navbar />
      <StarsCanvas />
      <Hero />
      <About />
      <Contact2/>
      <Footer/>
      </div>
      </div>
    </>
  );
};

export default Home;
