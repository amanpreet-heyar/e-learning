import React from 'react'
import {FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
  <React.Fragment>
    <footer id='footerbg' className='p-4'>

        <section className='d-flex justify-content-center'>
            <div className='me-5 d-none d-lg-block'>
                <span>Get connected with us on social media Network</span>
            </div>
            <div>
                <a href=""  style={{ marginLeft: '.5rem' }} ><FaFacebook/></a>
                <a href="https://www.instagram.com/ama.npreet28/"  style={{ marginLeft: '.5rem'  }} ><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/amanpreet-kaur-728255251/"  style={{ marginLeft: '.5rem' }} ><FaLinkedin/></a>
                <a href=""  style={{ marginLeft: '.5rem' }} ><FaTwitter/></a>
            </div>

        </section>
        <div className='container-fluid p-4'>
            <div className='row' >
                <div className='col-sm-4'>
                    <h5>About US</h5>
                    <p>E-learning is providing FMGE (MCI) coaching from past five years all across the country. Keeping abreast of the latest technological advances, we have implemented the usage of the sophisticated tools such as LCD projectors</p>
                </div>

                <div className='col-sm-2'>
                    <h5>Navigation</h5>
                    <p><a href="/">Home</a></p>
                    <p><a href="/about">About Us</a></p>
                    <p><a href="/projects">Projects</a></p>
                    <p><a href="/services">services</a></p>
                </div>

                <div className='col-sm-2'>
                    <h5>Services</h5>
                    <p>Project Management</p>
                    <p>Design and Planning</p>
                    <p>Business Intelligence</p>
                    <p><a href="/services">Resources</a></p>
                </div>

                <div className='col-sm-2'>
                    <h5>Address</h5>
                    <p>patiala</p>
                    <p>India</p>
                    <p>+6283720360</p>
                    
                </div>

                <div className='col-sm-2'>
                    <h5>Company</h5>
                    <p><a href="/about">About Us</a></p>
                    
                </div>
            </div>
        </div>
    </footer>
  </React.Fragment>
  )
}

export default Footer