import styled from "styled-components";
import {Theme} from "styles/Theme";

const Contacts = styled.section`
  position: relative;
`

const Form = styled.form`

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
export const S = {Contacts,Form,Field}