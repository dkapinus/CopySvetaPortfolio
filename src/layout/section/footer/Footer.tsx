import React from 'react';
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {S} from "layout/section/footer/Footer_Styles"


const FooterData = ["instagram","telegram","vk","linkedin"]

export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Dima</S.Name>

                <S.SocialList>
                        {FooterData.map((el,index)=> {
                            return (
                                <S.SocialItem>
                                <S.SocialLink>
                                <Icon  key={index} height={"21px"} width={"21px"} viewBox={"0 0 21 21"}
                                      IconId={el}/>
                                </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}

                </S.SocialList>
                <S.FooterText>© 2023 Kapinus Dima, All Rights Reserved.</S.FooterText>
            </FlexWrapper>
        </S.Footer>
    );
};

