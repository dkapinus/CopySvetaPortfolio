import styled from "styled-components";
import {Theme} from "styles/Theme";
import {font} from "styles/Common";

const Footer = styled.footer`
  position: relative;
  padding: 40px 0;
  background-color: ${Theme.colors.primaryBg};


}

`

const SocialList = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const FooterText = styled.div`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;

`

const Name = styled.div`
  ${font({family: "Josefin Sans, sans-serif", weight: 700, Fmax: 22, Fmin: 16})}

  letter-spacing: 3px;
`

const SocialItem = styled.ul`
  
`

const SocialLink = styled.a`

  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.10);
  color: ${Theme.colors.accent};

  &:hover {
    background-color: ${Theme.colors.accent};
    color: ${Theme.colors.primaryBg};
    transform: translateY(-4px);
  }
  
`

export const  S ={Footer,FooterText,SocialItem,SocialList,SocialLink,Name}