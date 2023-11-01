import styled from "styled-components";
import {Theme} from "styles/Theme";
import {font} from "styles/Common";

const PhotoMe = styled.img`
  object-fit: cover;
  width: 350px;
  height: 430px;
  margin-right: 20px;

  @media ${Theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${Theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;

    }
  }
  @media ${Theme.media.mobile} {
    margin-top: 65px;
  }
`
const Main = styled.section`
  background-color: pink;
  min-height: 100vh;
  display: flex;
`

const MainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})}

`

const Name = styled.h2`
  ${font({family: "Josefin Sans,sans-serif", weight: 700, Fmax: 50, Fmin: 36})}

  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      position: absolute;
      background-color: ${Theme.colors.accent};
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${Theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const SmallText = styled.span`

  font-size: 14px;
  font-weight: 400;

`

export const S = {PhotoMe,PhotoWrapper,Main,MainTitle,SmallText,Name}