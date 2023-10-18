import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    title: string
    id: string
    text: string
}


export const Skill: React.FC<SkillPropsType> = ({title, text, id, ...props}) => {
    return (
        <StyledSkill>
            <Icon IconId={id}/>
            <StyledSkillTitle>{title}</StyledSkillTitle>
            <StyledSkillText>{text}</StyledSkillText>

        </StyledSkill>
    );
};


const StyledSkill = styled.div`
  width: 30%;
  background-color: pink;
  margin: 10px;
`


const StyledSkillTitle = styled.h3`

`

const StyledSkillText = styled.p`
 
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
