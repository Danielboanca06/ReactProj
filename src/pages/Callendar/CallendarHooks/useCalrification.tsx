import { ordinalNumbers } from '../../../Hooks/useOrdinalNumber';

export const useClarification = () => {
  let time: string[] = [];
  const data = localStorage.getItem('userData');
  
  if (data) {
    const d = JSON.parse(data);
    time.push(d.details.appointmentDetails.time);
    time.push(d.details.appointmentDetails.date);
  }
  
  const date = ordinalNumbers(time[1]);

  return { time, date };
};

