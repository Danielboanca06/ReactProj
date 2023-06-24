import React from "react";
import Icon from "../../assets/images/Icon";
import { useScrollToTop } from "../../Hooks/useScrollToTop";
import { FaceBookIcon, InstaGramIcon, TikTokIcon } from "../../assets/images/SocialIcons";


export default function BottomFooter () {
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
     <div className="flex flex-row justify-evenly items-center bg-neutral-800 p-2">
  <div className="flex justify-center relative group">
    <button onClick={()=>useScrollToTop()}>
     
        <Icon />
      
    </button>
   
  </div>

  <div className="flex flex-wrap justify-center gap-4 py-5">
    <button onClick={handleFaceBookClick}><FaceBookIcon /></button>
    <button onClick={handleInstaGramClick}><InstaGramIcon /></button>
    <button onClick={handleTickTokClick}><TikTokIcon /></button>
  </div>
</div>

     </>)
}