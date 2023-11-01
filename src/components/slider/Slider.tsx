import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Theme} from "styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>

                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Text>
                    <Name>
                        @ivan ivanow
                    </Name>
                </Slide>
            </FlexWrapper>
                <Paginator>
                    <span></span>
                    <span></span>
                    <span></span>
                </Paginator>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  max-width: 500px;
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
