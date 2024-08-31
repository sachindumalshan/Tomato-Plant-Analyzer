import {
    React,
    Container,
    Row,
    Col,
    Card,
    SideBar,
    TopNavigation
} from '../components/Imports/imports';

function User() {
    const users = [
        {
            name: "Sachindu Malshan",
            email: "cst19035@std.uwu.ac.lk",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/150" // Replace with actual image URL
        },
        {
            name: "Denuwan Yasodhana",
            email: "cst19031@std.uwu.ac.lk",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/150" // Replace with actual image URL
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
                        <Row className="justify-content-around">
                            {users.map((user, index) => (
                                <Col lg="4" md="6" className="mb-4" key={index}>
                                    <Card className="h-100 text-center">
                                        <Card.Img variant="top" src={user.image} alt={user.name} />
                                        <Card.Body>
                                            <Card.Title>{user.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                                            <Card.Text>{user.description}</Card.Text>
                                        </Card.Body>
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
