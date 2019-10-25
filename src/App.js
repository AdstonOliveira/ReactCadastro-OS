import React, {Component} from 'react';
import {Header} from './components/Header/index';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';

const App = () => (
  <BrowserRouter>
  <div className="App">
      
      <Header />
      <Routes />
      
  </div>
  </BrowserRouter>
)


export default App;