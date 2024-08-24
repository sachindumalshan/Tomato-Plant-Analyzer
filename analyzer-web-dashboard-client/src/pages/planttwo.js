import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';

const PlantTwo = () => {
  const [heightData, setHeightData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [soilData, setSoilData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heightResponse = await axios.get('http://localhost:5000/api/height');
        const areaResponse = await axios.get('http://localhost:5000/api/area');
        const soilResponse = await axios.get('http://localhost:5000/api/soil');
        const tempResponse = await axios.get('http://localhost:5000/api/temp');
        const imagesResponse = await axios.get('http://localhost:5000/api/images');

        setHeightData(heightResponse.data);
        setAreaData(areaResponse.data);
        setSoilData(soilResponse.data);
        setTempData(tempResponse.data);
        setImagesData(imagesResponse.data);
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
      <h2>Sensor Data 2</h2>
      
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

      <h3>Temperature</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Timestamp</th>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {tempData.map((item) => (
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

export default PlantTwo;
