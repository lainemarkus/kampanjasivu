import React, {useState} from 'react'
import './cardpage.css'
import festival from'./images/festival.png';
import SideNav from  './sidenav.js';
import flowimg from './images/flow-img.png';
import Collapsible from 'react-collapsible'; //install react-collapsible --save





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
            src:'images/vasynytlaakari.jpg',
            answerExplanation: 'COVID-19 -rokotteet kehitetään noudattaen samoja laillisia määräyksiä, kuin muutkin lääkkeet, jotta voidaan taata rokotteen turvallisuus, laatu ja tehokkuus. [1]'
        },
        {
            id: '2',
            question: 'Koronarokote ei anna täydellistä suojaa koronavirukselta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: true },
                { answer: 'TARUA', isCorrect: false },
            ],
            src:'images/bussi.jpg',
            answerExplanation: 'Koronarokotteella on todettu olevan noin 95 prosentin teho. Käytännössä millään rokotteella ei ole sadan prosentin tehoa, mutta vähempikin tehokkuus riittää siihen, että viruksen leviäminen saadaan estettyä populaatiossa. [2]'
        },
        {
            id: '3',
            question: 'Laumaimmuniteetin saavuttamiseen riittää se, että vanhukset ja noin 50 prosenttia koko Suomesta ovat rokotettu.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/rokote.jpg',
            answerExplanation: 'Laumaimmuniteetti vaatii nykyisten arvioiden mukaan sen, että noin 70% populaatiosta on rokotettu. Tarvittava prosenttiosuus vaihtelee taudin mukaan. Esimerkiksi tuhkarokko vaatii sen, että 95% väestöstä on rokotettu. [3]'
        },
        {
            id: '4',
            question: 'Nyt kun lähes 40 prosenttia suomalaisista on jo rokotettu, minun ei tarvitse ottaa rokotetta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/jengi-baarissa.jpg',
            answerExplanation: 'Vaikka suuri osa väestöstä onkin jo rokotettu, on tärkeää, että rokotuksia jatketaan vähintään siihen asti, että laumaimmuniteetin raja saavutetaan. [4]'
        },
        {
            id: '5',
            question: 'Nuorten ihmisten on turha ottaa rokotetta, koska he eivät välttämättä saa ollenkaan oireita koronatartunnasta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/img-vaccine.jpg',
            answerExplanation: 'Koronavirus leviää paljon nuorten keskuudessa ja nuoret voivat tartuttaa esimerkiksi isovanhempansa. Lisäksi myös terveet nuoret voivat saada koronavirustartunnasta vaikeita ja pitkittyneitä oireita, ja koronarokote tehoaa erityisesti koronaviruksen vakavempiin tautimuotoihin.'
        },
        {
            id: '6',
            question: 'Koronavirus ei leviä veden kautta, esimerkiksi uidessa.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: true },
                { answer: 'TARUA', isCorrect: false },
            ],
            src:'images/uimassa.jpg',
            answerExplanation: 'Koronavirus ei leviä veden kautta. Virus silti leviää tartunnan saaneen ihmisen läheisyydessä, joten esimerkiksi uimahalleissa virus voi levitä ihmiskontaktien kautta. [5]'
        },
        {
            id: '7',
            question: 'Lisäämällä chilin määrää ruoassa keskimäärin, kasvatat immuniteettiasi koronavirusta vastaan.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/chili.jpg',
            answerExplanation: 'Chilin syömisellä ei ole todettu vaikutuksia tässä asiassa. [5]'
        },
        {
            id: '8',
            question: 'Jos olet jo saanut tartunnan ja parantunut, sinun ei kannata ottaa rokotetta.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/rokote.jpg',
            answerExplanation: 'Rokotteen ottaminen on tarpeellista, vaikka olisit sairastanut koronaviruksen, koska luonnollinen immuniteetti ei ole välttämättä riittävä. [6]'
        },
        {
            id: '9',
            question: 'Koronarokotteen ottaminen saattaa heikentää hedelmällisyyttä.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/jengi-baarissa.jpg',
            answerExplanation: 'Rokotteella ei ole todettu olevan vaikutusta hedelmällisyyteen. Sen sijaan raskaana olevilla naisilla on kohonnut riski sairastua koronan vakavaan tautimuotoon, jos he eivät ole rokottautuneet. [11]'
        },
        {
            id: '10',
            question: 'Koronavirus kehitettiin laboratioriossa.',
            answerOptions: [
                { answer: 'TOTTA', isCorrect: false },
                { answer: 'TARUA', isCorrect: true },
            ],
            src:'images/vasynytlaakari.jpg',
            answerExplanation: 'Koronaviruksen alkulähteeksi arvellaan kiinalaista eläinruokatoria. Joka tapauksessa tiedetään, että virus on tarttunut eläimistä ihmisiin.'
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
                            <button onClick={resetGame}>UUDESTAAN</button>
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
                            <div className="next-button"><button onClick={setQuizEnded}>LOPETUS</button></div>
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
        
        <div id="sources">
        <Collapsible trigger="LÄHTEET" transitionTime={100} easing="ease-out" triggerTagName="button">
            <p>
            [1]: <a href="https://www.ema.europa.eu/en/human-regulatory/overview/public-health-threats/coronavirus-disease-covid-19/treatments-vaccines/vaccines-covid-19/covid-19-vaccines-key-facts">European Medicines Acency: COVID-19 vaccines: key facts</a> <br/><br/>

            [2]: <a href="https://www.nbcnewyork.com/news/coronavirus/everything-you-need-to-know-about-the-covid-vaccines-how-effective-are-the-big-3-and-how-do-they-compare/2990057/">NBC New York: Everything to Know About COVID Vaccines</a> <br/><br/>

            [3]: <a href="https://www.who.int/news-room/q-a-detail/herd-immunity-lockdowns-and-covid-19?gclid=CjwKCAjw1uiEBhBzEiwAO9B_Hcab-fPIzH44FvkdRLTJZILJ3f_vR7RabXf27Z2gCKqVEzMVmFS8dxoC3dMQAvD_BwE#">World Health Organisation: Herd immunity, lockdowns and COVID-19</a> <br/><br/>

            [4]: <a href="https://www.bbc.com/news/av/health-54937276">BBC: WHO worried young people won't want vaccine</a> <br/><br/>

            [5]: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters?gclid=CjwKCAjw1uiEBhBzEiwAO9B_HcJgPZonbg4PX4mVzu5GX07mY_05vQz0-4t5pK4IDqOzJ3kbY1k93BoCUSYQAvD_BwE">World Health Organization: Coronavirus disease (COVID-19) advice for the public: Mythbusters</a> <br/><br/>

            [6]: <a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines?adgroupsurvey=adgroupsurveygclid=CjwKCAjw1uiEBhBzEiwAO9B_HZ7-g9_UsmJS13ehLOovvFXeBwA1jlNjdQDEtQ4ELHfnKy_Hl0_y1RoCe_4QAvD_BwE">World Health Organization: Coronavirus disease (COVID-19): Vaccines</a> <br/><br/>

            [11]: <a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-covid-19-pregnancy-and-childbirth">World Healt Organiation: Coronavirus disease (COVID-19): Pregnancy and childbirth</a>

            </p>     
        </Collapsible>
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