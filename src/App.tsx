import React from "react"
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { BookingFront } from "./pages/booking/BookingFront";
import { AboutUs } from "./pages/about/AboutUs";
import { AboutLocation } from "./pages/about/AboutLocation";
import { AboutServices } from "./pages/about/AboutServices";
import Services from "./pages/booking/book/Services";
import Clarification from "../Callender/Clarification";
import Footer from "./components/footer/Footer";
import { CalendarFront } from "../Callender/CalendarFront";
import Verification from "../Callender/Verification";
import "./App.css"


function App() {
  
  return (
    <>
    <BrowserRouter>
    <div className="flex flex-col min-h-screen text-black">
    <Header/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about/us" element={<AboutUs />}/>
            <Route path="/about/services" element={<AboutServices/>}/>
            <Route path="/about/location" element={<AboutLocation/>}/>
            
          <Route path ="/booking" element={<BookingFront/>}/>
             
          <Route path ="/services" element={<Services/>}/>
             
        
          <Route path="/verification" element={<Verification/>}/>
          <Route path="/book" element={<CalendarFront/>}/>
          <Route path="/date" element={<CalendarFront/>}/>
          <Route path="/clarificaion" element={<Clarification/>}/>
   
   
      </Routes>
      <hr className='w-full py-1 bg-cyan-500'/>
      <div className="w-full bg-gradient-to-b from-sky-00  to-stone-200
     justify-center px-10 md:px-16 lg:px-38 pt-7 pb-20 ">
      <Footer/>
    </div>
     </div>
    </BrowserRouter>
    </>
  )
}

export default App
