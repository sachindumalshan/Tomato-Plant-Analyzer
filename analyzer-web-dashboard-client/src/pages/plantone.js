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
    TopNavigation,
    PlantImages
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
                        <h2>Sensor Data for Plant One</h2>

                        <br></br>                    
                        <Table striped bordered hover>
                          <thead>
                            {/* <tr>
                              <th>Timestamp</th>
                              <th>ID</th>
                              <th>Data</th>
                            </tr> */}
                          </thead>
                          <tbody>
                            {heightData.map((item) => {
                              const heightValue = parseFloat(item.data.split('Height:')[1]);
                              extractedHeights.push(heightValue); // Collect the height values
                              // return (
                              //   <tr key={item._id}>
                              //     <td>{new Date(item.timestamp).toLocaleString()}</td>
                              //     <td>{item._id}</td>
                              //     <td>{item.data}</td>
                              //   </tr>
                              // );
                            })}
                        </tbody>
                        </Table>

                        <PlantHeightGrowth extractedHeights={extractedHeights} heightData={heightData}/>

                        <br></br>                    
                        <Table striped bordered hover>
                          <thead>
                            {/* <tr>
                              <th>Timestamp</th>
                              <th>ID</th>
                              <th>Data</th>
                            </tr> */}
                          </thead>
                          <tbody>
                            {areaData.map((item) => {
                              const areaValue = parseFloat(item.data.split('Area:')[1]);
                              extractedAreas.push(areaValue); // Collect the height values
                              // return (
                              //   <tr key={item._id}>
                              //     <td>{new Date(item.timestamp).toLocaleString()}</td>
                              //     <td>{item._id}</td>
                              //     <td>{item.data}</td>
                              //   </tr>
                              // );
                            })}
                        </tbody>
                        </Table>

                        <PlantAreaGrowth extractedAreas={extractedAreas} areaData={areaData}/>

                        {/* <br></br>                    
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Timestamp</th>
                              <th>ID</th>
                              <th>Data</th>
                            </tr>
                          </thead>
                          <tbody>
                            {areaData.map((item) => {
                              const stateValue = parseFloat(item.data.split('State:')[1]);
                              extractedStates.push(stateValue); // Collect the height values
                              return (
                                <tr key={item._id}>
                                  <td>{new Date(item.timestamp).toLocaleString()}</td>
                                  <td>{item._id}</td>
                                  <td>{item.data}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                        </Table>

                        <PlantState extractedStates={extractedStates} stateData={stateData}/> */}
                        
                        <br></br>                    
                        <Table striped bordered hover>
                          <thead>
                            {/* <tr>
                              <th>Timestamp</th>
                              <th>ID</th>
                              <th>Data</th>
                            </tr> */}
                          </thead>
                          <tbody>
                            {soilData.map((item) => {
                              const soilValue = parseFloat(item.data.split('Soil:')[1]);
                              extractedSoils.push(soilValue); // Collect the height values
                              // return (
                              //   <tr key={item._id}>
                              //     <td>{new Date(item.timestamp).toLocaleString()}</td>
                              //     <td>{item._id}</td>
                              //     <td>{item.data}</td>
                              //   </tr>
                              // );
                            })}
                        </tbody>
                        </Table>

                        <PlantSoilMoistureLevel extractedSoils={extractedSoils} soilData={soilData}/>

                        <br></br>        
                        <Table striped bordered hover>
                        <thead>
                            {/* <tr>
                              <th>Timestamp</th>
                              <th>ID</th>
                              <th>Data</th>
                            </tr> */}
                          </thead>
                          <tbody>
                            {/* {imagesData.map((item) => (
                              <tr key={item._id}>
                                <td>{item.filename}</td>
                                <td><img src={`data:image/png;base64,${item.image_data}`} alt="Plant" style={{ width: '100px' }} /></td>
                                <td>{new Date(item.timestamp).toLocaleString()}</td>
                              </tr>
                            ))} */}
                          </tbody>
                        </Table>

                        <PlantImages imagesData={imagesData} />
                        
                        </Col>
                        <Col md="1"></Col>                      
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
);
};

export default PlantOne;
