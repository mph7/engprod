import React from 'react';
import './HeroSection.css'
import Button from "../../components/Button/Button.jsx";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-heading">
        <h1 className="hero-heading-h1">Engenharia de Produção</h1>
        <p className="hero-heading-text-block">Descubra como a Engenharia de Produção pode transformar negócios, processos e até mesmo o mundo à sua volta.
        </p>
        <Button text={'Saiba Mais'} href={'#what-is'}></Button>
      </div>
      <div className="hero-img">
        <img src="./images/hero-img.png" alt="hero-image" className="hero-image"/>
      </div>
      <div className="hero-background-vector">
        <img src='./assets/element.svg' alt="background vector"></img>
      </div>
    </div>
  );
};

export default HeroSection;