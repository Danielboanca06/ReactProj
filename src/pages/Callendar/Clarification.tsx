import React from "react";
import { useClarification } from "./CallendarHooks/useCalrification";
import ConfirmedIcon from "../../assets/images/ConfirmedIcon";
import Icon from "../../assets/images/Icon";
import { NavLink } from "react-router-dom";
import { useScrollToTop } from "../../Hooks/useScrollToTop";

export default function Clarification() {
  const { time, date } = useClarification();

  return (
    <>
      <div className="flex font-mono justify-center items-center py-10 font-bold px-0 bg-neutral-800 text-white">
        <h1 className="pr-2">
          <ConfirmedIcon />
        </h1>
        <h1 className="text-3xl">Confirmed</h1>
      </div>

      <div className="bg-neutral-700 flex flex-col items-center">
        <h1 className="py-10 font-mono text-center text-white text-2xl">
          Your Appointment Is Booked For {time[0]} On The {date} Pay In Shop
        </h1>
        <div className="py-10">
          <NavLink to="/" onClick={useScrollToTop}>
            <Icon />
          </NavLink>
        </div>
        <h1 className="text-white font-mono">Booking Confirmed</h1>
        <h1 className="p-20 text-white text-center text-[15px] sm:text-[10px] font-mono">
        Please note, you are only able to book appointments for your own account and it will not allow multiple bookings for other individuals; each person must create their own account to book appointments.
        </h1>
      </div>
    </>
  );
}

  

      