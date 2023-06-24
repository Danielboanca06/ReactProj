import React from "react";
import { ordinalNumbers } from "../src/Hooks/useordinalNumber";
import ConfirmedIcon from "../src/assets/images/ConfirmedIcon";
import Icon from "../src/assets/images/Icon";
import { NavLink } from "react-router-dom";
export default function Clarification () {


    let time :string[]= []
const data = localStorage.getItem("userData");
if(data){
    const d = JSON.parse(data);
   time.push(d.details.appointmentDetails.time)
   time.push(d.details.appointmentDetails.date)
}
const date = ordinalNumbers(time[1])
console.log(time[0])
console.log(date)
    return <>
    
    <div className="flex font-mono justify-center items-center py-10 font-bold px-0 bg-neutral-800 text-white">
                <h1 className="pr-2"><ConfirmedIcon/></h1> 
                    <h1 className="text-3xl">Comfirmed</h1>
                </div>
              
 <div className="bg-neutral-700 flex flex-col items-center">
 <h1 className="py-10 font-mono text-center text-white text-2xl ">Your Appointment Is Booked For {time[0]} On The {date} Pay In Shop</h1>
 <div className="py-10">
                 <NavLink to='/'><Icon/></NavLink> 
                </div>
  <h1 className="p-20 text-white text-center text-[15px] sm:text-[10px]">If for any Reason You can not make it please Contact Us at +353 1 234 5678 or Barberapp250@gmail.com</h1>

 </div>
  

        </>
}