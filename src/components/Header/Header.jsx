import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';
import LogoPicture from '../../assets/kasa-logo.png';

function Header() {
  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={LogoPicture} alt="Logo du site kasa" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link
              to="/"
              className={`header__nav-link ${clickedLink === '/' ? 'clicked' : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className={`header__nav-link ${clickedLink === '/a-propos' ? 'clicked' : ''}`}
              onClick={() => handleLinkClick('/a-propos')}
            >
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
