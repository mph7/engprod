import React from 'react';
import DividedTextImage from "../../components/DividedTextImages/DividedTextImage.jsx";
import InstagramImages from "../../components/InstagramImages/InstagramImages.jsx";
import {instagramPosts} from "../../constants.jsx";

const DifferentLessons = () => {
    return (<div>
            <DividedTextImage
                h1={'Aulas diferenciadas!'}
                p={'Aulas práticas, aulas em laboratório e pesquisa de campo são apenas algumas das atividades que os alunos da Engenharia de Produção da UniFSP podem participar!'}
                isButtonBelowImage={true}
                image={<InstagramImages
                    post1={instagramPosts.differentLessons[0]}
                    post2={instagramPosts.differentLessons[1]}
                ></InstagramImages>}>
            </DividedTextImage>
        </div>);
};

export default DifferentLessons;