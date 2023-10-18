import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {Menu} from "components/menu/Menu";

const item = ["Home", "Skills","Works", "Testimony", "Contact" ]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu item={item}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: green;
  display: flex;
  justify-content: space-between;
  
`
