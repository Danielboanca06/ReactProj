import React from "react"
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { BookingFront } from "./pages/booking/BookingFront";
import { AboutUs } from "./pages/about/AboutUs";
import { AboutLocation } from "./pages/about/AboutLocation";
import { AboutServices } from "./pages/about/AboutServices";
import Footer from "./components/footer/Footer";
import "./App.css"
function App() {
  
  return (
    <>
    <BrowserRouter>
    <div className="w-full bg-gradient-to-r from-neutral-500 to-neutral-600
     content-center px-10 md:px-16 lg:px-38 pt-7 pb-7">
    <Header/>
    </div>
    
      <div className="content-column">
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about/us" element={<AboutUs />}/>
            <Route path="/about/services" element={<AboutServices/>}/>
            <Route path="/about/location" element={<AboutLocation/>}/>
            
          <Route path ="/book" element={<BookingFront/>}/>
          
      </Routes>
      </div>
      <div className="w-full bg-gradient-to-r from-neutral-500 to-neutral-600
     content-center px-10 md:px-16 lg:px-38 pt-7 pb-7">
      <Footer/>
    </div>
     
    </BrowserRouter>
    </>
  )
}

export default App
