import React from "react"
import './LineLoader.css';

export function LineLoader(){
    return <>
        <div className="relative">
  <div className="absolute top-0 left-0 w-full h-1 bg-gray-500 animate-line"></div>
</div>
    </>
}