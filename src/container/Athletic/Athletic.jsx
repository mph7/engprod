import React from 'react';
import DividedTextImage from "../../components/DividedTextImages/DividedTextImage.jsx";
import InstagramImages from "../../components/InstagramImages/InstagramImages.jsx";
import { instagramPosts } from "../../constants.jsx";
import Button from "../../components/Button/Button.jsx";

const Athletic = () => {
  return (
    <div>
      <DividedTextImage
        h1={'Atlética Improdutivos!'}
        p={'A Associação Atlética Acadêmica da Engenharia de Produção UniFSP foi criada com o objetivo de integrar os alunos do curso por meio de atividades esportivas e de lazer.'}
        isButtonBelowImage={true}
        isImgLeft={true}
        image={<InstagramImages
          post1={instagramPosts.athletic[0]}
          post2={instagramPosts.athletic[1]}
        ></InstagramImages>}
        button={<Button text={'Saiba mais sobre a atlética'} href={'https://instagram.com/atleticaengenharia_producao?igshid=MzRlODBiNWFlZA=='} openNewPage={true}></Button>}></DividedTextImage>
    </div>
  );
};

export default Athletic;