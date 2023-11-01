import styled from "styled-components";
import {Theme} from "styles/Theme";

export const Link = styled.a`
 
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;


  position: relative;
  z-index: 0;
  
  
   &:hover {
     
     &::before{
       content: "";
       display: inline-block;
       height: 10px;
       flex-direction: column;
       justify-content: center;
       background-color: ${Theme.colors.accent};

       z-index: -1;
       position: absolute;
       bottom: 5px;
       left: 0px;
       right: 0px;
     }
    
   
  }
`