import React, {useState} from 'react';
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {TabMenu, TabMenuPropsType} from "layout/section/works/tabMenu/TabMenu";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Work} from "layout/section/works/work/Work";
import imageWork from "../../../../src/assets/images/Rectangle 14.png"
import imageWork1 from "../../../../src/assets/images/Rectangle 14 (1).png"
import {Container} from "components/Container";
import {S} from "layout/section/works/WorksStyled"
import {AnimatePresence, motion} from "framer-motion"


export type StatusPropsType = "ALL" | "LANDING PAGE" | "REACT" | "SPA"


const WorksItem: TabMenuPropsType[] = [{title: "ALL", type: "ALL"},
    {title: "LANDING PAGE", type: "LANDING PAGE"},
    {title: "REACT", type: "REACT"},
    {title: "SPA", type: "SPA"},
]

const WorkData = [
    {image: imageWork, title: 'Social Network', type: "SPA"},
    {image: imageWork1, title: 'Timer', type: "REACT"},


]

export const Works = () => {

    const [type, setType] = useState<StatusPropsType>("ALL")

    const filteredTabMenu = (type: StatusPropsType) => {

        setType(type)
    }

    let FilteredData = WorkData

    if (type === "LANDING PAGE") {
        FilteredData = WorkData.filter((el) => el.type === type)
    }
    if (type === "SPA") {
        FilteredData = WorkData.filter((el) => el.type === type)
    }
    if (type === "REACT") {
        FilteredData = WorkData.filter((el) => el.type === type)
    }


    return (
        <S.Works id={"works"}>
            <Container>
                <StyledSectionTitle>My Works</StyledSectionTitle>
                <TabMenu item={WorksItem} filteredTabMenu={filteredTabMenu} currentFilterStatus={type} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                    {FilteredData.map((el, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={index}
                                layout={true}
                                style={{
                                    width: "330px",
                                    flexGrow: 1,
                                    maxWidth:"540px"
                                }}
                            >
                            <Work key={index} image={el.image} title={el.title} text={"Lorem ipsum dolor sit amet," +
                                " consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore " +
                                "magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                                  type={el.type} />
                                </motion.div>
                        )
                    })}
                        </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


