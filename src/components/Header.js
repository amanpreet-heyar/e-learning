
import React from 'react'
import {Link} from 'react-router-dom';

import Style from "../components/Style.css";





const Header = () => {
  return (
  
      <React.Fragment>
           <nav class="navbar navbar-expand-lg headerbg  ">
  <div class="container-fluid" >
    <Link to="/"class="navbar-brand" ><img src={"/elearning"} alt="logo"  height="50"></img></Link>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" >
          <Link to="/"  style={{color:"white"}} class="nav-link active" aria-current="page" id="$" >Home</Link>
        </li>
       

        <li class="nav-item">
          <Link to="/services"   style={{color:"white"}} class="nav-link">Services</Link>
        </li>

        <li class="nav-item">
          <Link to="/projects"  style={{color:"white"}} class="nav-link" >Projects</Link>
        </li>

        <li class="nav-item">
          <Link to="/about"   style={{color:"white"}} class="nav-link" >About Us</Link>
        </li>
       <Link to="/login"><button id="login">Sign in</button></Link> 
       
        
      </ul>
     
    </div>
  </div>
</nav>
</React.Fragment>
    
  )
}

export default Header;