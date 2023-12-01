import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "components/Link";
import {StatusPropsType} from "layout/section/works/Works";


type MenuPropsType = {
    item: TabMenuPropsType[]
    filteredTabMenu: (type: StatusPropsType) => void
    currentFilterStatus: StatusPropsType
}

export type TabMenuPropsType = {
    title: string,
    type: StatusPropsType
}


export const TabMenu: React.FC<MenuPropsType> = ({item, filteredTabMenu, currentFilterStatus, ...props}) => {


    const onClickHandlerTabMenu = (type: StatusPropsType) => {
        filteredTabMenu(type)
    }


    return (
        <StyledMenu>
            <ul>
                {item.map((el, index) => {
                    return (

                        <li key={index}><Link active={currentFilterStatus === el.type} as={"button"}
                                              onClick={() => onClickHandlerTabMenu(el.type)}>{el.title}</Link></li>

                    )
                })}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`

  ul {

    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;


  }
`

