import React from "react";
import { HairCuts, BeardTrim} from "../../../assets/images/HairCut";
import Button from "../../../components/buttons/Button";
import { NavLink } from "react-router-dom";

export default function Services () {
  return (
    <>
    <div className="flex justify-center p-10">
    <HairCuts /><BeardTrim/>
    </div>
    <div className="flex justify-center p-4">
    <h1 className="text-4xl">Select A Service</h1>
    </div>
    
  <div className="flex flex-col items-center ">
    <div className="text-center mb-8">

    
    <div className="flex justify-between border-2 border-black w-[500px]">
        <div className="pl-4 py-5">
            <h1 className="flex font-bold">Men's Dry Haircut</h1>
            <p className="flex justify-center">20 minutes, €15</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
    <br/>
    <div className="flex justify-between border-2 border-black ">
        <div className="pl-4 py-5">
            <h1 className="flex font-bold">Men's Skin Fade</h1>
            <p className="flex justify-center ">25 minutes, €20</p>
           </div>
        <Button ><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
    <br/>
    <div className="flex justify-between border-2 border-black ">
        <div className="pl-4 py-5">
            <h1 className="flex  font-bold">Shampoo & Cut</h1>
            <p className="flex justify-center ">30 minutes, €25</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
    <br />
    <div className="flex justify-between border-2 border-black">
        <div className="pl-4 py-5">
            <h1 className="flex  font-bold">Child & Teen Dry Cut</h1>
            <p className="flex justify-center ">20 minutes, €10</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
    <br />
    <div className="flex justify-between border-2 border-black">
        <div className="pl-4 py-5">
            <h1 className="flex  font-bold">Child & Teen Skin Fade</h1>
            <p className="flex justify-center">30 minutes, €25</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
    <br />
    <div className="flex justify-between border-2 border-black">
        <div className="pl-4 py-5">
            <h1 className="flex font-bold">Senior Citizens Dry Cut</h1>
            <p className="flex justify-center">15 minutes, €12</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
<br />
<div className="flex justify-between border-2 border-black max-w-m">
        <div className="pl-4 py-5">
            <h1 className="flex font-bold">Beard Trim</h1>
            <p className="flex justify-center ">15 minutes, €10</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
<br />
<div className="flex justify-between border-2 border-black ">
        <div className="pl-4 py-5">
            <h1 className="font-bold">Men's Dry Cut & Beard Trim</h1>
            <p className="flex justify-center">15 minutes, €25</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
<br/>
<div className="flex justify-between border-2 border-black ">
        <div className="pl-4 py-5">
            <h1 className="font-bold">Blade All Over</h1>
            <p className="flex justify-center">15 minutes, €10</p>
           </div>
        <Button><NavLink to="/book" className="text-2xl">Book</NavLink></Button>
    </div>
<br />
<br />
</div>
  </div>
    </>
      
  );
}
