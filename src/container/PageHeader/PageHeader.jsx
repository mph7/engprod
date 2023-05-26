import React from 'react';
import './PageHeader.css';

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="logo">
        <img src="images/logo-unifsp-white.png" alt="unifsp logo" className="header-unifsp-logo"/>
      </div>
      <a href="https://www.instagram.com/engenhariadeproducao.unifsp/" target="_blank">
        <img src="assets/instagram-icon.png" alt="instagram icon"/>
      </a>
    </div>
  );
};

export default PageHeader;