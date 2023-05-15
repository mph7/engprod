import React from 'react';
import './DividedTextImage.css';

const DividedTextImage = ({ isImgLeft, p, h1, imageSrc, button, smallerImage }) => {
  return ( <div className={`divided-text-image ${isImgLeft ? 'left-divided-image' : ''}`}>
    <div className="text-content">
      <h1 className="divided-h1">{h1}</h1>
      <p className="divided-p">{p}</p>
      {button && button}
    </div>
    <div className="image-content">
      <img src={imageSrc} alt="" className={`divided-image ${smallerImage ? 'smaller-image' : ''}`}/>
    </div>
  
  </div> );
};

export default DividedTextImage;