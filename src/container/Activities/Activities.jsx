import React from 'react';
import DividedTextImage from "../../components/DividedTextImages/DividedTextImage.jsx";
import InstagramImages from "../../components/InstagramImages/InstagramImages.jsx";
import { instagramPosts } from "../../constants.jsx";

const Activities = () => {
  return (
    <div>
      <DividedTextImage
        h1={'Atividades mão na massa!'}
        p={'Aulas e atividades práticas como a representação de processos produtivos e desenvolvimento de um produto.'}
        isImgLeft={true}
        image={<InstagramImages
          post1={instagramPosts.activities[0]}
          post2={instagramPosts.activities[1]}
        ></InstagramImages>}></DividedTextImage>
    </div>
  );
};

export default Activities;