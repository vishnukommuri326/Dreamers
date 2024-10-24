/**
 * A React component that represents a single page of the app.
 * Use this file to create new pages as needed
 * Don't forget to add the new route to App.js
 */
import React, { useState } from 'react';
import '../assets/styles/App.css';
import logo from '../assets/images/dreamer-1.png';



const Header = props => {
    return (
      <div>
        <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <button className="hamburger-menu" onClick={() => alert('Menu clicked!')}>
          &#9776;
        </button>
      </header>

      </div>
    )
  }

  export default Header