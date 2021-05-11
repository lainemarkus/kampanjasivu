import React, {useState} from 'react'
import './cardpage.css'
import Questioncard from './questioncard'

export default function Cardcontainer() {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [points, setPoints] = useState(0)
    return (
        <>
        <h1>TESTAA TIETOSI KORONAROKOTTEESTA</h1>
        <div className='card-whole'>
            <div className='card-wrapper'>
                <div className='card-title'>
                    <h3>{questionNumber}/10</h3>
                    <h3>Pisteet: {points}</h3>
                </div>
                <div className='card-changing'>
                    <Questioncard 
                        src='images/img-vaccine.jpg' 
                        text='Totta vai tarua? Koronavirusrokotteessa on 5G-mikrosiruja.' 
                    />
                </div>
            </div>
        </div>
        </>
    )
    
}