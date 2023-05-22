import React from 'react';
import './Faq.css';
import FaqComponent from "../../components/FaqComponent/FaqComponent.jsx";

const faqData = [ {
  question: 'Qual a duração da graduação em Engenharia de Produção?\n',
  answer: 'O curso tem duração de 10 semestres (5 anos).\n',
}, {
  question: 'Qual o período do curso oferecido na UniFSP?\n', answer: 'Noturno (19h às 22h40m). \n',
}, {
  question: 'Quais são as principais disciplinas básicas do curso?\n',
  answer: '- Cálculo: desenvolve raciocínio lógico para resolver diferentes tipos de problemas além da capacidade de analisar dados.\n' + '- Física: aborda diferentes fenômenos físico, leis da natureza e suas aplicações dentro de projetos.\n' + '- Língua Portuguesa: auxilia na leitura e na interpretação de texto, além de facilitar a comunicação e expressão.\n' + '- Introdução à Engenharia de Produção: aborda os principais conceitos da Engenharia de Produção, além das áreas de forma macro.',
}, {
  question: 'Quais são as principais disciplinas específicas do curso?\n',
  answer: '- Gestão da Produção: são estudados os principais sistemas de controle e planejamento da produção e como aplicá-los em diferentes cenários, sendo discutidos diversos exemplos práticos.\n' + '- Gestão da Qualidade: a disciplina é fundamentada em princípios como a abordagem centrada no cliente, a melhoria contínua, o envolvimento de todos os membros da organização, a gestão baseada em fatos e a tomada de decisões embasadas em dados.\n' + '-Logística e Gestão da Cadeia de Suprimentos: A logística abrange o gerenciamento de todas as atividades relacionadas à movimentação, armazenamento e controle de produtos, desde a aquisição de matérias-primas até a entrega do produto final ao cliente. Isso inclui o transporte, a gestão de estoques, a embalagem, o armazenamento e a distribuição física. A gestão da cadeia de suprimentos amplia o escopo da logística, integrando todas as atividades e processos relacionados ao fornecimento de materiais, transformação de produtos e distribuição aos clientes. Ela envolve a coordenação e colaboração entre fornecedores, fabricantes, distribuidores, varejistas e clientes, com o objetivo de maximizar o valor entregue aos clientes finais.\n' + '- Processos Agroindustriais: abrangem uma ampla gama de atividades, desde a colheita e armazenamento de matérias-primas agrícolas até o processamento, embalagem, distribuição e distribuição dos produtos finais. Além disso, inclui o gerenciamento de resíduos, a conservação de alimentos, o controle de qualidade e a conformidade com as regulamentações governamentais.\n- Gestão de Projetos: aborda uma ampla gama de atividades, desde a definição do escopo e dos objetivos do projeto até o planejamento das atividades, alocação de recursos, gerenciamento de riscos, monitoramento do progresso e implementação de estratégias de controle. Além disso, inclui a comunicação efetiva com as partes interessadas, a coordenação das equipes de trabalho e a tomada de decisões em diversas situações.\n',
}, {
  question: 'Quais as maiores dificuldades encontradas pelos alunos durante a graduação?\n',
  answer: 'A maior dificuldade está nos primeiros anos de graduação por conta das matérias básicas de cálculo, matemática e física justamente por muitas vezes não serem matérias estudadas durante o ensino médio. A UniFSP conta com um time de profissionais excelentes em todas as disciplinas da graduação, garantindo máximo aproveitamento durante os estudos.',
}, {
  question: 'É preciso fazer estágio para se formar?\n',
  answer: 'Sim. O estágio serve para colocar em práticas os conhecimentos obtidos em sala e preparar o aluno para o mercado de trabalho. A UniFSP possui parceria com diversas empresas da região, possibilitando a realização de projetos e estágios para os alunos.',
} ];

const Faq = () => {
  return ( <div className="faq-section">
    <h1 className="faq-h1">Perguntas Frequentes</h1>
    <div className="faq-questions">
      {faqData.map((data, i) => {
        return <FaqComponent question={data.question}
                             answer={data.answer}
                             key={i}>
        </FaqComponent>;
      })}
    </div>
  </div> );
};

export default Faq;
