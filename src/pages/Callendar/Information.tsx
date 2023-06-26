import React from "react";
import Form from "../../components/Forms/Form";
import { useInformation } from "./CallendarHooks/useInformation";

export function Information({ time, date }) {
  const {
    hasAccount,
    handleBookClick,
    setIsHovered,
    isHovered,
    handleResetClick,
  } = useInformation({ time, date });

  if (!hasAccount) {
    return (
      <div className="flex justify-center p-10">
        <Form time={time} date={date} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-20">
      <div className="flex font-mono justify-center text-3xl text-white">
        Welcome Back
      </div>
      <div className="flex p-10 justify-center text-2xl">
        <button
          onClick={handleBookClick}
          className="relative font-mono bg-neutral-800 hover:bg-neutral-700 border-2 border-black text-white font-medium px-4 py-2 rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Book Your Appointment
          {isHovered && (
            <div className="absolute bg-gray-100 text-gray-800 p-4 rounded-lg shadow-lg top-full left-0 mt-2">
              <p className="text-xs">
                By clicking "Book Your Appointment," you consent to receive emails and messages from us and you agree to our terms and conditions.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="flex pb-10 justify-center">
        <button
          onClick={handleResetClick}
          className="relative font-mono bg-neutral-800 hover:bg-neutral-500 border-2 border-black text-white font-medium px-4 py-2 rounded-md"
        >
          Reset Your Information
        </button>
      </div>
    </div>
  );
}
