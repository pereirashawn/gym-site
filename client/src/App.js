import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import HomePage from './pages/HomePage'
import SignupForm from './pages/SignupForm'
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <div className="App">
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/signup' component={SignupForm} exact/>

          </Switch> 
        </div>
      </Router>
      
    )
  }
  
}

export default App;
