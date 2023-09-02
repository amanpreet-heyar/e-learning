import React from 'react'
import projectimage from "../components/projectimage.png";
import Style from "./Style.css";
import {MdSlowMotionVideo} from "react-icons/md";



const Projects = () => {
  return (
    <div className='container-fluid'>
           <h5 style={{backgroundColor:'yellow',color:'black',borderRadius:50,padding:15,marginTop:25,marginBottom:25,textAlign:'center'}}>
  My Projects
</h5>
<div >
  <img className='image-banner' src={projectimage}  ></img>
  {/* <video className='video'><MdSlowMotionVideo/></video> */}
</div>

<div className='container-fluid'>
  <div className='row1'>
    <img className='circle-image' src={"/library"}></img>
    <span id="paragraph"><i style={{fontSize:"30px",marginLeft:"30px"}}>E-Library management system</i></span>
    
    <p id="paragraph2"><i style={{fontSize:"30px"}}>E-Learning portal for transactions</i>
    <img className='circle-image' src={"/bank"}></img>
    </p>
    
    <img className='circle-image' src={"/hotel"}></img>
    <span id="paragraph"><i style={{fontSize:"30px",marginLeft:"30px"}}>Hotel management system</i></span>


  </div>
</div>




    </div>
  )
}

export default Projects