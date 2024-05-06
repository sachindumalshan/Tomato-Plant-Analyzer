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

function AboutProject() {
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
                                <h3 className="text-center pt-2 pb-3">
                                    IoT Based Smart Plant Bed for Greenhouse Tomato Cultivation: Monitoring and
                                    Analyzing Plant Growth and Health in the Nursery Stage
                                </h3>
                                <div className="mt-4">
                                    <h4>Project Background</h4>
                                    <p className="para">
                                        The expansion of IoT-based smart solutions is steadily increasing in the modern
                                        world, offering resolutions to everyday challenges. This integration demands
                                        enabling control over embedded, robotic, or other systems through internet
                                        connectivity, granting access to individuals worldwide. Consequently, numerous
                                        systems across various domains leverage this technology. From the perspective of
                                        the agriculture sector, IoT can be employed to advance the development of
                                        machinery products and optimize crop harvesting. The focus lies on economically
                                        significant crops that contribute to national revenue, enhancing overall
                                        productivity in this sector.
                                    </p>
                                    <p className="para">
                                        In the context of our endeavors, the conceptualization of a smart pot has been
                                        undertaken, designed specifically for the cultivation of individual fruits,
                                        vegetables, or ornamental plants within indoor environments. Individuals seeking
                                        to engage in household planting activities may find the utilization of the smart
                                        pot particularly advantageous. This innovative container, of moderate size, is
                                        adaptable for placement on various surfaces, including tables. Notably, most
                                        smart pots are equipped with temperature, humidity, and soil moisture sensor
                                        modules, accompanied by LCD or LED displays. These sensors collect data,
                                        subsequently processed within the embedded development board, typically
                                        employing Arduino or ESP32 boards.
                                    </p>
                                    <p className="para">
                                        The processing involves the interpretation of sensor readings, displayed through
                                        the integrated LCD or LED screen. For instance, if the soil moisture level falls
                                        below a pre-assigned threshold, the display exhibits a sad emoji, signifying the
                                        need for watering. Conversely, a happy emoji is presented if the soil moisture
                                        level is within the desired range. Furthermore, these smart pots incorporate an
                                        automated watering system triggered in the event of water scarcity. In such
                                        systems, small containers with water obviate the necessity for manual watering,
                                        and water pumping is facilitated by a simple motor. Some models harness solar
                                        energy and battery power to drive these motors.
                                    </p>
                                    <p className="para">
                                        The functionality of these pots is basic, employing temperature, humidity, and
                                        soil moisture sensors. The microcontroller boards employed in these systems do
                                        not necessitate high efficiency or power. However, for the development of a
                                        refined product with enhanced accuracy and real-time data flow, a more
                                        sophisticated approach is imperative. It is important to note that the described
                                        smart pot is competent for singular plant cultivation, catering to ornamental
                                        purposes such as planting flowers. This methodology is also applicable in
                                        hydroponic smart plant pots, with the underlying processes remaining consistent
                                        with those of conventional smart pots.
                                    </p>
                                    <p className="para">
                                        Various crops exhibit distinct growth patterns, with some being influenced by
                                        environmental conditions while others are not. Consequently, detailed reflection
                                        of environmental parameters becomes imperative in agricultural practices. The
                                        growth of a plant is directly impacted by factors such as air quality, water
                                        availability, and soil conditions. Recent research indicates a direct
                                        correlation between elevated temperatures and diminished crop productivity, with
                                        apparent effects extending to seeds and insects. Researchers have ascertained
                                        that exercising control over environmental parameters can contribute to
                                        increased productivity to some extent. The concept of a greenhouse emerges as a
                                        solution, creating a closed system where environmental parameters can be
                                        manipulated to attain desired levels. In the contemporary era, there exists an
                                        Internet of Things (IoT)-based greenhouse environment, aligning with the
                                        principles of the smart pot concept. This system not only monitors and regulates
                                        environmental factors but also conducts an analysis of a selected plant.
                                        Notably, fuzzy logic is employed to assess the growth rate of the plants, adding
                                        a layer of sophistication to the monitoring and control mechanisms.
                                    </p>
                                    <p className="para">
                                        In order to optimize crop productivity, it is imperative to have a corresponding
                                        pot that aligns with the chosen crop. The enhancement of pot capabilities
                                        directly contributes to the automatic increase in crop productivity, contingent
                                        upon the specific crop selection. For instance, a crop with a small and compact
                                        root system necessitates a proportionately smaller pot, as it absorbs a minimal
                                        percentage of nitrogen from the soil. The management of nurseries for different
                                        crops may also vary based on the specific crop chosen. In the realm of crop
                                        agriculture, significant attention is often directed towards the nursery stage,
                                        given the challenges associated with disease prevention during this critical
                                        phase. It is noteworthy that disease prevention becomes particularly challenging
                                        once a crop is in its growth stage, emphasizing the importance of vigilance and
                                        proactive measures in the nursery stage. The susceptibility of one nursery plant
                                        to disease in this stage increases the likelihood of rapid dissemination to
                                        other plants.
                                    </p>
                                    <p className="para">
                                        The Tomato plant was selected for the project. It is a popular vegetable crop
                                        classified under the Solanaceae family and scientifically known as Solanum
                                        lycopersicum, encompasses various varieties, including HORDI Tomato hybrid 03,
                                        KWR, T245, Ravi, Lanka Sour (Goraka Takkali), Maheshi, KC 1, among others.
                                        Suited for cultivation in nearly all agro-climatic zones of Sri Lanka, except
                                        the upland wet zone, the Tomato plant is recognized for its rich content of
                                        vitamins A and C, as well as minerals. Given its economic significance and
                                        export potential, farmers exhibit a notable inclination towards greenhouse
                                        cultivation of tomatoes. In the domain of crop agriculture, considerable
                                        attention is directed to the nursery stage, particularly in the context of
                                        Tomato cultivation. This proactive approach is crucial as it is challenging to
                                        protect growing crops from diseases at later stages. The vulnerability of
                                        nursery plants to diseases in the nursery stage heightens the risk of rapid
                                        transmission to other plants. Diseases that can impact Tomato plants during the
                                        nursery stage include Early blight, Late blight, Target Spot of Tomato caused by
                                        Corynespora cassiicola, Powdery mildew, Bacterial wilt, Tomato Yellow Leaf Curl
                                        Virus (TYLCV), Curly Top Virus (CTV), Cucumber Mosaic Virus (CMV) and others.
                                    </p>
                                    <p className="para">
                                        In the context of our project's scope, emphasis is placed on the creation of
                                        plant beds where data is periodically read and transmitted to a database.
                                        Through the utilization of cutting-edge technologies, the data is then analyzed
                                        to ascertain the growth rate of crops and to identify the occurrence of diseases
                                        during the nursery stage.
                                    </p>
                                    <h4>Project Aims/Objectives</h4>
                                    <p className="para">
                                        <ul>
                                            <li>The identification and detection of morphological characteristics in tomato crops during the nursery stage, with a focus on precise measurements.
                                            </li>
                                            <li>
                                                Diseases that impact tomato nursery plants during the nursery stage are to be identified and detected, with the intention of employing a deep learning model to facilitate their recognition and classification.
                                            </li>
                                            <li>
                                                Develop a web dashboard that provides detailed insights into the growth and health of tomato plants during the nursery stage. Additionally, a set of suggestions will be provided based on the presented information, aiming to enhance the overall cultivation and well-being of the tomato plants.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutProject;