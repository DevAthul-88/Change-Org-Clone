import React,{useState} from 'react'
import './App.css';
import HomeProtected from './Screens/Auth/Home'
import HomeDefault from './Screens/Default/Home'

function App() {
  const [auth , setAuth] = useState(true);
  return (
    <div className="App">
     {
       auth ? <HomeProtected /> : <HomeDefault />
     }
    </div>
  );
}

export default App;
