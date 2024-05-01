import React from "react";
import { Badge, Button, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import '../assets/css/Dashboard.css';

function Dashboard() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="2" className="bg-dark text-white">
                        Dashboard<br/>
                        User<br/>
                        Settings
                    </Col>
                    <Col lg="10">
                        <Row>
                            <div className="h-50">sfs</div>
                        </Row>
                        <Row>
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
                                                <div className="numbers">
                                                    <p className="card-category">Temperature</p>
                                                    <Card.Title as="h4">37.5 °C</Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr></hr>
                                        <div className="stats">
                                            <i className="far fa-clock mr-1"></i>
                                            Updated now
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
                                                <div className="numbers">
                                                <p className="card-category">Humidity</p>
                                                    <Card.Title as="h4">87.8</Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr></hr>
                                        <div className="stats">
                                            <i className="far fa-clock mr-1"></i>
                                            Updated now
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
                                                <div className="numbers">
                                                <p className="card-category">Water Pump</p>
                                                    <Card.Title as="h4">ON/OFF</Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr></hr>
                                        <div className="stats">
                                            <i className="fas fa-history mr-1"></i>
                                            In the last hour
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
                                                <div className="numbers">
                                                <p className="card-category">Lumosense</p>
                                                    <Card.Title as="h4">20.5</Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr></hr>
                                        <div className="stats">
                                            <i className="far fa-clock mr-1"></i>
                                            Updated hour ago
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="4">
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h4"><i className="fas fa-seedling text-success mr-2"></i> Greenery Picker</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="justify-content-between mx-1 my-3">
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-1</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-2</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-3</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-4</Button>
                                        </Row>
                                        <Row className="justify-content-between mx-1 my-3">
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-5</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-6</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-7</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-8</Button>
                                        </Row>
                                        <Row className="justify-content-between mx-1 my-3">
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-9</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-10</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-11</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-12</Button>
                                        </Row>
                                        <Row className="justify-content-between mx-1 my-3">
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-13</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-14</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-15</Button>
                                            <Button Style={"width:100px;height:100px"} className="btn-fill pull-right" type="submit" variant="success" >P-16</Button>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="8">
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h4"><i className="fas fa-laptop-medical text-danger mr-3"></i> Plant Health</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="my-3">
                                            <Col md="6">
                                                <Table className="table-hover table-bordered text-center">
                                                    <thead className="thead-light">
                                                    <tr>
                                                        <th className="border-0">Plant ID</th>
                                                        <th className="border-0">Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>P - 01</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 02</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 03</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 04</td>
                                                        <td> <span className="bg-danger rounded py-1 px-2 text-white ">Critical</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 05</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 06</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 07</td>
                                                        <td> <span className="bg-warning rounded py-1 px-2 text-white ">Stressed</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 08</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col md="6">
                                                <Table className="table-hover table-bordered text-center">
                                                    <thead className="thead-light">
                                                    <tr>
                                                        <th className="border-0">Plant ID</th>
                                                        <th className="border-0">Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>P - 09</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 10</td>
                                                        <td> <span className="bg-info rounded py-1 px-2 text-white ">Healthy</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 11</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 12</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 13</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 14</td>
                                                        <td> <span className="bg-info rounded py-1 px-2 text-white ">Healthy</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 15</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>P - 16</td>
                                                        <td> <span className="bg-success rounded py-1 px-2 text-white ">optimal</span> </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h4"><i className="fas fa-chart-line text-success mr-2"></i> Plant Growth</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="ct-chart" id="chartHours">
                                            {/*<ChartistGraph*/}
                                            {/*    data={{*/}
                                            {/*        labels: [*/}
                                            {/*            "Day-01", "Day-02", "Day-03", "Day-04", "Day-05", "Day-06", "Day-07", "Day-08", "Day-09", "Day-10", "Day-11", "Day-12", "Day-13", "Day-14", "Day-15", "Day-16", "Day-17", "Day-18", "Day-19", "Day-20", "Day-21",*/}
                                            {/*        ],*/}
                                            {/*        series: [*/}
                                            {/*            [287, 385, 490, 492, 554, 586, 698, 695, 67, 152, 143, 240, 287, 335, 435, 437, 23, 113, 67, 108, 190, 200],*/}
                                            {/*            [67, 152, 143, 240, 287, 335, 435, 437,23, 113, 67, 108, 190, 239, 307, 308,287, 385, 490, 492, 554, 500],*/}
                                            {/*            [23, 113, 67, 108, 190, 239, 307, 308, 287, 385, 490, 492, 554, 586, 698, 695,67, 152, 143, 240, 287, 700],*/}
                                            {/*        ],*/}
                                            {/*    }}*/}
                                            {/*    type="Line"*/}
                                            {/*    options={{*/}
                                            {/*        low: 0,*/}
                                            {/*        high: 800,*/}
                                            {/*        showArea: false,*/}
                                            {/*        height: "245px",*/}
                                            {/*        axisX: {*/}
                                            {/*            showGrid: false,*/}
                                            {/*        },*/}
                                            {/*        lineSmooth: true,*/}
                                            {/*        showLine: true,*/}
                                            {/*        showPoint: true,*/}
                                            {/*        fullWidth: true,*/}
                                            {/*        chartPadding: {*/}
                                            {/*            right: 50,*/}
                                            {/*        },*/}
                                            {/*    }}*/}
                                            {/*    responsiveOptions={[*/}
                                            {/*        [*/}
                                            {/*            "screen and (max-width: 640px)",*/}
                                            {/*            {*/}
                                            {/*                axisX: {*/}
                                            {/*                    labelInterpolationFnc: function (value) {*/}
                                            {/*                        return value[0];*/}
                                            {/*                    },*/}
                                            {/*                },*/}
                                            {/*            },*/}
                                            {/*        ],*/}
                                            {/*    ]}*/}
                                            {/*/>*/}
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="legend">
                                            <i className="fas fa-circle text-danger"></i>
                                            Diameter <i className="fas fa-circle text-primary"></i>
                                            Number of leaves <i className="fas fa-circle text-success"></i>
                                            Color
                                        </div>
                                        <hr></hr>
                                        <div className="stats">
                                            <i className="fas fa-history"></i>
                                            Updated 1 day ago
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;
