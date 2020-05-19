import React from 'react';
import HomePage from './pages/HomePage'
import './App.css';
import { Switch} from "react-router-dom";
import ShoppingCartPage from './pages/ShoppingCardPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (


   
    <div className="App">
     <Switch>
       <HomePage exact path="/" />
       <ShoppingCartPage exact path="/cart" />
       <ProductDetailsPage exact path='/details/:name'/>
       <HomePage path="/:error" />
       {/* error message later toevoegen */}
       
     </Switch>
    </div>

  );
}

export default App;
