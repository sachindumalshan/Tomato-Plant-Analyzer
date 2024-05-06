import {React} from "../../components/Imports/imports";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Tomato from "../../assets/img/tomatologo.png";
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <>
            <div className="min-vh-100">
                <div className="logo mb-3">
                    <a className="navbar-brand d-flex align-items-center text-white text-decoration-none ms-1 mt-3"
                       href="#">
                        <img src={Tomato} Style={"width:20%;height:auto;"} alt=""/> <span
                        className="h4">Tomato Analyzer</span>
                    </a>
                </div>

                <hr></hr>

                <div className="">
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Link to="/" className="text-white menu text-decoration-none p-2">
                            <i className="bi bi-speedometer2 fs-4 me-3"></i>
                            <span className="fs-6">Dashboard</span>
                        </Link>
                        <Link to="/plantdetail" className="text-white menu text-decoration-none p-2">
                            <i className="bi bi-tree fs-4 me-3"></i>
                            <span className="fs-6">Plant Detail</span>
                        </Link>
                        <Link to="/user" className="text-white menu text-decoration-none p-2">
                            <i className="bi bi-people fs-4 me-3"></i>
                            <span className="fs-6">Users</span>
                        </Link>
                        <Link to="/aboutproject" className="text-white menu text-decoration-none p-2">
                            <i className="bi bi-folder2-open fs-4 me-3"></i>
                            <span className="fs-6">About Project</span>
                        </Link>
                    </Nav>
                </div>
            </div>
        </>
    );
}

export default SideBar;