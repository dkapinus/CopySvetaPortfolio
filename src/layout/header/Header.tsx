import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {Container} from "components/Container";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {HeaderMenu} from "layout/header/headerMenu/HeaderMenu";
import {MobileMenu} from "layout/header/mobileMenu/MobileMenu";


const item = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu item={item}/>
                    <MobileMenu item={item}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.90);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;


`
