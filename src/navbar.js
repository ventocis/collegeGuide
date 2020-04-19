import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ curUser }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-white container-fluid mb-4'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo01'
        aria-controls='navbarTogglerDemo01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <a className='navbar-brand' href='/'>
        College Guide
      </a>
      <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
        <div>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <NavLink to='/packages/create' className='nav-link'>
                Create A Package
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/packages/view' className='nav-link'>
                View Packages
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/aptcomplexes/view' className='nav-link'>
                Apartment Complexes
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/reviews/create' className='nav-link'>
                Review Your Place
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
