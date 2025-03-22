import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-links">
      <NavLink to="/" className="link-to-home">
        Home
      </NavLink>

      <NavLink to="/pastes" className="link-to-pastes">
        Pastes
      </NavLink>
    </div>
  );
};
  
export default NavBar;
