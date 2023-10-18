import './App.css';
import styled from 'styled-components';
import {Header} from "layout/header/Header";
import {Main} from "layout/section/main/Main";
import {Skills} from "layout/section/skills/Skills";
import {Works} from "layout/section/works/Works";
import {Testimony} from "layout/section/testimony/Testimony";
import {Contact} from "layout/section/contacts/Contacts";
import {Slogan} from "layout/section/slogan/slogan";
import {Footer} from "layout/section/footer/Footer";


function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

