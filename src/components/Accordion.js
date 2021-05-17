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
min-height: max-content;
text-size: flex;
padding-bottom: 40px;
padding-top: 150px;
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




h1 {
    padding: 2rem;
    font-size: 2rem;
    overflow-wrap: break-word;
    border-radius: 0.5rem;
}

h2 {
    padding: 10px;
    font-size: 1rem;
    overflow-wrap: break-word;
    width: 90%;
    display: inline-block;
    font-family: Raleway;

}




span {

   
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
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0.5rem;
  margin: 15px;

 
  
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
                        <Wrap onClick={() => toggle(index)} key={index}>
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
