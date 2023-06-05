export function useDayInFull (date :string):string | undefined{
    
    if(date === "Mon"){return "Monday"};
    if(date === "Tue"){return "Tuesday"};
    if(date === "Wed"){return "Wednesday"};
    if(date === "Thu"){return "Thursday"};
    if(date === "Fri"){return "Friday"};
    if(date === "Sat"){return "Saturday"};
    if(date === "Sun"){return "Sunday"};

}