import React from 'react';
import "./kysymyskomponentti.css"
import Accordion from './Accordion.js'
import festival from'./festival.png';
import flowimg from './flow-img.png';
import "./frontpage.css"
import styled from 'styled-components'

const Otsikko = styled.div`

font-size: 2vw;
position: relative;
text-align: center;
width: 100%
justify-content: center;
margin-top: 15%;
font-family: Raleway;
`

const AlempiKuva = styled.div`
position: absolute;
right: 0;
top: 100vh;

`

export default function kysymyskomponentti(props) {
    return(<>
     <img id="cover-img" src={festival} alt="kuva"></img>
     <Otsikko ><h1>Usein kysytyt kysymykset</h1></Otsikko>
    <AlempiKuva>
     <img id="flow-img" src={flowimg} alt="kuva" ></img>
    </AlempiKuva>
    < Accordion />
    </>)
}