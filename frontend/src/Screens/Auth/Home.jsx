import React from "react";
import { Route } from "wouter";
import Index from "../../Pages/Index";
import Navbar from "../../Components/Navbar[Auth]/Navbar";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import StartPetition from "../../Pages/StartPetition";
import PetitionForm from "../../Pages/petitionForm";
import Category from '../../Pages/Category'
import Browse from '../../Pages/Browse'

function Home() {
  return (
    <div>
      <Navbar />
      <Route path="/" component={Index} />
      <Route path="/start-a-petition" component={StartPetition} />
      <Route path="/start-a-petition/:id">{params => <PetitionForm id={params.id} />}</Route>
      <Route path="/category/:id">{params => <Category id={params.id} />}</Route>
      <Route path="/petitions" component={Browse} />
    </div>
  );
}

export default Home;
