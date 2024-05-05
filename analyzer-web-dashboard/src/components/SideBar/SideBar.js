import {React} from "../../components/Imports/imports";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Tomato from "../../assets/img/tomatologo.png";

function SideBar() {
    return (
        <>
            <div className="row flex-nowrap fixed-top">
                <Nav className="flex-column align-items-center align-items-sm-start text-white min-vh-100">

                    <Nav.Link href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline pt-3">
                            <img src={Tomato} Style={"width:10%;height:auto;"} alt=""/>
                            Tomato Analyzer</span>
                    </Nav.Link>
                    <hr/>
                    <Nav className="nav-pills flex-column align-items-center align-items-sm-start ms-2">

                        <Nav.Item>
                            <Nav.Link href="index1.html" className="text-white d-flex align-items-center py-2 ">
                                <i className="bi bi-speedometer2 fs-4 me-3"></i>
                                <span className="fs-5 d-none d-sm-inline">Dashboard</span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="index2.html" className="text-white d-flex align-items-center py-2">
                                <i className="bi bi-tree fs-4 me-2"></i>
                                <span className="fs-5 d-none d-sm-inline">Plant Detail</span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="index3.html" className="text-white d-flex align-items-center py-2">
                                <i className="bi bi-people fs-4 me-3"></i>
                                <span className="fs-5 d-none d-sm-inline">Users</span>
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Nav>
            </div>
        </>
    );
}

export default SideBar;