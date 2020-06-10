import React, { useState } from 'react';
import './App.css';
import Display from './Display'
import Keyboard from './Keyboard'
import { Row, Col, Container } from 'react-bootstrap';


function App() {
  const [display1, setDisplay] = useState('0');
  const [currentInput, setCurrentInput] = useState('');
  const [elements, setElements] = useState([])
  //const [operands, setOperands] = useState([])
  const [decim, setDecim] = useState(false)
  const [operand, setOperand] = useState(false)
  const [keyboard] = useState([
    { id: 'clear', val: 'AC', look: 0, size: 9 },
    { id: 'divide', val: '/', look: 1, size: 3 },
    { id: 'seven', val: '7', look: 0, size: 3 },
    { id: 'eight', val: '8', look: 0, size: 3 },
    { id: 'nine', val: '9', look: 0, size: 3 },
    { id: 'multiply', val: "x", look: 1, size: 3 },
    { id: 'four', val: '4', look: 0, size: 3 },
    { id: 'five', val: '5', look: 0, size: 3 },
    { id: 'six', val: '6', look: 0, size: 3 },
    { id: 'subtract', val: '-', look: 1, size: 3 },
    { id: 'one', val: '1', look: 0, size: 3 },
    { id: 'two', val: '2', look: 0, size: 3 },
    { id: 'three', val: '3', look: 0, size: 3 },
    { id: 'add', val: '+', look: 1, size: 3 },
    { id: 'zero', val: '0', look: 0, size: 6 },
    { id: 'decimal', val: '.', look: 0, size: 3 },
    { id: 'equals', val: '=', look: 1, size: 3 },
  ])

  return (
    <div className="App">
      <Container className="text-center">
        <h1>Welcome to React calculator</h1>
      </Container>

      <Container className="border border-success d-flex justify-content-center pt-5" >
        <Row className="border border-dark pt-5">
          <Col className="border border-warning">
            <p>currentInput = {currentInput}</p>
            <Display
              display1={display1}
              setDisplay={setDisplay} />
            <Keyboard
              keys={keyboard}
              display1={display1}
              setDisplay={setDisplay}
              currentInput={currentInput}
              setCurrentInput={setCurrentInput}
              elements={elements}
              setElements={setElements}
              decim={decim}
              setDecim={setDecim}
              operand={operand}
              setOperand={setOperand}

            />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
