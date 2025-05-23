import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/read">Read</Link></li>
          <li><Link to="/update">Update</Link></li>
          <li><Link to="/delete">Delete</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
