import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Button} from "components/slider/Button/Button";

export const Slogan = () => {
    return (
        <SloganStyled>
<StyledSectionTitle>I Am Available For Freelance</StyledSectionTitle>
            <Button>Hire me</Button>
        </SloganStyled>
    );
};

const SloganStyled = styled.section`
  background-color: brown;
  min-height: 30vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`