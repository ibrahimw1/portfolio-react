import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-purple-900 bg-opacity-40 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left z-50">
          <p>Copyright © Ibrahim Wani. 2024</p>
        </div>
        <div className="mt-4 md:mt-0 flex justify-center space-x-4 z-50">
          <a href="https://github.com/ibrahimw1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <GitHub />
          </a>
          <a href="https://linkedin.com/in/ibrahim-wani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
