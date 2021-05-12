import React, { useState } from 'react'
import './questioncard.css'

export default function Questioncard(props) {
    
    return (
        <>
        <img className='card-photo' src={props.src} />
        {props.text}
        <div className='button-wrapper'>
            <button 
                className='true-button' 
                onClick={function(event) {
                    props.setAnswercard(true);
                    props.setWasRight(props.rightAnswer ? true : false)
                }}>
                TOTTA
            </button>
            <button 
                className='false-button' 
                onClick={function(event) {
                    props.setAnswercard(true);
                    props.setWasRight(props.rightAnswer ? false : true)
                }}>
                TARUA
            </button>
        </div>
        </>
    )
}
