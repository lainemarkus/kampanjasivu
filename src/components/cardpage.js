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
            question: 'Kun koronarokote kehitettiin, se tehtiin hätiköiden, ja turvallisuusmääräyksiä laiminlyötiin.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'COVID-19 -rokotteet kehitetään noudattaen samoja laillisia määräyksiä, kuin muutkin lääkkeet, jotta voidaan taata rokotteen turvallisuus, laatu ja tehokkuus. [1]'
        },
        {
            id: '2',
            question: 'Koronarokote ei anna 100% suojaa.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronarokotteella on todettu olevan noin 95% teho. Käytännössä millään rokotteella ei ole 100% tehoa, mutta vähempi tehokkuus riittää siihen, että viruksen leviäminen saadaan estettyä populaatiossa. [2]'
        },
        {
            id: '3',
            question: 'Laumaimmuniteetin saavuttamiseen riittää se, että vanhukset ja noin 50% koko Suomesta ovat rokotettu.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Laumaimmuniteetti vaatii tutkimusten mukaan sen, että noin 80% populaatiosta on rokotettu. Tarvittava prosenttiosuus vaihtelee taudin mukaan. Esimerkiksi tuhkarokko vaatii sen, että 95% väestöstä on rokotettu. [3]'
        },
        {
            id: '4',
            question: 'Nyt kun noin 50% suomalaisista on jo rokotettu, minun ei kannata ottaa rokotetta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Vaikka 50% väestöstä onkin rokotettu, on tärkeää, että rokotuksia jatketaan siihen asti että laumaimmuniteetin raja (80%) saavutetaan. [4]'
        },
        {
            id: '5',
            question: 'Nuorten ihmisten on turha ottaa rokotetta, koska he eivät välttämättä saa ollenkaan oireita.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronavirus leviää paljon nuorten keskuudessa ja nuoret voivat tartuttaa esimerkiksi isovanhempansa.'
        },
        {
            id: '6',
            question: 'Koronavirus ei leviä veden kautta, esimerkiksi uidessa.',
            answerOptions: [
                { answer: 'Totta', isCorrect: true },
                { answer: 'Tarua', isCorrect: false },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronavirus ei leviä veden kautta. Virus silti leviää tartunnan saaneen ihmisen läheisyydessä. [5]'
        },
        {
            id: '7',
            question: 'Lisäämällä pippurin määrää ruoassa keskimäärin, kasvatat immuniteettiasi koronavirusta vastaan.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Pippurin syömisellä ei ole todettu vaikutuksia tässä asiassa. [5]'
        },
        {
            id: '8',
            question: 'Jos olet jo saanut tartunnan ja parantunut, sinun ei kannata ottaa rokotetta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Rokotteen ottaminen kannattaa, vaikka olisit sairastanut koronaviruksen, koska luonnollinen immuniteetti ei ole välttämättä vedenpitävä. [6]'
        },
        {
            id: '9',
            question: 'Koronavirus voi levitä itikkojen puremien kautta.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Itikanpuremilla ei ole todettu olevan levittävää vaikutusta koronavirusta koskien. [5]'
        },
        {
            id: '10',
            question: 'Koronavirus kehitettiin laboratioriossa.',
            answerOptions: [
                { answer: 'Totta', isCorrect: false },
                { answer: 'Tarua', isCorrect: true },
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