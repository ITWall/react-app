import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

const NavBar  = ({totalProducts}) => {
  
    
  return(
    <nav className="navbar sticky-top navbar-light bg-light">
      <Link to='/counters' className="navbar-brand" href="#">Counters</Link>
      
      <span class='badge badge-secondary'>{totalProducts}</span>
      <Link to='/about'>About</Link>
      <Link to='/shop'>Shop</Link>
    </nav>
  )
  
}

export default NavBar;