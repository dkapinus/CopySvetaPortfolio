import React from 'react';
import styled from "styled-components";


type MenuPropsType = {
    item:string[]
}



export const Menu:React.FC<MenuPropsType> = ({item,...props}) => {

    return (
        <StyledMenu>
            <ul>
                {item.map((el,index)=>{
                    return (

                        <li key={index}><a href="">{el}</a></li>

                    )
                })}
            </ul>



        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
      display: flex;
      gap:30px;
      justify-content: center;
      
    }
`