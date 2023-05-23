import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from "../../assets/images/Icon"
export function Header() {

  type MenuItem = {
    id: number;
    title: JSX.Element;
  };
  

const menuList: MenuItem[] =[
  {
    id:1,
    title: <NavLink to="/">Home</NavLink>,
  },
  {
    id:2,
    title: <NavLink to="/about">About</NavLink>,
  }
]




return (
  <div className="flex justify-between">
    <div className="pr-10">
      <Icon />
    </div>
    <div className='flex gap-10'>
      {menuList.map((item) => (
        <h2 className='text-[20px] hover:border-[1px] border-zinc-700 rounded-full
        px-4 py-2 cursor-pointer' key={item.id}>{item.title}</h2>
      ))}
    
    <h2 className='text-[20px] hover:border-[1px] border-zinc-700 rounded-full
        px-4 py-2 cursor-pointer hover:bg-gradient-to-r from-zinc-700 to-zinc-900'>
        {<NavLink to="/book">Book</NavLink>}</h2>
        </div>
  </div>
);

}
