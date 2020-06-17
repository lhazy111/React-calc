import React from 'react'
import './App.css';
import { Container, Col, Row, Button } from 'react-bootstrap';

export default function Notes({ calculations, setCalculations, elements }) {
    const scrollToView = () => {
        console.log('scrolltoview called')
        if (document.querySelector("#currentOp")) {
            let element = document.querySelector("#calculations")
            element.scrollTop = element.scrollHeight
        }

    }
    scrollToView()
    return (
        <div>
            <Container className="">
                <Row >
                    <Col className="d-flex justify-content-around align-items-center border-bottom p-1 mb-1">
                        <div className="text-light">Notes</div>
                        <Button
                            onClick={() => {
                                setCalculations([])
                            }}
                            variant="danger"
                            size="sm"
                            className="badge-pill">
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container id="calculations" className="">
                {calculations.map((calculation, index) => (
                    <Row key={index} className="border-bottom p-2">
                        <span className="text-monospace font-italic text-primary">
                            {calculation.join(" ")}
                        </span>
                    </Row>
                ))}
                <Row id="currentOp">
                    <span className="text-light p-2">{elements.join(" ")} </span>
                </Row>
            </Container>

        </div>
    )
}
