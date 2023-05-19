import React from 'react';
import './InstagramImages.css';
import InstagramCard from "../InstagramCard/InstagramCard.jsx";

const InstagramImages = ({ post1, post2 }) => {
  return (
    <div className="instagram-images">
      <InstagramCard
        post={post1}
      ></InstagramCard>
      <InstagramCard
        post={post2}
      ></InstagramCard>
    </div>
  );
};

export default InstagramImages;