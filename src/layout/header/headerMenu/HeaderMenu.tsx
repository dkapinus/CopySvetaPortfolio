import React from 'react';
import styled from "styled-components";
import {Theme} from "styles/Theme";


type HeaderMenuPropsType = {
    item: string[]
}


export const HeaderMenu: React.FC<HeaderMenuPropsType> = ({item, ...props}) => {

    return (
        <HeaderStyledMenu>
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


        </HeaderStyledMenu>
    );
};


const HeaderStyledMenu = styled.nav`
  
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;

  }
  
  @media ${Theme.media.tablet} {
    display: none;
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
    top:50%;
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

      &+ ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
   
  }
&::before {
  content: "";
  display: inline-block;
  height: 3px;
  background-color:  ${Theme.colors.accent};

  position: absolute;
  top:50%;
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

