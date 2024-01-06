// Header.js
import React, { useContext } from 'react'; // useContext import
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // Bootstrap Navbar and Nav import
import './Header.css';
import AppContext from '../../AppContext'; // Import AppContext



const Header = () => {
    const { activePage } = useContext(AppContext); // Use AppContext to get the active page

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">ANKASOFT | ToDo List APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" active={activePage === 'home'}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/second" active={activePage === 'second'}>Second Page</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
