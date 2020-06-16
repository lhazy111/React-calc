import React, { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './Keyboard'
import Notes from './Notes'
import { Row, Col, Container } from 'react-bootstrap';
import Display from './Display';


function App() {
  //------------------state------------------
  const [currentInput, setCurrentInput] = useState('0')
  const [elements, setElements] = useState([])
  const [calculate, setCalculate] = useState(false)
  const [alertText, setAlertText] = useState('')
  const [lastClick, setLastClick] = useState('')
  const [calculations, setCalculations] = useState([])
  const operands = '*+/-'
  const isOperand = o => { return operands.includes(o) }
  const isNumber = n => { return isNaN(n) ? false : true }
  const checkState = () => {
    console.log('-------------check state-------------------------------')
    console.log('elements', elements, elements.length)
    console.log('currentInput', currentInput);
    console.log('lastclick = ', lastClick)
    console.log('calculate:', calculate)
    console.log('calculations: ', calculations)
  }

  checkState()

  //------------------------------------RESET STATE-------------------------------------
  const resetValues = (val) => {
    console.log('values reset')
    setCurrentInput(val)
    setElements([])
  }
  //-----------------------effect--------------------------------
  // useEffect(() => {
  //   if (calculate) {
  //     console.log('counting')
  //     let score = count(elements)
  //     setCurrentInput(score)
  //     setElements([score])
  //     setCalculate(false)
  //   }
  // }, [calculate, elements])
  //---------------------------calculate helper-------------------------------------
  // const firstIndex = (arr, op1, op2) => {
  //   let op1index = arr.indexOf(op1)
  //   let op2index = arr.indexOf(op2)
  //   if (op1index === -1 && op2index === -1) {
  //     return -1
  //   } else if (op2index === -1) {
  //     return op1index
  //   } else if (op1index === -1) {
  //     return op2index
  //   }
  //   else {
  //     return op1index < op2index ? op1index : op2index
  //   }
  // }
  //--------------------------------end of calculate helper-------------------------------
  // const countPREV = (elements) => {
  //   let arr1 = [...elements]
  //   let arr2 = []
  //   let score = 0
  //   let index = 0
  //   while (firstIndex(arr1, '/', '*') !== -1) {
  //     index = firstIndex(arr1, '/', '*')
  //     // eslint-disable-next-line
  //     score = eval(arr1[index - 1] + arr1[index] + arr1[index + 1])
  //     arr2 = [...arr1.slice(0, index - 1), score.toString(), ...arr1.slice(index + 2, arr1.length)]
  //     arr1 = [...arr2]
  //   }
  //   while (firstIndex(arr1, '+', '-') !== -1) {
  //     let index = firstIndex(arr1, '+', '-')
  //     // eslint-disable-next-line
  //     score = eval(arr1[index - 1] + arr1[index] + arr1[index + 1])
  //     arr2 = [...arr1.slice(0, index - 1), score.toString(), ...arr1.slice(index + 2, arr1.length)]
  //     arr1 = [...arr2]
  //   }
  //   return arr1[0]
  // }
  //--------------------------------------end of calculate--------------------------------

  //-------------------------------calculate  -----------------------------
  const count = (elements) => {
    let str = '';
    elements.forEach(element => {
      if (element < 0) {
        str = str + `(${element})`
      } else {
        str = str + element
      }
    });
    console.log(str)
    // eslint-disable-next-line
    let score = eval(str)//.toPrecision(8).toString()
    console.log('modulo', score % score)
    if (score - Math.floor(score) !== 0) {
      score = score.toPrecision(10)
    } else {
      score = score.toString()
    }
    return score// < 0 ? score.toFixed(10) : score.toString()

  }
  //------------------------------------------------------------------------------
  const isSumTouCount = () => {
    if (calculate) {
      console.log('counting')
      let score = count(elements)
      setCalculations(prevState => [...prevState, [...elements, '=', score]])
      setCurrentInput(score)
      setElements([score])
      setCalculate(false)
    }
  }

  //==================================click handler====================================================================
  const handleClick = val => {
    setLastClick(val)
    console.log('handleclick clicked: ', val, "currInput:", currentInput)//message to console what key clicked
    let cI = currentInput
    let newI = ''
    switch (val) {
      //-------------------------------------case AC--------------------------------------------------
      case 'AC':
        resetValues('0')
        break;

      //-------------------------------------case C--------------------------------------------------
      case 'C':
        if (lastClick === 'C') {
          break
        }
        if (!isOperand(lastClick)) {
          setCurrentInput('0')
        }
        if (lastClick === '=') {
          setCurrentInput('0')
          setElements([])
        }
        break

      //-------------------------------------------case dot--------------------------------------------
      case '.':
        //-------after equals----------
        if (lastClick === '=') {
          resetValues(val)
          setCurrentInput('0' + val)
          break
        }
        //----------another dot----------
        if (cI.includes('.')) {
          setAlertText('ANOTHER DOT ? REALLY?')
          setTimeout(() => {
            setAlertText('')
          }, 600)
          break
        }
        //------------------------------
        if (isNumber(cI)) {
          setCurrentInput(prevState => prevState + val)
        } else {
          if (cI.length === 2) {
            setElements(prevState => [...prevState, cI[0]])
            setCurrentInput(cI[1] + '0' + val)
          } else {
            setElements(prevState => [...prevState, cI])
            setCurrentInput('0' + val)
          }
        }
        break;

      //-------------------------------case zero-------------------------------------------------------
      case '0':
        //----------------------divide by zero error----------
        if (cI.includes('/')) {
          setCurrentInput('ERROR')
          setAlertText('dividing by zero')
          setTimeout(() => {
            setAlertText('')
            resetValues('0')
          }, 2000)
          break
        }
        //----------------------------------------------------
        if (isOperand(lastClick)) {
          setElements(prevState => [...prevState, cI])
          setCurrentInput(val)
        }
        if (isNumber(cI) && cI !== '0') {
          setCurrentInput(prevState => prevState + val)
        }
        break;

      //-----------------------------case number------------------------------------------------------
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        //---------------number too long------------
        if (currentInput.length > 9) {
          setAlertText('number too long')
          setTimeout(() => { setAlertText('') }, 1000)
          break;
        }
        //-------after equals----------
        if (lastClick === '=') {
          resetValues(val)
          break
        }
        //--------------display shows 0 only----
        if (cI === '0') {
          setCurrentInput(val)
          break
        }
        //-----number on display--------
        if (isNumber(cI)) {
          setCurrentInput(prevState => prevState + val)
          break
        }
        //---if number pressed after operand ---
        if (!isNumber(cI)) {
          if (cI.length === 2) {
            setElements(prevState => [...prevState, cI[0]])
            setCurrentInput(prevState => prevState[1] + val)
          } else {
            setElements(prevState => [...prevState, cI])
            setCurrentInput(val)
          }
        }
        break;

      //------------------------------case + / * - -------------------------------------------------------
      case '+':
      case '/':
      case '*':
      case '-':
        newI = val
        // cI = (cI * 100 / 100).toString()
        if (isNumber(cI) && lastClick !== '=') {
          setElements(prevState => [...prevState, cI])
        } else if (val === '-' && cI.length === 1 && lastClick !== '=' && lastClick !== 'C') {
          newI = cI + val
        }
        setCurrentInput(newI)
        break;

      //---------------------------case =-------------------------------------------------------------
      case '=':
        if (lastClick !== '=' && elements.length > 0) {
          setCalculate(true)
          if (isNumber(cI)) {
            setElements(prevState => [...prevState, cI])
          }
        }
        break;

      //---------------------------------------------------default-----------------------------------
      default:
        console.log('default case')
    }
  }
  //=========================================click handler end=========================================================== 



  isSumTouCount()

  return (
    <div className="App">
      <Container className="text-center border border-warning">
        <h1>Welcome to React calculator</h1>
      </Container>
      <Container className="pt-5 p-3 mt-5 rounded" >
        <Row className="pt-5 d-flex justify-content-center">
          <Col xs={10} md={5} xl={4} className="bg-dark rounded p-3 m-2">
            <Display
              currentInput={currentInput}
              alertText={alertText} />
            <Keyboard
              handleClick={handleClick}
              currentInput={currentInput}
              alertText={alertText}
            />
          </Col>
          <Col xs={10} md={5} xl={4} className="border border-dark rounded p-3 m-2 bg-dark">
            <Notes
              calculations={calculations}
              setCalculations={setCalculations}
              elements={elements}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
