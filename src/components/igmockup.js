import React from 'react'
import './igmockup.css'
import igpost1 from './igpics/igpost1.jpg'
import igpost2 from './igpics/igpost2.jpg'
import igpost3 from './igpics/igpost3.jpg'
import igpost4 from './igpics/igpost4.jpg'
import iglogo from './igpics/iglogo.png'

export default function Igmockup() {
    return (
        <>
        <div className='ig-container'>
            <div className='ig-wrapper'>
                <div className='ig-profile'>
                    <img className='ig-logo' src={iglogo} alt=""/>
                    #osanasuurempaa
                </div>
                <div className='ig-grid'>
                    <div className='photo-wrapper'><img className='ig-photo' src={igpost1} alt="" /></div>
                    <div className='photo-wrapper'><img className='ig-photo' src={igpost2} alt="" /></div>
                    <div className='photo-wrapper'><img className='ig-photo' src={igpost3} alt="" /></div>
                    <div className='photo-wrapper'><img className='ig-photo' src={igpost2} alt="" /></div>
                    <div className='photo-wrapper'><img className='ig-photo' src={igpost4} alt="" /></div>
                    <div className='photo-wrapper'><img className='ig-photo' src={igpost2} alt="" /></div>
                </div>
            </div> 
        </div>    
        </>
    )
}
