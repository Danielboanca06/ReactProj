import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../assets/images/Icon';


export function Header({ overlay }) {
  const [hasOverlay, setHasOverlay] = useState(false);
  

  useEffect(() => {
    if (overlay) {
      setHasOverlay(true);
    } else {
      setHasOverlay(false);
    }
  }, [overlay]);


  return (
    <>
      <div className="flex justify-center text-[16px] text-white font-mono bg-neutral-700">
        <div className={hasOverlay ? 'overlay' : ''}>
          <div  className="p-5">
            <div className="flex justify-center p-3">
              <button>
                <NavLink to="/">
                  <div className="w-auto h-auto  p-2 rounded-xl ">
                    <Icon />
                  </div>
                </NavLink>
              </button>
            </div>
            <div className='flex flex-row'>
              <NavLink
                to="/"
                className={({isActive}) => isActive  ?
                "text-m  px-4 pt-2 cursor-pointer border-b-[3px] border-white" : 'text-m  py-2'}>
              
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({isActive}) => isActive  ?
                "text-m  px-4 pt-2 cursor-pointer border-b-[3px] border-white" : 'text-m px-4  py-2'}>
                Services
              </NavLink>
              <NavLink
                to="/theteam"
                className={({isActive}) => isActive  ?
                "text-m px-4 pt-2 cursor-pointer border-b-[4px] border-white" : 'text-m px-4 py-2'}>
                Us
              </NavLink>
              <NavLink
                to="/book"
                className={({isActive}) => isActive  ?
                "text-m  px-4 pt-2 cursor-pointer border-b-[3px] border-white" : 'text-m px-4 py-2'}>
                Book
              </NavLink>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
