import Input from './components/Input/Input'
import Button from './components/Buttons/Button'

import { Container, Content, Row } from './styles';
import { useState } from 'react';

function App() {
  const [ currentNumber, setCurrentNumber] = useState("");
  const [ firstNumber, setFirstNumber ] = useState("");
  const [ operation, setOperation ] = useState("");

  const handleSum = () => {
    if(firstNumber === ""){
      setFirstNumber(currentNumber);
      setCurrentNumber("")
      setOperation("+")
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum);
    }
  }

  const handleSub = () => {
    if(firstNumber === ""){
      setFirstNumber(currentNumber);
      setCurrentNumber("");
      setOperation("-");
    }else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(sub);
    }
  }

  const handleDiv = () => {
    if(firstNumber === ""){
      setFirstNumber(currentNumber);
      setCurrentNumber("");
      setOperation("/");
    }else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(div)
    }
  }

  const handleMult = () => {
    if(firstNumber === "") {
      setFirstNumber(currentNumber);
      setCurrentNumber("");
      setOperation("*");
    }else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(mult);
    }
  }

  const handlePercent = () => {
    if(firstNumber === "") {
      setFirstNumber(currentNumber);
      setCurrentNumber("");
      setOperation("%")
    }else {
      const percent = (Number(firstNumber) / 100) * Number(currentNumber);
      setCurrentNumber(percent);
    }
  }

 

  const handleEquals = () => {
    if(firstNumber !== "" && operation !== "" && currentNumber !== 0){
      switch(operation){
        case "+":
          handleSum();
          break;
        case "-":
          handleSub();
          break;
        case "/":
          handleDiv();
          break;
        case "*":
          handleMult();
          break;
        case "%":
          handlePercent();
          break;
        default:
          break;
      }
    }
  }

  const handleClear = () => {
    setCurrentNumber("");
    setFirstNumber("");
    setOperation("");
  }

  const handleAddNumber = (num) => {
    setCurrentNumber((prev)=>`${prev === 0 ? "":prev}${num}`)
  }

  const handleAddComma = (num) => {
    setCurrentNumber((prev) => `${prev === 0 ? "":prev}.${num}`)
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={()=>handleAddNumber(7)}/>
          <Button label="8" onClick={()=>handleAddNumber(8)}/>
          <Button label="9" onClick={()=>handleAddNumber(9)}/>
          <Button label="/" onClick={handleDiv}/>
        </Row>

        <Row>
          <Button label="4" onClick={()=>handleAddNumber(4)}/>
          <Button label="5" onClick={()=>handleAddNumber(5)}/>
          <Button label="6" onClick={()=>handleAddNumber(6)}/>
          <Button label="*" onClick={handleMult}/>
        </Row>
        
        <Row>
          <Button label="1" onClick={()=>handleAddNumber(1)}/>
          <Button label="2" onClick={()=>handleAddNumber(2)}/>
          <Button label="3" onClick={()=>handleAddNumber(3)}/>
          <Button label="-" onClick={handleSub}/>
        </Row>
        <Row>
          <Button label="0" onClick={()=>handleAddNumber(0)}/>
          <Button label="." onClick={()=>handleAddComma("")}/>
          <Button label="%" onClick={handlePercent}/>
          <Button label="+" onClick={handleSum}/>
        </Row>
        <Row>
          <Button label="=" onClick={handleEquals}/>
          <Button label="Limpar" onClick={()=>handleClear()}/>
        </Row>
      </Content>
    </Container>
    
  );
}

export default App;
