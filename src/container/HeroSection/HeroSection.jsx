import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-heading">
        <h1 className="hero-heading-h1">Engenharia de Produção</h1>
        <p className="hero-heading-text-block">Descubra como a Engenharia de Produção pode transformar negócios, processos e até mesmo o mundo à sua volta.
        </p>
        <button className="know-more-btn">
          Saiba Mais
          <img src="assets/km-arrow.svg" alt="know more arrow"/>
        </button>
      </div>
      <div className="hero-img">
        <img src="/public/images/hero-img.png" alt="hero-image"/>
      </div>
      <div className="hero-background-vector">
        <img src='/public/assets/element.svg' alt="background vector"></img>
      </div>
    </div>
  );
};

export default HeroSection;