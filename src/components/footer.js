import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css'

export default function Footer() {
    return (
        <>
        <div className='footer-container'>
            <div className='about-text'>
                <h2>KAMPANJASTA</h2>
                <p>Osana suurempaa on Tahon X toteuttama kampanja, jonka tavoitteena on kasvattaa nuorten ja nuorten aikuisten tietoisuutta koronarokotteen ottamisen tärkeydestä yhteiskunnallisella tasolla.  Kampanjasivu ohjaa luotettavien tietolähteiden pariin ja korjaa vääriä käsityksiä, joita koronavirusrokotteeseen saattaa liittyä.</p>
                <h3 className="footer-title">OLE OSANA SUUREMPAA - OTA ROKOTE</h3>
            </div>
            <div className='footer-wrapper'>
                <h3 className='footer-title'>#OSANASUUREMPAA</h3>
                <ul>
                    <li className='nav-item'><Link to='/' className='nav-links'>Koti</Link></li>
                    <li><Link to='/test' className='nav-links'>Testaa tietosi</Link></li>
                    <li><Link to='/faq' className='nav-links'>Usein kysyttyä</Link></li>
                    <li><Link to='/info' className='nav-links'>Tietoa koronavirusrokotteesta</Link></li>
                </ul>
                <p className='copyright'>©Osana suurempaa 2021</p>
            </div>
        </div>
        </>
    )
}
