import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledSectionTitle>Dima</StyledSectionTitle>
            <FlexWrapper align={"center"} justify={"center"}>
                <Icon IconId={"instagram"}/>
                <Icon IconId={"telegram"}/>
                <Icon IconId={"vk"}/>
                <Icon IconId={"linkedin"}/>
            </FlexWrapper>
            <FooterText>© 2023 Kapinus Dima, All Rights Reserved.</FooterText>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  min-height: 30vh;
  background-color: rebeccapurple;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

const FooterText =styled.div`
  color: rgba(255, 255, 255, 0.50);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`