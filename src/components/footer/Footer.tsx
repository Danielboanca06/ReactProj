import React from "react";
import Icon from "../../assets/images/Icon";
import { FaceBookIcon, InstaGramIcon, TikTokIcon } from "../../assets/images/SocialIcons";
import  Button  from "../buttons/Button";
import { NavLink } from "react-router-dom";
export default function Footer () {

    function handleFaceBookClick () {
      window.location.href="https://www.facebook.com"
    }
    function handleInstaGramClick () {
      window.location.href="https://www.instagram.com/"
    }
    function handleTickTokClick () {
      window.location.href="https://www.tiktok.com/"
    }
    

    return (<>
  <div className=" flex justify-center relative group">
    <Button>
      <NavLink to="/">
        <Icon />
      </NavLink>
    </Button>
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 bg-black text-white text-center rounded-md p-2 group-hover:opacity-100 group-hover:translate-y-0  duration-300">
      Go To HomePage
    </span>
 
</div>
        
    <div className='flex  justify-between pt-5 pb-5 min-w-screen max-h-full'>
      
        <Button onClick={handleFaceBookClick}>{<FaceBookIcon/>}</Button>
        <Button onClick={handleInstaGramClick}>{<InstaGramIcon/>}</Button>
        <Button onClick={handleTickTokClick}>{<TikTokIcon/>}</Button>
        
      
    
      
        
  </div>
  <br />
 

      <div className="flex justify-center">Copyright © 2023 Barber Shop. All rights reserved.</div>
      
   </> )
}
 
  
  
