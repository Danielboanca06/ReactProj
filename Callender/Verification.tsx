import React,{useState,useEffect, FormEvent} from 'react';
import sendEmail from '../src/components/Forms/Mailer';
import Loader from '../src/components/Loader/BoxLoader';
import { useNavigate } from "react-router-dom"
import sendVerification from '../src/components/Forms/SendVerification';

export default function Verification () {

    const [isLoading, setIsLoading] = useState(false)
    const [code, setCode] = useState(0);
    const [failed, setFailed] = useState(false);
    const [inputCode, setInputCode] = useState("")
    
    const navToClarification = useNavigate()

    const verifCode = localStorage.getItem("verifCode")
     useEffect(()=>{
        if(verifCode){
            setCode(Number.parseInt(verifCode,10))
        }
     },[verifCode])
    
      function handelVerificationSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(code === Number.parseInt(inputCode)){
           let data = localStorage.getItem("userData")
           if(data){
            data = JSON.parse(data);
           } 
          
            fetch('https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        console.log("response:", data);
  
      })
      .catch(error =>{
        console.log(error)
      })
      
      sendEmail()
      setFailed(false)
      navToClarification('/clarificaion')
        }
        else{
            setInputCode("")
            setFailed(true)
        }
      }
      let canExecute = true
      function handleResendCode(){
        if (canExecute) {
           
            console.log("Function executed!");
            canExecute = false;
            setTimeout(function() {
                sendVerification()
              canExecute = true;
            }, 10000);
          }
      }

    return <>
    {(isLoading) ? <Loader/> :<div>
    <h1 className='flex justify-center p-20 text-5xl'>Verify Your Email</h1>
    <h1 className='flex justify-center pb-14 text-2xl'>Check your Email for your verification code</h1>
        <form className='flex flex-col justify-center p-20'
        onSubmit={handelVerificationSubmit}>
            
            <div className="mb-4">
        <label htmlFor="verify" className="block font-medium mb-1">
          Verify
        </label>
        <input
          type="text"
          id="verify"
          placeholder="Verification Code"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
            failed ? "border-red-500" : "border-gray-300"
          }`}
          onChange={(e) => setInputCode(e.target.value)}
        />
      </div>


        <div className='p-10 flex justify-center'>
    <button
        type="submit"
        className=" relative bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md">
            Verify Your Email
            </button>
        </div>           
    </form>
    <div className='p-10 flex justify-center'>
    <button
    
     onClick={handleResendCode}
        className=" relative bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md">
            Resend Code
            </button>
            </div>
    </div> }
</>
}