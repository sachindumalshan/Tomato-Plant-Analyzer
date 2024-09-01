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
                        <Row className="my-2 justify-content-around">                            
                            <Col md="6">
                                <StateIndicator/>
                                <HealthIndicator/>
                            </Col>
                            <Col md="5">
                                <PlantPicker/>
                            </Col>                                                    
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


export default Dashboard;
