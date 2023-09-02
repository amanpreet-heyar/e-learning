import React, { useState } from 'react'
import Style from "../components/Style.css";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

function Login() {
  const[id,idchange]=useState("");
  const[name,namechange]=useState("");
  const[password,passwordchange]=useState("");
  const[email,emailchange]=useState("");
  const[phone,phonechange]=useState("");
  const[country,countrychange]=useState("India");
  const[address,addresschange]=useState("");

  const navigate=useNavigate();
  

  const handlesubmit=(e)=>{
    e.preventDefault();
    let regobj={id,name,password,email,phone,country,address};
    console.log(regobj);


    fetch(" http://localhost:3000/user",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
    }).then((res)=>{
      toast.success("Registered successfully.")
      navigate('/');
    }).catch ((err)=>{
      toast.error('Failed login'+err.message);
        });
  }
  return (
    <div className='form2'>
      <div className='offset-lg-3 col-lg-6'>
        <form className='container' onSubmit={handlesubmit}>
          <div className='card'>
            <div className='card-header'>
                <h1>User Registration</h1>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>User Name<span className='errmsg'>*</span></label>
                    <input required value={id} onChange={e=>idchange(e.target.value)} className='form-control'></input>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Password<span className='errmsg'>*</span></label>
                    <input required value={password} onChange={e=>passwordchange(e.target.value)} type="password" className='form-control'></input>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Full Name<span className='errmsg'>*</span></label>
                    <input required value={name} onChange={e=>namechange(e.target.value)} className='form-control'></input>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>E-mail<span className='errmsg'>*</span></label>
                    <input  required value={email} onChange={e=>emailchange(e.target.value)} type="email" className='form-control'></input>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Phone<span className='errmsg'>*</span></label>
                    <input required value={phone} onChange={e=>phonechange(e.target.value)} className='form-control'></input>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Country<span className='errmsg'>*</span></label>
                    <select value={country} onChange={e=>countrychange(e.target.value)} className='form-control'>
                      <option>India</option>
                      <option>USA</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>Address<span className='errmsg'>*</span></label>
                    <textarea required value={address} onChange={e=>addresschange(e.target.value)} className='form-control'></textarea>
                  </div>
                </div>

              </div>

            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary' >Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;