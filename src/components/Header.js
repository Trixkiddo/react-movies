import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to='/'>
            <li>Accueil</li>
          </NavLink>
          <NavLink to='/favoris'>
            <li>Favoris</li>
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
