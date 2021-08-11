import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AuthContextProvider} from "./context/AuthContext.js"
import {UserContextProvider} from "./context/UserContext.js"


ReactDOM.render(
  <BrowserRouter>
  <AuthContextProvider>
    <UserContextProvider>
         <App />
    </UserContextProvider>
  </AuthContextProvider>
  </BrowserRouter>
   
  ,
  document.getElementById('root')
);


