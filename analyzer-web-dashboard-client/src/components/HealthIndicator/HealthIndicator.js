import React from "react";
import {Card, Table, Row, Col} from "react-bootstrap";
import '../../assets/css/Dashboard.css';

function HealthIndicator() {
    return (
        <>
            <Card Style={"margin-top:5%;height:550px;"}>
                <Card.Header>
                    <Card.Title as="h4">Plant Health</Card.Title>
                    <Col className="md-6 pt-3">
                        <i className="bi bi-square-fill text-success mx-2"></i> Healthy
                        <i className="bi bi-square-fill text-muted mx-2"></i> Early Blight
                        <i className="bi bi-square-fill text-danger mx-2"></i> Powder Mildew
                        <i className="bi bi-square-fill text-warning mx-2"></i> Yellow Leaf Curl Virus
                    </Col>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Table className="table-hover table-bordered text-center mt-2">
                                <thead>
                                <tr>
                                    <th className="bg-light">Plant ID</th>
                                    <th className="bg-light">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>P - 1</td>
                                    <td><i class="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 2</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 3</td>
                                    <td><i className="bi bi-square-fill text-info"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 4</td>
                                    <td><i className="bi bi-square-fill text-danger"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 5</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 6</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 7</td>
                                    <td><i className="bi bi-square-fill text-warning"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 8</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 9</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
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
