import {
    React,
    Container,
    Row,
    Col,
    SideBar,
    TopNavigation
} from '../components/Imports/imports';
import TomatoOne from '../assets/img/young-tomato-plant-1.jpg';
import TomatoTwo from '../assets/img/young-tomato-plant-2.jpg';
import TomatoThree from '../assets/img/young-tomato-plant-3.jpg';
import TomatoFour from '../assets/img/young-tomato-plant-4.jpg';
import TomatoFive from '../assets/img/young-tomato-plant-5.jpg';
import {Image} from "react-bootstrap";

function PlantDetail() {
    return(
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
                        <Row>
                            <Col lg="2"></Col>
                            <Col lg="8">
                                <div style={{backgroundColor:'rgb(238, 238, 238)'}} className='rounded'>
                                    <h3 className="text-center pt-2 pb-4 ">Tomato Plant Details</h3>
                                </div>
                            </Col>                            
                            <Col lg="2"></Col>
                        </Row>
                        <Row>
                            <Col lg="2"></Col>
                            <Col lg="4">
                                <Image className="my-4 rounded" src={TomatoOne} Style={"width:100%;"}/>
                                <Image className="my-4 rounded" src={TomatoTwo} Style={"width:100%;"}/>
                            </Col>
                            <Col lg="4">
                            <Row className="my-4">
                                <Col>
                                <h3>Seed Germination</h3>
                                <ul>
                                    <li><strong>Timeline:</strong> 5-10 days after sowing.</li>
                                    <li><strong>Conditions:</strong> Warm, humid environment (70-80°F / 21-27°C).</li>
                                    <li><strong>Process:</strong> Seeds are sown in trays with fine, well-draining seed-starting mix, kept moist but not waterlogged.</li>
                                </ul>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                <h3>Seedling Growth</h3>
                                <ul>
                                    <li><strong>Timeline:</strong> 2-4 weeks.</li>
                                    <li><strong>Light:</strong> 12-16 hours of light per day.</li>
                                    <li><strong>Watering:</strong> Keep soil moist but not soggy; avoid overwatering.</li>
                                    <li><strong>Temperature:</strong> 65-75°F (18-24°C) during the day, slightly cooler at night.</li>
                                    <li><strong>Fertilization:</strong> Weak, balanced liquid fertilizer after first true leaves appear.</li>
                                </ul>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                <h3>Hardening Off</h3>
                                <ul>
                                    <li><strong>Timeline:</strong> 7-10 days before transplanting.</li>
                                    <li><strong>Process:</strong> Gradually acclimate seedlings to outdoor conditions by increasing their exposure to sunlight and wind.</li>
                                </ul>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                <h3>Transplanting</h3>
                                <ul>
                                    <li><strong>Timeline:</strong> 4-6 weeks after sowing.</li>
                                    <li><strong>Root Development:</strong> Well-developed root system with strong, healthy stems.</li>
                                    <li><strong>Plant Height:</strong> 6-10 inches tall with at least two sets of true leaves.</li>
                                    <li><strong>Spacing:</strong> 18-24 inches apart depending on variety.</li>
                                </ul>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                <h3>Common Practices</h3>
                                <ul>
                                    <li><strong>Thinning:</strong> Remove weaker seedlings to ensure the strongest continue growing.</li>
                                    <li><strong>Support:</strong> Begin staking or caging to support growing plants.</li>
                                    <li><strong>Pest Management:</strong> Watch for aphids, whiteflies, and other pests; manage accordingly.</li>
                                </ul>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                <h3>Health Indicators</h3>
                                <ul>
                                    <li><strong>Healthy Seedlings:</strong> Vibrant green leaves and sturdy stems.</li>
                                    <li><strong>Growth Rate:</strong> Steady growth with new leaves appearing regularly.</li>
                                    <li><strong>Issues:</strong> Yellowing or wilting may indicate problems with watering, light, or nutrition.</li>
                                </ul>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                        <Row>
                            <Col lg="2"></Col>
                            <Col lg="8">
                                <div style={{backgroundColor:'rgb(238, 238, 238)'}} className='rounded'>
                                    <h3 className="text-center pt-2 pb-4 ">Plant Diseases Details</h3>
                                </div>
                            </Col>                            
                            <Col lg="2"></Col>
                        </Row>
                        <Row className="mt-5">
                            <Col lg="2"></Col>
                            <Col lg="4">
                                <Image src={TomatoThree} Style={"width:100%;"}/>
                            </Col>
                            <Col lg="4">
                                <h3>Powdery Mildew</h3>
                                <ul>
                                    <li><strong>Symptoms:</strong> 
                                    <ul>
                                        <li>White, powdery spots on leaves, stems, and sometimes fruit.</li>
                                        <li>Infected leaves may curl, turn yellow, and drop prematurely.</li>
                                    </ul>
                                    </li>
                                    <li><strong>Conditions Favoring Disease:</strong> 
                                    <ul>
                                        <li>Warm, dry conditions with high humidity.</li>
                                        <li>Overcrowded plants with poor air circulation.</li>
                                    </ul>
                                    </li>
                                    <li><strong>Impact:</strong> 
                                    <ul>
                                        <li>Reduced photosynthesis due to leaf damage.</li>
                                        <li>Weakened plants, leading to lower yields.</li>
                                    </ul>
                                    </li>                                    
                                </ul>             
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                        <Row className="mt-5">
                            <Col lg="2"></Col>
                            <Col lg="4">
                                <Image src={TomatoFour} Style={"width:100%;"}/>
                            </Col>
                            <Col lg="4">
                                <h3>Yellow Leaf Curl Virus</h3>
                                <ul>
                                    <li><strong>Symptoms:</strong> 
                                    <ul>
                                        <li>Leaves turn yellow and curl upwards.</li>
                                        <li>Stunted plant growth and reduced fruit production.</li>
                                        <li>Flowers may drop before fruit sets.</li>
                                    </ul>
                                    </li>
                                    <li><strong>Conditions Favoring Disease:</strong> 
                                    <ul>
                                        <li>Spread by whiteflies, especially in warm, tropical climates.</li>
                                        <li>Overcrowding and poor plant management.</li>
                                    </ul>
                                    </li>
                                    <li><strong>Impact:</strong> 
                                    <ul>
                                        <li>Severely reduces yield by affecting the plant's ability to photosynthesize and grow.</li>
                                        <li>Infected plants often produce little to no fruit.</li>
                                    </ul>
                                    </li>                                    
                                </ul>  
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col lg="2"></Col>
                            <Col lg="4">
                                <Image src={TomatoFive} Style={"width:100%;"}/>
                            </Col>
                            <Col lg="4">
                                <h3>Early Blight</h3>
                                <ul>
                                    <li><strong>Symptoms:</strong> 
                                    <ul>
                                        <li>Dark, concentric spots on older leaves, often surrounded by a yellow halo.</li>
                                        <li>Leaves eventually turn brown and drop off, starting from the bottom of the plant.</li>
                                        <li>Dark, sunken lesions on stems and fruit.</li>
                                    </ul>
                                    </li>
                                    <li><strong>Conditions Favoring Disease:</strong> 
                                    <ul>
                                        <li>Warm temperatures with high humidity or prolonged leaf wetness.</li>
                                        <li>Overhead watering and dense plant canopies.</li>
                                    </ul>
                                    </li>
                                    <li><strong>Impact:</strong> 
                                    <ul>
                                        <li>Defoliation leads to reduced photosynthesis, weakening the plant.</li>
                                        <li>Can result in sunscald on exposed fruit due to loss of foliage.</li>
                                    </ul>
                                    </li>                                    
                                </ul>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                    
                        {/* <Row>
                            <Col lg="2"></Col>
                            <Col lg="4"></Col>
                            <Col lg="4"></Col>
                            <Col lg="2"></Col>
                        </Row>                         */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}



export default PlantDetail;