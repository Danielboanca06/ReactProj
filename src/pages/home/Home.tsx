import React from "react";
import Slider from "./Slider";
import { HairCuts, BeardTrim } from "../../assets/images/HairCut";
import { NavLink } from "react-router-dom";
import Button from "../../components/buttons/Button"

export function Home () {
    return<>
            <div className="flex justify-center text-red pt-20">
                <Slider/>
            </div>
                <div className="flex justify-center pt-5 font-bold">
                    <h1 className="text-5xl">Services</h1>
                </div>
                <ul className="flex justify-around pt-5">
                    <li><Button>
                            <NavLink to="/services">
                               <HairCuts/> 
                            </NavLink>
                        </Button>
                    </li>
                    <li><Button>
                            <NavLink to="/services">
                               <BeardTrim/> 
                            </NavLink>
                        </Button>
                    </li>
                </ul>
                <ul className="flex justify-around pt-3px pb-10">  
                    <li className="pl-4"><h3 className="text-3xl">Haircuts</h3></li>
                    <li className="pl-4"><h3 className="text-3xl">Beard Trims</h3></li>
                </ul>       
        </>
}