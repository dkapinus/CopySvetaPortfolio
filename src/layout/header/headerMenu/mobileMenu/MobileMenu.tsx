import React, {useState} from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from "layout/header/headerMenu/HeaderMenu_Styles"


export const MobileMenu: React.FC = ({ ...props}) => {

    const [menuIsOpen, setIsOpen] = useState(false)

    const onBurgerBtnClick = () => {
         setIsOpen(!menuIsOpen)
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}><span></span></S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen}>
                <Menu />
            </S.MobileMenuPopup>


        </S.MobileMenu>
    );
};







