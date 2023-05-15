import React from 'react';
import './ExpertiseAreas.css';
import ExpertiseItem from "../../components/ExpertiseItem/ExpertiseItem.jsx";

const ExpertiseAreas = () => {
  return (
    <div className="expertise-areas" id="expertise-areas">
      <img src="./assets/expertise-background.svg" alt="background" className="expertise-background"/>
      <h1>Áreas de Atuação</h1>
      <div className="expertise-grid">
        <ExpertiseItem text={'Gestão: Abrange recursos humanos, marketing e vendas, manutenção, economia e finanças.'}
                       image={'./images/item-gestao.png'}></ExpertiseItem>
        <ExpertiseItem
          text={'Segurança do Trabalho: Inclui aplicação de ergonomia, preocupação com o meio ambiente e práticas inteligentes.'}
          image={'./images/item-seguranca.png'}></ExpertiseItem>
        <ExpertiseItem
          text={'Logística: Envolvendo a gestão de materiais, estoques e compras, transporte e armazenagem.'}
          image={'./images/item-logistica.png'}></ExpertiseItem>
        <ExpertiseItem
          text={'Qualidade: Compreende o uso de ferramentas de controle, garantia do processo e implementação de boas práticas de fabricação.'}
          image={'./images/item-qualidade.png'}></ExpertiseItem>
        <ExpertiseItem
          text={'Projetos: Engloba o desenvolvimento de novas tecnologias, engenharia do produto, melhoria contínua e redução de desperdícios.'}
          image={'./images/item-projetos.png'}></ExpertiseItem>
        <ExpertiseItem
          text={'Produção: Engloba o planejamento e controle das atividades produtivas, liderança e gestão de equipes, análise e acompanhamento de indicadores, além da otimização de recursos'}
          image={'./images/item-producao.png'}></ExpertiseItem>
      </div>
    </div>
  );
};

export default ExpertiseAreas;