import React from "react";
import Slider from "./ImageSlider/Slider";
import { Header } from "../../components/header/Header";
import { NavLink } from "react-router-dom";
import Gallery from "./Gallery";
import HomePageServices from "./HomePageServices";
import ScissorsIcon from "../../assets/images/Scissors";
import CameraIcon from "../../assets/images/Camera";
import ChatIcon from "../../assets/images/ChatIcon";
import "./home.css";
import { useScrollToTop } from '../../Hooks/useScrollToTop';

export function Home() {

  return (
    <>
      <Header overlay={true} />

      <div className="flex">
        <Slider />
      </div>

      <div className="overlay2 flex flex-col justify-center items-center font-mono">
        <h1 className="text-[40px] pb-5 sm:text-[25px]">Welcome To BarberShop</h1>
        <NavLink to='/book' onClick={() => useScrollToTop()}>
          <button className="btt">Book</button>
        </NavLink>
      </div>

      <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
        <h1 className="pr-2"><ScissorsIcon /></h1>
        <h1 className="text-3xl">Services</h1>
      </div>

      <HomePageServices />

      <div className="flex font-mono justify-center items-center py-5 bg-neutral-800 text-white">
        <h1 className="pr-2"><CameraIcon /></h1>
        <h1 className="text-3xl font-bold">Gallery</h1>
      </div>

      <div className="gallery">
        <Gallery />
      </div>

      <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
        <h1 className="pr-2"><ChatIcon /></h1>
        <h1 className="text-3xl"> Reviews </h1>
      </div>

      <div className="flex flex-col bg-neutral-700 py-4 font-mono items-center justify-evenly gap-5 sm:flex-row sm:flex-wrap sm:gap-2 sm:justify-evenly">
        <div className="flex flex-col items-center bg-slate-100 shadow-xl border-4 border-black p-3">
          <p className="w-[300px] h-[150px] border-b-2 border-black italic">
            "Incredible cut at The Barber Shop! The barber's attention to detail was unmatched. Highly recommended!"
          </p>
          <h1 className="font-bold p-2">- Matthew W</h1>
        </div>
        <div className="flex flex-col items-center bg-slate-100 shadow-xl border-4 border-black p-3">
          <p className="w-[300px] h-[150px] border-b-2 border-black italic">
            "The Barber Shop is the go-to spot! Expert grooming for hair and beard. Professional and relaxing atmosphere!"
          </p>
          <h1 className="font-bold p-2">- Ethan S</h1>
        </div>
        <div className="flex flex-col items-center bg-slate-100 shadow-xl border-4 border-black p-3">
          <p className="w-[300px] h-[150px] border-b-2 border-black italic">
            "Impressive skills at The Barber Shop! The barber created a masterpiece. Trustworthy and professional salon."
          </p>
          <h1 className="font-bold p-2">- Mike H</h1>
        </div>
      </div>
    </>
  );
}
