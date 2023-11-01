import React from 'react';
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Button} from "components/button/Button";
import {S} from "layout/section/contacts/Contacts_Styles"


export const Contact:React.FC = () => {
    return (
        <S.Contacts>

                <StyledSectionTitle>Contact</StyledSectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>

        </S.Contacts>
    );
};

