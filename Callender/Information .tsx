import React, {useState, useEffect} from "react"
import Loader from "../src/components/Loader/BoxLoader";
import Form from "../src/components/Forms/Form"
import sendEmail from "../src/components/Forms/Mailer";
import {useNavigate } from "react-router-dom";

export function Information ({time, date}) {
let navToClarification = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

    function findIfYIsInX(y: string, x: any): boolean {
      const stack = [x];
    
      while (stack.length > 0) {
        const current = stack.pop();
    
        if (typeof current === 'string' && current.includes(y)) {
          return true;
        }
    
        if (typeof current === 'object' && current !== null) {
          const values = Object.values(current) as any[];
          stack.push(...values);
        }
      }
    
      return false;
    }

    let userData = localStorage.getItem('userData');
    
  
    useEffect(()=>{
      if(userData){
        setHasAccount(true);
        let t = null
    let authToken = ""

    if(userData){
      t = JSON.parse(userData);
      authToken = t.details.private.authToken
    }

    ;
    fetch("https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json")
  .then(response => response.json())
  .then(data => { 
    if(data){
      console.log(data)
      console.log(authToken)
      console.log(findIfYIsInX(authToken, data))
      if(findIfYIsInX(authToken, data) === false){
        setHasAccount(false)
      } 
    }  
  })
  .catch(error => console.log(error))
      }
    },[]);

    //
  function handleClick () {
   
    
  if(hasAccount){
    let dt = {}
    if(userData){
      dt = JSON.parse(userData);
      
    }
    fetch('https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dt)
      })
      .then(response => response.json())
      .then(data => {
  
        console.log("response:", data);
  
      })
      .catch(error =>{
        console.log(error)
      })
      
      sendEmail()
      
      navToClarification('/clarificaion')
  }else if (!hasAccount){
    console.log("must sign up")
    setHasAccount(false)
  }

  }//

  function handleResetClick () {
   
    
      setHasAccount(false)
    
    console.log("reset")
  }

    return <>
     <hr className='w-full py-1 bg-cyan-500'/>
       {(!hasAccount) ? <div className="flex justify-center p-10">
           
               <Form time={time} date={date}/>
          
        </div> : <div className="flex flex-col">
          <div className="flex justify-center p-20 text-4xl">{`Welcome Back ${name}`}</div>
            
        <div className="flex p-10 justify-center text-2xl">
            <button
      onClick={handleClick}
      className="relative p-20 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Book Your Appointment
      {isHovered && (
        <div className="absolute bg-gray-100 text-gray-800 p-4 rounded-lg shadow-lg top-full left-0 mt-2">
          <p className="text-xs">By clicking "Book Your Appointment," you consent to receive emails and messages from us and you agree to our terms and contitions.</p>
        </div>
      )}
    </button>
    </div>

    <div className="flex p-20  justify-center ">
            <button
      onClick={handleResetClick}
      className="relative p-20 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
     
    >
      Reset Your information
    </button>
    </div>
        </div>}
    </>
}