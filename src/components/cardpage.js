import React, {useState} from 'react'
import './cardpage.css'
import Questioncard from './questioncard'
import Answercard from './answercard'

export default function Cardcontainer() {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [points, setPoints] = useState(0)
    const [answercard, setAnswercard] = useState(false)
    const [wasRight, setWasRight] = useState()

    const question = <Questioncard 
                        src='images/img-vaccine.jpg' 
                        text='Totta vai tarua? Koronavirusrokotteessa on 5G-mikrosiruja.'
                        rightAnswer='false' 
                        setAnswercard={setAnswercard}
                        setWasRight={setWasRight}
                        
                    />
    const answer = <Answercard />
    
    const [visible, setVisible] = useState(answercard ? answer : question)

    

    
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
                    {visible}
                </div>
            </div>
        </div>
        </>
    )
    
}