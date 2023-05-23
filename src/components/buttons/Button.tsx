import React from "react";
import "./Button.css"


export function Button ({children, className, ...rest}){
    

    return <button className="" {...rest}>{children}</button>
}