import React from 'react';
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {S} from "layout/section/skills/SkillsStyled"


type SkillPropsType = {
    title: string
    id: string
    text: string
}


export const Skill: React.FC<SkillPropsType> = ({title, text, id, ...props}) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon IconId={id}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{text}</S.SkillText>
            </FlexWrapper>

        </S.Skill>
    );
};



