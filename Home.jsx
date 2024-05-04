import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Carousel from './Carousel';
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import About from '../Components/About';


function Home() {
  return (
    <div>
    <Header/>
  <Carousel/>
   <Cards/>
   <About/>
   {/* <h1>hello {location.state.id} and welcome</h1> */}
</div>
);
}

export default Home