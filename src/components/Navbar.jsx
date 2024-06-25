// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-11 h-11 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Ibrahim &nbsp;
//             <span className='sm:block hidden'> | SWE @ UofC</span>
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // import { styles } from "../styles";
// // import { navLinks, socials } from "../constants"; // Assuming you have a Socials array in your constants
// // import { logo, menu, close } from "../assets";

// // const Navbar = () => {
// //   const [active, setActive] = useState("");
// //   const [toggle, setToggle] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY;
// //       if (scrollTop > 100) {
// //         setScrolled(true);
// //       } else {
// //         setScrolled(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div
// //       className={`w-full h-[65px] fixed top-0 shadow-lg ${
// //         scrolled ? "bg-[#03001417]" : "bg-transparent"
// //       } backdrop-blur-md z-50 px-10 transition-all duration-300`}
// //     >
// //       <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
// //         <Link
// //           to="/"
// //           className="h-auto w-auto flex flex-row items-center"
// //           onClick={() => {
// //             setActive("");
// //             window.scrollTo(0, 0);
// //           }}
// //         >
// //           <img
// //             src={logo}
// //             alt="logo"
// //             className="cursor-pointer hover:animate-slowspin w-11 h-11 object-contain"
// //           />

// //           <span className="font-bold ml-[10px] hidden md:block text-gray-300">
// //             WebChain Dev
// //           </span>
// //         </Link>

// //         <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
// //           <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
// //             {navLinks.map((nav) => (
// //               <a
// //                 href={`#${nav.id}`}
// //                 key={nav.id}
// //                 className={`cursor-pointer ${
// //                   active === nav.title ? "text-white" : "text-secondary"
// //                 }`}
// //                 onClick={() => setActive(nav.title)}
// //               >
// //                 {nav.title}
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="flex flex-row gap-5">
// //           {socials.map((social) => (
// //             <img
// //               src={social.src}
// //               alt={social.name}
// //               key={social.name}
// //               width={24}
// //               height={24}
// //               className="cursor-pointer"
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       <div className="sm:hidden flex flex-1 justify-end items-center">
// //         <img
// //           src={toggle ? close : menu}
// //           alt="menu"
// //           className="w-[28px] h-[28px] object-contain"
// //           onClick={() => setToggle(!toggle)}
// //         />

// //         <div
// //           className={`${
// //             !toggle ? "hidden" : "flex"
// //           } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
// //         >
// //           <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
// //             {navLinks.map((nav) => (
// //               <li
// //                 key={nav.id}
// //                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
// //                   active === nav.title ? "text-white" : "text-secondary"
// //                 }`}
// //                 onClick={() => {
// //                   setToggle(!toggle);
// //                   setActive(nav.title);
// //                 }}
// //               >
// //                 <a href={`#${nav.id}`}>{nav.title}</a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const currentPath = location.pathname;
//     if (currentPath === "/") {
//       setActive("");
//     } else {
//       const activeNavLink = navLinks.find((nav) => nav.path === currentPath);
//       setActive(activeNavLink ? activeNavLink.title : "");
//     }
//   }, [location.pathname]);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
//           {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Ibrahim &nbsp;
//             <span className='sm:block hidden'> | SWE @ UofC</span>
//           </p> */}
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <Link to={nav.path}>{nav.title}</Link>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <Link to={nav.path}>{nav.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks, socials } from "../constants";
import { logo, menu, close } from "../assets";
import { Star, GitHub } from "@mui/icons-material"; // Assuming you're using Material-UI for icons

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActive("");
    } else {
      const activeNavLink = navLinks.find((nav) => nav.path === currentPath);
      setActive(activeNavLink ? activeNavLink.title : "");
    }
  }, [location.pathname]);

  return (
    <div
      className={`w-full h-[77px] fixed top-0 shadow-lg ${
        scrolled ? "bg-[#03001417]" : "bg-transparent"
      } backdrop-blur-md z-50 px-10 transition-all duration-300`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[25px]">
        <Link
          to="/"
          className="h-auto w-auto flex flex-row items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer hover:animate-slowspin h-[65px] object-contain mr-[135px]"
          />
          {/* <span className="font-bold ml-[10px] mr-[160px] hidden md:block text-gray-300">
            
          </span> */}
        </Link>

        <div className="hidden md:flex md:flex-grow md:justify-center"> {/* Hide in mobile */}
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[12px] rounded-full text-gray-200">
              {navLinks.map((nav) => (
                <Link
                  to={nav.path}
                  key={nav.id}
                  className={`cursor-pointer ${
                    (active === nav.title || (nav.path === "/" && active === "")) ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5"> {/* Hide in mobile */}
          <a
            href="https://github.com/ibrahimw1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#7042f861] hover:bg-[#843ba0d8] mr-[7px] px-[14px] py-[7px] rounded-[12px] text-gray-200 flex items-center">
              <GitHub className="mr-2" style={{ color: '#B088F9' }} />
              <Star className="mr" style={{ color: '#B088F9' }} />
            </button>
          </a>
        </div>

        <div className="md:hidden flex items-center"> {/* Show in mobile */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      <div
        className={`md:hidden ${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav) => (
            <Link
              to={nav.path}
              key={nav.path}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                (active === nav.title || (nav.path === "/" && active === "")) ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              {nav.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;







