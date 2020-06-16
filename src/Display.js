import React from 'react'
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function Display({ currentInput, alertText }) {
    return (
        <div>
            <Container className="bg-light rounded">
                <Row>
                    <h5 className="text-center text-uppercase pt-1">{alertText}</h5>
                </Row>
                <Row>
                    <Col className="bg-light text-right overflow-auto m-2">
                        <h3 id="display">{currentInput}</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
