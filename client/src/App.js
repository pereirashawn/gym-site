import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import HomePage from './pages/HomePage'
import SignupForm from './pages/SignupForm'
import Login from './pages/Login'
import Products from './pages/Products'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
       
        <div className="App">
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/signup' component={SignupForm} exact/>
            <Route path = '/products' component={Products}/>
            <Route path = '/login' component={Login} />
          </Switch> 
        </div>
      </Router>
      
    )
  }
  
}

export default App;
