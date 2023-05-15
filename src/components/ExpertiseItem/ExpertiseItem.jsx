import React from 'react';
import './ExpertiseItem.css';

const ExpertiseItem = ({ image, text }) => {
  return (
    <div className="expertise-item">
    <img className="item-image" alt="item image" src={image}/>
      <p className="item-text">{text}</p>
    </div>
  );
};

export default ExpertiseItem;