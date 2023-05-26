import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="images/logo-unifsp-white.png" alt="unifsp logo" className="footer-unifsp-logo"/>
      </div>
      <div className="phone contact">
        <img src="assets/phone-icon.png" alt="phone icon"/>
        <span>(14) 3711-4020</span>
      </div>
      <div className="whatsapp contact">
        <img src="assets/whatsapp-icon.png" alt="whatsapp icon"/>
        <span>(14) 3711-4023</span>
      </div>
      <div className="instagram contact">
        <a href="https://www.instagram.com/engenhariadeproducao.unifsp/" target="_blank">
          <img src="assets/instagram-icon.png" alt="instagram icon"/>
          <span>Acesse nosso instagram!</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;