import React from 'react';
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {TabMenu} from "layout/section/works/tabMenu/TabMenu";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Work} from "layout/section/works/work/Work";
import imageWork from "../../../../src/assets/images/Rectangle 14.png"
import imageWork1 from "../../../../src/assets/images/Rectangle 14 (1).png"
import {Container} from "components/Container";
import {S} from "layout/section/works/WorksStyled"

const WorksItem = ["ALL", "LANDING PAGE ", "REACT", "SPA"]

const WorkData =[
    {image:imageWork,title:'Social Network'},
    {image:imageWork1,title:'Timer'},


]

export const Works = () => {


    return (
        <S.Works>
           <Container>
               <StyledSectionTitle>My Works</StyledSectionTitle>
               <TabMenu item={WorksItem}/>
               <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} >
                   {WorkData.map((el,index)=> {
                       return ( <Work  key={index} image={el.image} title={el.title} text={"Lorem ipsum dolor sit amet," +
                           " consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore " +
                           "magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>)
                   })}

               </FlexWrapper>
           </Container>
        </S.Works>
    );
};


