import React from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {MenuPropsType} from "layout/header/headerMenu/desktopMenu/DesktopMenu";
import {S} from  "layout/header/headerMenu/HeaderMenu_Styles"




export const MobileMenu: React.FC<MenuPropsType> = ({item, ...props}) => {

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}><span></span></S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
               <Menu item={item}/>
            </S.MobileMenuPopup>


        </S.MobileMenu>
    );
};







