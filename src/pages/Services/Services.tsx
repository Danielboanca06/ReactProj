import React from "react";
import { HairCuts } from "../../assets/images/HairCut";
import Button from "../../components/buttons/Button";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { options } from "./serviceData";

export default function Services() {
  const menuOptions = options;

  return (
    <>
      <Header overlay={false} />

      <div className="flex font-mono justify-center items-center py-5 bg-neutral-800 text-white">
        <h1 className="pr-2">
          <HairCuts />
        </h1>
        <h1 className="text-3xl font-bold">Cuts</h1>
      </div>

      <div className="flex flex-col items-center content-center py-5 text-white bg-neutral-700">
        {menuOptions.map((option, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-2 m-1 border-black w-full sm:max-w-sm"
          >
            <div className="pl-4 py-5">
              <h1 className="flex font-bold">{option.title}</h1>
              <p className="flex justify-center">
                {option.duration}, {option.price}
              </p>
            </div>
            <Button>
              <NavLink to="/book" className="text-[20px]">
                Book
              </NavLink>
            </Button>
          </div>
        ))}
        <br />
      </div>
    </>
  );
}
