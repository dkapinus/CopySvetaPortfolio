import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Skill} from "layout/section/skills/skill/Skill";
import {Container} from "components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <StyledSectionTitle>My Skills</StyledSectionTitle>

                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill title={"html5"}  id={"codeSvg"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"css3"}  id={"css"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"React"}  id={"react"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"typescript"}  id={"typescript"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"styled components"}  id={"styledComponents"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"figma"}  id={"figma"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: rebeccapurple;
  min-height: 100vh;
`


