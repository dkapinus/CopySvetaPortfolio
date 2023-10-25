import styled from "styled-components";
import {Theme} from "styles/Theme";

export const Button = styled.button`
 
 
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  
  position: relative;
  z-index: 0;

  &:hover {
    &::before{
      height: 100%;
      width: 100%;
    }
  }

    &::before{
      content: "";
      display: inline-block;
      background-color: ${Theme.colors.accent};
      width: 50%;
      height: 10px;

      z-index: -1;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
    }


  
`