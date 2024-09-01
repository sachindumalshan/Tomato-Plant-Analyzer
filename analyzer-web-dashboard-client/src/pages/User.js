import {
    React,
    Container,
    Row,
    Col,
    Card,
    SideBar,
    TopNavigation
} from '../components/Imports/imports';
import UserOne from '../assets/img/sachindu_malshan.jpg';
import UserTwo from '../assets/img/denuwan_yashodana.jpg';

function User() {
    const users = [
        {
            name: "Sachindu Malshan",
            email: "cst19035@std.uwu.ac.lk",
            description: "Contribution:",
            image: UserOne
        },
        {
            name: "Denuwan Yashodana",
            email: "cst19031@std.uwu.ac.lk",
            description: "Contribution:",
            image: UserTwo
        }
    ];

    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="2" className="bg-dark text-white">
                        <Row>
                            <SideBar />
                        </Row>
                    </Col>
                    <Col lg="10">
                        <Row>
                            <TopNavigation />
                            <hr className="mt-2" />
                        </Row>
                        <Row className="my-4">
                            {users.map((user, index) => (
                                <Col lg="7" key={index} className="mb-4">
                                    <Card className="h-100 mx-4">
                                        <Row className="g-0">
                                            <Col md="4">
                                                <Card.Img variant="top" src={user.image} alt={user.name} style={{ width: '100%', height: 'auto' }} />
                                            </Col>
                                            <Col md="8">
                                                <Card.Body className="d-flex flex-column justify-content-center">
                                                    <Card.Title>{user.name}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                                                    <hr></hr>
                                                    <Card.Text>{user.description}</Card.Text>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default User;
