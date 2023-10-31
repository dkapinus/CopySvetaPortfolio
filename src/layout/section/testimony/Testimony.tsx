import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Icon} from "components/icon/Icon";
import {Slider} from "components/slider/Slider";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Container} from "components/Container";


export const Testimony = () => {
    return (
        <StyledTestimony>

            <Container>
                <StyledSectionTitle>Testimony</StyledSectionTitle>
                <FlexWrapper  direction={"column"} align={"center"}>
                    <ImageWrapper><Icon IconId={"testimony"}/></ImageWrapper>

                    <Slider/>
                </FlexWrapper>

            </Container>


        </StyledTestimony>
    );
};

const ImageWrapper = styled.div`
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

const StyledTestimony = styled.section`
  
  min-height: 50vh;
  
  ${ImageWrapper}{
    margin:  40px 0 72px;
  }

`

