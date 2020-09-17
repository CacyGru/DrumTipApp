import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/kategorie1">
          <li>Kategorie 1</li>
        </Link>

        <Link to="/kategorie2">
          <li>Kategorie 2</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
