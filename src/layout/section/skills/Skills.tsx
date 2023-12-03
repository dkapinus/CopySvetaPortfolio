import React from 'react';
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Skill} from "layout/section/skills/skill/Skill";
import {Container} from "components/Container";
import {S} from "layout/section/skills/SkillsStyled"
import {Fade} from "react-awesome-reveal";


const SkillsData = [
    {
        id: "codeSvg",
        title: "html5"
    },
    {
        id: "css",
        title: "css3"
    },
    {
        id: "react",
        title: "React"
    },
    {
        id: "typescript",
        title: "typescript"
    },
    {
        id: "styledComponents",
        title: "styled components"
    },
    {
        id: "figma",
        title: "figma"
    },


]


export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <StyledSectionTitle>My Skills</StyledSectionTitle>

                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true}>
                        damping={0.2}
                        {SkillsData.map((el, index) => {
                            return (
                                <Skill title={el.title} id={el.id} text={"HyperText Markup Language (HTML) is a" +
                                    " markup language used to create web pages. It was created in 1990 by Sir Tim Berners-Lee, a British " +
                                    "computer scientist who is credited with inventing the World Wide Web."}
                                       key={index}/>
                            )
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>

        </S.Skills>
    );
};



