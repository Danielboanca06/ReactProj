import React, { useState, FormEvent, useEffect, useContext } from "react";
import Loader from "../Loader/BoxLoader"
import { useNavigate } from "react-router-dom"
import sendVerification from "./SendVerification";

interface Errors {
  fullName?: string;
  password?: string;
  email?: string;
}

function Form({time, date}) {
  const [isLoading, setIsLoadig] = useState(false)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isHovered, setIsHovered] = React.useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const nav = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Errors = {};

    if (fullName.trim() === "") {
      errors.fullName = "Full Name is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!email.includes("@") || !email.includes(".")) {
      errors.email = "Invalid email format";
    }

    setErrors(errors);
    function generateAuthToken() {
      const token = Math.random().toString(36).substring(2) + Date.now();
      return token;
      }
      
      const authToken = generateAuthToken();
      console.log(authToken);


    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
      setIsLoadig(true)
    
      const userData = {
        Name: fullName,
        details : {
          email: email,
          phoneNumber: phoneNumber,
          private :{
            authToken: authToken,
          },
          appointmentDetails:{
            time: time,
            date: date,
          }
        }
      };
      localStorage.setItem("userData", JSON.stringify(userData));
    
   sendVerification()
    nav('/verification')
  }
  };

  return (<>
    {(!isLoading) ? 
    
    <form
      className="max-w-md mx-auto p-6 bg-rgb(212 212 216) rounded-lg shadow-md text-black text-2xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-6">Register</h2>

      <div className="mb-4">
        <label htmlFor="fullName" className="block font-medium mb-1">
          Full Name*
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Full Name"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <p className="text-red-500 mt-1">{errors.fullName}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email*
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block font-medium mb-1">
          Phone Number (Optional)
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="PhoneNumber"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      
      <button
      type="submit"
      className="relative bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
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

      
      
    </form> : <Loader/>}
   
  </>);
}

export default Form;
