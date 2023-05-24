import React from "react";



export default function Button ({children, ...rest}){
    

    return <button className="lassName='text-[20px] hover:border-[3px] border-zinc-700 rounded-full
    px-4 py-2 cursor-pointer" {...rest}>{children}</button>
}