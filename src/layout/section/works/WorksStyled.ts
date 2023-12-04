import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Theme} from "styles/Theme";
import {Link} from "components/Link";
import {Button} from "components/button/Button";

const Works = styled.section`
  position: relative;
 
    ${FlexWrapper} {
      gap:30px;
      
    }
`


//Work

const Work = styled.div`

  background: ${Theme.colors.secondaryBg};
 


  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 10px;
    }
  }
 
`

const ImageWrapper = styled.div`
 
  position: relative;

  
  ${Button} {

    position: absolute;
    left: 50%;
    transform: translate(-50%, -40% );
    bottom: 40%;
    opacity: 0;
    transition: ${Theme.animation.transition};
    &::before{
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: ${Theme.animation.transition};
  }

 
  
  &:hover {
    &::before {
      opacity: 1;
     
    }

    ${Button}{
      opacity: 1;
      transform: translate(-50%, -50% );
     
    }

  }


  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button}{
      opacity: 1;
    }
  }


`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`

const TitleWork = styled.h3`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
`

const TextWork = styled.p`
  margin: 14px 0 10px;
  width: 100%;


`
const Description = styled.div`
  padding: 25px 20px;


`

export const S ={Works,Work,Image,ImageWrapper,Description,TitleWork,TextWork}