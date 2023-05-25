import React, { useState } from 'react';
import './DividedTextImage.css';
import InstagramImages from "../InstagramImages/InstagramImages.jsx";

const DividedTextImage = ({ isImgLeft, p, h1, image, button, isButtonBelowImage }) => {
  const [ width, setWidth ] = useState(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  
  window.addEventListener('resize', () => {
    setWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  });
  
  return ( <div
    className={`divided-text-image ${isImgLeft ? 'left-divided-image' : ''}  ${React.isValidElement(image) && image.type === InstagramImages ? 'divided-instagram-post' : ''}`}>
    <div className="text-content">
      <h1 className="divided-h1">{h1}</h1>
      <p className="divided-p">{p}</p>
      {button && (!isButtonBelowImage || width > 768) && button}
    </div>
    <div className="image-content">
      {image}
    </div>
    {button && isButtonBelowImage && width <= 768 && button}
  
  </div> );
};

export default DividedTextImage;