import React from 'react';
import styled from "styled-components";
import {Link} from "components/Link";


type MenuPropsType = {
    item:string[]
}



export const TabMenu:React.FC<MenuPropsType> = ({item,...props}) => {

    return (
        <StyledMenu>
            <ul>
                {item.map((el,index)=>{
                    return (

                        <li key={index}><Link href="layout/section/works/tabMenu/TabMenu.tsx">{el}</Link></li>

                    )
                })}
            </ul>



        </StyledMenu>
    );
};


const StyledMenu = styled.nav`

margin-bottom: 40px;
  
  
    ul {
      display: flex;
      gap:20px;
      justify-content: center;
      
    }
`

