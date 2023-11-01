import React from 'react';
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {S} from "components/slider/Slider_Styles"


export const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>

                <S.Slide>
                    <S.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </S.Text>
                    <S.Name>
                        @ivan ivanow
                    </S.Name>
                </S.Slide>
            </FlexWrapper>
                <S.Paginator>
                    <span></span>
                    <span></span>
                    <span></span>
                </S.Paginator>

        </S.Slider>
    );
};
