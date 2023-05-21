import React, { useState } from 'react';
import './Testimonials.css';
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard.jsx";

import { register } from 'swiper/element/bundle';

register();


const Testimonials = () => {
  const [ width, setWidth ] = useState(0);
  
  window.addEventListener('resize', () => {
    setWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  });
  
  return ( <div className="testimonials">
    <h1>Trajetórias de Sucesso: Sobre Alunos e Egressos</h1>
    
    <swiper-container
      slides-per-view={width >= 1150 ? '3.1' : width >= 768 ? '2.1' : 1.05}
      mousewheel-force-to-axis="true"
      pagination="true"
      speed="500"
    >
      <swiper-slide>
        <TestimonialCard
          testimonial={'A Engenharia de Produção para mim se define pela palavra oportunidade.'}
          image={'./images/testimonial-fernanda.jpg'}
          name={'Fernanda Costa'}
          term={'Aluna do 3º termo'}
          company={'Grupo RB - Auxiliar Administrativo'}
        ></TestimonialCard>
      </swiper-slide>
      <swiper-slide>
        <TestimonialCard
          testimonial={'Engenharia de produção para mim é uma área multidisciplinar com objetivo principal otimizar processos produtivos, maximizar a eficiência e qualidade dos produtos e serviços, e reduzir custos e impactos ambientais.'}
          image={'./images/testimonial-gabriel.jpg'}
          name={'Gabriel Secler Acosta'}
          term={'Aluno do 7º termo'}
          company={'ECR Engenharia - Auxiliar Técnico'}
        ></TestimonialCard>
      </swiper-slide>
      <swiper-slide>
        <TestimonialCard
          testimonial={'Porque como líder preciso conhecer ferramentas para fazer com que meus processos  sejam muito mais eficazes. Temos muitas ferramentas para todos os tipos de cenários dentro de uma indústria, desde setor de compras, controle de estoque, abastecimento, logística, produção, marketing, expedição…\n' +
            'A engenharia de produção nos ensina a resolver problemas de uma maneira muito muito mais fácil, pois estamos enxergando o problema e já pensando qual ferramenta usar e sempre é resolvido da melhor maneira,  muitas vezes sem nenhum custo para empresa.\n'}
          image={'./images/testimonial-joao-paulo.jpg'}
          name={'João Paulo Fernandes Martos'}
          term={'Aluno do 9º termo'}
          company={'Landi Turbina - Líder de Produção'}
        ></TestimonialCard>
      </swiper-slide>
      <swiper-slide>
        <TestimonialCard
          testimonial={'Engenharia de produção para mim é muito mais do que um curso de graduação\n' +
            'geralmente destinado a setores industriais e prestadores de serviços, é uma completa adaptação do\n' +
            'estudante para o ambiente profissional abrangendo as mais variadas áreas que fomentam um\n' +
            'negócio, demonstrando como se alimenta um processo partindo dos meios de suprimento, cadeias\n' +
            'de fornecedores e investimento financeiro, para seguidamente demonstrar a transformação desses\n' +
            'recursos através de ações de manufatura e agregadoras de valor para finalmente atingir o resultado\n' +
            'que os mais diversificados clientes e suas necessidades requisitam ao mercado.'}
          image={'./images/testimonial-wilson.jpg'}
          name={'Wilson Pontes de Almeida'}
          term={'Egresso da 7ª Turma'}
          company={'Ki-Kakau - Comprador de Embalagens'}
        ></TestimonialCard>
      </swiper-slide>
    </swiper-container>
    
    
    {/*<div className="testimonials-cards">*/}
    {/*  <TestimonialCard*/}
    {/*    testimonial={'A Engenharia de Produção para mim se define pela palavra oportunidade.'}*/}
    {/*    image={'./images/testimonial-fernanda.jpg'}*/}
    {/*    name={'Fernanda Costa'}*/}
    {/*    term={'Aluna do 3º termo'}*/}
    {/*    company={'Grupo RB - Auxiliar Administrativo'}*/}
    {/*  ></TestimonialCard>*/}
    {/*  <TestimonialCard*/}
    {/*    testimonial={'Engenharia de produção para mim é uma área multidisciplinar com objetivo principal otimizar processos produtivos, maximizar a eficiência e qualidade dos produtos e serviços, e reduzir custos e impactos ambientais.'}*/}
    {/*    image={'./images/testimonial-gabriel.jpg'}*/}
    {/*    name={'Gabriel Secler Acosta'}*/}
    {/*    term={'Aluno do 7º termo'}*/}
    {/*    company={'ECR Engenharia - Auxiliar Técnico'}*/}
    {/*  ></TestimonialCard>*/}
    {/*  <TestimonialCard*/}
    {/*    testimonial={'Escolhi Engenharia de Produção porque como líder preciso conhecer ferramentas para fazer com que meus processos sejam muito mais eficazes. Temos muitas ferramentas para todos os tipos de cenários dentro de uma indústria, desde setor de compras, controle de estoque, abastecimento, logística, produção, marketing, expedição…\n'}*/}
    {/*    image={'./images/testimonial-joao-paulo.jpg'}*/}
    {/*    name={'João Paulo Fernandes Martos'}*/}
    {/*    term={'Aluno do 9º termo'}*/}
    {/*    company={'Landi Turbina - Líder de Produção'}*/}
    {/*  ></TestimonialCard>*/}
    {/*  */}
  
  
  </div> );
};

export default Testimonials;