import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/notimiser-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-50 bg-[#2abfff] ${isScrolled ? 'bg-transparent bg-[#2abfff]' : ''}`}>
      <div
        className={`flex justify-between items-center sm:h-24 h-16 w-full mx-auto px-4 text-white ${
          isScrolled ? 'bg-[#2abfff] bg-opacity-70 backdrop-filter backdrop-blur-lg' : ''
        }`}
      >
        <a href="/">
        <img src={logo} alt="logo" className="sm:h-20 h-10 sm:mx-10 mx-3" />
        </a>
        <ul className="hidden md:flex font-medium text-md">
          <li className="p-4">
            <Link to="/" className="transition duration-300 ease-in-out hover:text-black">
              HOME
            </Link>
          </li>
          <li className="p-4">
            <Link to="/login" className="transition duration-300 ease-in-out hover:text-black">
              LOGIN
            </Link>
          </li>
          <li className="p-4">
            <Link to="/signup" className="transition duration-300 ease-in-out hover:text-black">
              SIGNUP
            </Link>
          </li>
          <li className="p-4">
            <a href="#about" className="transition duration-300 ease-in-out hover:text-black">
              ABOUT
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div className={nav ? 'hidden' : 'fixed left-0 top-0 w-[60%] border-r h-screen bg-[#ffe] ease-in-out duration-500'}>
          <h1 className="w-full text-3xl font-bold m-7 text-[#2abfff]">NOTIMISER</h1>
          <ul>
            <li className="p-4 border-b border-[#2abfff] text-[#2abfff]">
              <Link to="/" className="hover:text-blue-600">
                HOME
              </Link>
            </li>
            <li className="p-4 border-b border-[#2abfff] text-[#2abfff]">
              <Link to="/login" className="hover:text-blue-600">
                LOGIN
              </Link>
            </li>
            <li className="p-4 border-b border-[#2abfff] text-[#2abfff]">
              <Link to="/signup" className="hover:text-blue-600">
                REGISTER
              </Link>
            </li>
            <li className="p-4 border-b border-[#2abfff] text-[#2abfff]">
               <a href="#about" className="hover:text-blue-600">
                 ABOUT
               </a>
             </li>
           </ul>
         </div>
       </div>
     </div>
  );
}

export default Navbar;
           

