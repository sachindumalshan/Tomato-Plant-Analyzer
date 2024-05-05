import {React} from "../../components/Imports/imports";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Tomato from "../../assets/img/tomatologo.png";

function SideBar() {
    return (
        <>
            <div className="logo mb-3">
                <a className="navbar-brand d-flex align-items-center text-white text-decoration-none ms-1 mt-3" href="#">
                    <img src={Tomato} Style={"width:20%;height:auto;"} alt=""/> <span className="h4">Tomato Analyzer</span>
                </a>
            </div>

            <hr></hr>

            <div className="">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home" className="text-white menu">
                        <i className="bi bi-speedometer2 fs-4 me-3"></i>
                        <span className="fs-6">Dashboard</span>
                    </Nav.Link>
                    <Nav.Link eventKey="link-1" className="text-white menu">
                        <i className="bi bi-tree fs-4 me-3"></i>
                        <span className="fs-6">Plant Detail</span>
                    </Nav.Link>
                    <Nav.Link eventKey="link-2" className="text-white menu">
                        <i className="bi bi-people fs-4 me-3"></i>
                        <span className="fs-6">Users</span>
                    </Nav.Link>
                    <Nav.Link eventKey="link-3" className="text-white menu">
                        <i className="bi bi-folder2-open fs-4 me-3"></i>
                        <span className="fs-6">About Us</span>
                    </Nav.Link>
                </Nav>
            </div>
        </>
    );
}

export default SideBar;