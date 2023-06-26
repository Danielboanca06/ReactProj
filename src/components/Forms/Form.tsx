import React from "react";
import Loader from "../Loader/BoxLoader"

import { useForm } from "./useForm";



function Form({time, date}) {
  
  const {isLoading, handleSubmit, errors, fullName, dispatch, email, phoneNumber, handleMouse, isHovered} = useForm({time, date});
  
  if(isLoading) return <Loader/>;

  return (<form
      className="max-w-md mx-auto p-6 bg-rgb(212 212 216) rounded-lg shadow-md text-white font-mono text-2xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-6">Register</h2>

      <div className="mb-4">
        <label htmlFor="fullName" className="block font-medium mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Full Name"
          className={`w-full text-black px-4 py-2 border border-yellow-500 rounded-md focus:outline-neutral-800 focus:ring focus:ring-yellow-500 ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
          value={fullName}
          onChange={(e) => dispatch({type: "fullName", value: e.target.value})}
        />
        {errors.fullName && <p className="text-red-500 mt-1">{errors.fullName}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className={`w-full text-black px-4 py-2 border border-yellow-500 rounded-md focus:outline-neutral-800 focus:ring focus:ring-yellow-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          value={email}
          onChange={(e) => dispatch({type: "email", value: e.target.value})}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block font-medium mb-1">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="PhoneNumber"
          className="w-full text-black px-4 py-2 border border-yellow-500 rounded-md focus:outline-neutral-800 focus:ring focus:ring-yellow-500"
          value={phoneNumber}
          onChange={(e) => dispatch({type: "phoneNumber", value: e.target.value})}
        />
      </div>
      
      <button
      type="submit"
      className="relative bg-neutral-800 hover:bg-neutral-700 border-2 border-black text-white font-medium px-4 py-2 rounded-md"
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={()=>handleMouse(false)}
    >
      Book Your Appointment
      {isHovered && (
        <div className="absolute bg-gray-100 text-gray-800 p-4 rounded-lg shadow-lg top-full left-0 mt-2">
          <p className="text-xs">By clicking "Book Your Appointment," you consent to receive emails and messages from us and you agree to our terms and contitions.</p>
        </div>
      )}
    </button>
    </form>
  );
}

export default Form;
