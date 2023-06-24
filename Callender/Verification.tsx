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
    <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
                <h1 className="pr-2"></h1> 
                    <h1 className="text-3xl">Verify Your Email</h1>
                </div>
      
                <h1 className='flex p-10 bg-neutral-700 justify-center text-center text-1xl text-white font-mono'>Check your Email for your verification code</h1>
   
        <form className='flex flex-col justify-center items-center  p-10 bg-neutral-700'
        onSubmit={handelVerificationSubmit}>
          
            
            <div className=" mb-4">
        <label htmlFor="verify" className="flex justify-center text-[17px] pt-0 font-mono mb-1 text-white">
          Verify
        </label>
        <input
          type="text"
          id="verify"
          placeholder="Verification Code"
          className={`w-[1/3] px-4 py-4 border rounded-md focus:outline-none focus:ring ${
            failed ? "border-red-500" : "border-yellow-500"
          }`}
          onChange={(e) => setInputCode(e.target.value)}
        />
      </div>


        <div className='p-10 flex justify-center'>
    <button
        type="submit"
        className=" relative bg-neutral-800 hover:bg-neutral-700 border-2 border-black text-white font-medium px-4 py-5 rounded-md">
            Verify Your Email
            </button>
        </div>           
    </form>
    <div className='p-10 flex justify-center bg-neutral-700'>
    <button
    
     onClick={handleResendCode}
        className=" relative bg-neutral-800 hover:bg-neutral-700 border-2 border-black text-white font-medium px-4 py-2 rounded-md">
            Resend Code
            </button>
            </div>
    </div> }
</>
}