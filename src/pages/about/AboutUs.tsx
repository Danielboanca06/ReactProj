import React from "react";

export function AboutUs () {
    return (
        <div className=" bg-gradient-to-r from-neutral-200 to-neutral-300 text-black p-5">
            <h1 className="flex text-7xl justify-center p-10 ">
                About Me
            </h1>
            <br/>
            <div className="flex justify-evenly content-center p-8">
  <div className="flex flex-col w-1/2">
    <p className="text-2xl">
    I am Sean, a dedicated and experienced barber offering professional haircuts and styling services. With a passion for my craft, I aim to deliver exceptional results and become the go-to barber in town. 
  </p>
  <br/>
  <p className="text-2xl">
  My shop embodies professionalism, providing a comfortable and inviting atmosphere for clients. I take pride in attentive listening and expert advice to create a tailored look that suits your style. Through continuous education, I stay up-to-date with industry trends to ensure cutting-edge skills. Choose my barber shop for a top-notch grooming experience that leaves you looking and feeling your best.
    </p>
  </div>
  <div className="py-">
    <img className="h-90 w-60" src="https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sean" />
  </div>
</div>

        </div>
    )
}