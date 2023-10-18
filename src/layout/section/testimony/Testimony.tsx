import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Icon} from "components/icon/Icon";
import {Slider} from "components/slider/Slider";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";


export const Testimony = () => {
    return (
        <StyledTestimony>

                <StyledSectionTitle>Testimony</StyledSectionTitle>
            <FlexWrapper justify={"center"} direction={"column"} align={"center"} >

                <Icon IconId={"testimony"}/>
                <Slider/>
            </FlexWrapper>



        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
 
  background-color: dodgerblue;
  min-height: 50vh;
  
`
