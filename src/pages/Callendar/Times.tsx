
import React, { useEffect, useRef } from 'react';
import { ordinalNumbers } from '../../Hooks/useOrdinalNumber';
import { useDayInFull } from '../../Hooks/useDayInFull';
import { Information } from './Information';
import TimeIcon from '../../assets/images/TimeIcon';
import { useTimes } from './CallendarHooks/useTimes';
import './calenderFront.css';

export function Time({ date }) {
  const { times, handleTimeClick, selectedTime } = useTimes({ date });
  const timeContainerRef = useRef<HTMLDivElement>(null);
  const informationSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedTime) {
      informationSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedTime]);

  if (date.split(' ')[0] !== 'Sun') {
    return (
      <>
        <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
          <h1 className="pr-2">
            <TimeIcon />
          </h1>
          <h1 className="text-3xl"> Select A Time </h1>
        </div>
        <h1 className="pt-5 flex justify-center text-2xl text-white font-mono">{useDayInFull(date.split(' ')[0])}</h1>
        <h1 className="flex pb-0 justify-center text-2xl text-white font-mono">{ordinalNumbers(date.split(' ')[1])}</h1>
        <div className="custom-container" ref={timeContainerRef}>
          <div className="custom-grid">
            {times.map((time, index) => (
              <button
                key={index}
                onClick={() => handleTimeClick(time)}
                className="flex items-center bg-neutral-800 text-white border-2 border-black rounded-lg p-5 text-2xl w-full"
                style={time === selectedTime ? { backgroundColor: 'gold', border: '2px solid black', color: 'black' } : {}}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div ref={informationSectionRef}>
          {selectedTime && (
            <div className="bg-neutral-700">
              <Information time={selectedTime} date={date.split(' ')[1]} />
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex font-mono justify-center items-center py-10 font-bold px-0 bg-neutral-800 text-white">
          <h1 className="pr-2"></h1>
          <h1 className="text-3xl"></h1>
        </div>
        <div className="flex flex-col items-center justify-center font-mono p-10">
          <h1 className="text-5xl font-bold p-10 text-white">Closed</h1>
          <p className="text-2xl font-semibold p-10 text-center text-white">We Are Not Open On Sunday</p>
        </div>
      </>
    );
  }
}
