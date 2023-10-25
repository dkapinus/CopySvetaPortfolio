import React from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Theme} from "styles/Theme";
import {Container} from "components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Name>Dima</Name>
                <FlexWrapper align={"center"} justify={"center"}>

                    <SocialList> <SocialLink><Icon height={"21px"}  width={"21px"} viewBox={"0 0 21px 21px"} IconId={"instagram"}/></SocialLink> </SocialList>
                    <SocialList> <SocialLink><Icon  height={"21px"}  width={"21px"} viewBox={"0 0 21px 21px"} IconId={"telegram"}/></SocialLink></SocialList>
                    <SocialList><SocialLink><Icon height={"21px"}  width={"21px"} viewBox={"0 0 21px 21px"} IconId={"vk"}/></SocialLink></SocialList>
                    <SocialList><SocialLink><Icon  height={"21px"}  width={"21px"} viewBox={"0 0 21px 21px"} IconId={"linkedin"}/></SocialLink> </SocialList>


                </FlexWrapper>
                <FooterText>© 2023 Kapinus Dima, All Rights Reserved.</FooterText>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
  background-color: ${Theme.colors.primaryBg};
  
  
  }

`

const FooterText = styled.div`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;

`

const Name = styled.div`

justify-content: center;
  align-items: center;
  display: flex;
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
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
    background-color:${Theme.colors.accent} ;
    color: ${Theme.colors.primaryBg};
    transform: translateY(-4px);
  }

  
   
  
`