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
            bottom: 5px;
            left: 0px;
            right: 0px;
            ${props => props.active && css <{active?:boolean}>`
            height: 10px;
      `}

      }
`