import React from "react";
import { NavLink } from "react-router-dom";
import {useScrollToTop} from '../../Hooks/useScrollToTop'

export default function HomePageServices () {
    return <>
       <div className="flex flex-col bg-neutral-700 pt-5 pb-10 font-mono items-center justify-evenly gap-5 sm:flex-row sm:flex-wrap sm:gap-2 sm:justify-evenly">
       <NavLink to="/services" onClick={()=>useScrollToTop()}>
  <div className="flex flex-col items-center bg-slate-100  shadow-xl hover: border-4 border-black hover:bg-neutral-800 hover:text-white"> 
    <img className="w-[350px] h-[350px] border-b-4 border-black" src="https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
    <h1 className="font-bold p-2">
      All Age Haircuts
    </h1>

  </div>
  </NavLink> 
  <NavLink  to="/services" onClick={()=>useScrollToTop()}>
  <div className="flex flex-col items-center bg-slate-100 border-4 border-black shadow-xl hover:bg-neutral-800 hover:text-white">
   
     
    
   
    <img className="w-[350px] h-[350px] border-b-4 border-black" src="https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
    <h1 className="font-bold p-2">
      Gents Beard Trim
    </h1>
  </div>
  </NavLink>
</div>

    </>
}