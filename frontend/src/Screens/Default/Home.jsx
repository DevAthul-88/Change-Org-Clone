import React from 'react';
import {Route} from 'wouter'
import Index from '../../Pages/Index'
import Navbar from '../../Components/Navbar[initial]/Navbar'

function Home() {
  return <div>
      <Navbar />
      <Route path='/'  component={Index}/>
  </div>;
}

export default Home;
