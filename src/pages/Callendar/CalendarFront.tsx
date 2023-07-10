import React, { useEffect } from 'react';
import { Time } from './Times';
import './calenderFront.css';
import { Header } from '../../components/header/Header';
import DayIcon from '../../assets/images/DayIcon';
import { useCallendarFront } from './CallendarHooks/useCallendarFront';

export function CalendarFront() {
  const { d, date, handleClick } = useCallendarFront();

  
  return (
    <>
      <div>
        <Header overlay={false} />
      </div>

      <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
        <h1 className="pr-2">
          <DayIcon />
        </h1>
        <h1 className="text-3xl">Select A Day</h1>
      </div>

      <div className="custom-container bg-neutral-700">
        <div className="custom-grid">
          {d.map((day, index) => (
            <button
              key={index}
              onClick={() => handleClick(day)}
              className="flex items-center bg-neutral-800 text-white border-2 border-black rounded-lg p-7 text-2xl w-full flexbutton"
              style={date === day.join(' ') ? { backgroundColor: 'gold', border: '2px solid black', color: 'black' } : {}}
            >
              {day.join(' ')}
            </button>
          ))}
        </div>
      </div>

      {date && (
        <div id="timeComponent" className="bg-neutral-700">
          <Time date={date} />
        </div>
      )}
    </>
  );
}
