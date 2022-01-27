import React from "react";
import { Route } from "wouter";
import Index from "../../Pages/Index";
import Navbar from "../../Components/Navbar[initial]/Navbar";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import StartPetition from "../../Pages/StartPetition";
import PetitionForm from "../../Pages/petitionForm";
import Category from '../../Pages/Category'

function Home() {
  return (
    <div>
      <Navbar />
      <Route path="/" component={Index} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/start-a-petition" component={StartPetition} />
      <Route path="/start-a-petition/:id">{params => <PetitionForm id={params.id} />}</Route>
      <Route path="/category/:id">{params => <Category id={params.id} />}</Route>
    </div>
  );
}

export default Home;
