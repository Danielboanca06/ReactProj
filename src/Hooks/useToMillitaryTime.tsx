export function useMilitaryTime(time: string): number {
    const [hourString, minuteString] = time.split(':');
    const hour = parseInt(hourString, 10);
    const minute = parseInt(minuteString, 10);
    
    let militaryHour = hour;
    
    if (hour === 12 && time.endsWith('AM')) {
      militaryHour = 0;
    } else if (hour !== 12 && time.endsWith('PM')) {
      militaryHour += 12;
    }
    
    const militaryTime = militaryHour * 100 + minute;
    return militaryTime;
  }
  