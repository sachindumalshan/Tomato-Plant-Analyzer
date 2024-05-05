import {React} from "../../components/Imports/imports";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Tomato from "../../assets/img/tomatologo.png";

function TopNavigation() {
    return (
        <>
            <div className="logo mb-2">
                <Navbar expand="lg" className="">
                    <Nav className="ms-auto pt-3">
                        <Nav.Link href="#home"><i class="bi bi-person-circle"></i> Account</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default TopNavigation;