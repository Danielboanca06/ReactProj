import React from "react";
import AddressIcon from "../../assets/images/Home";
import PhoneIcon from "../../assets/images/PhoneIcon";
import EmailIcon from "../../assets/images/EmailIcon";

export default function Contacts () {
  
     return (<>
      <div className="max-w-[800px] max-h-[800px] border-4 border-black bg-zinc-50 flex flex-col justify-center items-center py-5 font-bold px-0">
  <div className="flex items-center mb-2 p-2">
    <h1 className="pr-2"><AddressIcon /></h1>
    <h1 className="text-2xl">Address</h1>
  </div>
  <p className="mb-7 p-2">
    132 Main St, Dublin, DUB, Ireland
  </p>
  <div className="flex items-center mb-2 p-2">
    <h1 className="pr-2"><EmailIcon /></h1>
    <h1 className="text-2xl">E-Mail</h1>
  </div>
  <p className="mb-7 p-2">
   <a href="mailto:Barberapp250@gmail.com">Barberapp250@gmail.com</a> 
  </p>
  <div className="flex items-center mb-2 p-2">
    <h1 className="pr-2"><PhoneIcon /></h1>
    <h1 className="text-2xl">TelePhone</h1>       
  </div>
  <p>
   <a href={`tel://${'+353 1 234 5678'}`}> +353 1 234 5678</a>
  </p>
</div>


     </>)
}