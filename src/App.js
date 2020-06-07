import React, { useState } from 'react';
import './App.css';
import Display from './Display'
import Keyboard from './Keyboard'
import { Row, Col, Container } from 'react-bootstrap';


function App() {
  const [display1, setDisplay] = useState('Olcia');
  const [keyboard] = useState([
    { id: 'clear', val: 'cc' },
    { id: 'pm', val: '+/-' },
    { id: 'percent', val: "%" },
    { id: 'divide', val: '/' },
    { id: 'seven', val: 7 },
    { id: 'eight', val: 8 },
    { id: 'nine', val: 9 },
    { id: 'multiply', val: "x" },
    { id: 'four', val: 4 },
    { id: 'five', val: 5 },
    { id: 'six', val: 6 },
    { id: 'substract', val: '-' },
    { id: 'one', val: 1 },
    { id: 'two', val: 2 },
    { id: 'three', val: 3 },
    { id: 'add', val: '+' },
    { id: 'zero', val: 0 },
    { id: 'decimal', val: '.' },
    { id: 'equals', val: '=' },
  ])

  return (
    <div className="App">
      <Container className="text-center">
        <h1>Welcome to React calculator</h1>
      </Container>

      <Container className="border border-success d-flex justify-content-center pt-5" >
        <Row className="border border-dark pt-5">
          <Col className="border border-warning">
            <Display
              display1={display1}
              setDisplay={setDisplay} />
            <Keyboard keys={keyboard} />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
