import React from 'react'
import {Data} from './Data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'
import {useState, DropDown} from 'react'


const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 100vh;
background: #fff
`;

const Container = styled.div`
position: absolute;
top: 30%;
box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
background: #272727;
color: #fff
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;

h1 {
    padding: 2rem;
    fontsize: 2rem
}

span {
    margin-right: 1.5rem;
}

text{
    color: white
}
`;



const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9; 
`

const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index =>{
        if(clicked === index) { 
            return setClicked(null)
        }
        setClicked(index)
    }



    return (
        < IconContext.Provider value= {{ color: '#D1F3FF', size: '25px'}}>
        <AccordionSection>
            <Container>
                {Data.map((item, index) =>{
                    return(
                        <>
                        <Wrap onClick={() => toggle(index)} key={index}>
                        <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                        </Wrap>
                        {clicked === index ? (
                            <Dropdown>
                            <p>{item.answer}</p>
                            </Dropdown>
                        ): null}
                        </>
                    )
                })}
            </Container>
        </AccordionSection>
        </IconContext.Provider>
    )
}

export default Accordion
