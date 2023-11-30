import React from 'react';
import {S} from "layout/header/headerMenu/HeaderMenu_Styles"

const item = [{title: "Home", href: "home"},
    {title: "Skills", href: "skills"},
    {title: "Works", href: "works"},
    {title: "Testimony", href: "testimony"},
    {title: "Contact", href: "contact"}]


export const Menu: React.FC = ({...props}) => {
    return (
        <ul>
            {item.map((item, index) => {
                return (

                    <S.MenuItem key={index}>
                        <S.MenuLink
                            to={item.href}
                            smooth={true}
                            activeClass="active"
                            spy={true}

                        >
                            {item.title}
                            <S.Mask>
                                <span>
                                  {item.title}
                                </span>
                            </S.Mask>
                            <S.Mask>
                                <span>
                                    {item.title}
                                </span>
                            </S.Mask>
                        </S.MenuLink>
                    </S.MenuItem>

                )
            })}
        </ul>
    );
};





