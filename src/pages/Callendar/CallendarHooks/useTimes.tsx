import { useEffect, useReducer } from 'react';
import { useMilitaryTime } from '../../../Hooks/useToMillitaryTime';

type State = {
  currentHour: string;
  currentDate: string;
  selectedTime: string;
  parsedTimeData: object;
};

type Action =
  | { type: 'currentHour'; value: string }
  | { type: 'currentDate'; value: string }
  | { type: 'selectedTime'; value: string }
  | { type: 'parsedTimeData'; value: object };

const initialState: State = {
  currentHour: '',
  currentDate: '',
  selectedTime: '',
  parsedTimeData: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'currentHour':
      return { ...state, currentHour: action.value };
    case 'currentDate':
      return { ...state, currentDate: action.value };
    case 'selectedTime':
      return { ...state, selectedTime: action.value };
    case 'parsedTimeData':
      return { ...state, parsedTimeData: action.value };
    default:
      return state;
  }
};

export const useTimes = ({ date }) => {
  const [{ currentHour, currentDate, selectedTime, parsedTimeData }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const parsedData = parseTimeData(data);
          dispatch({ type: 'parsedTimeData', value: parsedData });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function parseTimeData(input: Record<string, { details?: { appointmentDetails: { date: string; time: string } } }>): any {
    const parsedData: any = [];

    for (const key in input) {
      const obj = input[key];
      const appointmentDetails = obj.details?.appointmentDetails;

      if (appointmentDetails) {
        const { date, time } = appointmentDetails;
        const dateAndTime = { [date]: time };
        parsedData.push(dateAndTime);
      }
    }

    return parsedData;
  }

  const newDate = new Date();
  const hour: number = newDate.getHours();
  const minute = newDate.getMinutes();
  const d = newDate.getDate();
  const day = d.toString();
  const currentTime = hour + ':' + (minute < 10 ? '0' + minute : minute);

  useEffect(() => {
    dispatch({ type: 'currentHour', value: currentTime });
    dispatch({ type: 'currentDate', value: day });
  }, []);

  let times: string[] = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
  ];

  function bookedTimes(arrayObject: any, dateAsString: string): string[] {
    const dateKey = parseInt(dateAsString, 10).toString(); // Convert date to string and parse as integer
    const bookedTimes: string[] = [];

    for (const time of times) {
      let isBooked = false;
      for (const obj of arrayObject) {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        if (key === dateKey && value === time) {
          isBooked = true;
          break;
        }
      }
      if (!isBooked) {
        bookedTimes.push(time);
      }
    }

    return bookedTimes;
  }

  let realTime: string[] = [];

  if (date.split(' ')[1] === currentDate) {
    times.forEach((time) => {
      if (useMilitaryTime(time) > useMilitaryTime(currentHour)) {
        realTime.push(time);
        times = [];
      }
    });
  }
  if (times.length === 0) {
    times = realTime;
  }
  if (date.split(' ')[1] === currentDate && useMilitaryTime(currentHour) > 1900) {
    times = [];
    realTime = [];
  }

  times = bookedTimes(parsedTimeData, date.split(' ')[1]);

  function handleTimeClick(t) {
    dispatch({ type: 'selectedTime', value: t });

    const existingData = localStorage.getItem('userData');

    if (existingData) {
      let dataArray = JSON.parse(existingData);
      const newTime = t;
      const newDate = date.split(' ')[1];
      dataArray.details.appointmentDetails.time = newTime;
      dataArray.details.appointmentDetails.date = newDate;
      const updatedData = JSON.stringify(dataArray);
      localStorage.setItem('userData', updatedData);
    }
  }

  return { times, handleTimeClick, selectedTime };
};
