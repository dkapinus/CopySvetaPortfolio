import React from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from  "layout/header/headerMenu/HeaderMenu_Styles"


export type MenuPropsType = {
    item: string[]
}


export const DesktopMenu: React.FC<MenuPropsType> = ({item, ...props}) => {

    return (
        <S.DesktopMenu>
            <Menu item={item}/>
        </S.DesktopMenu>
    );
};





