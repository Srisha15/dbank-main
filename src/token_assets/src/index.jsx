import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client";


const init = async () => { 
  ReactDOM.render(<App />, document.getElementById("root"));
}


init();


