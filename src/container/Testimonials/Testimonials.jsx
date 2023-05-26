import React, { useState } from 'react';
import './Testimonials.css';
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard.jsx";

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Testimonials = () => {
  const [ width, setWidth ] = useState(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  
  window.addEventListener('resize', () => {
    setWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  });
  
  return ( <div className="testimonials">
    <h1>Trajetórias de Sucesso: Sobre Alunos e Egressos</h1>
    
    <CarouselProvider
      naturalSlideWidth={100}
      isIntrinsicHeight={true}
      totalSlides={6}
      visibleSlides={width > 1150 ? '3.1' : width > 768 ? '2.1' : 1.05}
    >
      <Slider>
        <Slide index={0}>
          <TestimonialCard
            testimonial={'A Engenharia de Produção para mim se define pela palavra oportunidade.'}
            image={'./images/testimonial-fernanda.jpg'}
            name={'Fernanda Costa'}
            term={'Aluna do 3º termo'}
            company={'Grupo RB - Auxiliar Administrativo'}
          ></TestimonialCard>
        </Slide>
        <Slide index={1}>
          <TestimonialCard
            testimonial={'Engenharia de Produção para mim é uma área multidisciplinar com o objetivo principal de otimizar processos produtivos, maximizar a eficiência e qualidade dos produtos e serviços, e reduzir custos e impactos ambientais.'}
            image={'./images/testimonial-gabriel.jpg'}
            name={'Gabriel Secler Acosta'}
            term={'Aluno do 7º termo'}
            company={'ECR Engenharia - Auxiliar Técnico'}
          ></TestimonialCard>
        </Slide>
        <Slide index={2}>
          <TestimonialCard
            testimonial={'Escolhi a Engenharia de Produção porque como líder preciso conhecer ferramentas para fazer com que meus processos  sejam muito mais eficazes. \nTemos muitas ferramentas para todos os tipos de cenários dentro de uma indústria, desde setor de compras, controle de estoque, abastecimento, logística, produção, marketing, expedição…\n' +
              'A engenharia de produção nos ensina a resolver problemas de uma maneira muito muito mais fácil, pois estamos enxergando o problema e já pensando qual ferramenta usar e sempre é resolvido da melhor maneira,  muitas vezes sem nenhum custo para empresa.\n'}
            image={'./images/testimonial-joao-paulo.jpg'}
            name={'João Paulo Fernandes Martos'}
            term={'Aluno do 9º termo'}
            company={'Landi Turbina - Líder de Produção'}
          ></TestimonialCard>
        </Slide>
        <Slide index={3}>
          <TestimonialCard
            testimonial={'Engenharia de Produção para mim é muito mais do que um curso de graduação ' +
              'geralmente destinado a setores industriais e prestadores de serviços, é uma completa adaptação do ' +
              'estudante para o ambiente profissional abrangendo as mais variadas áreas que fomentam um ' +
              'negócio, demonstrando como se alimenta um processo partindo dos meios de suprimento, cadeias ' +
              'de fornecedores e investimento financeiro, para seguidamente demonstrar a transformação desses ' +
              'recursos através de ações de manufatura e agregadoras de valor para finalmente atingir o resultado ' +
              'que os mais diversificados clientes e suas necessidades requisitam ao mercado.'}
            image={'./images/testimonial-wilson.jpg'}
            name={'Wilson Pontes de Almeida'}
            term={'Egresso da 7ª Turma'}
            company={'Ki-Kakau - Comprador de Embalagens'}
          ></TestimonialCard>
        </Slide>
        <Slide index={4}>
          <TestimonialCard
            testimonial={'Escolhi a Engenharia de Produção porque me abriu diversas portas no mercado de trabalho e me possibilitou trabalhar com aquilo que amo liderança e desenvolvimento de pessoas.'}
            image={'./images/testimonial-flavia.jpg'}
            name={'Flavia Carvalho'}
            term={'Egressa da 3ª Turma'}
            company={'Bayer - Supervisora de Produção'}
          ></TestimonialCard>
        </Slide>
        <Slide index={5}>
          <TestimonialCard
            testimonial={'Eu escolhi a Engenharia de Produção, pois o curso proporciona uma série de áreas de atuação, que vão desde a área de operações e processos de produção, logística, engenharia econômica e engenharia do trabalho, até prestação de serviços de consultoria e análises; envolvendo também conceitos de humanas, comunicação, gestão de pessoas e administrativa.\n' +
              'Por ser abrangente e com possibilidade de atuação em diferentes áreas, os profissionais possuem boas chances de conquistar uma vaga no mercado de trabalho \n' +
              'Além disso, a Engenharia de Produção tem um pilar muito importante: obter o máximo de produtividade. \nEm tempos de crise, as empresas necessitam desses profissionais e de seus recursos, para que se tenham indicadores positivos e, por consequência, resultados eficazes.'}
            image={'./images/testimonial-mariana.jpg'}
            name={'Mariana Vilela Bataglini'}
            term={'Egressa da 4ª Turma'}
            company={'Alispec - Analista de Logística'}
          ></TestimonialCard>
        </Slide>
      </Slider>
    </CarouselProvider>
  </div> )
    ;
};

export default Testimonials;