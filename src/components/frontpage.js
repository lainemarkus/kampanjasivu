import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./frontpage.css"
import flowimg from './flow-img.png';
import festival from'./festival.png';
import Typist from 'react-typist';   //lataa Typist komennolla: npm install react-typist --save
import VideoJS from './VideoJS';
import Igmockup from './igmockup';

export default function Frontpage() {

    return (
        <>
        <img id="cover-img" src={festival} alt="kuva"></img>

    
        <header>     
            <div id="animation">
                <Typist cursor={{ show: false }}>
                    <Typist.Delay ms={2000} />
                    Kun olet festareilla
                    <Typist.Delay ms={1250} />
                    <Typist.Backspace count={16} delay={1000} />
                    vietät aikaa kavereiden kanssa
                    <Typist.Delay ms={1250} />
                    <Typist.Backspace count={30} delay={1000} />
                    kuljet bussilla
                    <Typist.Delay ms={1250} />
                    <Typist.Backspace count={15} delay={1000} />
                    otat rokotteen
                    <Typist.Delay ms={1250} />   
                </Typist>
            </div>  
            <h1>OLET OSA JOTAIN ITSEÄSI SUUREMPAA</h1>
        </header>

        <section id="video">
            <VideoJS />
        </section>

        <section>
            <div className="flex-container" id="left-box">
                <h2>VAIN YHDESSÄ VOIMME PYSÄYTTÄÄ PANDEMIAN</h2>
                <p>Mietityttääkö koronarokotteen ottaminen? Ei mikään ihme, sillä
                    asiasta on liikkeellä paljon informaatiota, josta osa on harhaanjohtavaa
                    tai jopa täysin virheellistä. </p>
                <p>
                    Koronarokote leviää tutkitusti eniten nuorten ja nuorten aikuisten keskuudessa. 
                    Samaan aikaan nuorten rokotusprosentti on selvästi alhaisin. Vaikka nuoret eivät
                    olekaan merkittävin riskiryhmä, on silti rokotteen ottaminen tärkeää. Voimme pysäyttää 
                    pandemian kasvattamalla rokotettujen osuuden riittävän korkeaksi myös nuorten keskuudessa, 
                    jolloin saamme riittävän laumaimmuniteetin ja voimme palata normaaliin elämään. 
                </p>
            </div>
            <div className="flex-container" id="right-box">
                <img id="flow-img" src={flowimg} alt="kuva" ></img>
            </div>
           
            <div className="flex-container">
                <h4>Testaa, osaatko erottaa virheelliset väittämät faktoista!</h4>
                <Link to='/test' className='button-link'>
                <button>
                    
                        TESTAA TIETOSI
                    
                    </button>
                    </Link>
            


                <h2>PALUU NORMAALIIN ON MAHDOLLISTA VAIN SAAVUTTAMALLA RIITTÄVÄ LAUMAIMMUNITEETTI</h2>
            </div>
        </section>
   
        <section className="flex-container"> 
            <h2>SEURAA INSTAGRAMISSA</h2>
            <Igmockup />
        </section>
           

        
        </>
    )
}