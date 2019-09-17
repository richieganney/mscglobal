import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">MSC South West Division 3</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#tables">Tables & Results</Nav.Link>
                    <Nav.Link href="#reports">Match Reports & Gossip</Nav.Link>
                    <NavDropdown title="Season Highlights" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">2018/2019</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Team Bios</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Meet the Committee
                    </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;