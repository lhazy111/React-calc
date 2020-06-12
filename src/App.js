import React, { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard'
import { Row, Col, Container } from 'react-bootstrap';


function App() {

  //------------------state------------------
  const [currentInput, setCurrentInput] = useState('0')
  const [elements, setElements] = useState([])
  const [decim, setDecim] = useState(false)
  const [operand, setOperand] = useState(false)
  console.log('-------------start funkcji-------------------------------')
  console.log('elements', elements)
  console.log('currentInput', currentInput);
  console.log('decim:', decim)
  console.log('operand', operand)

  //-----------------------------state functions----------------------------------------------------------
  const toggleOperand = (val) => {
    console.log('setoperand triggered')
    setOperand(val)
  }

  const updateInput = (val) => {
    console.log('setcurrentinput trigerred')
    setCurrentInput(val)
  }

  const toggleDecim = (val) => {
    console.log('setdecim trigerred')
    setDecim(val)
  }

  const updateElements = (val) => {
    console.log('setelements trigerred')
    setElements(val)
  }
  //--------------------------end of state functions----------------------------------------------------
  //-------------------helper check if n is a number-------------------
  const isNumber = n => {
    if (isNaN(n)) {
      return false
    } else {
      return true
    }
  }
  //--------------------------end of helper check if n is a number -------------------

  const resetValues = (val) => {
    console.log('values reset')
    updateInput(val)
    updateElements([])
    toggleDecim(false)
    toggleOperand(false)
  }

  const addKey = (val) => {
    if (operand) {
      toggleOperand(false)
      newToken(val)
    } else {
      console.log('adding key to currentinput')
      if (currentInput === '0' && val === '0') {
        updateInput('0')
      } else if (currentInput === '0' && isNumber(val)) {
        updateInput(val)
      } else {
        updateInput(currentInput + val)
      }
    }
  }

  const addDot = (val) => {
    console.log('adding dot function')
    if (decim) {
      console.log('kolejny przecinek')
    } else {
      if (operand) {
        toggleOperand(false)
        newToken('0' + val)
        toggleDecim(true)
      } else {
        updateInput(currentInput + val)
        toggleDecim(true)
      }
    }
  }

  const addOperand = (val) => {
    console.log('addoperand function', val, 'operand', operand, 'current input', currentInput)
    toggleDecim(false)
    if (operand) {
      console.log('operand again')
      if (val === '-') {

        console.log('second operand is minus')
        toggleOperand(false)
        let newElement = [...elements, currentInput]
        updateElements(newElement)
        updateInput(val)
        //newToken(currentInput)
        //alert('hold')
      }
      updateInput(val)
    } else {
      newToken(val)
    }

  }


  //-----------------------------------------------------
  const newToken = (token) => {
    let newElement = [...elements, currentInput]
    updateElements(newElement)
    updateInput(token)

  }

  //---------------------------calculate helper-------------------------------------
  const firstIndex = (arr, op1, op2) => {
    let op1index = arr.indexOf(op1)
    let op2index = arr.indexOf(op2)
    if (op1index === -1 && op2index === -1) {
      return -1
    } else if (op2index === -1) {
      return op1index
    } else if (op1index === -1) {
      return op2index
    }
    else {
      return op1index < op2index ? op1index : op2index
    }
  }
  //--------------------------------end of calculate helper-------------------------------

  //-------------------------------calculate after entering = -----------------------------
  const count = (elements) => {
    let arr1 = [...elements]
    let arr2 = []
    let score = 0
    let index = 0
    while (firstIndex(arr1, '/', '*') !== -1) {
      console.log('razypodzelic')
      index = firstIndex(arr1, '/', '*')
      console.log('index', index)
      score = eval(arr1[index - 1] + arr1[index] + arr1[index + 1])
      arr2 = [...arr1.slice(0, index - 1), score.toString(), ...arr1.slice(index + 2, arr1.length)]
      arr1 = [...arr2]
      console.log('wynikowa', arr1)

    }
    while (firstIndex(arr1, '+', '-') !== -1) {
      console.log('plusyminusy')
      let index = firstIndex(arr1, '+', '-')
      console.log('index', index)
      score = eval(arr1[index - 1] + arr1[index] + arr1[index + 1])
      arr2 = [...arr1.slice(0, index - 1), score.toString(), ...arr1.slice(index + 2, arr1.length)]
      arr1 = [...arr2]
      console.log('wynikowa', arr1)
    }
    return arr1[0]
  }
  //--------------------------------------end of calculate--------------------------------

  //---------------------keyboard click handler ----------------------------
  const handleClick = val => {
    console.log('clicked: ', val)//message to console what key clicked
    switch (val) {
      case 'AC':
        resetValues('0')
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        addKey(val)
        break;
      case '.':
        addDot(val)
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        toggleOperand(true)
        addOperand(val)
        break;
      case '=':
        toggleOperand(true)
        addOperand(val)
        break;

    }
  }

  if (currentInput === '=') {
    console.log('counting')
    let score = count(elements)
    setCurrentInput(score)
    setElements([score])
  }




  return (
    <div className="App">
      <Container className="text-center">
        <h1>Welcome to React calculator</h1>
      </Container>

      <Container className="border border-success d-flex justify-content-center pt-5" >
        <Row className="border border-dark pt-5">
          <Col className="border border-warning">
            <Keyboard
              handleClick={handleClick}
              currentInput={currentInput}
            />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
