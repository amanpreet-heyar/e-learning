import React from "react";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./components/Home";
import Style from './components/Style.css';
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
    return(
      <div className="App"><Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/about" element={<About />}></Route>
      
      </Routes>
      <Footer/>
      </div>
      
    
    


)}

export default App;
