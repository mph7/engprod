import React, { useState } from 'react';
import './FaqComponent.css';

const FaqComponent = ({ question, answer }) => {
  const [ open, setOpen ] = useState(false);
  
  return (
    <div className="faq-component" onClick={() => {
      setOpen(!open);
    }}>
      <div className="question-container">
        <h2 className="question">{question}</h2>
      </div>
      <div className={`answer-accordion ${open ? 'open' : 'closed'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqComponent;