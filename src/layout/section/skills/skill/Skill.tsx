import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Theme} from "styles/Theme";

type SkillPropsType = {
    title: string
    id: string
    text: string
}


export const Skill: React.FC<SkillPropsType> = ({title, text, id, ...props}) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon IconId={id}/>
                </IconWrapper>
                <StyledSkillTitle>{title}</StyledSkillTitle>
                <StyledSkillText>{text}</StyledSkillText>
            </FlexWrapper>

        </StyledSkill>
    );
};


const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;
  
  @media ${Theme.media.mobile} {
    padding: 62px 0px 40px;
  }
`


const StyledSkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const StyledSkillText = styled.p`


  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%,-50%);
    transform-origin: top left;
    background: rgba(255, 255, 255, 0.10);

    position: absolute;
    left: 50%;
    top: 50%;
  }
`
