import React from 'react'
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function Display({ currentInput, alertText }) {
    return (
        <>
            <Container className="bg-light rounded">
                <Row>
                    <h5 className="text-center text-uppercase">{alertText}</h5>
                </Row>
                <Row>
                    <Col className="bg-light text-right overflow-auto m-2">
                        <h4 id="display">{currentInput}</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
