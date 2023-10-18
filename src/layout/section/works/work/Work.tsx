import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    image: string
    title: string
    text: string
}


export const Work: React.FC<WorkPropsType> = ({image, title, text, ...props}) => {
    return (
        <StyledWork>
            <Image src={image} alt=''/>
            <StyledTitleWork>{title}</StyledTitleWork>
            <StyledTextWork>{text}</StyledTextWork>
            <StyledLink href={""}>Demo</StyledLink>
            <StyledLink href={""}>Code</StyledLink>

        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: orange;
  width: 40%;

`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`

const StyledTitleWork = styled.div`
  color: #FFF;
  font-family: Josefin Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
`

const StyledTextWork = styled.div`
  width: 500px;
  height: 63px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const StyledLink = styled.a`

  width: 44px;
  height: 12px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`