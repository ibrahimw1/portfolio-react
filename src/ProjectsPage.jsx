import React, { useState } from "react";
import { Navbar, Works } from "./components";
import StarsCanvas from "./StarsCanvas";
import WorkDetails from "./components/WorkDetails";
import Footer from "./Footer";

const ProjectsPage = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <div className='relative z-0 bg-primary'>
      <Navbar />
        <StarsCanvas />

        <Works openModal={openModal} setOpenModal={setOpenModal} />
        {openModal.state && <WorkDetails openModal={openModal} setOpenModal={setOpenModal} />}
        <Footer/>
      </div>
    </>
  );
};

export default ProjectsPage;
