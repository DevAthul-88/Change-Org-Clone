import React from 'react';
import {Route} from 'wouter'
import Index from '../../Pages/Index'
import Navbar from '../../Components/Navbar[initial]/Navbar'
import Login from '../../Pages/Login'

function Home() {
  return <div>
      <Navbar />
      <Route path='/'  component={Index}/>
      <Route path='/login' component={Login}/>
  </div>;
}

export default Home;
