import React from 'react';
import './Button.css';

const Button = ({ text, href }) => {
  return (
    <a href={href ? href : '#'}>
      <button className="button" >
        {text}
        <img src="assets/km-arrow.svg" alt="button arrow"/>
      </button>
    </a>
  )
    ;
};

export default Button;