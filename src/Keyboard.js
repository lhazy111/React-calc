import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './App.css';


function Keyboard({ keys, display1, setDisplay, currentInput, setCurrentInput, elements, setElements, decim, setDecim, operand, setOperand }) {
    console.log('-------------start funkcji-------------------------------')
    console.log('elements', elements)
    console.log('currentInput', currentInput);
    console.log('decim:', decim)
    console.log('operand', operand)

    //----------------button styles--------------------------------
    const st = ['border border-dark bg-secondary text-center text-light p-0',
        'border border-dark bg-warning text-center text-light p-0']
    const operands = "+-/x"
    //-------------------helper check if n is a number-------------------
    const isNumber = n => {
        if (isNaN(n)) {
            return false
        } else {
            return true
        }
    }
    //----------------------helper check if n is zero--------------------------
    const isZero = n => {
        console.log("n=", n, "number(n)=", Number(n) === 0)
        return Number(n) === 0
    }

    const resetValues = () => {
        console.log('values reset')
        setDisplay('0')
        setDecim(false)
        setElements([])
        setCurrentInput("")
    }

    const resetCurrent = () => {
        setCurrentInput("")
    }

    const addKey = (val) => {
        if (operand) {
            setOperand(false)
            newToken(val)
        } else {
            console.log('adding key to currentinput')
            setCurrentInput(currentInput + val)
        }

    }

    const addDot = (val) => {
        console.log('adding dot function')
        if (decim) {
            console.log('kolejny przecinek')
        } else {
            console.log('przecinek')
            setCurrentInput(currentInput + val)
            setDecim(true)
        }

    }

    const addOperand = (val) => {
        console.log('addoperand function', val, 'operand', operand)
        setDecim(false)
        if (operand) {
            console.log('operand again')
            setCurrentInput(val)
        } else {
            newToken(val)
        }

    }

    const newToken = (token) => {
        let newElement = [...elements, currentInput]
        setElements(newElement)
        setCurrentInput(token)
    }

    //---------------------keyboard click handler ----------------------------
    const handleClick = val => {
        console.log('clicked: ', val)//message to console what key clicked
        switch (val) {
            case 'AC':
                resetValues()
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
                console.log('number', val)
                addKey(val)
                break;
            case '.':
                addDot(val)
                break;
            case '+':
            case '-':
                setOperand(true)
                addOperand(val)
                break;

        }
        /*--------------is key clicked a number??-----------------------------
        if (isNumber(val)) {
            if (currentInput === '0' && val === 0) {
                setCurrentInput("0")
            } else if ('+-/x'.includes(currentInput)) {
                console.log("elseif po wprowadzeniu cyfry", '+-/x'.includes(currentInput), currentInput)
            } else {
                setCurrentInput(currentInput + val)
            }
            // is key clicked a decimal dot ? ------------------------
        } else if (val === '.') {
            if (decim === false) {
                setCurrentInput(currentInput + val)
                setDecim(true)
            }

        }
        //----------------operand clicked-----------------------------
        else {
            console.log('operand click', val)
            setDecim(false)
            if (!'+-/x'.includes(currentInput)) {
                let newElement = [...elements, currentInput]
                setElements(newElement)
            }
            setCurrentInput(val)
            switch (val) {
                case '+':
                case '-':
                case 'x':
                case '/':
                    if ('+-/x.'.includes(currentInput)) {
                        console.log('lastchar includes', val)
                        //let newInput = currentInput.slice(0, currentInput.length - 1) + val;
                        //setCurrentInput(newInput)
                    } else {
                        //setCurrentInput(currentInput + val)
                    }

                    break;
                case 'AC':
                    setCurrentInput("")
                    setDisplay('0')
                    setDecim(false)
                    setElements([])
                    break;
            }
        }

        //---------------------------------------------------------------------------------
        /*     else {
                setDisplay("0")
                
                if (display1 >= "0") {
                    let newNumbers = [...numbers, Number(display1)]
                    setNumbers(newNumbers)
                    console.log("numbers array:", numbers)
                }
     
                switch (val) {
                    case "AC":
                        console.log('AC click')
                        setDisplay("0")
                        setCurrentInput("")
                        break;
                    case "+":
                        console.log('plus clicked')
                        break;
                    case "-":
                        console.log('minus clicked')
     
                        break
                    case "/":
                        console.log('/ clicked')
                        break
                    case "x":
                        console.log('* clicked')
                        break
                    case "=":
                        console.log('equals clicked', currentInput)
                        break
                    case ".":
                        console.log('decimal clicked')
                        if (!display1.includes('.')) {
                            setDisplay(display1 + val);
                        }
                        break
                    case "+/-":
                        console.log('+/- clicked')
                        break
                    case "%":
                        console.log('proc clicked')
                        break
                    default:
                        console.log('default case')
     
                }
     
                let newDisplay = ""
                switch (val) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        console.log('number', val)
                        setDisplay(display1 + val);
                        setCurrentInput(currentInput + val)
                        break;
                    case "AC":
                        console.log('AC click')
                        setDisplay("0")
                        break;
                    case "+":
                        console.log('plus clicked')
                        if (currentInput && isNumber(currentInput[currentInput.length - 1])) {
                            setCurrentInput(currentInput + display1 + val)
                        } else {
                            console.log('to nie numer')
                        }
                        setDisplay('0')
     
     
                        break
                    case "-":
                        console.log('minus clicked')
                        setCurrentInput(currentInput + display1 + val)
                        setDisplay('0')
                        break
                    case "/":
                        console.log('/ clicked')
                        break
                    case "x":
                        console.log('* clicked')
                        break
                    case "=":
                        console.log('equals clicked', currentInput)
                        break
                    case ".":
                        console.log('decimal clicked')
                        if (!display1.includes('.')) {
                            newDisplay = display1 + val;
                            setDisplay(newDisplay);
                        }
                        break
                    case "+/-":
                        console.log('+/- clicked')
                        break
                    case "%":
                        console.log('proc clicked')
                        break
                    default:
                        console.log('default case')
                }
     
                //if (!value) return;
                //addTodo(value);
                //setValue("");
            }
    --------------------------------------------------------------------------*/
    }

    return (
        <>
            <Container>
                <Row id="keyboardstyle">
                    {keys.map((key, index) => (
                        <Col xs={key.size}
                            id={key.id}
                            className={st[key.look]}
                            key={index}
                            onClick={() => handleClick(keys[index].val)} >
                            {key.val}
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}
export default Keyboard