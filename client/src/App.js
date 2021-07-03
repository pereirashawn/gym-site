import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'popper.js/dist/umd/popper.js'
import 'bootstrap/dist/js/bootstrap.js'


import HomePage from './pages/HomePage'
//import SignupForm from './pages/SignupForm'
import Login from './pages/Login'
import Products from './pages/Products'
import Signup from './pages/Signup'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
       
        <div className="App">
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/signup' component={Signup} exact/>
            <Route path = '/products' component={Products}/>
            <Route path = '/login' component={Login} />
          </Switch> 
        </div>
      </Router>
      
    )
  }
  
}

export default App;
