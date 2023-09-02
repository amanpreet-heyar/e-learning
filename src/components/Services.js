import React from 'react'
import { Link } from 'react-router-dom';
import Style from "./Style.css";
import banner5 from "../components/banner5.png";
import node from "../components/node.png";
import android from "../components/android.png";
import reactjs from "../components/reactjs.png";
import python from "../components/python.png";
import java from "../components/java.png";
import iot from "../components/iot.png";


function Services() {
  return (
    <div className='container-fluid'>
        <h5 style={{backgroundColor:'yellow',color:'black',borderRadius:50,padding:15,marginTop:25,marginBottom:25,textAlign:'center'}}>
  Services provided by Company 
</h5>
<div >
  <img className='image-banner' src={banner5}  ></img>
</div>


<div className='row'>
  <div className='col-md-4'>
    <Link to="https://www.youtube.com/watch?v=8u1o-OmOeGQ&ab_channel=Simplilearn"><img className='image-resize' src={node}></img></Link>
  </div>
  <div className='col-md-4'>
    <Link to="https://www.youtube.com/watch?v=iqI6MAsi1Xg&ab_channel=Simplilearn"><img className='image-resize' src={android}></img></Link>
  </div>
  <div className='col-md-4'>
    <Link to="https://www.youtube.com/watch?v=Y6aYx_KKM7A&ab_channel=Simplilearn"><img className='image-resize' src={reactjs}></img></Link>
  </div>
</div>

<div className='row'>
  <div className='col-md-4'>
    <Link to="https://www.youtube.com/watch?v=XIR20HH8mNY&ab_channel=GateSmashers"><img className='image-resize' src={python}></img></Link>
  </div>
  <div className='col-md-4'>
    <Link to="https://www.youtube.com/watch?v=Ae-r8hsbPUo&ab_channel=Simplilearn"><img className='image-resize' src={java}></img></Link>
  </div>
  <div className='col-md-4'>
    <Link to="https://www.youtube.com/watch?v=h0gWfVCSGQQ&ab_channel=edureka%21"><img className='image-resize' src={iot}></img></Link>
  </div>
</div>
    </div>
  )
}

export default Services