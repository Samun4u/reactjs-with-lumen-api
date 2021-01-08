import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
          <header>
<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
<div className="navigation">
<div className="container">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse.collapse">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
    <div className="navbar-brand">
      <NavLink exact to='/'><h1><span>QA IT</span>Agency</h1></NavLink>
      
    </div>
  </div>
  <div className="navbar-collapse collapse">
    <div className="menu">
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation"><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
        <li role="presentation"><NavLink  activeClassName='active'  to='/about'>About Us</NavLink></li>
        <li role="presentation"><NavLink  activeClassName='active' to='/services'>Services</NavLink></li>
        <li role="presentation"><NavLink  activeClassName='active' to='/portfolio'>Portfolio</NavLink></li>
        <li role="presentation"><NavLink   activeClassName='active' to='/blog'>Blog</NavLink></li>
        <li role="presentation"><NavLink  activeClassName='active' to='/contact'>Contact Us</NavLink></li>
      </ul>
    </div>
  </div>
</div>
</div>
</nav>
</header>
    </div>
)
}

export default Navbar;
