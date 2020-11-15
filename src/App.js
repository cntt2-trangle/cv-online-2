import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/HomePage/Services/Services'
import Products from './components/pages/HomePage/Products/Products'
import SignUp from './components/pages/HomePage/SignUp/SignUp'
import Footer from './components/pages/HomePage/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
