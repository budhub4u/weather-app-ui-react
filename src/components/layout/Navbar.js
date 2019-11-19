import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='weather-app--navbar'>
      <h1>
        <Link to='/'>Weather Application</Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
