import React from "../../components/Imports/imports";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTachometerAlt, faLeaf, faUsers, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
    return (
        <>
            <div className="min-vh-100">
                <div className="logo d-flex justify-content-start align-items-center px-2 py-4">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-white me-2" />
                    <span className="fs-4 text-white">Account</span>
                </div>                
                <hr className="mt-4"/>
                <div>
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Link to="/" className="text-white menu text-decoration-none px-2 py-3">
                            <FontAwesomeIcon icon={faTachometerAlt} size="lg" className="me-3" />
                            <span className="fs-6">Dashboard</span>
                        </Link>
                        <Link to="/plantdetail" className="text-white menu text-decoration-none px-2 py-3">
                            <FontAwesomeIcon icon={faLeaf} size="lg" className="me-3" />
                            <span className="fs-6">Plant Detail</span>
                        </Link>
                        <Link to="/user" className="text-white menu text-decoration-none px-2 py-3">
                            <FontAwesomeIcon icon={faUsers} size="lg" className="me-3" />
                            <span className="fs-6">Group Members</span>
                        </Link>
                        <Link to="/aboutproject" className="text-white menu text-decoration-none px-2 py-3">
                            <FontAwesomeIcon icon={faFolderOpen} size="lg" className="me-3" />
                            <span className="fs-6">About Project</span>
                        </Link>
                    </Nav>
                </div>
            </div>
        </>
    );
}

export default SideBar;
