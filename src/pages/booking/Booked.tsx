import React from "react";


export default function Booked() {
  return (
    <div className="flex flex-col justify-center bg-white min-h-screen">
      <h1 className="text-black text-6xl">
        Your appointment is booked
      </h1>
      <div className="">
      <h3 className="text-black text-1xl">
        If you cannot make it please contact us at barberapp@barber.com
      </h3>
      </div>
    </div>
  );
}
