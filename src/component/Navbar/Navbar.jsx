import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return<>
      <nav className="bg-slate-800  top-0 w-full z-50 p-4 bg-fixed ">
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-white text-3xl font-bold   ">
            <i className='fa-solid fa-star cursor-pointer hover:text-red-300'></i>
            <Link to="/Start-Framework/" className='m-2 hover:text-red-300'>START FRAMEWORK</Link>
          </h1>
          <button
            type="button"
            className="text-white md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-black"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbarSupportedContent">
            <ul className="text-white flex flex-col  font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink to="/Start-Framework/about" className="hover:text-red-300 font-bold" >ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/Start-Framework/portfolio" className="hover:text-red-300 font-bold">PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to="/Start-Framework/contact" className="hover:text-red-300 font-bold">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  
}
