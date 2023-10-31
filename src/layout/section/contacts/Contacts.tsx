import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Button} from "components/button/Button";
import {Container} from "components/Container";
import {Theme} from "styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>

                <StyledSectionTitle>Contact</StyledSectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const StyledForm = styled.form`

  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }

`


const Field = styled.input`
  width: 100%;
  border: 1px solid #4A4A4A;
  background-color: ${Theme.colors.secondaryBg};
  padding: 7px 15px;
  color: ${Theme.colors.font};
  
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;

  &::placeholder {
    color: #495057;
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${Theme.colors.borderColor};
  }

`
