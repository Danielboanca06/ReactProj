export function ordinalNumbers (numStr: string):string{
    if(numStr.length === 1 && numStr.match("1") || numStr.length === 2 && numStr[1].match("1")){return numStr + "st"};
    if(numStr.length === 1 && numStr.match("2") || numStr.length === 2 && numStr[1].match("2")){return numStr + "nd"};
    if(numStr.length === 1 && numStr.match("3") || numStr.length === 2 && numStr[1].match("3")){return numStr + "rd"};
    return numStr + "th"; 
}