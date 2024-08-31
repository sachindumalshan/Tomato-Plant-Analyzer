import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Tomato from "../../assets/img/tomatologo.png";

function TopNavigation() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
            setCurrentDate(new Date().toLocaleDateString());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="logo mb-3 d-flex justify-content-between align-items-center px-4">
                <a className="navbar-brand d-flex align-items-center text-decoration-none ms-1 mt-3" href="#">
                    <img src={Tomato} style={{ width: '6.6%', height: 'auto' }} alt="Tomato Logo" />
                    <span className="h4 ms-2">Tomato Plant Disease Analyzer and Growth Indicator</span>
                </a>
                <div className="text-end me-3 mt-3 text-white bg-dark py-1 px-4 rounded" style={{ marginRight: '20%' }}>
                    <span className="h5 d-block">{currentTime}</span>
                    <span className="h6 d-block">{currentDate}</span>
                </div>
            </div>
        </>
    );
}

export default TopNavigation;
