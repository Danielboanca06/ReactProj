import React, {useState, useEffect} from 'react';
import { ordinalNumbers } from '../src/Hooks/useordinalNumber';
import { useDayInFull } from '../src/Hooks/useDayInFull';
import { useMilitaryTime } from '../src/Hooks/useToMillitaryTime';
import { Information } from './Information '; 
import './calenderFront.css'

export function Time ({date,}){

const [currentHour, setCurrentHour] = useState("")    
const [currentDate, setCurrentDate] = useState("")
const [selectedTime, setSelectedTime] = useState("")
const [parsedTimeData, setParsedTimeData] = useState<TimeObject[]>([]);

interface TimeObject {
  [key: string]: string;
}

useEffect(()=>{
  
  fetch("https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json")
  .then(response => response.json())
  .then(data => { 
    if(data){
      console.log(data)
     const Data = parseTimeData(data);
     setParsedTimeData(Data);
     
    }
      
  })
  .catch(error => console.log(error))
},[])

console.log(parsedTimeData)
 

function parseTimeData(input: Record<string, string>): TimeObject[] {
  const parsedData: TimeObject[] = [];
console.log(parsedData)
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
const hour : number = newDate.getHours();
const minute = newDate.getMinutes();
const d = newDate.getDate();
const day = d.toString();
const currentTime = hour + ':' + (minute < 10 ? '0' + minute : minute);

useEffect(()=>{
    setCurrentHour(currentTime)
    setCurrentDate(day)
},[]);

let times: string[] = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"]



function bookedTimes(arrayObject: TimeObject[], dateAsString: string): string[] {
  
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


let realTime :string[]= []

if(date.split(" ")[1] === currentDate){
      times.forEach(time => {
        if(useMilitaryTime(time) > useMilitaryTime(currentHour)){
            realTime.push(time);
            times = [];
        }
     })
}
    if(times.length === 0){
        times = realTime;
    }if(date.split(" ")[1] === currentDate && useMilitaryTime(currentHour) > 1900){
        times = [];
        realTime = [];
    }
  
     times = bookedTimes(parsedTimeData, date.split(" ")[1])

    
function handleTimeClick (t){
    
    setSelectedTime(t)
  
}
console.log(date.split(" ")[0])

if(date.split(" ")[0] !== "Sun"){
  return <>
     <hr className='w-full py-1 bg-cyan-500'/>
    <h1 className='pt-5 flex justify-center text-3xl'>{useDayInFull(date.split(" ")[0])}</h1>
    <h1 className='flex pb-10 justify-center text-3xl'>{ordinalNumbers(date.split(" ")[1])}</h1>
    {(times.length < 21) ?  <h1 className='pt-5 flex justify-center text-3xl'>The Times Availible</h1>:  <h1 className='pt-5 flex justify-center text-3xl'>Select Your Time</h1>  }
    {selectedTime && <h1 className='flex justify-center text-3xl'>{selectedTime}</h1>}
    <div className="container mx-auto">
          <div className="grid grid-cols-7 gap-2">
            {times.map((time, index) => (
              <button
                key={index}
                onClick={() => handleTimeClick(time)}
                className={`flex p-10 btn ${selectedTime === time ? "s" : ""}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
            <div>
               {selectedTime && <Information time={selectedTime} date={date.split(" ")[1]}/> } 
        </div>
    </>
}else{
  return <>
   <hr className='w-full py-1 bg-cyan-500'/>
    <div className='flex flex-col items-center justify-center font-mono p-20'>
      <h1 className='text-7xl font-bold p-20'>Closed</h1>
      <p className='text-2xl font-semibold pb-20'>We Are Not Open On Sunday</p>
    </div>
  </>

}  
}
 