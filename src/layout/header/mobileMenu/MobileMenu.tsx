import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "styles/Theme";


type HeaderMenuPropsType = {
    item: string[]
}


export const MobileMenu: React.FC<HeaderMenuPropsType> = ({item, ...props}) => {

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}><span></span></BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {item.map((item, index) => {
                        return (

                            <ListItem key={index}><Link href="">
                                {item}
                                <Mask>
                                <span>
                                  {item}
                                </span>
                                </Mask>
                                <Mask>
                                <span>
                                    {item}
                                </span>
                                </Mask>
                            </Link></ListItem>

                        )
                    })}
                </ul>
            </MobileMenuPopup>


        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
  display: none;

  @media ${Theme.media.tablet} {
    display: block;
   
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.font};

    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);

    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.font};

      position: absolute;

      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);

      `}
    }

    &::after {
      content: "";
      display: block;
      width: 26px;
      height: 2px;
      background-color: ${Theme.colors.font};

      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;

      `}
    }
  }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(31, 31, 32, 0.90);
  z-index: 9999999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

  `}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${Theme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;


  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${Theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }

  }

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${Theme.colors.accent};

    position: absolute;
    top: 50%;
    right: -10px;
    left: 10px;
    z-index: 1;
    transform: scale(0);


  }
`

const Link = styled.a`
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`

