import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial, image, name, term, company }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-top">
        <img src="./assets/quote.svg" alt="quote vector"/>
        <p className="testimonial">{testimonial}</p>
        <div className="divider"></div>
      </div>
      <div className="testimonial-bottom">
        <div className="testimonial-image-container">
          <img src={image} alt="testimonial image" className="testimonial-image"/>
        </div>
        <div className="testimonial-info">
          <h2 className="testimonial-name">{name}</h2>
          <p className="testimonial-term">{term}</p>
          <p className="testimonial-company">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;