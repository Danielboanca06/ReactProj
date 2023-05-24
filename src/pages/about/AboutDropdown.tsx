import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export function AboutDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  

  return (
    <div className="relative inline-block"
    onMouseLeave={closeMenu}>
      <button
        className='text-3xl'
        onClick={toggleMenu}
        onMouseEnter={toggleMenu}>
        
        About
      </button>

      {isOpen && (<>
     
        <ul className="absolute top-0 left-0 mt-8 bg-white text-gray-800 border border-gray-300 rounded">
          <li className="px-4 py-2"><NavLink to="/about/us">Us</NavLink></li>
          <li className="px-4 py-2"><NavLink to="/about/services">Services</NavLink></li>
          <li className="px-4 py-2"><NavLink to="/about/location">Location</NavLink></li>
        </ul>
     </> )}
    </div>
  );
};


