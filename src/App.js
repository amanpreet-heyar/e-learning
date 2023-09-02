import React from "react";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./components/Home";
import Style from './components/Style.css';
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Resources from "./components/Resources";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

function App() {
    return(
      <div className="App">
      
<ToastContainer theme="colored"></ToastContainer>
        
        <Header/>
     <Routes>
     
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/resources" element={<Resources />}></Route>
      <Route path="/login" element={<Login />}></Route>
      
      </Routes>
      <Footer/>
      </div>
      
    
    


)}

export default App;
