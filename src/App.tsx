import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { TheTeam } from "./pages/about/TheTeam";
import Services from "./pages/Services/Services";
import Clarification from "./pages/Callendar/Clarification";
import Footer from "./components/footer/Footer";
import { CalendarFront } from "./pages/Callendar/CalendarFront";
import Verification from "./pages/Callendar/Verification";
import "./App.css";
import Legal from "./pages/legal/Legal";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen text-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theteam" element={<TheTeam />} />
            <Route path="/services" element={<Services />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/book" element={<CalendarFront />} />
            <Route path="/legal" element={<Legal/>} />
            <Route path="/clarificaion" element={<Clarification />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

