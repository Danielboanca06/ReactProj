import React from "react";
import { useState, useEffect } from "react";
import { sliderData } from "./sliderData";
import "./slider.css"

export default function Slider(){
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 12500;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
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
              <div className="content">
              <hr className="border-white my-2" />
                <h2 className="text-white font-mono">{slide.heading}</h2>
                <hr className="border-white my-2" />
                
              </div>
            </>
          )}
        </div>
      );
    })}
  </div>
);
};

