import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error.scss';
import logo404 from './../assets/logo_error_404.png';

function Error() {
  return (
    <div className="error">
      <img src={logo404} alt="Logo 404" className="error__logo" />
      <p className="error__message">Oups! la page que vous demandez n'existe pas.</p>
      <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;

  