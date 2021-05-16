import React, {useState} from 'react'
import './cardpage.css'
import festival from'./festival.png';



export default function Cardcontainer() {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [wasCorrect, setWasCorrect] = useState(false)
    const [points, setPoints] = useState(0)
    const [quizEnded, setQuizEnded] = useState(false)

    const handleNextQuestionClick = () => {
        const nextOne = questionIndex + 1
        if (nextOne < questionData.length) {
            setQuestionIndex(nextOne)
        }
        }
    const handleAnswerClick = (isCorrect) => {
        if (isCorrect === true) {
            setPoints(points + 1)
            setWasCorrect(true)
        } else {
            setWasCorrect(false)
        }
        setShowAnswer(!showAnswer)
    }

    const resetGame = () => {
        setQuestionIndex(0)
        setShowAnswer(false)
        setPoints(0)
        setQuizEnded(false)
    }
    
    
    const questionData = [
        {
            id: '1',
            question: 'Totta vai tarua? Koronavirusrokotteessa on 5G-mikrosiruja.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronavirusrokotteessa ei ole 5G-mikrosiruja.'
        },
        {
            id: '2',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
        {
            id: '3',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
        {
            id: '4',
            question: 'Oikea vastaus on tarua.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on tarua?'
        },
        {
            id: '5',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
        {
            id: '6',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
        {
            id: '7',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
        {
            id: '8',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
        {
            id: '9',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
        {
            id: '10',
            question: 'Oikea vastaus on totta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Miksi on totta?'
        },
    ]
    
    return (
        <>
        <img id="cover-img"src={festival}></img>
        <div className='cardpage-title'>
            <h1>TESTAA TIETOSI KORONAROKOTTEESTA</h1>
        </div>
        
        <div className='card-section'>
            <div className='card-wrapper'>
                <div className='card-title'>
                    <h3>{questionData[questionIndex].id}/{questionData.length}</h3>
                    <h3>Pisteet: {points}</h3>
                </div>

                <div className='card-changing'>

                    {quizEnded ? (
                        <>
                        <div className='ending-text'>
                            Sait {points} pistettä.
                        </div>
                        <div className='ending-buttons'>
                            <button onClick={resetGame}>Uudestaan</button>
                        </div>
                        </>
                    )
                : (
                    showAnswer ? 
                    <>
                    <div className='answer-text'>
                        <p>Vastauksesi on {wasCorrect ? 'OIKEIN' : 'VÄÄRIN'}</p>
                        {questionData[questionIndex].answerExplanation}
                        </div>
                    <div className='answer-buttons'>
                        {(questionIndex < (questionData.length - 1)) ?
                            <>
                            <button onClick={function(){handleAnswerClick();handleNextQuestionClick()}}>Seuraava</button>
                            </>
                            :
                            <>
                            <button onClick={setQuizEnded}>Lopetus</button>
                            </>
                        }
                        
                    </div>
                    </>

                    : 

                    <>
                    <div className='question-text'>
                        <img className='question-image' src={questionData[questionIndex].src}/>
                        {questionData[questionIndex].question}
                    </div>
                    <div className='question-buttons'>
                        {questionData[questionIndex].answerOptions.map(c =>
                            <button onClick={() => {handleAnswerClick(c.isCorrect)}}>{c.answer}</button>
                        )}
                    </div> 
                    </>
                )
                }
                
                    
                    

                </div>
                
            </div>
            
        </div>
        </>
    )
    
}