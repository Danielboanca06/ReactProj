import React from "react";

export default function OpeningHours() {
    return (
      <div className="bg-rgb(212 212 216) p-10">
        <div className="container mx-auto mt-10 px-4 h-50 w-full">
          <h2 className="text-2xl text-black font-bold mb-4">Opening Hours</h2>
          <div className="bg-rgb(212 212 216) p-4 rounded-md shadow-md">
            <div className="grid grid-cols-2 gap-2 font-mono">
              <div className="font-bold">Monday</div>
              <div className="text-black">09:30 - 18:00</div>
  
              <div className="font-bold text-black">Tuesday</div>
              <div className="text-black">09:30 - 18:00</div>
  
              <div className="font-bold text-black">Wednesday</div>
              <div className="text-black">09:30 - 18:00</div>
  
              <div className="font-bold text-black">Thursday</div>
              <div className="text-black">09:30 - 20:00</div>
  
              <div className="font-bold text-black">Friday</div>
              <div className="text-black">09:30 - 20:00</div>
  
              <div className="font-bold text-black">Saturday</div>
              <div className="text-black">09:00 - 17:30</div>
  
              <div className="font-bold text-black">Sunday</div>
              <div className="text-black">Closed</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  