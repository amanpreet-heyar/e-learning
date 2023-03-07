import React from 'react'
import projectimage from "../components/projectimage.png";
import Style from "./Style.css";
import dhaba1 from "../components/dhaba1.png";
import dhaba2 from "../components/dhaba2.png";

const Projects = () => {
  return (
    <div className='container-fluid'>
           <h5 style={{backgroundColor:'yellow',color:'black',borderRadius:50,padding:15,marginTop:25,marginBottom:25,textAlign:'center'}}>
  My Projects
</h5>
<div >
  <img className='image-banner' src={projectimage}  ></img>
</div>
<div className="container">
  <div class="row" marginTop="10px" >
    <div className="col">
      <div class="card" >
  <img src={dhaba1} class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Ustaad Da Dhaba</h5>
    <p class="card-text">We cook with honesty and passion. We have a wide selection of dishes for vegetarian and Non-vegetarian food lovers.</p>
    <a href="https://play.google.com/store/apps/details?id=com.xstudioz.ustaad" class="btn btn-primary">install</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src={dhaba2} class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Doaba Indian Restaurant</h5>
    <p class="card-text">Doaba Indian Restaurant is a cornerstone in the Powell community and has been recognized for its outstanding Indian cuisine,  and friendly staff.</p>
    <a href="https://play.google.com/store/apps/details?id=com.xstudioz.restaurant.app" class="btn btn-primary">install</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content the card's content</p>
    <a href="#" class="btn btn-primary">install</a>
  </div>
</div>
    </div>
  </div>
</div>



<div className="container">
  <div class="row" marginTop="10px" >
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://play.google.com/store/apps/details?id=com.xstudioz.ustaad" class="btn btn-primary">install</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">install</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">install</a>
  </div>
</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Projects