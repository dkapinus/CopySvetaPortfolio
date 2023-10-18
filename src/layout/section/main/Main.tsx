import React from 'react';
import PhotoMain from "../../../assets/images/photo_2023-10-16-15.23.22-_1_ (1).png"
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Dima Kapinus</Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>
                <PhotoMe src={PhotoMain} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};


const PhotoMe = styled.img`
  object-fit: cover;
  width: 350px;
  height: 430px;
`
const StyledMain = styled.div`
  background-color: pink;
  min-height: 100vh;
`

const MainTitle =styled.h1`
    
`

const Name =styled.h2`
    
`