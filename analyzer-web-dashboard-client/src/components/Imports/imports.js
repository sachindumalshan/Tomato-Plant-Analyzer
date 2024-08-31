// imports.js
import React from "react";
import { Badge, Button, Card, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/Dashboard.css';

// Import all your components here
import PlantAreaGrowth from "../../components/PlantAreaGrowth/PlantAreaGrowth";
import PlantHeightGrowth from "../../components/PlantHeightGrowth/PlantHeightGrowth";
import PlantColorLevel from "../../components/PlantColorLevel/PlantColorLevel";
import PlantSoilMoistureLevel from "../../components/PlantSoilMoistureLevel/PlantSoilMoistureLevel";
import StateIndicator from "../../components/StateIndicator/StateIndicator";
import SideBar from "../../components/SideBar/SideBar";
import PlantPicker from "../../components/PlantPicker/PlantPicker";
import HealthIndicator from "../../components/HealthIndicator/HealthIndicator";
import TopNavigation from "../TopNavigation/TopNavigation";
import PlantImages from "../../components/PlantImages/PlantImages";

export {
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
    TopNavigation,
    PlantImages
};
