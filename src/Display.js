import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Display({ display1 }) {
    return (
        <div>
            <Container className="pt-5">
                <Row>
                    <Col className="border border-primary text-right">
                        <h2 className="border" id="display">{display1}</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Display
