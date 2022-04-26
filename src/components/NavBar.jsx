import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';

const NavBar = ({ background }) => {
  const brand =
    'https://poblautos.com/wp-content/uploads/2020/08/Logo-POBLAUTOS-Principal.svg';

  return (
    <header className={`header background--${background}`}>

      <div className="header-container">


        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
        </div>


        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>


        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>


        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
