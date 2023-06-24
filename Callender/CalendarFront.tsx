import React, { useState } from 'react';
import { Time } from './Times';
import './calenderFront.css';
import { Header } from '../src/components/header/Header';
import DayIcon from '../src/assets/images/DayIcon';
import TimeIcon from '../src/assets/images/TimeIcon';

const d: Array<Array<string>> = [];
const today = new Date();

for (let i = 0; i < 28; i++) {
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleDateString('en-US', { month: 'short' });

  d.push([day, date.toString(), month]);
}

export function CalendarFront() {
  const [date, setDate] = useState("");

  function handleClick(day: Array<string>) {
    console.log(day);
    setDate(day.join(" "));
  }

  return (
    <>
    <div>
      <Header overlay={false}/>
    </div>
    
       <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
                <h1 className="pr-2"><DayIcon/></h1> 
                    <h1 className="text-3xl"> Select A Day </h1>
                </div>

                <div className="custom-container bg-neutral-700">
  <div className="custom-grid">
    {d.map((day, index) => (
      <button
        key={index}
        onClick={() => handleClick(day)}
        className="flex items-center bg-neutral-800 text-white border-2 border-black rounded-lg p-6 text-2xl w-full"
        style={date === day.join(" ") ? { backgroundColor: 'gold', border: '2px solid black', color: "black" } : {}}
      >
        {day.join(" ")}
      </button>
    ))}
  </div>
</div>



     
      {date && (
        <div className='bg-neutral-700'>
          <Time date={date} />
        </div>
      )}
    </>
  );
}
