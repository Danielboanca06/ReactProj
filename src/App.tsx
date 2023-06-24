import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";

import { TheTeam } from "./pages/about/TheTeam";
import Services from "./pages/booking/Services";
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
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theteam" element={<TheTeam />}/>
           
           
            
      
             
          <Route path ="/services" element={<Services/>}/>
             
        
          <Route path="/verification" element={<Verification/>}/>
          <Route path="/book" element={<CalendarFront/>}/>
          <Route path="/date" element={<CalendarFront/>}/>
          <Route path="/clarificaion" element={<Clarification/>}/>
   
   
      </Routes>
     
    
      <Footer/>
 
     </div>
    
    </BrowserRouter>
    </>
  )
}

export default App
