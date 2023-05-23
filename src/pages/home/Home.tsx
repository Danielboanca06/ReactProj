import React from "react";
import Slider from "./Slider";
export function Home () {
    return<>
            <div className="flex justify-center text-red pt-20">
                {<Slider/>}
            </div>
            
                <div className="flex justify-center pb-5 font-bold"><h1 className="text-5xl">Services</h1></div>
                <ul className="flex justify-evenly pt-3px">
                    <li><h3 className="text-3xl">Haircuts</h3></li>
                    <li><h3 className="text-3xl">Beard Trims</h3></li>
                    <li><h3 className="text-3xl">Hair Wash</h3></li>
                </ul>
            <img src='' alt="" />
        </>
}