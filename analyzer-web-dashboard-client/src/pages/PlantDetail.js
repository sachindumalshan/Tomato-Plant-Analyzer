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
import TomatoPlant from '../assets/img/tomato-plant.png';
import TomatoLeave from '../assets/img/tomato-leave.png';
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
                            <h3 className="text-center pt-2 pb-4">
                                Tomato Plant Details
                            </h3>
                            <Col lg="2"></Col>
                            <Col lg="4">
                                <Image src={TomatoPlant} Style={"width:100%;"}/>
                                <Image src={TomatoLeave} Style={"width:90%;"}/>
                            </Col>
                            <Col lg="4" className="pt-4">
                                <p className="para">
                                    The tomato plant, scientifically known as Solanum lycopersicum, is a fascinating
                                    botanical wonder with a rich history and widespread cultivation. Originating from
                                    western South America, particularly the Andes region, it has been cultivated for
                                    thousands of years. Its journey from a wild berry-sized fruit to the diverse array
                                    of shapes, sizes, and colors we see today is a testament to human ingenuity in
                                    agriculture.
                                </p>
                                <p className="para">
                                    Tomato plants are incredibly adaptable, thriving in various climates, from the
                                    Mediterranean to tropical regions, and even in temperate zones with the right care.
                                    They typically have a bushy growth habit, though some, like certain heirloom
                                    varieties, display a more sprawling vine-like form. The leaves are usually dark
                                    green and pinnate, with small hairs covering stems and leaves that act as natural
                                    defenses against pests. These plants demand sunlight, warmth, and well-drained soil
                                    to produce their succulent fruit, which varies greatly in size, shape, and taste
                                    depending on the cultivar. From the sweet burst of cherry tomatoes to the robust
                                    flavor of beefsteak varieties, tomatoes enrich culinary traditions worldwide.
                                    Furthermore, beyond their culinary value, tomatoes are nutritional powerhouses,
                                    packed with vitamins, minerals, and antioxidants, supporting health and wellness in
                                    those who enjoy them.
                                </p>
                                <p className="para mt-5">
                                    Tomato leaves are an essential component of the tomato plant, vital for its growth and defense mechanisms. They typically have a rich, dark green color and are arranged in a pinnate pattern, consisting of several leaflets along a central stem. These leaflets are serrated along the edges and covered with tiny hairs, which serve to reduce water loss and deter pests.
                                </p>
                                <p className="para">
                                    Furthermore, tomato leaves contain alkaloids like tomatine, which act as natural defenses against herbivores. Despite their importance in photosynthesis, these leaves can be toxic if ingested in large quantities. However, when used properly, tomato leaves contribute to the overall health and vigor of the plant, ensuring successful fruit production.
                                </p>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}



export default PlantDetail;