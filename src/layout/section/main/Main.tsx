import React from 'react';
import PhotoMain from "../../../assets/images/photo_2023-10-16-15.23.22-_1_ (1).png"
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Container} from "components/Container";
import {S} from "layout/section/main/MainStyles"
import Typewriter from 'typewriter-effect';



export const Main:React.FC = () => {
    
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Dzmitry Kapinus</span></S.Name>
                        {/*<S.MainTitle>A Web Developer. </S.MainTitle>*/}
                        <S.MainTitle>
                            <p>A Web Developer. </p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.', 'A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>

                    </div>
                    <S.PhotoWrapper>
                        <S.PhotoMe src={PhotoMain} alt=""/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


