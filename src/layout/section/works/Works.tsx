import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {TabMenu} from "layout/section/works/tabMenu/TabMenu";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Work} from "layout/section/works/work/Work";
import imageWork from "../../../../src/assets/images/Rectangle 14.png"
import imageWork1 from "../../../../src/assets/images/Rectangle 14 (1).png"
import {Container} from "components/Container";

const WorksItem = ["ALL", "LANDING PAGE ", "REACT", "SPA"]


export const Works = () => {
    return (
        <StyledWorks>
           <Container>
               <StyledSectionTitle>My Works</StyledSectionTitle>
               <TabMenu item={WorksItem}/>
               <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} >
                   <Work image={imageWork} title={'Social Network'} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                   <Work image={imageWork1} title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
               </FlexWrapper>
           </Container>
        </StyledWorks>
    );
};

const StyledWorks =styled.section`
    ${FlexWrapper} {
      gap:30px
    }
`
