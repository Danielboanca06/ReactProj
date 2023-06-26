import { useState } from 'react';

export const useCallendarFront = () => {
  const d: Array<Array<string>> = [];
  const today = new Date();

  for (let i = 0; i < 28; i++) {
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    const date = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
  
    d.push([day, date.toString(), month]);
  }
  
  const [date, setDate] = useState("");
  
  function handleClick(day: Array<string>) {
    setDate(day.join(" "));
  }

  return { d, date, handleClick };
};
