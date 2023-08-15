import logo from '../../assets/logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import './NavBar.css';

function Navbar(props) {
  const [searchBar, toggleSearchBar] = useState(false);
  const [mobileMenu, toggleMobileMenu] = useState(false);
  var navClassNames = classNames('nav', {
    search: searchBar,
    'no-search': !searchBar,
    'mobile-nav': mobileMenu,
  });

  var mobileMenuClassNames = classNames('menu-toggle', {
    'is-active': mobileMenu,
  });

  return (
    <>
    <div className="nav-wrapper">
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <div
          className={mobileMenuClassNames}
          id="mobile-menu"
          onClick={(e) =>
            toggleMobileMenu((prevMobileMenu) => !prevMobileMenu)
          }
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={navClassNames}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Upload paper</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <hr className="nav-separator" />
    </div>
   
    </>
  );
}

export default Navbar;
