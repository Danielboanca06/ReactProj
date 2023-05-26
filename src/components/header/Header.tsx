import React from 'react';
import { NavLink } from 'react-router-dom';
import { AboutDropdown } from '../../pages/about/AboutDropdown';
import Icon from "../../assets/images/Icon"
export function Header() {

  type MenuItem = {
    id: number;
    title: JSX.Element;
  };
  

 const menuList: MenuItem[] =[
  {
    id:1,
    title: <NavLink className="text-3xl" to="/">Home</NavLink>,
  },
  {
    id:2,
    title: <AboutDropdown/>
  }
]




return (
  <div className="flex justify-between content-center">
    <div className="pr-10">
      <Icon />
    </div>
    <div className='flex gap-10 pt-5 pb-5'>
      {menuList.map((item) => (
        <h2 className='text-[20px] hover:border-[3px] border-zinc-700 rounded-full
        px-4 py-2 cursor-pointer' key={item.id}>{item.title}</h2>
      ))}
    
    <h2 className='text-[20px] hover:border-[1px] border-zinc-700 rounded-full
        px-4 py-2 cursor-pointer hover:bg-gradient-to-r from-zinc-700 to-zinc-900'>
        {<NavLink className="text-3xl" to="/booking">Book</NavLink>}</h2>
        </div>
  </div>
);

}
