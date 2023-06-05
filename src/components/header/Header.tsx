import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { AboutDropdown } from '../../pages/about/AboutDropdown';
import Icon from "../../assets/images/Icon"
import { LineLoader } from '../Loader/LineLoader';
import Button from '../buttons/Button';

export function Header() {

  const [Loading, setLoading] = useState(false);

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

return (<>
  <div className="flex justify-between content-center">
    <div className="pr-10=">
      <Icon />
    </div>
    <div className='flex gap-10 pt-5 pb-5'>
      {menuList.map((item) => (
        <Button 
        key={item.id}>{item.title}</Button>
      ))}
    
    <h2  className='text-[20px] hover:border-[1px] border-cyan-500 rounded-full
        px-4 py-2 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-cyan-800'>
        {<NavLink className="text-3xl" to="/booking">Book</NavLink>}</h2>
        </div>
  </div>
  <br />
  
  <hr className='w-full py-1 bg-cyan-500'/>
  </>
);

}
