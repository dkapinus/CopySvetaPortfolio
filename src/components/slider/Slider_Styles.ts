import styled from "styled-components";
import {Theme} from "styles/Theme";


const Slider = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  align-items: center;

`

const Slide = styled.div`

  text-align: center;


`

const Text = styled.p`
  
  
`

const Name = styled.span`
  
  font-family: Josefin Sans,sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 32px;
  display: inline-block;
`

const Paginator = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background-color: #FFFFFF80;
    
    & + span {
      margin-left: 5px;
    }
    &:hover {
      width: 20px;
      height: 7px;
      background-color: ${Theme.colors.accent};
    }
  }
`

export const S = {Slider,Slide,Text,Name,Paginator}