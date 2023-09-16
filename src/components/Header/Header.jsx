import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';
import LogoPicture from '../../assets/kasa-logo.png';


function Header() {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={LogoPicture} alt="Logo du site kasa" />
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/" className="header__nav-link">Accueil</Link>
            </li>
            <li>
              <Link to="/a-propos" className="header__nav-link">A Propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header
  