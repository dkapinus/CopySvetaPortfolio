import React from 'react';
import {Link} from "components/Link";
import {Button} from "components/button/Button";
import {S} from "layout/section/works/WorksStyled"


type WorkPropsType = {
    image: string
    title: string
    text: string
}


export const Work: React.FC<WorkPropsType> = ({image, title, text, ...props}) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={image} alt=''/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.TitleWork>{title}</S.TitleWork>
                <S.TextWork>{text}</S.TextWork>
                <Link href={""}>Demo</Link>
                <Link href={""}>Code</Link>
            </S.Description>


        </S.Work>
    );
};

