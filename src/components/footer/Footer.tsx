import React from "react";
import {NavLink }from "react-router-dom"
import Contacts from "./Contact";
import ContactIcon from "../../assets/images/ContactIcon";
import { MapBoxLocation } from "./MapBoxLocation";
import BottomFooter from "./BottomFooter";
import { useScrollToTop } from "../../Hooks/useScrollToTop";
export default function Footer () {

    
    

    return (<>
        <div className="bg-neutral-700">
        <div className="flex font-mono justify-center items-center mb-5 py-5 font-bold px-0 bg-neutral-800 text-white">
  <h1 className="pr-2"><ContactIcon /></h1>
  <h1 className="text-3xl">Contact</h1>
</div>
<div className="flex flex-col items-center justify-evenly sm:flex-row sm:flex-wrap sm:justify-evenly">
  <div className="flex sm:pl-7">
  <Contacts />
  </div>
  <div className="flex">
    <MapBoxLocation />
  </div>
</div>
      <div>
        
      </div>
     <div className="py-10">
     <BottomFooter/>
     </div>
      
     <div className="flex justify-center text-center">
     <button className="text-white font-mono pb-2 p-0 hover:no-underline underline" onClick={useScrollToTop}>
      <NavLink to='/legal' className='flex justify-center'>
        Legal
      </NavLink>
      </button>
     </div>
  
      <div className="flex justify-center text-center text-white font-mono">Copyright © 2023 Barber Shop. All rights reserved.</div>
      </div>
   </> )
}
 
  
  
