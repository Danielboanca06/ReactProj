import React from "react"
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Header } from "./components/header/Header";
import { BookingFront } from "./pages/booking/BookingFront";
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
          <Route path="/about" element={<About />} />
          <Route path ="/book" element={<BookingFront/>}/>
          
      </Routes>
      </div>
     
    </BrowserRouter>
    </>
  )
}

export default App
