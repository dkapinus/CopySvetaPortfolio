import React from 'react';
import PhotoMain from "../../../assets/images/photo_2023-10-16-15.23.22-_1_ (1).png"
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Container} from "components/Container";
import {Theme} from "styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Dima Kapinus</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <PhotoMe src={PhotoMain} alt=""/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const PhotoMe = styled.img`
  object-fit: cover;
  width: 350px;
  height: 430px;
`

const PhotoWrapper =styled.div`
    position: relative;
  z-index: 1;
  &::before{
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid  ${Theme.colors.accent};
    position: absolute;
    top:-24px;
    left: 24px;
    z-index: -1;
  }
`
const StyledMain = styled.section`
  background-color: pink;
  min-height: 100vh;
  display: flex;
`

const MainTitle =styled.h1`

  font-size: 27px;
  font-weight: 400;

`

const Name =styled.h2`
  
  font-family: Josefin Sans,sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;
  span {
    position: relative;
    z-index: 0;
    
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      position: absolute;
      background-color: ${Theme.colors.accent};
      bottom: 0;
      z-index: -1;
    }
  }
`

const SmallText =styled.span`
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`