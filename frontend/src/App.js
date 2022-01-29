import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeProtected from "./Screens/Auth/Home";
import HomeDefault from "./Screens/Default/Home";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function verifyToken() {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const {data} = await axios.post("/api/user/verify" , {
            headers:{Authorization:token}
          });
          console.log(data);
          setAuth(data.status)
          if(data.status === false){
            
            window.location.href = "/login"
            return localStorage.clear()
          }
          
          localStorage.setItem("user_cred", JSON.stringify(data.user))
          if(!data.user) return localStorage.clear()
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    verifyToken()
  }, []);

  return (
    <div className="App">{auth ? <HomeProtected /> : <HomeDefault />}</div>
  );
}

export default App;
