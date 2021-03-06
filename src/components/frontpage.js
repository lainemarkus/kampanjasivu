import React, { useEffect }  from 'react';
import {Link} from 'react-router-dom'; //npm install --save react-router-dom
import "./frontpage.css"
import flowimg from './images/flow-img.png';
import festival from'./images/festival.png';
import Typist from 'react-typist';   //lataa Typist komennolla: npm install react-typist --save
import VideoJS from './VideoJS';
import SideNav from './sidenav.js';
import Igmockup from './igmockup';
import Footer from './footer';
import AOS from 'aos';



export default function Frontpage() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

    return (
        <>
        <img id="cover-img" src={festival} alt="kuva"></img>

    
        <header>     
            <div id="animation" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="500">
                <Typist cursor={{ show: false }}>
                    <Typist.Delay ms={1000} />
                    Kun olet festareilla
                    <Typist.Delay ms={1250} />
                    <Typist.Backspace count={16} delay={1000} />
                    vietät iltaa kavereiden kanssa
                    <Typist.Delay ms={1250} />
                    <Typist.Backspace count={30} delay={1000} />
                    matkustat bussilla
                    <Typist.Delay ms={1250} />
                    <Typist.Backspace count={18} delay={1000} />
                    otat rokotteen
                    <Typist.Delay ms={1250} />   
                </Typist>
            </div>  
            <h1 data-aos="zoom" data-aos-delay="1500" data-aos-duration="1000">OLET OSA JOTAIN ITSEÄSI SUUREMPAA</h1>
        </header>

        <section id="video" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" >
                <VideoJS />
        </section>

        <section>
            <div className="flex-container" id="left-box" >
                <h2>VAIN YHDESSÄ VOIMME PYSÄYTTÄÄ PANDEMIAN</h2>
                <p>Mietityttääkö koronarokotteen ottaminen? Ei mikään ihme, sillä
                    asiasta on liikkeellä paljon informaatiota, josta osa on harhaanjohtavaa
                    tai jopa täysin virheellistä. </p>
                <p>
                    Koronarokote leviää tutkitusti eniten nuorten ja nuorten aikuisten keskuudessa. 
                    Samaan aikaan nuorten rokotusprosentti on selvästi alhaisin. Vaikka nuoret eivät
                    olekaan merkittävin riskiryhmä, on rokotteen ottaminen silti tärkeää, koska pandemian pysäyttäminen vaatii rokotettujen osuuden kasvattamista riittävän korkeaksi myös nuorten keskuudessa. 
                    Näin saamme riittävän laumaimmuniteetin ja voimme palata normaaliin elämään. 
                </p>


                <h4>Testaa, osaatko erottaa virheelliset väittämät faktoista!</h4>
                <Link to='/test' className='button-link'>
                    <button>
                    
                        TESTAA TIETOSI
                    
                    </button>
                </Link>

            </div>
            <div className="flex-container" id="right-box">
                <img id="flow-img-frontpage" src={flowimg} alt="kuva" ></img>


                
            </div>
           
            <div className="flex-container" id="text">
           
            
    

                <h2>PALUU NORMAALIIN ON MAHDOLLISTA VAIN SAAVUTTAMALLA RIITTÄVÄ LAUMAIMMUNITEETTI</h2>
           
            </div>
            <div className="flex-container sidenav-box"> <SideNav /></div>
           
        </section>
   
        <section className="flex-container"> 
            <Igmockup />
        </section>
        <section className='flex-container'>
            <Footer />
        </section>
           

        
        </>
    )
}