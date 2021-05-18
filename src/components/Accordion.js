import React from 'react'
import {Data} from './Data'
import styled from 'styled-components' //npm install --save styled-components
import {IconContext} from 'react-icons' //npm install react-icons --save
import {FiPlus, FiMinus} from 'react-icons/fi'
import {useState, DropDown} from 'react'



const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
min-height: max-content;
text-size: flex;
padding-bottom: 0;
padding-top: 100px;
`;

const Container = styled.div`
top: 30%;
padding: 20px;
border-radius: 0.5rem;
`;

const Wrap = styled.div`
background: #D1F3FF;
color: #fff
justify-content: space-between;
align-items: center;
width: 90vw;
text-align: normal;
cursor: pointer;
border-radius: 0.5rem;
display: flex;
margin: 15px;
transition: 0.2s;


&:hover {
    background: rgb(250, 250, 250);
    transition: 0.2s;
}

h1 {
    padding: 2rem;
    font-size: 2rem;
    overflow-wrap: break-word;
    border-radius: 0.5rem;
}

h2 {
    padding: 20px;
    font-size: 1rem;
    overflow-wrap: break-word;
    width: 90%;
    display: inline-block;
    font-family: Raleway;


}




span {
    margin-right: 10px;

   
}


`;

const Dropdown = styled.div`
  background: #EDFAFF;  
  color: #D1F3FF
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #D1F3FF; 
  width: 90vw;
  padding: 15px 0;  
  border-radius: 0 0 0.5rem 0.5rem;
  margin: -22px 15px 15px 15px;

  display: flex;
  transition: 2s;
  height: 0px max-content;
  
`
/*border-bottom: 1px solid #fff;
  border-top: 1px solid #D1F3FF; 
  padding: 50px;
  width: 300px;
  */

const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index =>{
        if(clicked === index) { 
            return setClicked(null)
        }
        setClicked(index)
    }



    return (
        
        < IconContext.Provider value= {{ color: '#000000', size: '25px'}}>
        <AccordionSection>
            <Container>
                {Data.map((item, index) =>{
                    return(
                        <>
                        <Wrap onClick={() => toggle(index)} key={index} >
                        <h2>{item.question}</h2>
                    <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                        </Wrap>
                        {clicked === index ? (
                            <Dropdown>
                            <div className = "linkkiDiv" style= {{ width: "80vw", margin: "0 5vw 0 5vw"}} dangerouslySetInnerHTML = {{__html:item.answer}} ></div>
                            
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
