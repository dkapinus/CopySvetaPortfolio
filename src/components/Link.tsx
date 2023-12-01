import styled, {css} from "styled-components";
import {Theme} from "styles/Theme";

export const Link = styled.a<{ active?: boolean }>`

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;


  position: relative;
  z-index: 0;


  &:hover {
    &::before {
      height: 10px;
      transition: ${Theme.animation.transition};
    }

  }

  &::before {
    content: "";
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    background-color: ${Theme.colors.accent};


    z-index: -1;
    position: absolute;
    height: 0;
    bottom: 5px;
    left: 0;
    right: 0;
    ${props => props.active && css <{ active?: boolean }>`
      height: 10px;
    `}

  }
`