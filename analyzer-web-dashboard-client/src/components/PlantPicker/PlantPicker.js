import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../../assets/css/Dashboard.css';

function PlantPicker() {
    const navigate = useNavigate();

    const handleButtonClick = (plantNumber) => {
        navigate(`/plant${plantNumber}`);
    };

    return (
        <Card>
            <Card.Header>
                <Card.Title as="h4"><i className="fas fa-seedling text-success mr-2"></i> Plant Selector</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row className="justify-content-between mx-1 my-2">
                    <Button className="plant-button" onClick={() => handleButtonClick('one')}>P-1</Button>{' '}
                    <Button className="plant-button" onClick={() => handleButtonClick('four')}>P-4</Button>{' '}
                    <Button className="plant-button" onClick={() => handleButtonClick('seven')}>P-7</Button>{' '}
                </Row>
                <Row className="justify-content-between mx-1 my-3">
                    <Button className="plant-button" onClick={() => handleButtonClick('two')}>P-2</Button>{' '}
                    <Button className="plant-button" onClick={() => handleButtonClick('five')}>P-5</Button>{' '}
                    <Button className="plant-button" onClick={() => handleButtonClick('eight')}>P-8</Button>{' '}
                </Row>
                <Row className="justify-content-between mx-1 my-3">
                    <Button className="plant-button" onClick={() => handleButtonClick('three')}>P-3</Button>{' '}
                    <Button className="plant-button" onClick={() => handleButtonClick('six')}>P-6</Button>{' '}
                    <Button className="plant-button" onClick={() => handleButtonClick('nine')}>P-9</Button>{' '}
                </Row>
            </Card.Body>
        </Card>
    );
}

export default PlantPicker;
