import React from 'react';
import "./kysymyskomponentti.css"
import Accordion from './Accordion.js'
import festival from'./festival.png';
import flowimg from './flow-img.png';
import "./frontpage.css"
import styled from 'styled-components'

const Otsikko = styled.div`

font-size: 1.2rem;
position: relative;
text-align: center;
width: 100%
justify-content: center;
margin: 15% 2rem 2rem 2rem;
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
     <Otsikko ><h1>USEIN KYSYTYT KYSYMYKSET</h1></Otsikko>
    <AlempiKuva>
     <img id="flow-img" src={flowimg} alt="kuva" ></img>
    </AlempiKuva>
    < Accordion />
    </>)
}