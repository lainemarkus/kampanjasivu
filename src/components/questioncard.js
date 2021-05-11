import React, { useState } from 'react'
import './questioncard.css'

export default function Questioncard(props) {
    return (
        <>
        <img className='card-photo' src={props.src} />
        {props.text}
        </>
    )
}
