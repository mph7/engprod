import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-heading">
        <h1 className="hero-heading-h1">Engenharia de Produção</h1>
        <p className="hero-heading-text-block">Descubra como a Engenharia de Produção pode transformar negócios, processos e até mesmo o mundo à sua volta.
        </p>
        <button className="know-more-btn">Saiba Mais</button>
      </div>
      <div className="hero-img">
        <img src="./images/hero-img.png" alt="hero-image"/>
      </div>
    </div>
  );
};

export default HeroSection;