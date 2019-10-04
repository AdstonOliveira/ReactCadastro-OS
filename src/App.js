import React, {Component} from 'react';
import {Header} from './components/Header';
import Main from './pages/main';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Cliente/login';
import Routes from './routes/index';

const App = () => (
  <BrowserRouter>
  <div className="App">
      
      <Header />
      <Routes />
      {/* <div>
        <Switch>
            <Route path="/cliente/login" component={Login} />
            <Route exact={true} path="/" component={Main} />
        </Switch></div> */}

  </div>
  </BrowserRouter>
)


export default App;