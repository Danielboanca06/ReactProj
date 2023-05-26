import { getData } from "../hooks/getData";
import React, { useState } from "react";
import TimeCalendar from "react-timecalendar";
import Button from "./buttons/Button";
import { postData } from "../hooks/postData";


const openHours = [[8, 19], [9, 18]];

export default function MyCalendar() {


  function handleTimeClick (time) {
    const date = JSON.stringify(time)
    localStorage.setItem("time", date)
    console.log(date);
  }

  function handleClick() {
    const local = localStorage.getItem("user");
    postData();
    console.log(local);
    console.log(getData());
    window.location.href="/booked"
  }

  return (
    <>
      <TimeCalendar
        disableHistory={true}
        clickable={true}
        timeSlot={30}
        openHours={openHours}
        onTimeClick={handleTimeClick}
        bookings={[]}
        onDateFunction={() => {}}
        startTime={null}
        endTime={null}
      />
      <div className="p-10 flex justify-center text-3xl">
      <Button onClick={handleClick}>
       Click To Book Your Appointment
      </Button>
      </div>
      
    </>
  );
}

