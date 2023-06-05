import React from "react";
import { ordinalNumbers } from "../src/Hooks/useordinalNumber";

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
    <div className="flex flex-col items-center justify-center h-screen p-10">
  <h1 className="pt-20 text-black text-7xl">Appointment Booked Successfully</h1>
  <br />
  <h1 className="pt-5 text-black text-5xl">Your Appointment has been booked for {time[0]} on the {date} Pay at the Shop</h1>
  <h1 className="pt-20 text-black text-3xl">If for any Reason You can not make it please Contact Us at 089 456 7692 or BarberShop@bestbarebers.com</h1>
</div>

        </>
}