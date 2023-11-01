import styled from "styled-components";
import {Theme} from "styles/Theme";

const Skills = styled.section`
  background-color: rebeccapurple;
  
`


const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;
  
  @media ${Theme.media.mobile} {
    padding: 62px 0px 40px;
  }
`


const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`


  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%,-50%);
    transform-origin: top left;
    background: rgba(255, 255, 255, 0.10);

    position: absolute;
    left: 50%;
    top: 50%;
  }
`

export const S ={Skills,Skill,SkillTitle,SkillText,IconWrapper}