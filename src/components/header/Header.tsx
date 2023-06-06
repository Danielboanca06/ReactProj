import React from 'react';
import { NavLink } from 'react-router-dom';
import { AboutDropdown } from '../../pages/about/AboutDropdown';
import Icon from "../../assets/images/Icon"

import Button from '../buttons/Button';

export function Header() {

  type MenuItem = {
    id: number;
    title: JSX.Element;
  };
  

 const menuList: MenuItem[] =[
  {
    id:1,
    title: <AboutDropdown/>
  },
  {
    id:2,
    title: <NavLink className="text-3xl" to="/booking">Book</NavLink>
  }
]

return (<>
  <div className="flex justify-evenly  content-center ">
  <div className="pl-0 relative group">
    <Button>
      <NavLink to="/">
        <Icon />
      </NavLink>
    </Button>
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 bg-black text-white text-center rounded-md p-2 group-hover:opacity-100 group-hover:translate-y-0  duration-300">
      Go To HomePage
    </span>
 
</div>
<div className='flex pt-5 pb-5 '>
      {menuList.map((item) => (
        <button 
        className="text-xs hover:border-[1px] border-cyan-500 rounded-full
        px-4 py-2 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-cyan-800"
        key={item.id}>{item.title}</button>
      ))}
  
        </div>
  </div>
  <br />
  
  <hr className='w-full py-1 bg-cyan-500'/>
  </>
);

}
