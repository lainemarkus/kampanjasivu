import React, {useState} from 'react'
import './cardpage.css'
import festival from'./festival.png';
import SideNav from  './sidenav.js';
import flowimg from './flow-img.png';



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
            question: 'Kun koronarokote kehitettiin, se tehtiin hätiköiden, ja turvallisuusmääräyksiä laiminlyötiin.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'COVID-19 -rokotteet kehitetään noudattaen samoja laillisia määräyksiä, kuin muutkin lääkkeet, jotta voidaan taata rokotteen turvallisuus, laatu ja tehokkuus. [1]'
        },
        {
            id: '2',
            question: 'Koronarokote ei anna täydellistä suojaa koronavirukselta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: true },
                { answer: 'TARUA', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronarokotteella on todettu olevan noin 95 prosentin teho. Käytännössä millään rokotteella ei ole sadan prosentin tehoa, mutta vähempikin tehokkuus riittää siihen, että viruksen leviäminen saadaan estettyä populaatiossa. [2]'
        },
        {
            id: '3',
            question: 'Laumaimmuniteetin saavuttamiseen riittää se, että vanhukset ja noin 50 prosenttia koko Suomesta ovat rokotettu.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Laumaimmuniteetti vaatii tutkimusten mukaan sen, että noin 80% populaatiosta on rokotettu. Tarvittava prosenttiosuus vaihtelee taudin mukaan. Esimerkiksi tuhkarokko vaatii sen, että 95% väestöstä on rokotettu. [3]'
        },
        {
            id: '4',
            question: 'Nyt kun noin 50 prosenttia suomalaisista on jo rokotettu, minun ei tarvitse ottaa rokotetta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Vaikka puolet väestöstä onkin jo rokotettu, on tärkeää, että rokotuksia jatketaan, kunnes laumaimmuniteetin raja (80%) saavutetaan. [4]'
        },
        {
            id: '5',
            question: 'Nuorten ihmisten on turha ottaa rokotetta, koska he eivät välttämättä saa ollenkaan oireita koronatartunnasta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronavirus leviää paljon nuorten keskuudessa ja nuoret voivat tartuttaa esimerkiksi isovanhempansa.'
        },
        {
            id: '6',
            question: 'Koronavirus ei leviä veden kautta, esimerkiksi uidessa.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: true },
                { answer: 'TARUA', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronavirus ei leviä veden kautta. Virus silti leviää tartunnan saaneen ihmisen läheisyydessä. [5]'
        },
        {
            id: '7',
            question: 'Lisäämällä pippurin määrää ruoassa keskimäärin, kasvatat immuniteettiasi koronavirusta vastaan.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Pippurin syömisellä ei ole todettu vaikutuksia tässä asiassa. [5]'
        },
        {
            id: '8',
            question: 'Jos olet jo saanut tartunnan ja parantunut, sinun ei kannata ottaa rokotetta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Rokotteen ottaminen on tarpeellista, vaikka olisit sairastanut koronaviruksen, koska luonnollinen immuniteetti ei ole välttämättä riittävä. [6]'
        },
        {
            id: '9',
            question: 'Koronavirus voi levitä itikanpuremien kautta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Itikanpuremilla ei ole todettu olevan levittävää vaikutusta koronavirusta koskien. [5]'
        },
        {
            id: '10',
            question: 'Koronavirus kehitettiin laboratioriossa.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronaviruksen alkulähde on kiinalainen eläinruokatori.'
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
                    <h3><span className="large-font">{questionData[questionIndex].id}</span>/{questionData.length}</h3>
                    <h3>PISTEET: <span className="large-font">{points}</span></h3>
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
                        <h4>Vastauksesi on {wasCorrect ? 'OIKEIN' : 'VÄÄRIN'}</h4>
                        {questionData[questionIndex].answerExplanation}
                        </div>
                    <div className='answer-buttons'>
                        {(questionIndex < (questionData.length - 1)) ?
                            <>
                            <div className="next-button"><button onClick={function(){handleAnswerClick();handleNextQuestionClick()}}>SEURAAVA KYSYMYS</button></div>
                            </>
                            :
                            <>
                            <div className="next-button"><button onClick={setQuizEnded}>Lopetus</button></div>
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
        <div id="flow-container">
            <img id="flow-img" src={flowimg} alt="kuva"/>
        </div>
        <div>
            <SideNav/>
        </div>
        </>
    )
    
}