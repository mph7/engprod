import React from 'react';
import DividedTextImage from "../../components/DividedTextImages/DividedTextImage.jsx";
import InstagramImages from "../../components/InstagramImages/InstagramImages.jsx";
import {instagramPosts} from "../../constants.jsx";

const Extension = () => {
    return (<div>
            <DividedTextImage
                h1={'Extensão Universitária'}
                p={'A extensão universitária é uma atividade acadêmica que promove a interação entre a universidade e a sociedade, por meio de projetos e programas que visam a aplicação do conhecimento científico e tecnológico em benefício da comunidade.'}
                isButtonBelowImage={true}
                isImgLeft={true}
                image={<InstagramImages
                    post1={instagramPosts.extension[0]}
                    post2={instagramPosts.extension[1]}
                ></InstagramImages>}>
            </DividedTextImage>
        </div>);
};

export default Extension;