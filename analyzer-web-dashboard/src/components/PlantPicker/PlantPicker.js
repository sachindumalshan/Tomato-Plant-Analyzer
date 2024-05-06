import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import '../../assets/css/Dashboard.css';

function PlantPicker() {
    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title as="h4"><i className="fas fa-seedling text-success mr-2"></i> Plant Selector</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row className="justify-content-between mx-1 my-2">
                        <Button className="plant-button" variant="success">P - 1</Button>{' '}
                        <Button className="plant-button" variant="success">P - 2</Button>{' '}
                        <Button className="plant-button" variant="success">P - 3</Button>{' '}
                        <Button className="plant-button" variant="success">P - 4</Button>{' '}
                    </Row>
                    <Row className="justify-content-between mx-1 my-3">
                        <Button className="plant-button" variant="success">P - 5</Button>{' '}
                        <Button className="plant-button" variant="success">P - 6</Button>{' '}
                        <Button className="plant-button" variant="success">P - 7</Button>{' '}
                        <Button className="plant-button" variant="success">P - 8</Button>{' '}
                    </Row>
                    <Row className="justify-content-between mx-1 my-3">
                        <Button className="plant-button" variant="success">P - 9</Button>{' '}
                        <Button className="plant-button" variant="success">P - 10</Button>{' '}
                        <Button className="plant-button" variant="success">P - 11</Button>{' '}
                        <Button className="plant-button" variant="success">P - 12</Button>{' '}
                    </Row>
                    <Row className="justify-content-between mx-1 my-2">
                        <Button className="plant-button" variant="success">P - 13</Button>{' '}
                        <Button className="plant-button" variant="success">P - 14</Button>{' '}
                        <Button className="plant-button" variant="success">P - 15</Button>{' '}
                        <Button className="plant-button" variant="success">P - 16</Button>{' '}
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default PlantPicker;
