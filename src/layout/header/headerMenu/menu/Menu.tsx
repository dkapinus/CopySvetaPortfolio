import React from 'react';
import {MenuPropsType} from "layout/header/headerMenu/desktopMenu/DesktopMenu";
import {S} from  "layout/header/headerMenu/HeaderMenu_Styles"


export  const Menu:React.FC<MenuPropsType> = ({item, ...props}) => {
    return (
        <ul>
            {item.map((item, index) => {
                return (

                    <S.MenuItem key={index}><S.MenuLink href="layout/header/headerMenu/menu/Menu">
                        {item}
                        <S.Mask>
                                <span>
                                  {item}
                                </span>
                        </S.Mask>
                        <S.Mask>
                                <span>
                                    {item}
                                </span>
                        </S.Mask>
                    </S.MenuLink></S.MenuItem>

                )
            })}
        </ul>
    );
};





