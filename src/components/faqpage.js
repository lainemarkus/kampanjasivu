import React from 'react';
import "./faqpage.css"
import Accordion from './Accordion.js'
import festival from'./images/festival.png';
import flowimg from './images/flow-img.png';
import "./frontpage.css";
import styled from 'styled-components';
import SideNav from './sidenav.js';

const Otsikko = styled.div`
    position: relative;
    text-align: center;
    margin: 7rem 2rem 2rem 2rem;
`

const AlempiKuva = styled.div`
    position: absolute;
    right: 0;
    top: 21vh;
    width: 100%
`

export default function Faqpage() {
    return(
    <>
        <img id="cover-img" src={festival} alt="kuva"></img>
        <Otsikko ><h1>USEIN KYSYTYT KYSYMYKSET</h1></Otsikko>
        <AlempiKuva>
        <img id="flow-img" src={flowimg} alt="kuva" ></img>
        </AlempiKuva>
        <Accordion/>
    
        <SideNav/>
    </>
    )
}