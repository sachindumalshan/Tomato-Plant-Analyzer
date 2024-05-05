import React from "react";
import { Card, Row, Col, } from "react-bootstrap";
import '../../assets/css/Dashboard.css';

function StateIndicator() {
    return (
        <>
            <Col lg="3" sm="6">
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
            <Col lg="3" sm="6">
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
                                    <Card.Title as="h4">87.8</Card.Title>
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
            <Col lg="3" sm="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <div className="icon-medium">
                                    <i className="bi bi-life-preserver text-primary"></i>
                                </div>
                            </Col>
                            <Col xs="7">
                                <div className="state-sensor">
                                    <span className="state-title">Water Pump</span>
                                    <Card.Title as="h4">ON/OFF</Card.Title>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <div className="stats">
                            <i className="bi bi-clock"></i> In the last hour
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col lg="3" sm="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <div className="icon-medium">
                                    <i className="bi bi-brightness-high text-warning"></i>
                                </div>
                            </Col>
                            <Col xs="7">
                                <div className="state-sensor">
                                    <span className="state-title">Lumosense</span>
                                    <Card.Title as="h4">20.5</Card.Title>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <div className="stats">
                            <i className="bi bi-arrow-clockwise "></i> Updated hour ago
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
}

export default StateIndicator;
