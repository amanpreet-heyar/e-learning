import React from 'react'
import { withTheme } from 'styled-components';
import Banner from './Banner';
import Home2 from '../components/Home2.css'

const Home = () => {
  return (
    <React.Fragment>
      <Banner/>
    <div className='container-fluid' >
<h5 style={{backgroundColor:'yellow',color:'black',padding:15,marginTop:25,marginBottom:25,textAlign:'center'}}>
  How an effective Industrial Training contribute to shape up your career ?
</h5>

<div class="container">
  <div class="row">
    <div class="col-sm-3" >
    <p><h4>Get to learn with the latest technology:</h4> With every day new inventions and enhancement in technologies, it is essential to keep track of it in order to not miss the train. Industrial training incorporates all the latest news in their curriculum to help keep the students updated.</p>
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class=" preet col-8 col-sm-6">
        <p><h4>Build Confidence:</h4> Industrial training provides students with a real-like working environment in order to make them familiar and confident with it. The faculties have a friendly approach towards their students in order to encourage them to ask as many questions which in turn will build their confidence towards life</p>
        </div>
        <div class="col-4 col-sm-6">
        <p><h4>Brush up skills and increase knowledge:</h4> The ability of the industrial training to enhance skills and develop knowledge in the students is like a cherry on the top. It is this benefit of the industrial training that helps the students in the process of building a brighter career in their near future.</p>
        </div>
      </div>
    </div>
  </div>
</div>









    </div>
    </React.Fragment>
  )
}

export default Home;