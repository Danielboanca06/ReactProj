import React from "react"
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Header } from "./components/header/Header";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
