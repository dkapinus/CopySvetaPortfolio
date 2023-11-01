import React from 'react';
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Skill} from "layout/section/skills/skill/Skill";
import {Container} from "components/Container";
import {S} from "layout/section/skills/SkillsStyled"



const SkillsData = [
    {id:"codeSvg",
        title:"html5"},
    {id:"css",
        title:"css3"},
    {id:"react",
        title:"React"},
    {id:"typescript",
        title:"typescript"},
    {id:"styledComponents",
        title:"styled components"},
    {id:"figma",
        title:"figma"},


]



export const Skills:React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <StyledSectionTitle>My Skills</StyledSectionTitle>

                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {SkillsData.map((el,index)=> {
                      return (
                          <Skill title={el.title} id={el.id} text={"Lorem ipsum dolor sit amet," +
                              " consectetur adipisicing elit, sed do eiusmod tempor incididunt ut " +
                              "labore et dolore magna aliqua Ut enim"} key={index}/>
                      )
                    })}

                </FlexWrapper>
            </Container>

        </S.Skills>
    );
};



