import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Icon} from "components/icon/Icon";
import {Slider} from "components/slider/Slider";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Container} from "components/Container";
import {S} from "layout/section/skills/SkillsStyled"


export const Testimony:React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>

            <Container>
                <StyledSectionTitle>Testimony</StyledSectionTitle>
                <FlexWrapper  direction={"column"} align={"center"}>
                    <S.IconWrapper><Icon IconId={"testimony"}/></S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
  min-height: 50vh;
  
  ${S.IconWrapper}{
    margin:  28px 0 72px;
  }

`

