import React from "react";
import { Header } from "../../components/header/Header";
import TeamIcon from "../../assets/images/TeamIcon";

export function TheTeam () {
    return (<>
      <Header overlay={false}/>
      

      <div className="flex font-mono justify-center items-center py-5 font-bold px-0 bg-neutral-800 text-white">
                <h1 className="pr-2"><TeamIcon/></h1> 
                    <h1 className="text-3xl">The Team </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-neutral-700 p-10">
  <div className="flex flex-col items-center justify-center gap-20 ">
    <div className="flex flex-col max-w-[500px] h-[500px] items-center">
      <img
        className=" rounded-full"
        src="https://images.pexels.com/photos/2076931/pexels-photo-2076931.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt=""
      />
      <p className="text-white text-center">Meet Jack, the veteran barber with over a decade of experience, whose wealth of expertise translates into flawlessly precise haircuts and grooming services delivered with effortless finesse.</p>
    </div>
    <div className="flex flex-col max-w-[500px] h-[500px] items-center">
      <img
        className=" rounded-full"
        src="https://images.pexels.com/photos/2035311/pexels-photo-2035311.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt=""
      />
      <p className="text-white text-center">Introducing Emma, a true maestro of hairstyling, who has honed her skills for more than five years, transforming hair into works of art and consistently exceeding expectations with her skillful techniques.</p>
    </div>
    <div className="flex flex-col max-w-[500px] h-[500px] items-center">
      <img
        className="rounded-full"
        src="https://images.pexels.com/photos/2040190/pexels-photo-2040190.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt=""
      />
      <p className="text-white text-center :">Step into the world of Alex, the renowned barbering maestro with over eight years of experience, combining a deep understanding of trends and styles to create personalized grooming experiences that leave clients feeling confident and rejuvenated.</p>
    </div>
  </div>
</div>

        </>)
}