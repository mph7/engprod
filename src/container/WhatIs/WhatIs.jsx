import React from 'react';
import './WhatIs.css';
import DividedTextImage from "../../components/DividedTextImage/DividedTextImage.jsx";
import Button from "../../components/Button/Button.jsx";

const WhatIs = () => {
  return ( <div id="what-is">
    <div className="what-is-background">
      <img src="./assets/what-is-background.png" alt="background"/>
    </div>
    <DividedTextImage h1={'A Engenharia de Produção'}
                      p={'É um curso que combina conhecimentos de Engenharia, Administração e Economia para otimizar processos produtivos em diversos setores industriais e de serviços. O principal objetivo dessa área é desenvolver e implementar métodos eficientes de produção, com foco na maximização da produtividade, redução de custos e melhoria da qualidade dos produtos e serviços.'}
                      imageSrc={'./images/what-is-img1.png'}></DividedTextImage>
    <DividedTextImage h1={'O Profissional '}
                      isImgLeft={true}
                      p={'É responsável por analisar e projetar sistemas produtivos, levando em consideração aspectos como a capacidade de produção, a distribuição de recursos, o planejamento da produção, a gestão da cadeia de suprimentos, a logística, o controle de qualidade e a segurança no trabalho. Eles também lidam com questões relacionadas à gestão de pessoas, ao desenvolvimento de estratégias de negócios e à tomada de decisões em dados.'}
                      imageSrc={'./images/what-is-img2.svg'}
                      button={<Button text={'Áreas de atuação'} href={'#areas-de-atuacao'}></Button>}
                      smallerImage={true}></DividedTextImage>
  </div> );
};

export default WhatIs;