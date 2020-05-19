import React from 'react';
import HomePage from './pages/HomePage'
import './App.css';
import { Switch} from "react-router-dom";

function App() {
  return (
   
    <div className="App">
     <Switch>
       <HomePage/>
     </Switch>
    </div>

  );
}

export default App;
