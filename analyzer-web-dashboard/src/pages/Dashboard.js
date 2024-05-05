import {
    React,
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
    PlantAreaGrowth,
    PlantHeightGrowth,
    PlantColorLevel,
    PlantSoilMoistureLevel,
    StateIndicator,
    SideBar,
    PlantPicker,
    HealthIndicator,
    TopNavigation
} from '../components/Imports/imports';

function Dashboard() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="2" className="bg-dark text-white">
                        <Row>
                            <SideBar/>
                        </Row>
                    </Col>
                    <Col lg="10">
                        <Row>
                            <TopNavigation/>
                            <hr className="mt-2"/>
                        </Row>
                        <Row className="my-2">
                            <StateIndicator/>
                        </Row>
                        <Row className="my-5">
                            <Col md="4">
                                <PlantPicker/>
                            </Col>

                            <Col md="8">
                                <HealthIndicator/>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-4">
                            <Col md="6">
                                <PlantAreaGrowth/>
                            </Col>
                            <Col md="6">
                                <PlantHeightGrowth/>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col md="6">
                                <PlantColorLevel/>
                            </Col>
                            <Col md="6">
                                <PlantSoilMoistureLevel/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;
