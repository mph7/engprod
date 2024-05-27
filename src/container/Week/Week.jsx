import React from 'react';
import DividedTextImage from "../../components/DividedTextImages/DividedTextImage.jsx";
import InstagramImages from "../../components/InstagramImages/InstagramImages.jsx";
import { instagramPosts } from "../../constants.jsx";

const Week = () => {
  return (
    <div>
      <DividedTextImage
        h1={'Semana da Engenharia de Produção!'}
        p={'Evento que aborda temas relevantes para Engenharia de Produção em formato de palestras, workshops e visitas técnicas. Ainda, com direito a churrasco no encerramento!'}
        isImgLeft={true}
        image={<InstagramImages
          post1={instagramPosts.week[0]}
          post2={instagramPosts.week[1]}
        ></InstagramImages>}></DividedTextImage>
    </div>
  );
};

export default Week;