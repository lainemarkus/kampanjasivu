import React, { useEffect } from "react";
import "./infopage.css"
import flowimg from './flow-img.png';
import festival from'./festival.png';
import "aos/dist/aos.css" 
import AOS from 'aos'; //npm install aos --save


export default function Infopage() {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    
    return(
        <>
        <div id="background" className="flex-container">
            <h1 id="otsikko" className="otsikko">TIETOA KORONAROKOTTEESTA</h1>
            <div id="sailio" className="grid-container">
                <div id="item1" className="grid-item small1 " data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" >
                    <h2 className="valiotsikko">TIETOA KORONAVIRUKSESTA</h2>
                    <p>COVID-19 on koronaviruksen aiheuttama tauti, joka aiheuttaa ihmisille hengitystieinfektion. Tavallisimmin hengitystieinfektio on lievä, mutta se voi olla myös kokonaan oireeton tai erittäin vakava. Vakavan koronavirustaudin riskiryhmään kuuluu tämänhetkisen tiedon mukaan yli 70-vuotiaat, sekä ne joilla on elimistön vastustuskykyä tai keuhkojen tai sydämen toimintaa heikentäviä perussairauksia kuten diabetes, jatkuvaa lääkitystä vaativa astma tai sydänsairaus.</p>
                </div>

                <div id="item1" className="grid-item small2" data-aos="fade-left" >
                    <h2 className="valiotsikko">KORONAROKOTTEEN TURVALLISUUS</h2>
                    <p>Kaikkien koronarokotteiden turvallisuuden varmistamiseksi on käytössä tiukat vaatimukset, jotka COVID-19 rokotteet täytyvät läpäistä saadakseen validoinnin lääkevirastolta. Niitä ovat muun muassa tiukat kiliiniset tutkimukset joilla osoitetaan että rokote täyttää kansainvälisesti sovitut turvallisuuden ja tehokkuuden kriteerit. Rokotteiden turvallisuutta ja tehoa seurataan tarkasti myös sen jälkeen kun rokote on otettu käyttöön. </p>
                    <p>Koronarokotteen kohdalla rokotteiden tutkimus, kehitys ja luvat on saatu tehtyä nopeasti vastaamaan kiirellistä tarvetta, kuitenkin noudattaen korkeita turvallisuusstrandardeja. Kehtystä on nopeuttanut muun muassa tieteellinen yhteistyö, riittävä rahoitus sekä vapaaehtoisten riittävä määrä.</p>
                </div>

                <div id="item3" className="grid-item small3" data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">
                    <h2 className="valiotsikko">KORONAROKOTTEEN HAITTAVAIKUTUKSET</h2>
                    <p>Kuten kaikki rokotteet, myös COVID-19 rokotteet voivat aiheuttaa sivuvaikutuksia. Suurin osa ilmoitetuista sivuvaikutuksista on lieviä oireita, kuten kuumetta, päänsärkyä sekä kipua ja punoitusta pistoskohdassa. Suurin osa sivuvaikutuksista on lyhytkestoisia ja häviää muutamassa päivässä itsestään. Vakavat sivuvaikutukset koronarokotteelle ovat erittäin harvinaisia, mutta mahdollisia. </p>
                </div>

                <div id="kuvantausta" className="grid-item large1" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                </div>

                <div id="sailio" className="container">
                    <p className="valiotsikko"><b>TIETOA KORONAVIRUKSESTA</b></p>
                    <p id="tietoaKoronasta" className="leipateksti" >COVID-19 on koronaviruksen aiheuttama tauti, joka aiheuttaa ihmisille hengitystieinfektion. Tavallisimmin hengitystieinfektio on lievä, mutta se voi olla myös kokonaan oireeton tai erittäin vakava. Vakavan koronavirustaudin riskiryhmään kuuluu tämänhetkisen tiedon mukaan yli 70-vuotiaat, sekä ne joilla on elimistön vastustuskykyä tai keuhkojen tai sydämen toimintaa heikentäviä perussairauksia kuten diabetes, jatkuvaa lääkitystä vaativa astma tai sydänsairaus. [1]</p>
                
            
                    <p className="valiotsikko"><b>KORONAROKOTTEEN TURVALLISUUS</b></p>
                    <p id="tietoaTurvallisuudesta1" className="leipateksti" >Kaikkien koronarokotteiden turvallisuuden varmistamiseksi on käytössä tiukat vaatimukset, jotka COVID-19 rokotteet täytyvät läpäistä saadakseen validoinnin lääkevirastolta. Niitä ovat muun muassa tiukat kiliiniset tutkimukset joilla osoitetaan että rokote täyttää kansainvälisesti sovitut turvallisuuden ja tehokkuuden kriteerit. Rokotteiden turvallisuutta ja tehoa seurataan tarkasti myös sen jälkeen kun rokote on otettu käyttöön. </p>
                    <p id="tietoaTurvallisuudesta2" className="leipateksti">Koronarokotteen kohdalla rokotteiden tutkimus, kehitys ja luvat on saatu tehtyä nopeasti vastaamaan kiirellistä tarvetta, kuitenkin noudattaen korkeita turvallisuusstrandardeja. Kehtystä on nopeuttanut muun muassa tieteellinen yhteistyö, riittävä rahoitus sekä vapaaehtoisten riittävä määrä. [2]</p>

                    <p className="valiotsikko"><b>KORONAROKOTTEEN HAITTAVAIKUTUKSET</b></p>
                    <p id="tietoaHaittavaikutuksista" className="leipateksti">Kuten kaikki rokotteet, myös COVID-19 rokotteet voivat aiheuttaa sivuvaikutuksia. Suurin osa ilmoitetuista sivuvaikutuksista on lieviä oireita, kuten kuumetta, päänsärkyä sekä kipua ja punoitusta pistoskohdassa. Suurin osa sivuvaikutuksista on lyhytkestoisia ja häviää muutamassa päivässä itsestään. Vakavat sivuvaikutukset koronarokotteelle ovat erittäin harvinaisia, mutta mahdollisia. [3] </p>

                    <div id="kuvantausta" className="tausta">
                        tähän tulee kuva
                    </div>

                    <div className="grid-item large2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                        <p><span className="white bold"><li>Voit lukea lisää koronarokotteen haittavaikutuksista <a target="_blank" href="https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tarttuminen-ja-suojautuminen-koronavirus/rokotteet-ja-koronavirus/koronarokotteiden-turvallisuus-ja-mahdolliset-haitat#Koronarokotteet_turvallisuus">täältä</a></li></span></p>
                        <p><span className="white bold"><li>Voit seurata Lääkealan turvallisuus- ja keittämiskeskuksen, Fimean, ylläpitämää listaa koroarokotteiden haittavaikutusilmoituksista Suomessa <a target="_blank" href="https://www.fimea.fi/tietoa_fimeasta/koronavirus-covid-19-/koronarokotteiden-haittavaikutusilmoitukset">täältä </a></li></span></p>
                    </div>

                    <div id="kuvantausta" className="grid-item large1" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                        tähän tulee kuva
                    </div>
                </div>
            
         <img id="cover-img" src={festival} alt="kuva"></img>
         <img id="flow-img" src={flowimg} alt="kuva" ></img>



            </div>
        </div>

        </>
    )


}