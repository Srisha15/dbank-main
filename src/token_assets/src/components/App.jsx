import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Token from "./Token";
import Dbank from "./Dbank";
import Navigation from "./Navigation";


function App() {
 
  
  return (

    <Router>
      <Navigation/>
      <Routes>
        <Route exact path = '/token' element = {<Token/>}/>
        <Route exact path = '/dbank' element = {<Dbank/>}/>
      </Routes>
    </Router>

    
  

    // <>
    // <Token/>
      
    // </>
  );
}


export default App;
