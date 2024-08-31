import React, { useState, useEffect } from 'react';
import {
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
  PlantImages,
} from '../components/Imports/imports';
import axios from 'axios';
import {Spinner, Alert } from 'react-bootstrap';

const PlantNine = () => {
  const [heightData, setHeightData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [soilData, setSoilData] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heightResponse = await axios.get('http://localhost:5000/api/height');
        const areaResponse = await axios.get('http://localhost:5000/api/area');
        const statusResponse = await axios.get('http://localhost:5000/api/status');
        const soilResponse = await axios.get('http://localhost:5000/api/soil');
        const imagesResponse = await axios.get('http://localhost:5000/api/images');

        // Filter data to include only entries that start with 'P1'
        const filteredHeightData = heightResponse.data.filter(item => item.data.startsWith('P9|Height:'));
        const filteredAreaData = areaResponse.data.filter(item => item.data.startsWith('P9|Area:'));
        const filteredStatusData = statusResponse.data.filter(item => item.data.startsWith('P9|Status:'));
        const filteredSoilData = soilResponse.data.filter(item => item.data.startsWith('P9|Soil:'));
        const filteredImageData = imagesResponse.data.filter(item => item.filename.startsWith('image_9.jpg'));

        setHeightData(filteredHeightData);
        setAreaData(filteredAreaData);
        setStatusData(filteredStatusData);
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

  const extractedHeights = [];
  const extractedAreas = [];
  const extractedStates = [];
  const extractedSoils = [];

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
            <Row className="my-4">
              <Col md="1"></Col>
              <Col md="10">

                <h1>Plant Nine Details</h1>
                <br></br>
                <Card className="mb-4">
                  <Card.Header className="bg-success">
                    <Card.Title as="h5">
                      <i className="fas fa-chart-line text-white mr-2"></i><span className='text-white'>Plant Health Status</span>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-4 mt-2">
                      <label>START DATE:</label>
                      <input
                        type="date"
                        value={startDate}
                        placeholder=''
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mx-2"
                      />
                      {' '}
                      <label className="mx-2">END DATE:</label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="ml-2"
                      />
                    </div>
                    <Table bordered hover>
                      <thead>
                        <tr>                            
                          <th className='bg-dark text-white'>Date</th>
                          <th className='bg-dark text-white'>Status</th>
                          <th className='bg-dark text-white'>Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {statusData
                          .filter((item) => {
                            const itemDate = new Date(item.timestamp).toISOString().split('T')[0];
                            return (
                              (!startDate || itemDate >= startDate) &&
                              (!endDate || itemDate <= endDate)
                            );
                          })
                          .map((item) => {
                            const stateValue = parseFloat(item.data.split('State:')[1]);
                            extractedStates.push(stateValue); // Collect the state values
                            return (
                              <tr key={item._id}>
                                <td>{new Date(item.timestamp).toLocaleDateString()}</td>
                                <td>{item.data.split('|')[1].split(':')[1]}</td>
                                <td>{item.data.split('|')[2]}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                    <br></br>
                    <PlantImages imagesData={imagesData} />
                  </Card.Body>
                </Card>                

                <br></br>                    
                <Table striped bordered hover>
                  <thead></thead>
                  <tbody>
                    {heightData.map((item) => {
                      const heightValue = parseFloat(item.data.split('Height:')[1]);
                      extractedHeights.push(heightValue); // Collect the height values
                    })}
                  </tbody>
                </Table>

                <PlantHeightGrowth extractedHeights={extractedHeights} heightData={heightData}/>

                <br/>                    
                <Table striped bordered hover>
                  <thead></thead>
                  <tbody>
                    {areaData.map((item) => {
                      const areaValue = parseFloat(item.data.split('Area:')[1]);
                      extractedAreas.push(areaValue); // Collect the area values
                    })}
                  </tbody>
                </Table>

                <PlantAreaGrowth extractedAreas={extractedAreas} areaData={areaData}/>

                <br/>                                          
                <Table striped bordered hover>
                  <thead></thead>
                  <tbody>
                    {soilData.map((item) => {
                      const soilValue = parseFloat(item.data.split('Soil:')[1]);
                      extractedSoils.push(soilValue); // Collect the soil moisture values
                    })}
                  </tbody>
                </Table>

                <PlantSoilMoistureLevel extractedSoils={extractedSoils} soilData={soilData}/>
                
              </Col>
              <Col md="1"></Col>                      
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlantNine;
