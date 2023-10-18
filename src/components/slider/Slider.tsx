import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";

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

const Text = styled.p``

const Name = styled.span``

const Paginator = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    border-radius: 1px;
    background-color: yellow;
  }
`
