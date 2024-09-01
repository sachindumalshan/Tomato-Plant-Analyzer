import React, { useState, useEffect } from "react";
import { Card, Row, Col, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

function StateIndicator() {
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/temp');
                console.log("API Response:", response.data);

                if (Array.isArray(response.data) && response.data.length > 0) {
                    const latestData = response.data[0]; // Assuming the first item is the latest entry
                    const [tempData, humidityData] = latestData.data.split('|');

                    const temperatureValue = parseFloat(tempData.split('T-')[1]);
                    const humidityValue = parseFloat(humidityData.split('H-')[1]);

                    setTemperature(temperatureValue);
                    setHumidity(humidityValue);
                } else {
                    console.error("Unexpected data format:", response.data);
                    setError("Unexpected data format received");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError('Error fetching environment data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20vh', // Makes the div take up the full viewport height
                }}
            >
                <Spinner animation="grow" variant="success" />
            </div>
        );
    }
    

    if (error) {
        return (
            <Row>
                <Col>
                    <Alert variant="danger">{error}</Alert>
                </Col>
            </Row>
        );
    }

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
                                        <Card.Title as="h4">{temperature} °C</Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="bg-muted">
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
                                        <i className="bi bi-cloud-fog2 text-warning"></i>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="state-sensor">
                                        <span className="state-title">Humidity</span>
                                        <Card.Title as="h4">{humidity} %</Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="bg-muted">
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
