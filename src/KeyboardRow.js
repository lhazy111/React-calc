import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function KeyboardRow() {
    return (
        <div>
            <Container>
                <Row className="border border-primary">
                    <Col className="border border-dark bg-primary text-center">
                        <h3>1</h3>
                    </Col>
                    <Col className="border border-dark bg-primary text-center">
                        <h3>1</h3>
                    </Col>
                    <Col className="border border-dark bg-primary text-center">
                        <h3>1</h3>
                    </Col>
                    <Col className="border border-dark bg-primary text-center">
                        <h3>1</h3>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
