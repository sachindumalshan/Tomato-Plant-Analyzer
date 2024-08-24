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

import { useState, useEffect } from 'react';
import axios from 'axios';
import {Spinner, Alert } from 'react-bootstrap';

const PlantOne = () => {
  const [heightData, setHeightData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  //const [statusData, setStatusData] = useState([]);
  const [soilData, setSoilData] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heightResponse = await axios.get('http://localhost:5000/api/height');
        const areaResponse = await axios.get('http://localhost:5000/api/area');
        //const statusResponse = await axios.get('http://localhost:5000/api/status');
        const soilResponse = await axios.get('http://localhost:5000/api/soil');
        const imagesResponse = await axios.get('http://localhost:5000/api/images');

        // Filter data to include only entries that start with 'P1'
        const filteredHeightData = heightResponse.data.filter(item => item.data.startsWith('P1|Height:'));
        const filteredAreaData = areaResponse.data.filter(item => item.data.startsWith('P1|Area:'));
        //const filteredStatusData = statusResponse.data.filter(item => item.data.startsWith('P1|Status:'));
        const filteredSoilData = soilResponse.data.filter(item => item.data.startsWith('P1|Soil:'));
        const filteredImageData = imagesResponse.data.filter(item => item.filename.startsWith('image_1.jpg'));

        setHeightData(filteredHeightData);
        setAreaData(filteredAreaData);
        // setStatusData(filteredStatusData);
        setSoilData(filteredSoilData);
        setImagesData(filteredImageData); 
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Sensor Data for Plant One</h2>
      
      <h3>Plant Height</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {heightData.map((item) => (
            <tr key={item._id}>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
              <td>{item._id}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PlantHeightGrowth/>

      <h3>Plant Area</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {areaData.map((item) => (
            <tr key={item._id}>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
              <td>{item._id}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PlantAreaGrowth/>

      {/* <h3>Plant Status</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {areaData.map((item) => (
            <tr key={item._id}>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
              <td>{item._id}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}

      <h3>Soil Moisture</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {soilData.map((item) => (
            <tr key={item._id}>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
              <td>{item._id}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Plant Images</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Image</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {imagesData.map((item) => (
            <tr key={item._id}>
              <td>{item.filename}</td>
              <td><img src={`data:image/png;base64,${item.image_data}`} alt="Plant" style={{ width: '100px' }} /></td>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PlantOne;
