import React from 'react';
import DividedTextImage from "../../components/DividedTextImages/DividedTextImage.jsx";
import InstagramImages from "../../components/InstagramImages/InstagramImages.jsx";
import { instagramPosts } from "../../constants.jsx";
import Button from "../../components/Button/Button.jsx";

const Visit = () => {
  return (
    <div>
      <DividedTextImage
        h1={'Visitas técnicas!'}
        p={'Realização de visitas técnicas em diferentes organizações a fim de visualizar seu funcionamento na prática e identificar possíveis áreas de atuação.'}
        isButtonBelowImage={true}
        image={<InstagramImages
          post1={instagramPosts.visit[0]}
          post2={instagramPosts.visit[1]}
        ></InstagramImages>}
        button={<Button text={'Saiba mais sobre as atividades do curso'} href={'https://www.instagram.com/engenhariadeproducao.unifsp/'} openNewPage={true}></Button>}></DividedTextImage>
    </div>
  );
};

export default Visit;