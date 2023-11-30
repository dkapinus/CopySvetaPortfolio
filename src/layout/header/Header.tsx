import React from 'react';
import {Logo} from "components/logo/Logo";
import {Container} from "components/Container";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {DesktopMenu} from "layout/header/headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "layout/header/headerMenu/mobileMenu/MobileMenu";
import {S} from "layout/header/Header_Styles"




export const Header:React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);
    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    { width <= breakpoint ? <MobileMenu />  : <DesktopMenu />}
                </FlexWrapper>
            </Container>
        </S.StyledHeader>
    );
};


