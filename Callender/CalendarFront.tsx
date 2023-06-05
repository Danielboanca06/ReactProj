import React, { useState } from 'react';
import { Time } from './Times';
import './calenderFront.css';

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
      {!date && <h1 className='flex pt-5 justify-center text-black text-3xl'>Select A Day</h1>}
      {date && <h1 className='flex pt-5 justify-center text-black text-3xl'>Select A Time</h1>}
      <div className="container mx-auto">
        <div className="grid grid-cols-7 gap-4">
          {d.map((day, index) => (
            <button
              key={index}
              onClick={() => handleClick(day)}
              className={`flex p-10 btn ${date === day.join(" ") ? 'active' : ''}`}
              style={date === day.join(" ") ? { backgroundColor: 'cyan', border: '2px solid black' } : {}}
            >
              {day.join(" ")}
            </button>
          ))}
        </div>
      </div>
      {date && (
        <div>
          <Time date={date} />
        </div>
      )}
    </>
  );
}
