import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Button} from "components/slider/Button/Button";

export const Contact = () => {
    return (
        <StyledContacts>
            <StyledSectionTitle>Contact</StyledSectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"name"}/>
                <Field placeholder={"name"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: cadetblue;
  min-height: 50vh;
`

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 20px;

`

const Field = styled.input`

`

