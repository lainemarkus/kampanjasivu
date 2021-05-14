import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import "./frontpage.css"
import flowimg from './flow-img.png';
import festival from'./festival.png';

export default function Frontpage() {

    return (
        <>
        <img id="cover-img"src={festival}></img>
        <header>     
            <div id="header-animation">insert animation</div>  
            <h1>OLET OSA JOTAIN ITSEÄSI SUUREMPAA</h1>
        </header>

        <section id="video"></section>

        <section>
            <div class="flex-container" id="left-box">
                <h2>VAIN YHDESSÄ VOIMME PYSÄYTTÄÄ PANDEMIAN</h2>
                <p>höpö höpö höpö höpö höpö höpö höpö höpö höpö höpö 
                    höpö höpö höpö höpö höpö höpö höpö höpö höpö höpö 
                    höpö höpö höpö höpö höpö höpö höpö höpö höpö höpö
                    höpö höpö höpö höpö höpö höpö höpö höpö höpö höpö 
                    höpö höpö höpö höpö höpö</p>
            </div>

            <div class="flex-container" id="right-box">
                <img id="flow-img" src={flowimg} width="100%" alt="kuva"/>
            </div>

            <div>
                <h4>Testaa, osaatko erottaa virheelliset väittämät faktoista!</h4>
                <button>TESTAA TIETOSI</button>
            </div>


            <h2>PALUU NORMAALIIN ON MAHDOLLISTA VAIN SAAVUTTAMALLA RIITTÄVÄ LAUMAIMMUNITEETTI</h2>

            <h2>SEURAA INSTAGRAMISSA</h2>

        </section>
        </>
    )
}