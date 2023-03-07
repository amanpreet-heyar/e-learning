import React from 'react'
import Style from '../components/Style.css';
import aboutimage from "../components/aboutimage.png";
import email from "../components/email.png";
import phone from "../components/phone.png";
import location from "../components/location.png";
//hello
const About = () => {
  return (
    <div className="cotainer-fluid">
         <h5 style={{backgroundColor:'yellow',color:'black',borderRadius:50,padding:15,marginTop:25,marginBottom:25,textAlign:'center'}}>
  Get in touch with us 
</h5> 
<div >
  <img className='image-banner' src={aboutimage}  ></img>
</div>



<div class="container">
  <div class="row">
    <div class="col">
      <div class="card" >
  <img src={email} class="card-img-top" alt="..." height="150px" width="150px"/>
  <div class="card-body">
    <p class="card-text" ><h3>1049amanpreet@gmail.com</h3></p>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card" >
  <img src={phone} class="card-img-top" alt="..." height="150px" width="150px"/>
  <div class="card-body">
    <p class="card-text"><h3>+91 6283720360</h3></p>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card" >
  <img src={location} class="card-img-top" alt="..." height="150px" width="150px"/>
  <div class="card-body">
    <p class="card-text"><h3>patiala</h3></p>
  </div>
</div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row row-cols-2">
    <div class="col"><div class="card" marginTop="15px">
  <div class="card-body">
    <h4>Contact Us</h4>
    <p>If you have any query you can contact us by sending an email given to you.</p>
  </div>
</div></div>


    <div class="col"><div class="card">
  <div class="card-body">
    <div class="container" padding="20px">
  <form action="https://formspree.io/f/mpzerbwz" method="POST">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>

    <label for="email">E mail</label>
    <input type="email" id="email" name="email" placeholder="Your E mail.." required/>

  {/*   <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select> */}

    <label for="message">Message</label>
    <textarea id="Message" name="message" placeholder="Write something.." height="200px" required></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div>
  </div>
</div></div>
    
  </div>
</div>
  
</div>
  )
}

export default About