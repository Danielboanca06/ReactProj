import React from 'react';
import Loader from '../../components/Loader/BoxLoader';
import { NavLink } from "react-router-dom";
import { useVerification } from './CallendarHooks/useVerification';

export default function Verification() {
  const { isLoading, handelVerificationSubmit, failed, setInputCode, handleResendCode } = useVerification();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
            <h1 className="pr-2"></h1>
            <h1 className="text-3xl">Verify Your Email</h1>
          </div>

          <h1 className="flex p-10 bg-neutral-700 justify-center text-center text-1xl text-white font-mono">
            Check your Email for your verification code
          </h1>

          <form
            className="flex flex-col justify-center items-center  p-10 bg-neutral-700"
            onSubmit={handelVerificationSubmit}
          >
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

            <div className="p-10 flex justify-center">
              <button
                type="submit"
                className=" relative bg-neutral-800 hover:bg-neutral-700 border-2 border-black text-white font-medium px-4 py-5 rounded-md"
              >
                Verify Your Email
              </button>
            </div>
          </form>

          <div className="p-10 flex justify-center bg-neutral-700">
            <button
              onClick={handleResendCode}
              className=" relative bg-neutral-800 hover:bg-neutral-700 border-2 border-black text-white font-medium px-4 py-2 rounded-md"
            >
              Resend Code
            </button>
          </div>

          <div className="flex py-10 bg-neutral-700 justify-center">
            <NavLink to="/">
              <button className="relative font-mono bg-neutral-800 hover:bg-neutral-500 border-2 border-black text-white font-medium px-4 py-2 rounded-md">
                Go Back To Home
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
