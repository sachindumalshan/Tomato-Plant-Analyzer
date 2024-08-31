import React from "react";
import { Card, Row, Col, } from "react-bootstrap";
import '../../assets/css/Dashboard.css';

function StateIndicator() {
    return (
        <>
            <Row>
            <Col lg="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <div className="icon-medium">
                                    <i className="bi bi-thermometer-sun text-danger"></i>
                                </div>
                            </Col>
                            <Col xs="7">
                                <div className="state-sensor">
                                    <span className="state-title">Temperature</span>
                                    <Card.Title as="h4">37.5 °C</Card.Title>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <div className="stats">
                            <i className="bi bi-arrow-clockwise "></i> Updated now
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col lg="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <div className="icon-medium">
                                    <i className="bi bi-cloud-fog2 text-secondary"></i>
                                </div>
                            </Col>
                            <Col xs="7">
                                <div className="state-sensor">
                                    <span className="state-title">Humidity</span>
                                    <Card.Title as="h4">87.8 %</Card.Title>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <div className="stats">
                            <i className="bi bi-arrow-clockwise "></i> Updated now
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
            </Row>
        </>
    );
}

export default StateIndicator;
