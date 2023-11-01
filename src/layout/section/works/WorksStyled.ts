import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Theme} from "styles/Theme";
import {Link} from "components/Link";
import {Button} from "components/button/Button";

const Works =styled.section`
 
    ${FlexWrapper} {
      gap:30px;
      
    }
`


//Work

const Work = styled.div`

  background: ${Theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;


  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 10px;
    }
  }
 @media ${Theme.media.desktop} {
   max-width: 540px;
 }
`

const ImageWrapper = styled.div`
 
  position: relative;



  ${Button}{

    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 50%;
    opacity: 0;
    &::before{
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
  }

 
  
  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button}{
      opacity: 1;
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