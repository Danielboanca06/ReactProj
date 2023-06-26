import React from "react";
import { useSlider } from "./useSlider";
import "./slider.css"

export default function Slider(){
 
    const {sliderData, currentSlide} = useSlider();

  return (<>
  <div className="slider">

  
    
    {sliderData.map((slide, index) => {
      return (
        <div
          className={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <>
              <img src={slide.image} alt="slide" className="image" />
             
            </>
          )}
        </div>
      );
    })}
  </div>
  
  </>);
};

