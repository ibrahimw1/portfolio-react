import React from "react";
import { Navbar, Contact } from "./components";
import StarsCanvas from "./StarsCanvas";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <>
    <div className='relative z-0 bg-primary'>
      
      <Navbar />
      <StarsCanvas />
      <Contact />
      <Footer/>

      </div>
    </>
  );
};

export default ContactPage;
