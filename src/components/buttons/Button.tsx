import React from "react";



export default function Button ({children, ...rest}){
    

    return <button className="
     cursor-pointer h-fit bg-neutral-700 hover:text-yellow-500 p-4" {...rest}>{children}</button>
}