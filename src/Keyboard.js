import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './App.css';

function Keyboard({ handleClick, currentInput, alertText, prev, curr, setPrev, setCurr }) {
    const keyboard = [
        { id: 'clear', val: 'AC', look: 0, size: 6 },
        { id: 'clrlast', val: 'C', look: 0, size: 3 },
        { id: 'divide', val: '/', look: 1, size: 3 },
        { id: 'seven', val: '7', look: 0, size: 3 },
        { id: 'eight', val: '8', look: 0, size: 3 },
        { id: 'nine', val: '9', look: 0, size: 3 },
        { id: 'multiply', val: "*", look: 1, size: 3 },
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
    ]

    //----------------button styles--------------------------------
    const st = ['border border-dark rounded bg-secondary text-center text-light p-0 keyboard',
        'border border-dark rounded bg-warning text-center text-light p-0 keyboard']

    return (
        <>
            <Container className="">
                <Row id="keyboardstyle">
                    {keyboard.map((key, index) => (
                        <Col xs={key.size}
                            id={key.id}
                            className={st[key.look]}
                            key={index}
                            onClick={() => {
                                handleClick(keyboard[index].val)
                            }} >
                            {key.val}
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}
export default Keyboard