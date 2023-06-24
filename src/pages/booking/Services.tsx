import React,{useState} from "react";
import { HairCuts} from "../../assets/images/HairCut";
import Button from "../../components/buttons/Button";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header/Header";

const options = [
    {
      title: "Men's Dry Haircut",
      duration: '20 minutes',
      price: '€15',
    },
    {
      title: "Men's Skin Fade",
      duration: '25 minutes',
      price: '€20',
    },
    {
      title: 'Shampoo & Cut',
      duration: '30 minutes',
      price: '€25',
    },
    {
      title: 'Child & Teen Dry Cut',
      duration: '20 minutes',
      price: '€10',
    },
    {
      title: 'Child & Teen Skin Fade',
      duration: '30 minutes',
      price: '€25',
    },
    {
      title: 'Senior Citizens Dry Cut',
      duration: '15 minutes',
      price: '€12',
    },
    {
      title: 'Beard Trim',
      duration: '15 minutes',
      price: '€10',
    },
    {
      title: "Men's Dry Cut & Beard Trim",
      duration: '15 minutes',
      price: '€25',
    },
    {
      title: 'Blade All Over',
      duration: '15 minutes',
      price: '€10',
    },
  ];

export default function Services () {

    
        const [showAll, setShowAll] = useState(false);
      
        const handleClick = () => {
          setShowAll(!showAll);
        };
      
        const menuOptions = showAll ? options : options.slice(0, 5);

        
  return (
    <>

    <Header overlay={false}/>
    
   
    <div className="flex font-mono justify-center items-center py-5  bg-neutral-800 text-white">
                   <h1 className="pr-2"> <HairCuts /></h1> 
                <h1 className="text-3xl font-bold">Cuts</h1>
                
                    </div> 
   
                    
                    
                    
                    <div className="flex flex-col items-center content-center py-5 text-white bg-neutral-700">
      
        <div className="flex justify-evenly items-center border-2 border-black w-full sm:max-w-[500px] mt-5">
          <div className="px-4 py-5">
            <div className="font-bold text-2xl">
              <Button onClick={handleClick}>
                {showAll ? 'Show Less' : 'Show All'}
              </Button>
            </div>
          </div>
          <div>
            <Button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 transition-transform duration-200 ${
                  showAll ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </div>
        </div>
        <br />

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