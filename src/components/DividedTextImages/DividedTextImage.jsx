import React from 'react';
import './DividedTextImage.css';
import InstagramImages from "../InstagramImages/InstagramImages.jsx";

const DividedTextImage = ({ isImgLeft, p, h1, image, button }) => {
  return ( <div
    className={`divided-text-image ${isImgLeft ? 'left-divided-image' : ''}  ${React.isValidElement(image) && image.type === InstagramImages ? 'divided-instagram-post' : ''}`}>
    <div className="text-content">
      <h1 className="divided-h1">{h1}</h1>
      <p className="divided-p">{p}</p>
      {button && button}
    </div>
    <div className="image-content">
      {image}
    </div>
  
  </div> );
};

export default DividedTextImage;