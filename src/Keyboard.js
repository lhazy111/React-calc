import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

function Keyboard({ keys }) {
    console.log(keys);
    const buttonstyle = 'border border-dark bg-secondary text-center text-light p-0';
    const orangeButton = 'border border-dark bg-warning text-center text-light'
    return (
        <>
            <Container>
                <Row>
                    <Col xs={3} className={buttonstyle}>
                        <h3>{keys[0].val}</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>+/-</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>%</h3>
                    </Col>
                    <Col xs={3} className={orangeButton}>
                        <h3>/</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>7</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>8</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>9</h3>
                    </Col>
                    <Col xs={3} className={orangeButton}>
                        <h3>X</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>4</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>5</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>6</h3>
                    </Col>
                    <Col xs={3} className={orangeButton}>
                        <h3>-</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>1</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>2</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>3</h3>
                    </Col>
                    <Col xs={3} className={orangeButton}>
                        <h3>+</h3>
                    </Col>
                    <Col xs={6} className={buttonstyle}>
                        <h3>0</h3>
                    </Col>
                    <Col xs={3} className={buttonstyle}>
                        <h3>.</h3>
                    </Col>
                    <Col xs={3} className="border border-dark bg-warning text-center text-light">
                        <h3 id="equals">=</h3>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Keyboard