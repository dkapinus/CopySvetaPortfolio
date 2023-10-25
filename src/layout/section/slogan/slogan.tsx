import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Button} from "components/button/Button";
import {Container} from "components/Container";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";

export const Slogan = () => {
    return (
        <SloganStyled>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} >
                    <StyledSectionTitle>I Am Available For Freelance</StyledSectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>


        </SloganStyled>
    );
};

const SloganStyled = styled.section`
  background-color: brown;
  min-height: 30vh;

  
`