import {S} from "components/slider/Slider_Styles"
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  "../../../src/styles/slider.css"

type SliderPropsType = {
    text:string
    userName:string
}


const Slide:React.FC<SliderPropsType> = ({text,userName,...props}) => {
    return (
        <S.Slide>
            <S.Text>
                {text}
            </S.Text>
            <S.Name>
                {userName}
            </S.Name>
        </S.Slide>
    )
}

const items = [

    <Slide  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
        "        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    userName={" @ivan ivanow"}/>,
    <Slide  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
        "        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            userName={" @ivan ivanow"}/>,
    <Slide  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
        "        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            userName={" @ivan ivanow"}/>,

];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}

        />
    </S.Slider>

);