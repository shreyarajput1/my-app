import React from 'react';
import './App.css';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './index.js';
import About from './about.js';

import Contacts from './contact.js';

import SignUp from './signup.js';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        
        <Route path='/contact' component={Contacts} />
       
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}
  
export default App;