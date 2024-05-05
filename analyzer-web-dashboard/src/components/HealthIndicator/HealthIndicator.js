import React from "react";
import {Card, Table, Row, Col} from "react-bootstrap";
import '../../assets/css/Dashboard.css';

function HealthIndicator() {
    return (
        <>
            <Card Style={"height:551px;"}>
                <Card.Header>
                    <Card.Title as="h4"><i className="fas fa-laptop-medical text-danger mr-3"></i> Plant
                        Health</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md="6">
                            <Table className="table-hover table-bordered text-center mt-2">
                                <thead>
                                <tr>
                                    <th className="bg-light">Plant ID</th>
                                    <th className="bg-light">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>P - 01</td>
                                    <td><i class="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 02</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 03</td>
                                    <td><i className="bi bi-square-fill text-info"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 04</td>
                                    <td><i className="bi bi-square-fill text-danger"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 05</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 06</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 07</td>
                                    <td><i className="bi bi-square-fill text-warning"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 08</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md="6">
                            <Table className="table-hover table-bordered text-center mt-2">
                                <thead>
                                <tr>
                                    <th className="bg-light">Plant ID</th>
                                    <th className="bg-light">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>P - 09</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 10</td>
                                    <td><i className="bi bi-square-fill text-warning"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 11</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 12</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 13</td>
                                    <td><i className="bi bi-square-fill text-danger"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 14</td>
                                    <td><i className="bi bi-square-fill text-warning"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 15</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>P - 16</td>
                                    <td><i className="bi bi-square-fill text-success"></i></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="md-6 pt-3">
                            <i className="bi bi-square-fill text-success"></i> Optimal
                            <i className="bi bi-square-fill text-info mx-2"></i> Healthy
                            <i className="bi bi-square-fill text-warning mx-2"></i> Stressed
                            <i className="bi bi-square-fill text-danger mx-2"></i> Critical
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default HealthIndicator;
