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

  //------------------------------------RESET STATE-------------------------------------
  const resetValues = (val) => {
    console.log('values reset')
    setCurrentInput(val)
    setElements([])
  }
  //------------------------------------------------------------------------------------
  // const addNumber = (val) => {
  //   console.log('ADD NUM prev, curr, lastcurrin', prev, curr, currentInput[currentInput.length - 1])
  //   if (operand) {
  //     setOperand(false)
  //     setElements([...elements, currentInput])
  //   }
  //   let newInput = currentInput + val
  //   if (isNumber(prev) || prev === '.') {
  //     console.log('current and prev are numbers or dot')
  //     if (val === '0' && currentInput === '0') {
  //       newInput = '0'
  //     } else if (currentInput === '0') {
  //       newInput = val
  //     }
  //     updateInput(newInput)
  //   }

  // }

  //---------------------------------------------------------------
  // const addNumber2 = (val) => {
  //   if (operand) {
  //     toggleOperand(false)
  //     newToken(val)
  //   } else {
  //     console.log('adding key to currentinput')
  //     if (currentInput === '0' && val === '0') {
  //       updateInput('0')
  //     } else if (currentInput === '0' && isNumber(val)) {
  //       updateInput(val)
  //     } else if (currentInput.length > 15) {
  //       setAlertText('number too long')
  //       setTimeout(() => { setAlertText('') }, 1000)
  //     }
  //     else {
  //       updateInput(currentInput + val)
  //     }
  //   }
  // }
  //----------------------------------------------------------------------------
  // const addDot = (val) => {
  //   console.log('adding dot function')
  //   toggleDecim(true)
  //   if (!decim) {
  //     if (operand) {
  //       updateInput('0' + val)
  //     } else {
  //       updateInput(currentInput + val)
  //     }
  //   } else {
  //     setAlertText('another dot?')
  //     setTimeout(() => { setAlertText('') }, 600)
  //   }
  // }
  //------------------------------------------------old
  // const addDot2 = (val) => {
  //   console.log('adding dot function')
  //   if (decim) {
  //     console.log('kolejny przecinek')
  //   } else {
  //     if (operand) {
  //       toggleOperand(false)
  //       newToken('0' + val)
  //       toggleDecim(true)
  //     } else {
  //       updateInput(currentInput + val)
  //       toggleDecim(true)
  //     }
  //   }
  // }
  //--------------------------------------------------------
  // const addOperand = (val) => {
  //   //console.log('add operand function', operand, decim)
  //   toggleDecim(false)
  //   if (!operand) {
  //     let newElement = [...elements, (currentInput * 100 / 100).toString()]
  //     updateElements(newElement)
  //     toggleOperand(true)
  //   }
  //   if (operand && val === '-') {
  //     console.log('porownanie', currentInput[currentInput.length - 1], curr, prev)
  //     if (curr === '-') {
  //       updateInput('-')
  //     } else {
  //       updateInput(currentInput + val)
  //     }
  //   }
  //   else {
  //     updateInput(val)
  //   }
  // }
  //------------------------------------old--------------------------------
  // const addOperand2 = (val) => {
  //   console.log('addoperand function', val, 'operand', operand, 'current input', currentInput)
  //   toggleDecim(false)
  //   if (operand) {
  //     console.log('operand again')
  //     if (val === '-' && currentInput[currentInput.length - 1] !== '-') {
  //       console.log('second operand is minus')
  //       val = currentInput + val
  //       //alert('hold')
  //     }
  //     updateInput(val)
  //   } else {
  //     newToken(val)
  //   }
  // }
  //-------------------------------------------------------------------

  //-----------------------------------------------------
  // const newToken = (token) => {
  //   let ci = currentInput
  //   if (ci[ci.length - 1] === '-' && ci.length === 2) {
  //     let newElement = [...elements, ci[0]]
  //     updateElements(newElement)
  //     updateInput(ci[ci.length - 1] + token)
  //   } else if (isNumber(currentInput) && operand) {
  //     console.log('reset required after =')
  //     resetValues(token)
  //   }
  //   else {
  //     if (isNumber(ci)) { ci = (ci * 10 / 10).toString() }
  //     let newElement = [...elements, ci]
  //     updateElements(newElement)
  //     updateInput(token)
  //   }
  // }

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
    return eval(str).toString()
  }
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
        console.log('case C triggered')
        setCurrentInput('0')
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
        if (currentInput.length > 12) {
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
        if (isOperand(lastClick)) {
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
        if (isNumber(cI) && lastClick !== '=') {
          setElements(prevState => [...prevState, cI])
        } else if (val === '-' && cI.length === 1 && lastClick !== '=') {
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

  isSumTouCount()

  return (
    <div className="App border border-secondary p-5">
      <Container className="text-center border border-warning">
        <h1>Welcome to React calculator</h1>
      </Container>
      <Container className="border border-success p-5 mt-5 bg bg-success rounded" >
        <p>container2</p>
        <Row className="border border-dark  d-flex justify-content-center">
          <Col xs={12} md={5} xl={4} className="bg-dark rounded p-3 mr-2">
            <Display
              currentInput={currentInput}
              alertText={alertText} />
            <Keyboard
              handleClick={handleClick}
              currentInput={currentInput}
              alertText={alertText}
            />
          </Col>
          <Col xs={12} md={5} xl={4} className="border border-dark rounded p-3 ml-2">
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
