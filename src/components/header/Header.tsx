import React from "react";
import { NavLink } from "react-router-dom";

export function Header () {
    return <>
    <ul> 
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/book">Book</NavLink>
    </ul>
    </>
}