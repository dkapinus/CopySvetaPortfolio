import React, {ElementRef, useRef} from 'react';
import {StyledSectionTitle} from "components/StyledTitileLevelTwo";
import {Button} from "components/button/Button";
import {S} from "layout/section/contacts/Contacts_Styles"
import emailjs from '@emailjs/browser';


export const Contact:React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs.sendForm('service_zqsdsrs', 'template_7mllyzq', form.current, '5_yJl-77G-fRKlCj_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <S.Contacts id={"contact"}>

                <StyledSectionTitle>Contact</StyledSectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}/>
                    <S.Field required placeholder={"email"} name={"email"}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/>
                    <S.Field required placeholder={"message"} name={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>

        </S.Contacts>
    );
};

