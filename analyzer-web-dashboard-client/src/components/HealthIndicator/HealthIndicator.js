import React, { useState, useEffect } from "react";
import { Card, Table, Row, Col, Spinner, Alert} from "react-bootstrap";
import axios from "axios";
import '../../assets/css/Dashboard.css';

function HealthIndicator() {
    const [plantData, setPlantData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlantStatus = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/status');
                console.log("API Response:", response.data);

                if (Array.isArray(response.data) && response.data.length > 0) {
                    const latestDataByPlant = response.data.reduce((acc, curr) => {
                        const [plantId, status, percentage] = curr.data.split('|');
                        const parsedStatus = status.split(':')[1].trim();
                        const parsedPercentage = parseFloat(percentage);

                        const plantKey = plantId.trim();

                        // If plant ID is already in accumulator, only keep the latest entry
                        if (!acc[plantKey] || new Date(curr.timestamp) > new Date(acc[plantKey].timestamp)) {
                            acc[plantKey] = {
                                plantId: plantKey,
                                status: parsedStatus,
                                percentage: parsedPercentage || 0,
                                timestamp: curr.timestamp,
                            };
                        }
                        return acc;
                    }, {});

                    setPlantData(Object.values(latestDataByPlant));
                } else {
                    console.error("Unexpected data format:", response.data);
                    setError("Unexpected data format received");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError('Error fetching plant health status data');
            } finally {
                setLoading(false);
            }
        };

        fetchPlantStatus();
    }, []);

    const getRiskLevelIndicator = (status) => {
        if (status.toLowerCase() === "healthy") {
            return <i className="bi bi-circle-fill text-success fs-6 mx-2"></i>;
        }else if (status.toLowerCase() === "early blight") {
            return <i className="bi bi-circle-fill text-danger fs-6 mx-2"></i>;
        } else if (status.toLowerCase() === "yellow leaf curl virus") {
            return <i className="bi bi-circle-fill text-warning fs-6 mx-2"></i>;
        } else if (status.toLowerCase() === "powder mildew"){
            return <i className="bi bi-circle-fill text-primary fs-6 mx-2"></i>;
        }
    };

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh', // Makes the div take up the full viewport height
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
            <Card style={{ marginTop: "5%", height: "550px" }}>
                <Card.Header>
                    <Card.Title as="h4" className="d-flex justify-content-between align-items-center">
                        <span>Plant Health</span>
                        <Col className="d-flex justify-content-end">
                            <i className="bi bi-circle-fill text-success fs-6 mx-2"></i><span className="fs-6">Healthy</span>
                            <i className="bi bi-circle-fill text-primary fs-6 mx-2"></i><span className="fs-6">Powder Mildew</span>
                            <i className="bi bi-circle-fill text-warning fs-6 mx-2"></i><span className="fs-6">Yellow Leaf Curl Virus</span>
                            <i className="bi bi-circle-fill text-danger fs-6 mx-2"></i><span className="fs-6">Early Blight</span>
                        </Col>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Table className="table-hover table-bordered text-center mt-2">
                                <thead>
                                    <tr>
                                        <th className="bg-light">Plant ID</th>
                                        <th className="bg-light">Health Status</th>
                                        <th className="bg-light">Indicator</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plantData.map((plant) => (
                                        <tr key={plant.plantId}>
                                            <td>{plant.plantId}</td>
                                            <td>{plant.status}</td>
                                            <td>{getRiskLevelIndicator(plant.status)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default HealthIndicator;
