import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../../components/buttons/Button";
import OpeningHours from "../../components/OpeningHours";
export function BookingFront (){
    return <>
    <div>
    <div className="flex justify-evenly text-3xl p-10">
        <Button>
            <NavLink to="/book">Book</NavLink>
        </Button>
        
    </div>
        <OpeningHours/>
    </div>
   <Outlet/>
    </>
}