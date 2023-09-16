import React from 'react';
import footerPicture from '../../assets/kasa-logo-Footer.png'
import '../../styles/Footer.scss';


function Footer() {
    return (
      <footer className="footer">
        <div className="footer__logo">
        <img src={footerPicture} alt="Logo du Footer" />
        </div>
        <p className="footer__rights">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer
  