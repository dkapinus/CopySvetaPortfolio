import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Menu} from "components/menu/Menu";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Work} from "layout/section/works/work/Work";
import imageWork from "../../../../src/assets/images/Rectangle 14.png"
import imageWork1 from "../../../../src/assets/images/Rectangle 14 (1).png"

const WorksItem = ["ALL", "LANDING PAGE ", "REACT", "SPA"]


export const Works = () => {
    return (
        <StyledWorks>
            <StyledSectionTitle>My Works</StyledSectionTitle>
            <Menu item={WorksItem}/>
            <FlexWrapper justify={"space-between"} >
                <Work image={imageWork} title={'Social Network'} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                <Work image={imageWork1} title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks =styled.section`
    min-height: 100vh;
  background-color: darkmagenta;
`
